---
layout: page
title: "Q326084: BUG: Print Server Translates EBCDIC Chars Under 0x40 to Spaces"
permalink: /kb/326/Q326084/
---

## Q326084: BUG: Print Server Translates EBCDIC Chars Under 0x40 to Spaces

	Article: Q326084
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): Kbhostintegserv2000
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Host print jobs that contain Printer Control Language (PCL) codes are not
	formatted correctly because PCL codes similar to the following are printed
	instead of being processed by the printer:
	
	&l0O (8U (s0p10.00h12.0v0s1b3T &k0G
	
	CAUSE
	=====
	
	This problem occurs because the embedded PCL codes under 0x40 that are present
	in LU1 print jobs are converted to spaces. For example, EBCDIC 0x27 (an Escape
	character) is converted to ASCII 0x20.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry, and then click to select this key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaPrint\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: HonorCharsUnder0x40
	  Data type: REG_SZ
	  Value data: TRUE
	
	4. Quit Registry Editor.
	
	NOTE: You must stop the SNAPRINT service, and then restart the service for the
	parameter to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	NOTE: By default, Host Integration Server 2000 should honor PCL characters under
	0x40. Earlier versions of SNA Server ignored characters under 0x40 and required
	the registry parameter mentioned in the "Workaround" section. This was by
	default.
	
	When this problem occurs, SNA Print Internal traces (SPRTINTx.ATF) show the
	following statements:
	
	074c:0c74 16:48:06.0801 winvprtj.c(9991)   DUMPD (session: TESTLU1, job #1)  -------------------
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 40404040 40404040 |
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 40404040 275093F0 |
	                                                                                      ^^^^^^^^
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | D6274DF8 E4274DA2 |
	                                                                             ^^
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | F097F1F0 4BF0F088 |
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | F1F24BF0 A5F0A2F1 |
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 82F3E327 5092F0C7 |
	074c:0c74 16:48:06.0801 winvprtj.c(10083)  DUMPD (session: TESTLU1, job #1)  -------------------
	074c:0c74 16:48:06.0801 gwtrace.c(1517)    INTRN SNAP-3270   S3PPPDAT  CODE CONVERT PBUF
	074c:0c74 16:48:06.0801 gwtrace.c(1517)    INTRN SNAP-3270   S3PPPDAT  SINGLE BYTE SESSION
	074c:0c74 16:48:06.0801 gwtrace.c(1517)    INTRN SNAP-3270   S3PPPDAT  CONVERT CHARACTERS <
	074c:0c74 16:48:06.0801 s3pppdat.c(511)    PPDAT Converting 39
	074c:0c74 16:48:06.0801 s3pppdat.c(511)    PPDAT Converting 39
	074c:0c74 16:48:06.0801 s3pppdat.c(511)    PPDAT Converting 39
	074c:0c74 16:48:06.0801 s3pppdat.c(511)    PPDAT Converting 39
	074c:0c74 16:48:06.0801 s3pppdat.c(529)    PPDAT (session: TESTLU1, job #1)
	                                                 DATA TO FLUSH (AFTER ASCII CONVERSION)
	074c:0c74 16:48:06.0801 winvprtj.c(9980)   DUMPD Enter
	074c:0c74 16:48:06.0801 winvprtp.c(304)    VLJOB Enter, id=0x103D005C
	074c:0c74 16:48:06.0801 winvprtp.c(319)    VLJOB Found Job
	074c:0c74 16:48:06.0801 winvprtp.c(337)    VLJOB Leave
	074c:0c74 16:48:06.0801 winvprtj.c(9991)   DUMPD (session: TESTLU1, job #1)  -------------------
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 20202020 20202020 |
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 20202020 20266C30 |
	                                                                                      ^^^^^^^^
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 4F202838 55202873 |
	                                                                             ^^
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 30703130 2E303068 |
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 31322E30 76307331 |
	074c:0c74 16:48:06.0801 winvprtj.c(10007)  DUMPD (session: TESTLU1, job #1) | 62335420 266B3047 |
	074c:0c74 16:48:06.0801 winvprtj.c(10083)  DUMPD (session: TESTLU1, job #1)  -------------------
	
	REFERENCE
	---------
	
	For more information, see the "PDT, Bypass GDI, and Transparency Combinations"
	section under the heading "SNA Printer Session Properties," at the following
	Microsoft Web site:
	
	  Microsoft SNA Print Service White Paper
	  (http://www.microsoft.com/hiserver/evaluation/previousversions/print.asp)
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q271846 Event 5170 Occurs If Backup Server Is Unavailable During Upgrade
	
	
	  Q195354 LU3 Print Sessions Do Not Support Transparent Print Sections
	
	  Q194558 Print Server Translates Characters Below 0x40 to Spaces (0x20)
	
	  Q180150 LU3 Print Job Fails If Data Includes X'27' Control Codes
	
	
	Additional query words: kbcrossref
	
	======================================================================
	Keywords          : Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
