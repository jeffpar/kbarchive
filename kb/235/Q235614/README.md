---
layout: page
title: "Q235614: Windows NT 4.0 SP6 Includes Fixes for Stress-Induced Issues"
permalink: kb/235/Q235614/
---

## Q235614: Windows NT 4.0 SP6 Includes Fixes for Stress-Induced Issues

	Article: Q235614
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP6 
	- Microsoft Windows NT Workstation version 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft testing of Windows NT products includes automated tests that
	specifically push the operating system beyond its normal limits. This article
	summarizes the changes to binary files in Windows NT 4.0 Service Pack 6 that are
	not reliably reproducible without these test tools. Customers may also encounter
	these problems, but it is difficult to be certain.
	
	Windows NT 4.0 Service Pack 6 includes fixes of this type in the following binary
	files:
	
	  Cdfs.sys
	  Fastfat.sys
	  Mup.sys
	  Netbt.sys
	  Ntfs.sys
	  Ntkrnlmp.exe
	  Ntoskrnl.exe
	  Nwlnkrip.sys
	  Oleaut32.dll
	  Ole32.dll
	  Rasauto.dll
	  Raspppen.dll
	  Rdr.sys
	  Tapi32.dll
	  Wamreg.dll
	  Win32k.sys
	  Winmsd.exe
	
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words: sp6
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWinNTW400sp6
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
