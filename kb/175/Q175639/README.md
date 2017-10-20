---
layout: page
title: "Q175639: Windows 95/98 and Windows NT 4.0 Can Share Virtual Memory"
permalink: /kb/175/Q175639/
---

## Q175639: Windows 95/98 and Windows NT 4.0 Can Share Virtual Memory

{% raw %}

	Article: Q175639
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): win95 win98
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are dual booting with Windows 95/98 and Windows NT 4.0, you can save hard
	drive space by allowing Windows 95/98 and Windows NT 4.0 to share a Pagefile.sys
	file on a common FAT partition.
	
	MORE INFORMATION
	================
	
	To configure the Pagifile.sys file in Windows NT, perform the following steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click the Systems icon. Click the Performance tab, and in the Virtual
	  Memory section, click Change.
	
	2. Set Initial Size: (MB) and Maximum Size: (MB) to the same value. Then click
	  OK.
	
	To configure the Pagefile.sys file in Windows 95/98, perform the following
	steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  Double-click theSystem icon.
	
	2. Click the Performance tab, and then click Virtual Memory.
	
	3. Select the 'Let me specify my own virtual memory settings' option and set the
	  Minimum and Maximum values to the same values entered for Windows NT above.
	
	After you restart Windows 95/98, edit the System.ini file and add or edit the
	following under:
	
	  [386Enh]
	  PagingFile=X:\PAGEFILE.SYS
	  PagingDrive=X:
	
	X: = the common drive
	
	After these values are added or edited, restart the computer. If there is a
	Win386.swp file remaining on the Windows 95/98 drive, the file can be deleted.
	Both Windows 95/98 and Windows NT will now share the virtual memory space, thus
	saving needed drive space.
	
	Additional query words: win95 swap
	
	======================================================================
	Keywords          : win95 win98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
