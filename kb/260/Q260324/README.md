---
layout: page
title: "Q260324: How to Obtain a List of Workstations and the Last Logged On User"
permalink: kb/260/Q260324/
---

## Q260324: How to Obtain a List of Workstations and the Last Logged On User

	Article: Q260324
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to produce a text file containing a sorted list of
	Windows NT domain member servers and workstations with the name of the user who
	last logged on.
	
	MORE INFORMATION
	================
	
	The method outlined in this article uses the Netdom.exe and Reg.exe tools from
	the Microsoft Windows NT 4.0 Resource Kit. Make sure that these tools are
	installed and available through the computer's PATH variable.
	
	1. Create a folder on the computer running Windows NT that has read/write
	  permissions assigned to the user account you are using to log on.
	
	2. Create the Lastuser.bat and Lastusr2.bat files listed in the "Batch Files"
	  section of this article. Create these files in the folder you created in step
	  1.
	
	3. Run the Lastuser.bat file at a command prompt. The command has the following
	  syntax:
	
	  lastuser <domainname>
	
	4. Examine the contents of the Output.txt file.
	
	Batch Files
	-----------
	
	NOTE: You must replace the five references to <TAB> in the following two
	batch files with a true tab character. The easiest way to accomplish this is to
	edit the files with Edit.com and select where you need to insert the tab
	character. Press CTRL+P, and then press TAB. This action should insert an ASCII
	character. If you do not correct these lines before you run the files, the batch
	jobs do not work.
	
	The Lastuser.bat File
	---------------------
	
	  @echo off
	  cls
	  if "%1"=="" goto nodomain
	  set dom=%1
	  if exist ms.txt del ms.txt
	  if exist output.txt del output.txt
	  if exist out2.txt del out2.txt
	  if exist temp.txt del temp.txt
	  echo.
	  echo Generating Server List of Member Servers and Workstations
	  echo.
	  echo Please Wait...
	  netdom /d:%1 /noverbose member > MS.TXT
	  echo.
	  echo Generating List of Member Servers and Workstations - Done
	  echo.
	  echo List Generated. Checking Last Logged On User.
	  for /f %%a in (ms.txt) do call lastusr2.bat %%a
	  sort /+3 <output.txt >out2.txt
	  del output.txt
	  echo Computer Name<TAB>Last Logged On User >> output.txt
	  echo ----------------------------------------- >> output.txt
	  type out2.txt >> output.txt
	  if exist ms.txt del ms.txt
	  if exist out2.txt del out2.txt
	  if exist temp.txt del temp.txt
	  echo.
	  echo List is Complete. Results are in Output.txt.
	  goto end
	  :nodomain
	  echo Specify the target domain on the command line
	  echo EXAMPLE: lastuser MyDomainName
	  echo.
	  :end
	
	The Lastusr2.bat File
	---------------------
	
	NOTE: The two lines in this file that begin with "reg query" are wrapped for
	readability. If you do not correct these lines before you run the file, the
	batch job does not work.
	
	  REM %1 = computer name
	  set usr=<TAB>Machine Offline
	  REM Next line wrapped for readability: it should all be on one line.
	  reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon
	  \DefaultDomainName" %1 | find /I "defaultdomainname" > temp.txt
	  REM End of single line.
	  for /f "tokens=3 delims=<TAB>" %%a in (temp.txt) do set usr=%%a
	  REM Next line wrapped for readability: it should all be on one line.
	  reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon
	  \DefaultUserName" %1 | find /I "defaultusername" > temp.txt
	  REM End of single line.
	  for /f "tokens=3 delims=<TAB>" %%a in (temp.txt) do set usr=<TAB>%usr%\%%a
	  echo %1 %usr% >>output.txt
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
