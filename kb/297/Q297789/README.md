---
layout: page
title: "Q297789: How to Disable the Computer Browser Service Throughout a Domain"
permalink: kb/297/Q297789/
---

## Q297789: How to Disable the Computer Browser Service Throughout a Domain

	Article: Q297789
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the set of batch files that you can run from a central
	location to stop and disable the Computer Browser service on all Windows NT
	Workstations and Windows NT-based member servers in a domain.
	
	MORE INFORMATION
	================
	
	In addition to three batch files, you need the following utilities from the
	Windows NT Server Resource Kit:
	
	- Netdom.exe
	
	- Nnetsvc.exe
	
	- Rreg.exe
	
	How to Stop the Computer Browser Service
	----------------------------------------
	
	1. Create a Member.bat, Stopbrow.bat, and Stopbrow2.bat batch file.
	
	Code for the Member.bat File:
	
	  @ECHO OFF
	  NETDOM MEMBER > MEMBER.TXT
	  FOR /F "skip=6 tokens=4" %%i IN (MEMBER.TXT) DO ECHO %%i >> SERVERS.TXT
	
	Code for the Stopbrow.bat File:
	
	  @ECHO OFF
	  FOR /F "tokens=1" %%i IN (SERVERS.TXT) DO call stopbrow2.bat %%i
	
	Code for the Stopbrow2.bat File:
	
	  @echo off
	  echo Processing computer %1 >> output.txt
	  NETSVC /STOP %1 BROWSER >> output.txt
	  REG UPDATE HKLM\System\CurrentControlSet\Services\Browser\Start=4 %1 >> output.txt
	
	2. Place the three preceding batch files and resource kit utilities into a
	  folder, and then place the folder on the computer that is to run the batch
	  files. This computer must be a member of the domain where you want to disable
	  the Computer Browser service.
	
	3. Run the Member.bat file, which creates two text files: Member.txt and
	  Servers.txt. The Servers.txt file includes a list of all of the workstations
	  and member servers in the domain. This file can serve as the list of targets
	  for the Stopbrow.bat batch file.
	
	4. Run the Stopbrow.bat file. This file examines the list of computers that are
	  listed in the Servers.txt file, and then calls the Stopbrow2.bat file to
	  stop, and then disable the Computer Browser service on each computer. The
	  results of this process are logged to the Output.txt file, which can be
	  reviewed to determine the computers that had been successfully processed.
	
	For additional information about automating tasks with batch files in Windows NT
	4.0, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q173529 Using Batch Files to Automate Networking Tasks
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	