import { observer } from 'mobx-react-lite'
import { Alert, Badge, Button, IconExternalLink, IconTruck } from 'ui'

import Panel from 'components/ui/Panel'
import MigrateOrganizationBillingButton from './MigrateOrganizationBillingButton'
import Link from 'next/link'

const OrganizationBillingMigrationPanel = observer(() => {
  return (
    <div className="space-y-2">
      <div className="flex gap-4 items-center">
        <h4>Organization-level billing</h4>
        <Badge color="green">
          <span className="flex gap-2 items-center text-xs uppercase">
            <IconTruck width={12} /> New
          </span>
        </Badge>
      </div>
      <p className="text-sm opacity-50">Migrate this project to organization-level billing</p>
      <Panel>
        <Panel.Content>
          <div className="flex justify-between gap-12">
            <div className="space-y-2">
              <p className="text-sm text-scale-1100">
                You will have a single subscription for all projects inside the organization, rather
                than individual subscriptions per project.
              </p>
              <p className="text-sm text-scale-1100">
                Migrating your organization billing is not reversible.
              </p>
            </div>
            <div className="flex items-center gap-4 ml-12">
              <Link href="https://www.notion.so/supabase/Organization-Level-Billing-9c159d69375b4af095f0b67881276582?pvs=4">
                <a target="_blank" rel="noreferrer">
                  <Button type="default" icon={<IconExternalLink strokeWidth={1.5} />}>
                    Documentation
                  </Button>
                </a>
              </Link>
              <MigrateOrganizationBillingButton />
            </div>
          </div>
        </Panel.Content>
      </Panel>
    </div>
  )
})

export default OrganizationBillingMigrationPanel
