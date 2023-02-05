export const ORIGIN_FOLDER = "data";
export const i18n = (text: string): string => game.i18n.localize(`${"CI"}.${text}`);
export const randomString = (): string =>
	Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
export const userCanUpload = (silent = false): boolean => {
	const userRole = (game as Game)?.user?.role;
	const fileUploadPermissions = (game as Game)?.permissions?.FILES_UPLOAD;

	if (!userRole || !fileUploadPermissions) {
		if (!silent) ui.notifications?.warn(i18n("uploadPermissions"));
		return false;
	}

	const uploadPermission = fileUploadPermissions.includes(userRole);
	if (!uploadPermission && !silent) ui.notifications?.warn(i18n("uploadPermissions"));

	return uploadPermission;
};
