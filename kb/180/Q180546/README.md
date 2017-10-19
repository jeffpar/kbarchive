---
layout: page
title: "Q180546: Automating Updates to Local Groups on Member Servers"
permalink: /kb/180/Q180546/
---

## Q180546: Automating Updates to Local Groups on Member Servers

	Article: Q180546
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Batch files can be used to remotely add user accounts to local groups on all
	computers running Windows NT Server or Windows NT Workstation in a domain
	environment.
	
	MORE INFORMATION
	================
	
	This article demonstrates how to create a batch file system that will add a user
	to all local administrators groups located on every computer running Windows NT
	Server and Workstation within a domain environment.
	
	The batch file system uses Netdom.exe from the Windows NT 4.0 Resource Kit to
	create a list of computers running Windows NT that are operating as member
	servers or workstations in a domain. After the list is created, each computer
	from the list is pinged to determine if the computer is currently online. If the
	computer is online, Addusers.exe will be called to place a new user in the
	computer's local administrators group. If a computer was online, its name will
	be placed in a temporary file. After all computers have been processed, the
	temporary file will be compared to the list of computers from the domain, to
	create a new list of computers that have not yet been updated. This batch file
	system can be run multiple times to target only the computers that still need to
	be processed.
	
	To create these batch files, perform the following steps:
	
	1. Create the following batch files from the listing below:
	
	  INSUSER.BAT, SUB1.BAT, SUB2.BAT, SUB3.BAT, SUB4.BAT,
	  SUB5.BAT, and ADDUSERS.DAT.
	
	2. Edit the first line of INSUSER.BAT to reflect the domain name where the
	  target computers are located.
	
	3. Change the <domain\user> in the second line in Addusers.dat to reflect
	  the name of the user you wish to add to each computer's local administrators
	  group. Make sure there is one blank line at the top of the Addusers.dat file.
	
	4. Log on into the network with domain administrator credentials for the domain
	  you wish to modify. Make sure the Windows NT 4.0 Resource Kit has been
	  installed, and is accessible through the system path. This system uses
	  Netdom.exe and Addusers.exe from the resource kit.
	
	5. Run the INSUSER.BAT. This batch file may take many hours to complete.
	
	6. Examine the contents of Complete.txt and Working.txt. The Complete.txt file
	  contains the names of the computers that were updated, the Working.txt file
	  contains the names of the computers that still need processing.
	
	Repeat Steps 5 & 6 as necessary.
	
	If you need to start the entire process over from scratch, delete all .txt files,
	then start at Step 1.
	
	Filename: INSUSER.BAT
	
	  set CurrentDomain=mydomain
	  echo off
	  cls
	  if (%CurrentDomain%) == (mydomain) echo Edit the first line of
	  INSUSER.BAT.
	  if (%CurrentDomain%) == (mydomain) echo then rerun INSUSER.BAT
	  if (%CurrentDomain%) == (mydomain) goto verybottom
	  if not exist addusers.dat goto DisplayAddUsers
	  rem *** Display current variable settings ***
	  echo Current domain is %CurrentDomain%.
	  echo.
	  rem *** Determine if working list is present ***
	  If exist working.txt echo Working list detected, resuming batch process.
	  If exist working.txt goto SkipCreateList
	  echo Creating a list of member servers in %CurrentDomain%.
	  echo.
	  netdom /d:%CurrentDomain% member > working.txt
	  rem *** Remove NETDOM formatting from server names ***
	  if exist temp.txt del temp.txt
	  for /F "skip=6 delims=\ tokens=2" %%a in (working.txt) do call sub1.bat
	  %%a
	  del working.txt
	  ren temp.txt working.txt
	  :SkipCreateList
	  rem *** Determine if machine is online ***
	  if exist online.txt del online.txt
	  for /F "delims=\\ tokens=1" %%a in (working.txt) do call sub2.bat %%a
	  rem *** Remove servers that have been processed from WORKING.TXT ***
	  if not exist online.txt goto NoServersOnline
	  echo.
	  echo Updating list of servers that need to be processed.
	  for /F "delims=  tokens=1" %%a in (online.txt) do call sub4.bat %%a
	  echo List complete.
	  goto Bottom
	  :DisplayAddUsers
	  Echo.
	  Echo. You must modify the contents of ADDUSERS.DA, then rename the
	  Echo. file to ADDUSERS.DAT.  Then re-run this batch file.
	  goto verybottom
	  :NoServersOnline
	  Echo.
	  Echo There are no servers currently online that can be processed.
	  :Bottom
	  echo.
	  echo ------------------------------------
	  echo --- Finished processing servers. ---
	  echo ------------------------------------
	  :verybottom
	
	Filename: SUB1.BAT
	
	  rem *** Remove formatting from Netdom output ***
	  echo %1 >> temp.txt
	
	Filename: SUB2.BAT
	
	  echo Pinging %1...
	  ping %1 > PING.TXT
	  for /F "skip=6 tokens=4" %%a in (PING.TXT) do call sub3.bat %%a %1
	  del PING.TXT
	
	Filename: SUB3.BAT
	
	  rem *** If server is online it will be logged in online.txt for ***
	  rem *** processing later.                                       ***
	  rem ***    %2 is a bogus variable, thrown away.
	  if not (%1) == (bytes) goto NotOnline
	  echo %3 >> ONLINE.TXT
	  echo [%3 is online.]
	  rem ***********************************************
	  rem *** Put per-server processing commands here ***
	  rem ***********************************************
	  rem *** The following section determines if *******
	  rem *** Workstation or Server is running    *******
	  rem ***********************************************
	
	  REM Next Line wrapped by text editor for readability, it should all be on one line
	  for /F "delims=	 tokens=3" %%i IN ('reg query hklm\system\currentcontrolset\control\ProductOptions\ProductType \\%3') DO set product_type=%%i
	  REM End single line
	
	  if "%product_type%"=="" goto Undetermined
	  if "%product_type%"=="WinNT" goto Workstation
	  if "%product_type%"=="ServerNT" goto Server
	  if "%product_type%"=="LanmanNT" goto DomainController
	
	  :Undetermined
	  echo Unable to determine Windows NT Product Type, check the following
	  echo registry key for product type
	  echo.
	  echo hklm\system\currentcontrolset\control\ProductOptions\ProductType
	  echo.
	  echo Expected values
	  echo.
	  echo ProductType   Product
	  echo ----------------------------------------------------
	  echo WinNT         Windows NT Workstation is running
	  echo ServerNT      Windows NT Server is running
	  echo LanmanNT      Windows NT Domain controller
	  echo.
	  echo %3 >>undetermined.txt
	  goto Sub3bot
	
	  :DomainController
	  echo %3 >>dc.txt
	  goto sub3bot
	
	  :Server
	  echo %3 is a Server, skipping...
	  echo %3 >>server.txt
	  goto adduser
	
	  :Workstation
	  echo %3 is a Workstation, processing %3
	  echo %3 >> wks.txt
	  goto adduser
	
	  :adduser
	  ECHO Adding new user to local administrators group on %3.
	  ECHO *** \\%3 *** >> local.log
	  rem Add a user to each member servers local administrators group
	  rem ADDUSERS \\%3 /C addusers.dat > nul
	  rem *****************************************************
	  net send %3 "it worked"
	  rem *** Put per-server processing commands above here ***
	  rem *****************************************************
	  goto Sub3Bot
	  :NotOnline
	  :Sub3Bot
	
	Filename: SUB4.BAT
	
	  rem *** loop thru each name in working.txt and remove servers that were
	  ***
	  rem *** in online.txt.
	  ***
	  echo Removing %1 from list.
	  if exist temp.txt del temp.txt
	  for /F "tokens=1" %%a in (working.txt) do call sub5.bat %%a %%1
	  del working.txt
	  if exist temp.txt ren temp.txt working.txt
	
	Filename: SUB5.BAT
	
	  rem *** Filter out servers that have been updated ***
	  rem %1 is name from working.txt
	  rem %2 is name from online.txt
	  if (%1) == (%2) echo %1 >> complete.txt
	  if not (%1) == (%2) echo %1 >> temp.txt
	
	Filename: ADDUSERS.DAT
	
	  [Local]
	  Administrators,Members can fully administer the computer,<domain\user>,
	
	Additionally, you can configure these batch files to execute the single command
	on workstations or servers only, see Specifying Servers or Workstations.
	
	Specifying Servers or Workstations
	----------------------------------
	
	By replacing the SUB3.BAT with the following batch file, REG.EXE from the reskit
	is used to check the product type in the registry (server, workstation or domain
	controller). By changing the goto command in the :server and :workstation
	sections, you can control if the command is run against server or workstations
	as follows:
	
	GOTO Sub3bot - This product type will be skipped. GOTO Adduser - Commands in
	:addusers section will be processed against this product type.
	
	Currently, only workstation is selected. The contents of complete.txt can be
	ignored when using this modified sub3.bat. Check LOCAL.LOG to determine which
	machines have been updated. Here's a description of the log files that may be
	generated.
	
	LOCAL.LOG - Machines that have been updated.
	
	WKS.TXT - Machines that have been identified as workstations.
	
	SERVER.TXT - Machines identified as SERVERS.
	
	UNDETERMINED.TXT - Machines that are identified in server manager as a server or
	workstation but do not have the product type defined in the registry. Or the
	registry could not be read remotely.
	
	DC.TXT - Machines that are identified in server manager as a server or
	workstation but the product type defined in the registry indicates this is a
	domain controller. These system will not be processed.
	
	WORKING - Contains a list of machines that are listed in server manager but did
	respond to PING. This list is used when running the batch files a second or
	third time.
	
	Filename SUB3.BAT
	
	  rem *** If server is online it will be logged in online.txt for ***
	  rem *** processing later.                                       ***
	  rem ***    %2 is a bogus variable, thrown away.
	  if not (%1) == (bytes) goto NotOnline
	  echo %3 >> ONLINE.TXT
	  echo [%3 is online.]
	  rem ***********************************************
	  rem *** Put per-server processing commands here ***
	  rem ***********************************************
	  rem *** The following section determines if *******
	  rem *** Workstation or Server is running    *******
	  rem ***********************************************
	
	  REM Next Line wrapped by text editor for readability, it should all be on
	  one line
	  for /F "tokens=3" %%i IN ('reg query
	  hklm\system\currentcontrolset\control\ProductOptions\ProductType \\%3') DO
	  set product_type=%%i
	  REM End single line
	
	  if "%product_type%"=="" goto Undetermined
	  if "%product_type%"=="WinNT" goto Workstation
	  if "%product_type%"=="ServerNT" goto Server
	  if "%product_type%"=="LanmanNT" goto DomainController
	
	  :Undetermined
	  echo Unable to determine Windows NT Product Type, check the following
	  echo registry key for product type
	  echo.
	  echo hklm\system\currentcontrolset\control\ProductOptions\ProductType
	  echo.
	  echo Expected values
	  echo.
	  echo ProductType   Product
	  echo ----------------------------------------------------
	  echo WinNT         Windows NT Workstation is running
	  echo ServerNT      Windows NT Server is running
	  echo LanmanNT      Windows NT Domain controller
	  echo.
	  echo %3 >>undetermined.txt
	  goto Sub3bot
	
	  :DomainController
	  echo %3 >>dc.txt
	  goto sub3bot
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
