---
layout: page
title: "Q133304: Windows NT 3.51 Hangs After Installing 3C590/3C595 NIC Driver"
permalink: /kb/133/Q133304/
---

## Q133304: Windows NT 3.51 Hangs After Installing 3C590/3C595 NIC Driver

	Article: Q133304
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Shortly after you install the driver for the 3COM EtherLink III PCI 3C590 or
	3C595 network interface card (NIC), your computer stops responding (hangs). The
	computer may also hang during bootup.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- If your computer uses a Micron motherboard BIOS:
	
	  According to Micron Technical Support, you can correct this problem by
	  upgrading the motherboard BIOS to version 08. You can obtain the BIOS update,
	  HI_08.ZIP, from the Micron bulletin board system (BBS) at (208) 465-8982. For
	  more information, contact Micron Technical Support at (208) 465-3434.
	
	
	  -or-
	
	- If your computer does not use a Micron motherboard BIOS:
	
	  Download the file 3C59XX.EXE from 3COM's BBS or by contacting 3COM's technical
	  support. 3COM's BBS number is (408) 980-8204. The file is a self-extracting
	  archive which contains diagnostics and drivers. The OEMSETUP.INF and
	  EL59X.SYS files are located in the NDIS\WINNT35 subdirectory created by
	  executing 3C59XX.EXE. This file can also be found in the AskThreeCom forum on
	  CompuServe. 3COM's technical support number is (800) 876-3266.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
