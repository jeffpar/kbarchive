---
layout: page
title: "Q177249: ADIC Tape Drive Detected and Installed as Quantum 7000"
permalink: kb/177/Q177249/
---

## Q177249: ADIC Tape Drive Detected and Installed as Quantum 7000

	Article: Q177249
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the external ADIC DS9700D tape drive, Windows NT may
	detect the unit as a Quantum DLT 7000 tape device and load the corresponding
	driver (Dlttape.sys) contained on the Windows NT installation compact disc.
	After you restart the computer, the following error message may occur:
	
	  DLT tape device could not be found.
	
	NOTE: Control Panel, tape devices will show the DLT tape drive as installed.
	
	CAUSE
	=====
	
	The Dlttape.sys driver supplied with Windows NT 4.0 does not support the ADIC
	DS9700D tape drive.
	
	RESOLUTION
	==========
	
	Go to the following location to download Jan97nt.exe, which contains an updated
	Dlttape.sys driver for the ADIC DS9700D tape device:
	
	http://www.legato.com/cgi-bin/devsup.pl?NT/4.3b
	
	The Jan97nt.exe file expands to five files. An explanation of these files is in
	the Readme.4.3b file located on the same page. Replace the Dlttape.sys file in
	the %systemroot%\system32\drivers folder with the one you just downloaded and
	extracted.
	
	Tape drives with updated firmware may require the latest DLT7000.sys driver from
	Quantum. If you have a Compaq computer, obtain SP4429 from Compaq.
	
	NOTE: Because Web sites are constantly updated, the site address may change
	without notice. If this occurs, please contact the manufacturer directly.
	
	
	Additional query words: hang tapes working backup restore
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
