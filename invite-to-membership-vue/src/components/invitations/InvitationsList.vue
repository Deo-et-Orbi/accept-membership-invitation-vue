<template>
  <StatefulResource :resource="invitationsResource">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </StatefulResource>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Resource, StatefulResource } from "vue-stateful-resource";
import { Invitation } from "@/domain";
import { loadInvitations } from "@/services";

@Component({
  components: {
    StatefulResource,
  },
})
export default class InvitationsList extends Vue {
  fields = [
    {
      key: "displayName",
      label: "Display name",
      sortable: true,
    },
    {
      key: "message",
      label: "Message",
    },
    {
      key: "tiedEmail",
      label: "Email",
    },
    {
      key: "createdTime",
      label: "Created time",
    },
    {
      key: "statusText",
      label: "Status",
    },
  ];

  invitationsResource = Resource.empty<Invitation[]>();

  get items(): unknown[] {
    if (!this.invitationsResource.result) return [];
    const itemsSorted = this.invitationsResource.result;
    itemsSorted.sort((a, b) => b.createdTimestampS - a.createdTimestampS);
    return itemsSorted.map((item) => ({
      ...item,
      statusText: item.acceptedTimestampS > 0 ? "Accepted" : "Pending",
      createdTime: new Date(item.createdTimestampS * 1000).toDateString(),
    }));
  }

  beforeMount(): void {
    this.reloadInvitations();
  }

  reloadInvitations(): void {
    Resource.fetchResource("invitations", loadInvitations, (res) => {
      this.invitationsResource = res;
    });
  }
}
</script>
