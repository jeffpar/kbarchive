---
layout: page
title: "Q131226: INFO: NERR_PasswordTooShort Error Returned for Other Errors"
permalink: /kb/131/Q131226/
---

## Q131226: INFO: NERR_PasswordTooShort Error Returned for Other Errors

	Article: Q131226
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1; :
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbLanMan kbOSWin311 kbOSWin300 kbGrpDSNet
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- LAN Manager 2.1 Programmer's Toolkit 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the NetUserPasswordSet LanMan API is called from a downlevel client to
	change a password on a Windows NT server, the error NERR_PasswordTooShort might
	be returned for error conditions other than the password being too short.
	
	MORE INFORMATION
	================
	
	On Windows NT and Windows 95, the error ERROR_PASSWORD_RESTRICTION (1325) is
	returned if a new password is too short, a password is blank when a password is
	required, a password does not meet the complexity criterion, a password is
	longer than 14 characters, or a password is being reused without meeting
	password history requirements. For downlevel systems, Windows NT must map the
	ERROR_PASSWORD_RESTRICTION error code to one of the existing LAN Manager error
	codes. Because there is no comparable LAN Manager error, on Windows NT 3.1,
	ERROR_PASSWORD_RESTRICTION was mapped to ERROR_UNEXP_NET_ERR (59). On Windows NT
	3.5 and later, ERROR_PASSWORD_RESTRICTION is mapped to NERR_PasswordTooShort
	(2245).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbLanMan kbOSWin311 kbOSWin300 kbGrpDSNet 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbLanManSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1; :
	Issue type        : kbinfo
	
	=============================================================================
	
