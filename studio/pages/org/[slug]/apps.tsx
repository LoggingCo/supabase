import { OAuthApps } from 'components/interfaces/Organization'
import { OrganizationLayout } from 'components/layouts'
import Loading from 'components/ui/Loading'
import { usePermissionsQuery } from 'data/permissions/permissions-query'
import { useSelectedOrganization } from 'hooks'
import { NextPageWithLayout } from 'types'

const OrgOAuthApps: NextPageWithLayout = () => {
  const selectedOrganization = useSelectedOrganization()
  // const { isLoading: isLoadingPermissions } = usePermissionsQuery()
  const { data: permissions } = usePermissionsQuery()

  return (
    <>
      {selectedOrganization === undefined && (permissions ?? []).length === 0 ? (
        <Loading />
      ) : (
        <OAuthApps />
      )}
    </>
  )
}

OrgOAuthApps.getLayout = (page) => <OrganizationLayout>{page}</OrganizationLayout>

export default OrgOAuthApps
