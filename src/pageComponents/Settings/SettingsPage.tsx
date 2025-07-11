// eslint-disable-next-line react-hooks/rules-of-hooks
import { useServerTranslation } from "~/i18n";
import { DashboardHeader } from "../Dashboard/molecules/Header";
import { DashboardShell } from "../Dashboard/molecules/Shell";
import { ResetPasswordSettingsForm } from "./molecules/ResetPasswordSettingsForm";

export const dynamic = "force-dynamic";

const SettingsPage = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useServerTranslation();

  return (
    <DashboardShell className="flex-1">
      <DashboardHeader
        heading={t("dashboardSidenav.settings")}
        text={t("settingsPage.headerDescription")}
      />
      <div className="flex justify-center ">
        <ResetPasswordSettingsForm></ResetPasswordSettingsForm>
      </div>
    </DashboardShell>
  );
};

export default SettingsPage;
