---
layout: page
title: "Q99802: INFO: Enabling and Disabling Print Manager"
permalink: /kb/099/Q99802/
---

## Q99802: INFO: Enabling and Disabling Print Manager

{% raw %}

	Article: Q99802
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application can programmatically enable and disable the Print Manager by
	altering the setting of the "spooler=" field in the Windows section of WIN.ini;
	the setting will be "spooler=yes" if Print Manager is enabled and "spooler=no"
	if Print Manager is disabled. The GetProfileString() function can be used to
	determine the current setting; WriteProfileString() can be used to change the
	current setting. The WM_WININICHANGE message should be sent to all top-level
	windows if changes are made to WIN.ini.
	
	This method only works before an application starts printing. Once the printer
	driver calls the OpenJob() function, GDI either will or will not execute the
	spooler depending on the "spooler=" setting.
	
	An application can monitor the number of jobs in the Print Manager queue by
	processing the WM_SPOOLERSTATUS message. This could be useful to ensure there
	are no print jobs in the queue before disabling Print Manager. The
	WM_SPOOLERSTATUS message is sent to all top-level windows from Print Manager
	whenever a job is added to or removed from the Print Manager queue. The number
	of jobs remaining is in LOWORD(lParam).
	
	NOTE: WM_SPOOLERSTATUS is for informational purposes only.
	
	Please see the documentation for GetProfileString(), WriteProfileString(),
	WM_WININICHANGE, and WM_SPOOLERSTATUS for more information about them.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
