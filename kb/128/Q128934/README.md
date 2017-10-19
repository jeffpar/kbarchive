---
layout: page
title: "Q128934: LPR Unable to Print to LPD Queue Names with Lowercase Letters"
permalink: /kb/128/Q128934/
---

## Q128934: LPR Unable to Print to LPD Queue Names with Lowercase Letters

	Article: Q128934
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify a Printer name for a printer using LPR, the name is converted
	to uppercase when it is written to the Registry. When you run Print Manager,
	choose the printer, and then choose Properties from the Printer menu, the name
	is displayed in uppercase in the Print To box. When a print job is sent to the
	queue, LPRMON.DLL uses an uppercase Print queue name for the destination. If the
	LPD server is case sensitive (most are not), and the printer queue name on an
	LPD server contains lowercase letters, a Windows NT LPR client cannot print to
	it.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.51.
	
	To workaround this problem, either use only uppercase Printer queue names on the
	LPD server or use Registry Editor to change the case of the Printer Name on the
	Windows NT LPR client.
	
	To use Registry Editor to change the case of the Printer Name on the Windows NT
	LPR client:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  \SYSTEM\CurrentControlSet\Control\Print\Monitors\LPR Port \Ports\<Port
	  Name>
	
	3. Select Printer Name.
	
	4. From the Edit menu, choose String.
	
	5. Enter the proper case-sensitive name for the print queue.
	
	6. Choose OK and quit Registry Editor.
	
	7. Stop and re-start the Spooler service so the change can take effect.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 This
	problem was corrected in Windows NT Workstation or Server version 3.51.
	
	Additional query words: 3.51 prodnt line printer daemon remote milan cap caps capital
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	Issue type        : kbprb
	
	=============================================================================
	
