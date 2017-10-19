---
layout: page
title: "Q246009: Windows NT 4.0 Service Pack 6a Available"
permalink: /kb/246/Q246009/
---

## Q246009: Windows NT 4.0 Service Pack 6a Available

	Article: Q246009
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP6a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In response to a connection problem with Lotus Notes, Microsoft has released an
	updated version of Windows NT 4.0 Service Pack 6. The updated version is named
	Windows NT 4.0 Service Pack 6a. In addition to the problems resolved in Service
	Pack 6, Service Pack 6a includes:
	
	- A resolution to the Winsock problem that prevents Lotus Notes and other
	  Winsock-based programs from connecting to the server when a user does not
	  have local administrator rights.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q245678 Winsock Call Fails When You Have No Local Administrator Rights
	
	- A revised version of Winver.exe to allow users to quickly verify whether a
	  computer is running Service Pack 6 or Service Pack 6a.
	
	- An update to the Microsoft Internet Information Server (IIS) 3.0 Log
	  Converter utility (Convlog.exe).
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q245329 Convlog.exe Converts Year 2000 Dates to Year 2028
	
	- An update to an AppleTalk file (Sfmatalk.sys) to avoid a "Stop 44" error
	  message on a blue screen while you are connected an AppleTalk network or an
	  Apple print server. The problem involves two events, one of which almost
	  always finishes before the other. The error message can occur when the
	  expected order is reversed.
	
	MORE INFORMATION
	================
	
	To determine whether you are running Service Pack 6 or Service Pack 6a:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "winver" (without the quotation marks), and then click
	  OK. If you are running Service Pack 6a, the About Windows NT dialog box
	  states:
	
	  Microsoft(R) Windows NT (R)
	  Version 4.0 (Build 1381: Service Pack 6)
	  Copyright (C) 1981-1996 Microsoft Corp
	  Revised Service Pack 6a
	
	If you are running Service Pack 6, the About Windows NT dialog box states:
	
	  Microsoft(R) Windows NT (R)
	  Version 4.0 (Build 1381: Service Pack 6)
	  Copyright (C) 1981-1996 Microsoft Corp
	
	Programs can detect whether Service Pack 6a is installed by checking to see if
	the following registry value is set to 1:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows
	  NT\CurrentVersion\Hotfix\Q246009\Installed
	
	Updating Service Pack 6 to 6a
	-----------------------------
	
	If you have already installed Windows NT 4.0 Service Pack 6, you can update your
	computer to Service Pack 6a by installing the SP6a hotfix.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q246009i.exe now
	  (http://download.microsoft.com/download/winntsp/Patch/6.0a/NT4/EN-US/Q246009i.EXE)
	  Alpha: DownloadDownload Q246009a.exe now
	  (http://download.microsoft.com/download/winntsp/Patch/6.0a/ALPHA/EN-US/Q246009a.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	REFERENCES
	==========
	
	For additional information about the problems resolved in Service Pack 6, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q241211 List of Bugs Fixed in Windows NT 4.0 Service Pack 6/6a (Part 1)
	
	  Q244690 List of Bugs Fixed in Windows NT 4.0 Service Pack 6/6a (Part 2)
	
	For additional information about how to obtain the latest Windows NT 4.0 service
	pack, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	Additional query words: sp6a
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
