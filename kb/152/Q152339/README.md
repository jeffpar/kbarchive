---
layout: page
title: "Q152339: Windows NT NTFS Time Stamps Mismatch CD-ROM After Upgrading"
permalink: kb/152/Q152339/
---

## Q152339: Windows NT NTFS Time Stamps Mismatch CD-ROM After Upgrading

	Article: Q152339
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you perform a Windows NT installation or upgrade (using the three Windows
	NT setup diskettes) onto a pre-existing NTFS partition, you will find that the
	Windows NT system files' time stamps do not match the installation CD-ROM time
	stamps. The time stamps will differ by plus or minus the difference in your time
	zone and the Greenwich Mean Time(GMT) zone.
	
	CAUSE
	=====
	
	When you install Windows NT for the first time on a given computer, NT always
	installs to a FAT partition whose time stamps are local time, then converts the
	partition to NTFS on the final reboot. During the GUI portion of setup, you are
	prompted to indicate your time zone, but when NT converts the partition to NTFS,
	it changes the time stamps to Greenwich Mean Time (GMT). However, after NT is
	installed, File Manager adds or subtracts the number of hours separating your
	time zone from GMT to arrive at your correct local time.
	
	For example, if you were operating in U.S. eastern standard time (EST), which is
	five hours behind GMT time, File Manager would subtract five hours from the
	stored GMT time to equal your local time. If EST was 10:57 a.m., the following
	settings would be registered:
	
	  CD-ROM time:               10:57 a.m.
	  NTFS GMT time:              3:57 p.m.
	  File Manager displays:     10:57 p.m. (3:57 p.m. - 5 hours)
	
	This process does not work correctly when you install or upgrade Windows NT onto
	an existing NTFS partition. When you do this, the setup program copies all the
	files to the NTFS partition using only local time. As a result, it does not know
	what time zone you are in, and hence cannot add or subtract time to the files to
	be stored in GMT time. After NT is finished installing, the time stamps
	displayed by File Manager will be different from those shown by the CD-ROM. This
	is because the setup program is now adding or subtracting the time-zone offset
	to or from your local time rather than GMT time.
	
	For the scenario described above, if the person had reinstalled or upgraded
	Windows NT onto an existing NTFS partition, the following settings would be
	registered:
	
	  CD-ROM time:               10:57 a.m.
	  NTFS EST (local) time:     10:57 a.m.
	  File Manager displays:      5:57 a.m. (10:57 a.m. - 5 hours)
	
	RESOLUTION
	==========
	
	To resolve this problem, perform an upgrade using the Winnt32.exe program while
	under Windows NT.
	
	In this case the files will be copied from the CD-ROM to the local NTFS
	partition, and Windows NT will know to store the files in GMT on the NTFS
	partition. After NT is installed or upgraded, all the time stamps will match
	those on the CD-ROM. For example:
	
	  CD-ROM time:                  10:57 a.m.
	  NTFS GMT time:                 3:57 p.m.
	  File Manager displays:        10:57 a.m.  (3:57 p.m. - 5 hours)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.50 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
