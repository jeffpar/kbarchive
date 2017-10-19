---
layout: page
title: "Q187839: XCLN: Runtime Error 367: Unable To Register Msriched.vbx"
permalink: /kb/187/Q187839/
---

## Q187839: XCLN: Runtime Error 367: Unable To Register Msriched.vbx

	Article: Q187839
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a form created using the Exchange Forms Designer or
	Outlook Forms Designer, the following error may occur:
	
	  Runtime error 367. Unable to register Msriched.vbx.
	
	CAUSE
	=====
	
	Ctl3dv2.dll is corrupt or missing.
	
	WORKAROUND
	==========
	
	Rename the copy of Ctl3dv2.dll in the <Windows>\System and/or
	<Windows>\System32 directory and replace with a new copy from the
	Sysbackup directory or from the operating system files.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
