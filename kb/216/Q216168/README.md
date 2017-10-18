---
layout: page
title: "Q216168: Using Windows 98 Desktop Themes with Windows NT"
permalink: kb/216/Q216168/
---

## Q216168: Using Windows 98 Desktop Themes with Windows NT

	Article: Q216168
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbdisplay kbinterop kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have installed Microsoft Plus! for Windows on a computer that has both
	Windows NT and Microsoft Windows 98 (using the dual-boot option), you can
	display desktop themes created for Windows 98 in Windows NT. Selection and
	control of desktop themes can be performed using the Desktop Themes tool that is
	included in Plus! for Windows.
	
	MORE INFORMATION
	================
	
	To use Windows 98 desktop themes on Windows NT:
	
	1. Start your computer using the Windows NT partition.
	
	2. Copy the Themes.cpl and Themes.exe files from the Windows 98 partition to the
	  Windows NT partition. At a command prompt, type
	
	  copy c:\<windows>\system\themes.* <d:\%Systemroot%>\System32
	
	  where <windows> is the folder where Windows 98 is installed and
	  <d:\%Systemroot%> is the partition and folder where Windows NT is
	  installed, and then press ENTER.
	
	3. Log off and restart the computer using the Windows NT partition.
	
	You can now use the Desktop Themes tool, located on the Control Panel, to select,
	manage, and display Windows 98 desktop themes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdisplay kbinterop kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	
