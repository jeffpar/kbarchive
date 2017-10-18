---
layout: page
title: "Q238374: How to Produce a List of Users and Their Last Password Change"
permalink: kb/238/Q238374/
---

## Q238374: How to Produce a List of Users and Their Last Password Change

	Article: Q238374
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to produce text file containing a sorted list of
	Windows NT domain users and the date and time of each user's last password
	change.
	
	MORE INFORMATION
	================
	
	The method outlined in this article uses the Global.exe and Nltest.exe tools
	from the Windows NT 4.0 Resource Kit. Make sure that these tools are installed
	and available through the computer's PATH variable.
	
	1. Create a folder on the computer running Windows NT that has read/write
	  permissions assigned to the user account with which you are logging on.
	
	2. Create the Lastpwd.bat and Lastpwd2.bat files listed in this article. Create
	  these files in the folder created in step 1.
	
	3. Run the Lastpwd.bat file at a command prompt. The command has the following
	  syntax:
	
	  lastpwd <domain_name>
	
	For example: "lastpwd mydomain" (without the quotation marks)
	
	4. Examine the contents of the Password.txt file.
	
	  NOTE: Users listed in the Password.txt file without a date and time have never
	  logged on to the domain.
	
	NOTE: These batch files are designed to work with user names that can contain as
	many as three parts separated by spaces. For example, the following name is
	valid:
	
	  Firstname MiddleInitial Lastname
	
	The following name is not valid:
	
	  Firstname MiddleInitial Lastname II
	
	You can modify the two batch files to support more parts in a user name if
	necessary.
	
	Lastpwd.bat
	-----------
	
	NOTE: The second line in the Lastpwd.bat file that begins with "for /F" is
	wrapped for readability. If this line is not corrected before running, the batch
	jobs do not work.
	
	  @echo off
	  if "%1"=="" goto nodomain
	  set dom=%1
	  nltest /dcname:%1 | find "PDC for Domain" > temp1.txt
	  for /F "delims=\\ tokens=2" %%a in (temp1.txt) do set pdc=%%a
	  if exist domusers.txt del domusers.txt
	  if exist output.txt del output.txt
	  if exist password.txt del password.txt
	  if exist out2.txt del out2.txt
	  if exist temp1.txt del temp1.txt
	  echo.
	  echo Generating list of users in %1
	  echo.
	  echo Please Wait...
	  global "domain users" %1 | find /v "$" > domusers.txt
	  cls
	  echo.
	  echo Generating list of users - Done
	  echo.
	  echo List generated. Checking password ages.
	  echo.
	  echo Please Wait...
	  REM Next line wrapped for readability: it should all be on one line.
	  for /F "delims=  tokens=1,2,3" %%a in (domusers.txt) do call lastpwd2.bat
	  %pdc% %%a %%b %%c
	  REM End of single line.
	  sort < output.txt > out2.txt
	  del output.txt
	  echo User account password ages for domain: %dom% >> password.txt
	  echo ---------------------------------------------------- >> password.txt
	  type out2.txt >> password.txt
	  if exist out2.txt del out2.txt
	  if exist temp.txt del temp.txt
	  echo.
	  echo List Complete
	  echo.
	  echo Output file is called Password.txt
	  if exist domusers.txt del domusers.txt
	  goto end
	  :nodomain
	  echo Specify the target domain on the command line
	  echo EXAMPLE: LASTPWD MyDomainName
	  :end
	
	Lastpwd2.bat
	------------
	
	  rem %1 = pdc
	  rem %2 = username1
	  rem %3 = username2
	  rem %4 = username3
	  if not (%4) == () goto ThreeName
	  if not (%3) == () goto TwoName
	  set user=%2
	  goto query
	  :TwoName
	  set user=%2 %3
	  goto query
	  :ThreeName
	  set user=%2 %3 %4
	  :query
	  nltest /server:%1 /user:"%user%" | find "PasswordLastSet" > temp.txt
	  for /F "delims== tokens=2" %%a in (temp.txt) do set user=%user% %%a
	  echo %user% >> output.txt
	
	REFERENCES
	==========
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q197478 HOWTO: How to Detect and Remove Inactive Machine Accounts
	
	  Q158148 Domain Secure Channel Utility -- Nltest.exe
	
	Additional query words: username password change
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
