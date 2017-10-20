---
layout: page
title: "Q71499: INFO: Menus Supported in Dialog Boxes w/o DS_MODALFRAME Style"
permalink: /kb/071/Q71499/
---

## Q71499: INFO: Menus Supported in Dialog Boxes w/o DS_MODALFRAME Style

{% raw %}

	Article: Q71499
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbDlg kbMenu kbSDKPlatform kbWndwProp
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dialog boxes in Windows version 3.0 and later suppport menus as long as the
	DS_MODALFRAME style is absent and the WS_SYSMENU style is present. This behavior
	will continue to be supported in future versions of Windows.
	
	Dialogs with a modal frame and menu do not work and are not designed to do so.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbDlg kbMenu kbSDKPlatform kbWndwProp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
