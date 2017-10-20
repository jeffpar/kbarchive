---
layout: page
title: "Q128816: PRB: Cannot Access MAPI Under Win32s"
permalink: /kb/128/Q128816/
---

## Q128816: PRB: Cannot Access MAPI Under Win32s

{% raw %}

	Article: Q128816
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MAPI custom controls do not do anything with Visual FoxPro running under Win32s.
	In addition, no error messages occur when you use the MAPI custom controls.
	
	CAUSE
	=====
	
	Due to a missing thunking layer between 32-bit applications and the 16-bit MAPI
	DLLs, FoxPro, which is a 32-bit application, cannot communicate with the MAPI
	OLE custom controls under Win32s.
	
	RESOLUTION
	==========
	
	If you would like to use the MAPI custom controls, you must upgrade to Microsoft
	Windows NT or Microsoft Windows 95.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	As an alternative to using MAPI Controls, you can use Foxtools.fll and MAPI
	calls to accomplish your mail sending needs. For more information about how to
	do this, please see the following article in the Microsoft Knowledge Base:
	
	  Q102467 Using MAPI.DLL to Invoke MS Mail from FoxPro for Windows
	
	Also, the Send option on the File menu should work for sending mail messages
	through MS Mail under WIN32s.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
