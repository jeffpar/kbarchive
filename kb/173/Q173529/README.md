---
layout: page
title: "Q173529: Using Batch Files to Automate Networking Tasks"
permalink: /kb/173/Q173529/
---

## Q173529: Using Batch Files to Automate Networking Tasks

{% raw %}

	Article: Q173529
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates a few ways to use Windows NT command extensions in
	conjunction with Windows NT Resource Kit utilities within batch files to
	automate common networking tasks.
	
	The following tasks will be illustrated:
	
	- How to automate the addition of Domain\Domain Users global group to each of
	  the member servers Change the system time user right.
	
	- How to add files to many users' home directories.
	
	- How to restart services on all domain controllers within a domain.
	
	How to Automate the Addition of Domain\Domain Users
	---------------------------------------------------
	
	How to automate the addition of "Domain\Domain Users" global group to each of the
	member servers "Change the system time" user right.
	
	1. Create the Addtime.bat and Addtime2.BAT files listed below.
	
	2. Run Addtime.bat with administrator privileges from a computer running Windows
	  NT. This batch file creates a list of member servers using the Windows NT
	  Resource Kit utility Netdom.exe. The output of NETDOM gets redirected to a
	  file, which in turn, gets parsed using the FOR command (part of Windows NT
	  command extensions). The Addtime2.bat file gets called for each instance of
	  \\ServerName within the Netdom.txt file. The Addtime2.bat file then issues
	  the Windows NT Resource Kit utility Ntrights.exe to add Domain\Domain Users
	  global group to each of the member servers Change the system time user right.
	  The output of NTRIGHTS gets written to a file called Log.txt.
	
	Filename: Addtime.bat
	
	  echo off
	  cls
	  echo Creating a list of member servers.
	  echo.
	  netdom member > netdom.txt
	  echo Adding "Change System Time" right to Member Servers...
	  echo.
	  if exist log.txt del log.txt
	  for /F "skip=6 tokens=4" %%a in (netdom.txt) do 
	     call ADDTIME2.bat %%a
	  echo.
	  echo ----------------------------------------------
	  echo - Done! Check LOG.TXT for status information.-
	  echo ----------------------------------------------
	
	Filename: ADDTIME2.BAT
	
	  echo Adding right to %1...
	  ntrights -u "domain users" -m %1 +r SeSystemTimePrivilege >> log.txt
	
	How to Add Files to Many Users' Home Directories
	------------------------------------------------
	
	To add files to many users' home directories, perform the following steps:
	
	1. Create the Addfile.bat and Addfile2.bat files listed below.
	
	2. Run Addfile.bat <Parent Directory> <File to Add> with
	  administrative privileges from a computer running Windows NT. The Addfile.bat
	  file simply issues a DIR command and redirects the output to a file, which in
	  turn gets parsed using the FOR command (part of Windows NT command
	  extensions). The Addfile2.bat file gets called once for each directory name
	  listed in the Dir.txt file. The Addfile2.bat file issues a copy command to
	  copy the file to each user directories.
	
	Filename: ADDFILE.BAT
	
	  v
	  echo off
	  cls
	  IF (%1)==() GOTO NoParams
	  IF (%2)==() GOTO NoParams
	  Echo Creating directory listing...
	  dir %1 > dir.txt
	  for /F "skip=7 tokens=4" %%a in (dir.txt) do call addfile2.bat %%a
	  %1 %2
	  echo ---------
	  echo - Done! -
	  echo ---------
	  GOTO Bottom
	  :NoParams
	  ECHO usage: ADDFILE [Parent Directory] [File to Add]
	  ECHO.
	  ECHO  i.e.- ADDFILE C:\PROFILES MyFile.lnk
	  ECHO.
	  :Bottom
	
	Filename: ADDFILE2.BAT
	
	  if (%1)==() goto bottom
	  if (%1)==(bytes) goto bottom
	  copy %3 %2\%1
	  :bottom
	
	How to Restart Services On All Domain Controllers Within a Domain
	-----------------------------------------------------------------
	
	To restart service on all domain controllers within a domain, perform the
	following steps:
	
	1. Create the Restart.bat and Restart2.bat files listed below.
	
	2. Run the Restart.bat Service Name from a computer running Windows NT using
	  administrator privileges. The Restart.bat file issues the Windows NT Resource
	  Kit utility NETDOM to create a file called Netdom.txt. The Netdom.txt file
	  gets parsed using the FOR command (part of Windows NT command extensions).
	  Each \\DomainControllerName gets passed to the Restart2.bat file where the
	  Windows NT Resource Kit utility NETSVC command gets issued to stop and start
	  the Service Name entered at the command prompt.
	
	Filename: RESTART.BAT
	
	  echo off
	  cls
	  if (%1)==() goto NoParams
	  netdom bdc > netdom.txt
	  for /F "skip=6 tokens=4" %%a in (netdom.txt) do call restart2.bat
	  %%a %1
	  echo ---------
	  echo - Done! -
	  echo ---------
	  goto bottom
	  :NoParams
	  echo usage: RESTART "Service Name"
	  echo.
	  echo. i.e.- RESTART "License Logging Service"
	  echo.
	  :bottom
	
	Filename: RESTART2.BAT
	
	  echo Restarting %2 on %1
	  netsvc %2 %1 /stop
	  netsvc %2 %1 /start
	  echo.
	
	Additional query words: Iterative Processing script set time
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
