---
layout: page
title: "Q286019: Installing Internet Explorer on Windows NT 4.0 Terminal Server"
permalink: kb/286/Q286019/
---

## Q286019: Installing Internet Explorer on Windows NT 4.0 Terminal Server

	Article: Q286019
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP7,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	- Microsoft Internet Explorer versions 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5, 5.01, 5.01 Service Pack 1, 5.5, 5.5 Service Pack 1 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Internet Explorer on a computer that is
	running Microsoft Windows NT 4.0 Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	To install Internet Explorer from a new installation of Terminal Server:
	
	1. When you run Windows Terminal Server 4.0 Setup, do not install the version of
	  Internet Explorer that is bundled with the program (Internet Explorer 4.0).
	
	2. Run the change user/install command to put the terminal server into Install
	  mode, and then upgrade to the latest service pack.
	
	3. If your computer has less than 512 megabytes (MB) of random access memory
	  (RAM), go to step four.
	
	  If your computer has more than 512 MB of RAM, add the maxmem=256 switch to the
	  Boot.ini file, for example:
	
	  multi(0)disk(0)rdisk(0)partition(1)\winnt="Windows NT" /MAXMEM=256
	
	  Internet Explorer requires the paging file to be at least 150 percent of the
	  available RAM. When you use the maxmem=256 switch, the computer thinks that
	  there is only 256 MB of RAM; therefore the paging file that exists is
	  sufficient. This procedure works well with computers that have 4 gigabytes
	  (GB) of RAM.
	
	4. Restart the computer.
	
	5. Run the change user/install command to put the terminal server into Install
	  mode, and then install Internet Explorer 4 or Internet Explorer 5.
	
	  NOTE: If you are installing Internet Explorer 4, you must run the
	  compatibility script while in Install mode. The file is named Msie40.cmd.
	
	If the Internet Explorer installation does not succeed, and you try to rerun
	Setup, you may receive the following error message:
	
	  A previous program installation was never completed.
	  You need to restart your computer to complete that installation before running
	  Internet Explorer Setup. Setup will now close
	
	This error message occurs if an insufficient or corrupted paging file exists.
	This issue is indicated by the Temppf.sys file. You do not need to delete this
	file; it is deleted when you restart the computer. To work around this issue:
	
	1. Delete the PendingFileRenameOperations value that is located under the
	  following registry setting:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager
	
	2. Change the size of the swap file to re-create the paging file in case it has
	  been corrupted.
	
	3. Restart the computer.
	
	4. Run the change user/install command to put the terminal server into Install
	  mode.
	
	5. Reinstall Internet Explorer.
	
	If the PendingFileRenameOperations value is re-created even after you change the
	size of the paging file:
	
	1. Remove RAM until you have only 256 MB or 512 MB on the computer, or add the
	  maxmem=256 switch to the Boot.ini file, for example:
	
	  multi(0)disk(0)rdisk(0)partition(1)\winnt="Windows NT" /MAXMEM=256
	
	2. Make sure that the paging file is at least 150 percent of the available RAM.
	
	  NOTE: At this point, if the Maxmem=256 switch is in place, the paging file can
	  be calculated with 1.5 x 256 or 1.5 x 512.
	
	3. Restart the computer.
	
	4. Run the change user/install command to put the terminal server into Install
	  mode.
	
	5. Reinstall Internet Explorer.
	
	After you successfully install Internet Explorer:
	
	- Remove the Maxmem=256 switch from Boot.ini if it is present.
	
	- If you had to remove physical RAM, replace it.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q108393 Maxmem Option in Windows NT Boot.ini File
	
	  Q241289 How to Change the Amount of Memory Used During an Installation
	
	  Q170756 Available Switch Options for Windows NT Boot.ini File
	
	
	Additional query words: boot ini
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbIEsearch kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE400WinNT400 kbIE401WinNT400 kbIE401WinNT400SP1 kbIE401WinNT400SP2 kbIE501WinNT400SP1 kbIE550WinNT400SP1 kbIE500WinNT400 kbIE501WinNT400 kbIE550WinNT400 kbIE550Search
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP7,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,5.01,5.01 Service Pack 1,5.5,5.5 Service Pack 1
	Issue type        : kbhowto
	
	=============================================================================
	
