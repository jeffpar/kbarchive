---
layout: page
title: "Q114243: System Hang During Setup on IBM PS/ValuePoint P60/D Machine"
permalink: kb/114/Q114243/
---

## Q114243: System Hang During Setup on IBM PS/ValuePoint P60/D Machine

	Article: Q114243
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing Windows NT on an IBM PS/ValuePoint P60/D Pentium machine, the
	computer may hang with a STOP message.
	
	CAUSE
	=====
	
	This problem occurs just prior to the GUI-portion of the Windows NT 3.1 Setup
	procedure, and may be due to a conflict with the Maxtor MXT-540 AT drive
	firmware.
	
	WORKAROUND
	==========
	
	To correct this problem, obtain a firmware upgrade from IBM's BBS at (919)
	517-0001. The files to download are P60NT.DSK (from Directory area 36) and
	LDF.COM (from Directory area 10). After downloading the two files to your
	hard-drive do the following from the MS-DOS command prompt:
	
	1. Run LDF.COM (extracts two files: LOADDSKF.EXE and PRODAID.TXT)
	
	2. Insert a blank formatted floppy disk into Drive A and type:
	
	  LOADDSKF P60NT.DSK A: <enter>
	
	  This uncompresses files from P60NT.DSK to the disk.
	
	3. Use the floppy disk you just created to boot the IBM PS/ValuePoint P60/D
	  Pentium machine.
	
	4. After the system boots, a report on its progress is displayed. Do not power
	  down the system until instructed to do so by the appearance of a power cycle
	  message.
	
	5. When you receive the power cycle message, turn the system off.
	
	6. Proceed with the Windows NT version 3.1 installation.
	
	MORE INFORMATION
	================
	
	The IBM firmware utility upgrades a Maxtor MXT-540 AT drive to firmware level
	6.0 for the IBM PS/ValuePoint P60/D Pentium machine. The utility works on only
	the first upgradable MXT-540 AT drive it finds, so if you have more than one
	MXT-540 AT drive, apply the upgrade to each drive, and power-cycle the system
	after each run. For more information on the upgrade utility, contact IBM
	Hardware Technical Support at (800) 772-2227.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt ide blue trap
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
