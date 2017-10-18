---
layout: page
title: "Q173277: No Memory.dmp File Created with RAM Above 1.7 GB"
permalink: kb/173/Q173277/
---

## Q173277: No Memory.dmp File Created with RAM Above 1.7 GB

	Article: Q173277
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbWinNT400sp4fix kbOSWinNT400 kbOSWin2000 kbDSupport
	Last Modified: 20-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In systems where RAM exceeds 1.7 GB, Memory.dmp files are not generated even
	though a sufficient pagefile (RAM + 11 MB) is available on the boot drive.
	
	Additionally, if larger Memory.dmp file images are produced (by applying hotfixes
	referenced below), several support utilities should be updated to read the
	larger Memory.dmp images. Without these updated files for dumpchk, dumpexam,
	i386kd (or alphakd, mip, ppc) and windbg the following error message is
	generated:
	
	  Could not initialize crash dump file <path to dumpfile>.
	
	
	CAUSE
	=====
	
	Several causes were isolated related to mapping views of very large memory
	images.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/2gcrash
	
	- Ntoskrnl.exe (or Ntkrnlmp.exe) and Savedump.exe are used to produce larger
	  Memory.dmp files.
	
	- Dumpchk.exe and Dumpexam.exe are used to verify the larger Memory.dmp files.
	
	
	You may be able to work around this problem by limiting the maximum amount of RAM
	the system accesses to 1.7 GB or less. To do this, use the /MAXMEM= switch in
	the Boot.ini file. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q108393 MAXMEM Option in Windows NT BOOT.INI File
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kberrmsg kbtool kbWinNT400sp4fix kbOSWinNT400 kbOSWin2000 kbDSupport 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
