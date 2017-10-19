---
layout: page
title: "Q266762: Err Msg: STOP 0x00000050 0xe2000000 0x00000000 0x00000000..."
permalink: /kb/266/Q266762/
---

## Q266762: Err Msg: STOP 0x00000050 0xe2000000 0x00000000 0x00000000...

	Article: Q266762
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	- Microsoft Windows versions 2000, 2000 SP1 Server 
	- Microsoft Windows versions 2000, 2000 SP1 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message on a blue screen:
	
	  STOP (0x00000050 0xe2000000 0x00000000 0x00000000 0x00000002)
	
	CAUSE
	=====
	
	This problem occurs only if the expression parser in the kernel reads past the
	end of its buffer. The "Stop" error message that you receive matches the error
	message listed above exactly. This is a rare occurrence.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size           File name     Platform
	  --------------------------------------------------------
	  7/12/2000 6:10 PM  955,200 bytes  Ntkrnlmp.exe  Intel
	  7/12/2000 6:09 PM  934,720 bytes  Ntoskrnl.exe  Intel
	
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time      Size             File name     Platform
	  -----------------------------------------------------------
	  07/27/2000 4:12 PM  1,002,048 bytes  Ntkrnlmp.exe  Intel
	  07/27/2000 4:11 PM    980,864 bytes  Ntoskrnl.exe  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch kbWin2000AdvServSP1 kbWin2000ProSP1 kbwin2000ServSP1
	Version           : :2000,2000 SP1,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
