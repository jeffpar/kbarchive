---
layout: page
title: "Q75500: INFO: Altering Edit Control Strings in Place May Cause UAE"
permalink: /kb/075/Q75500/
---

## Q75500: INFO: Altering Edit Control Strings in Place May Cause UAE

{% raw %}

	Article: Q75500
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform
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
	
	Declaring an Edit control with certain styles, and altering the text, may have
	undesirable effects. Depending upon whether or not pointers to the text are
	passed to other functions, changing the text in place may generate an
	Unrecoverable Application Error (UAE).
	
	Declaring an Edit control with any of the following styles, ES_LOWERCASE,
	ES_UPPERCASE, or ES_OEMCONVERT, and calling either SetWindowText (hEdt,lpstr) or
	SetDlgItemText (hDlg, editID, lpstr) alters the string in place. Calling either
	one of the previously mentioned functions to alter a string contained in a code
	segment, which is labeled PURE in the corresponding .DEF file, will result in a
	UAE.
	
	Additional query words: 3.00 3.10 controls strings
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
