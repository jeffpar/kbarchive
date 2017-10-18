---
layout: page
title: "Q110426: SMC 661-666 Floppy Controller, Errors Reading Disks"
permalink: kb/110/Q110426/
---

## Q110426: SMC 661-666 Floppy Controller, Errors Reading Disks

	Article: Q110426
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to read from or write to a disk, one of several error messages
	appear; the most common is "invalid medium."
	
	CAUSE
	=====
	
	There is a problem in the SMC 661-666 series floppy controllers and their device
	drivers (FLOPPY.SYS).
	
	NOTE: The following computer manufacturers are known to use these chips in some
	of their models: Compaq, Austin, and Gateway. This is not to say that the SMC
	chips with this problem are used in all models.
	
	RESOLUTION
	==========
	
	If you have an SMC floppy controller from the 663-666 range, the fix (see Status
	section below) should solve this problem immediately. For the 661 and 662
	builds, you need to add a Registry value in addition to installing the fix to
	solve the problem:
	
	NOTES:
	
	- On the SMC chip, there are a series of numbers (usually three lines of
	  numbers). Which number or portion thereof identifies the SMC series.
	
	- Adding this Registry value may reduce floppy disk performance by as much as
	  40%.
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	In the following key, add a value called NotConfigurable, data type REG_DWORD,
	and value of 1:
	
	  SYSTEM\CurrentControlSet\Services\Floppy\Parameters
	
	If you are experiencing this problem on a Gateway Pentium computer, you can
	download a fix from the Gateway BBS. For 2400 baud, call (605) 232-2109; for
	9600 baud and higher, call (605) 232-2224.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt drive 4.0 4.00
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
