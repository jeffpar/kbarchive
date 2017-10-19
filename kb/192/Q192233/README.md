---
layout: page
title: "Q192233: Winframe 1.x not detected by Terminal Server 4.0 for Upgrade"
permalink: /kb/192/Q192233/
---

## Q192233: Winframe 1.x not detected by Terminal Server 4.0 for Upgrade

	Article: Q192233
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade Citrix Winframe 1.7 to Windows NT Server 4.0,
	Terminal Server Edition, Winframe 1.7 may not be detected on the computer. A
	fresh install will be the only option presented.
	
	CAUSE
	=====
	
	Registry inconsistencies may cause Terminal Server to ignore the Winframe
	installation from being upgraded.
	
	RESOLUTION
	==========
	
	There is a utility (Regfix.exe) in the Support\Regfix folder that can repair
	some instances of registry (hive) inconsistencies.
	
	This utility will repair a Windows NT 3.51 or a Citrix WinFrame 1.x registry file
	so that you can upgrade that installation to Windows Terminal Server.
	
	usage: regfix inputfilename outputfilename
	
	  inputfilename - the name of the registry file to process
	  ouputfilename - the name for the updated registry file
	
	Detailed Informaton:
	
	To run Regfix.exe, you will have to run it from another Windows NT installation
	so that you can safely modify the registry file. Here is the procedure to
	follow:
	
	1. If you do not have one already, you will have to install Windows NT to
	  another partition.
	
	2. Boot the system to an alternate Windows NT partition.
	
	3. Change to the WinFrame\system32\config directory of the WinFrame (or Windows
	  NT 3.51) partition to be updated:
	
	     cd \winframe\system32\config
	
	4. Rename the software hive to software.sav:
	
	     ren software software.sav
	
	5. Fix the registry file (assuming that d: is your CD-ROM drive):
	
	     d:\support\regfix\regfix software.sav software
	
	6. Restart the Windows Terminal Server upgrade.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. We are researching this problem and will post additional
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Read Support\Regfix\Regfix.txt on the Terminal Server CD for more information.
	
	Additional query words: detection upgrading
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
