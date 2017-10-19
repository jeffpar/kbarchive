---
layout: page
title: "Q177077: How to Produce a List of Users and SIDs"
permalink: /kb/177/Q177077/
---

## Q177077: How to Produce a List of Users and SIDs

	Article: Q177077
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to produce a sorted list of Windows NT user names and
	their corresponding Security Identifiers (SIDs).
	
	MORE INFORMATION
	================
	
	The following example will show you how to create a text file that contains each
	Windows NT Domain User listed with the corresponding SID.
	
	The solution outlined in this article uses the following utilities contained in
	the Windows NT 4.0 Server Resource Kit: Global.exe and Getsid.exe.
	
	1. Make sure that the Global.exe and Getsid.exe utilities are installed on the
	  computer running Windows NT and are accessible through the system's PATH
	  variable.
	
	2. Create a directory on the computer running Windows NT that has read/write
	  permissions assigned to the user account you are logging in with.
	
	3. Create the Listsid.bat, Listsid2.bat, Listsid3.bat, Cleanup.bat and
	  Verify.bat files listed in this article. Create these files in the directory
	  created in Step 2 above.
	
	4. Execute the Listsid.bat file at an MS-DOS command prompt. The command has the
	  following syntax:
	
	  "LISTSID <Domain Name> <Primary Domain Controller Name>" (without
	  the quotation marks)
	
	  For Example: LISTSID MyDomain MyPDC
	
	5. Examine the contents of Usersids.txt.
	
	  Note: These series of batch files were designed to understand a username that
	  can contain as many as three parts separated by spaces. For example, the
	  following name is valid:
	
	  Joe B. Admin
	
	  The following name would not be valid: Joe B. Admin II
	
	  The three batch files could be modified to support names if necessary.
	
	NOTE: The lines in Listsid.bat and Listsid2.bat that begin with "for /F" are
	wrapped for readibility. If these lines are not corrected before running, the
	batch jobs will not work.
	
	Listsid.bat
	-----------
	
	  echo off
	  cls
	  IF (%1)==() GOTO NoParams
	  IF (%2)==() GOTO NoParams
	  if exist usersids.txt del usersids.txt
	  if exist domusers.txt del domusers.txt
	  if exist domusers.tmp del domusers.tmp
	  echo Creating list of users in %1.
	  global "domain users" %1 > domusers.txt
	  echo Removing machine names from list.
	  for /F "tokens=1,2,3" %%a in (domusers.txt) do call cleanup.bat
	  %%a %%b %%c
	  del domusers.txt
	  ren domusers.tmp domusers.txt
	  echo Getting SIDs from PDC.
	  for /F "tokens=1,2,3" %%a in (domusers.txt) do call listsid2.bat
	  %2 %%a %%b %%c
	  echo Sorting List.  Please wait...
	  sort /+1 < usersids.txt > sortsids.txt
	  echo --------------------------------------------
	  del usersids.txt
	  ren sortsids.txt USERSIDS.TXT
	  echo Done!  Outfile file is called: USERSIDS.TXT
	  echo --------------------------------------------
	  goto Bottom
	  :NoParams
	  Echo usage: LISTSID [Domain Name] [PDC Name]
	  Echo.
	  Echo i.e. - LISTSID RESEARCHDOMAIN RESEARCHPDC
	  Echo.
	  :Bottom
	
	Listsid2.bat
	------------
	
	  if exist user.txt del user.txt
	  if not (%4) == () goto ThreeName
	  if not (%3) == () goto TwoName
	  getsid \\%1 %2 \\%1 %2 > user.txt
	  for /F "skip=2 tokens=7" %%a in (user.txt) do call listsid3.bat
	  %%a %2
	  goto Bottom2
	  :TwoName
	  getsid \\%1 "%2 %3" \\%1 "%2 %3" > user.txt
	  for /F "skip=2 tokens=8" %%a in (user.txt) do call listsid3.bat
	  %%a %2 %3
	  goto Bottom2
	  :ThreeName
	  getsid \\%1 "%2 %3 %4" \\%1 "%2 %3 %4" > user.txt
	  for /F "skip=2 tokens=9" %%a in (user.txt) do call listsid3.bat
	  %%a %2 %3 %4
	  goto Bottom2
	  :Bottom2
	
	Listsid3.bat
	------------
	
	  echo Now working on: %2 %3 %4
	  if not (%4) == () goto ThreeName
	  if not (%3) == () goto TwoName
	  echo %2 %1 >> usersids.txt
	  Goto Bottom3
	  :TwoName
	  echo %2 %3 %1 >> usersids.txt
	  Goto Bottom3
	  :ThreeName
	  echo %2 %3 %4 %1 >> usersids.txt
	  :Bottom3
	
	Cleanup.bat
	-----------
	
	  if exist onename.txt del onename.txt
	  echo %1 > onename.txt
	  for /F "delims=$ tokens=1" %%a in (onename.txt) do call verify.bat %%a %1
	
	Verify.bat
	----------
	
	  if (%1)==(%2) echo %1 >> domusers.tmp
	
	Additional query words: getsid username list sid
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
