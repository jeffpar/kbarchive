---
layout: page
title: "Q235428: XCLN: Err. Message: This Feature Requires Internet Explorer 4.01"
permalink: kb/235/Q235428/
---

## Q235428: XCLN: Err. Message: This Feature Requires Internet Explorer 4.01

	Article: Q235428
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to open Outlook after an installation of Microsoft Office 2000
	and Microsoft Internet Explorer 5, you may receive the following error message:
	
	  This feature requires Microsoft Internet Explorer 4.01 or greater. You can
	  install IE5 from the Internet Explorer folder on the Microsoft Office 2000 CD
	  or download it from the Internet Explorer site on the Microsoft Web.
	
	Then the following error message is displayed:
	
	  Cannot start Microsoft Outlook.
	
	CAUSE
	=====
	
	This error message occurs if a damaged or incomplete registry entry is detected
	during or after installation.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, click Run, type "regedit" (without the quotation marks), and
	  then click OK.
	
	2. Click to select the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Internet Explorer
	
	3. On the Registry menu, click Export Registry File.
	
	  The following data names should have the following values or higher-level
	  values:
	
	  Build - "52314.1003"
	  MkEnabled - "Yes"
	  Version - "5.00.2314.1003"
	
	  If the values are not set at these levels or higher, change the values
	  accordingly. If you do this, Outlook starts normally.
	
	4. Close Registry Editor.
	
	5. Start Outlook.
	
	MORE INFORMATION
	================
	
	If you reinstall Outlook, run a repair installation of Outlook, or reinstall
	Internet Explorer, it does not resolve this issue.
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          :  kbbuglist
	Component         : Build InternetExplorer Setup
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
