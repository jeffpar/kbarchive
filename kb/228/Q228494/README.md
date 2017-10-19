---
layout: page
title: "Q228494: Cannot Install Programs on Portuguese Brazilian Windows 95"
permalink: /kb/228/Q228494/
---

## Q228494: Cannot Install Programs on Portuguese Brazilian Windows 95

	Article: Q228494
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:6.0,95; winnt:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Visual Studio 6.0 
	- Microsoft Visual J++, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup program for any of the products listed above on
	Portuguese Brazilian Windows 95 version 4.00.950 or 4.00.950a, you may receive
	the following error message and Setup may then end:
	
	  This product ships with the matching localized language version of Service
	  Pack 3 for Windows NT 4. The localized version of your installed windows
	  Operating system does not match the localized language version of this
	  product. We recommend that you quit setup and install service pack 3 for
	  Windows NT 4 from another source. You may find it at
	  http://www.microsoft.com. Re-rerun Setup after applying the service pack and
	  rebooting your PC.
	
	CAUSE
	=====
	
	The Setup programs for the programs listed above check the operating system
	version in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\VersionNumber
	
	In Portuguese Brazilian Windows 95 version 4.00.950 or 4.00.950a, the key value
	is "4.00.722." The Setup programs require version 4.00.950 or later.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, change the VersionNumber value in the following registry
	key from "4.00.722" to "4.00.950":
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVSsearch kbVJsearch kbVisIDsearch kbVFPsearch kbVBSearch kbSSafeSearch kbAudDeveloper kbWin95search kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbZNotKeyword3 kbVC600 kbVC32bitSearch kbVFP600 kbVisID600 kbVJ600 kbSSafe600 kbVS600 kbVS600Search
	Version           : WINDOWS:6.0,95; winnt:6.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
