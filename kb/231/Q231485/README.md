---
layout: page
title: "Q231485: XCLN: How to Remove Outlook 98 Completely"
permalink: /kb/231/Q231485/
---

## Q231485: XCLN: How to Remove Outlook 98 Completely

{% raw %}

	Article: Q231485
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to remove Outlook 98 completely from a computer that
	is not an Exchange Server computer.
	
	MORE INFORMATION
	================
	
	To remove Outlook 98 completely from your computer, use the following steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start the Add/Remove Programs tool and remove Outlook 98.
	
	2. Start Registry Editor (click Start, click Run, type "regedit" (without the
	  quotation marks), and then click OK).
	
	3. Locate the following registry keys, export each key to your desktop, and then
	  delete each key from the registry:
	
	  HKEY_CURRENT_USER,"SOFTWARE\Microsoft\Office\8.0\Outlook"
	  HKEY_CURRENT_USER,"SOFTWARE\Microsoft\MSDetect\AllApps\EMAIL\Outlook"
	  HKEY_CURRENT_USER,"SOFTWARE\Microsoft\Shared Tools\Outlook"
	  HKEY_LOCAL_MACHINE,"SOFTWARE\Microsoft\Office\8.0\Outlook"
	  HKEY_LOCAL_MACHINE,"SOFTWARE\Microsoft\Windows\CurrentVersion\App
	  Paths\OUTLOOK.EXE"
	
	4. Rename the following files that may still remain on your computer after you
	  remove Outlook:
	
	  Mapi32.dll
	  Mapisrvr.exe
	  Mapisp32.exe
	  Mapi.dll
	  Mapix.dll
	  Mapiu.dll
	  Mapisvc.inf
	  Minet32.dll
	  Emsuix32.dll
	  Emsui32.dll
	  Emsmdb32.dll
	  Emsabp32.dll
	  Outlcomm.dll
	  Contab32.dll
	  Mspst32.dll
	  Outlook.exe
	  Outlook.srg
	  Outllib.dll
	  Outlmime.dll
	  Outlrpc.dll
	  Pstprx32.dll
	
	5. Restart the client computer.
	
	You can now run Outlook 98 Setup again if you need to perform a clean
	reinstallation.
	
	Additional query words: XMRP OL98
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
