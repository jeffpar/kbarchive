---
layout: page
title: "Q197478: HOWTO: How to Detect and Remove Inactive Machine Accounts"
permalink: /kb/197/Q197478/
---

## Q197478: HOWTO: How to Detect and Remove Inactive Machine Accounts

{% raw %}

	Article: Q197478
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This procedure uses batch files and resource kit utilities to create a list of
	machine accounts sorted by the last time the machine account's password was
	updated. The list then needs to be examined by an administrator to remove all
	machine accounts that are deemed active, leaving only the old machine accounts
	in the remaining list. The remaining list is then read by a batch file that
	systematically deletes the old machine accounts using Windows NT resource kit
	utilities.
	
	1. Create the following batch files from their listings below: Oldms.bat,
	  Oldms2.bat, Oldms3.bat, Oldms4.bat, Deloldms.bat, and Bat2.bat.
	
	2. Run the Oldms.bat file from a command prompt while logged on as an
	  administrator. Use the following syntax:
	
	  OLDMS.BAT DomainName
	
	3. Open the Output.txt file using a text editor, and REMOVE all lines that
	  contain machine accounts that are VALID. The remaining lines in Output.txt
	  should contain only machine accounts that will be deleted.
	
	4. Run the Deloldms.bat file. This file will read the Output.txt file, and
	  delete each machine account by calling the Netdom.exe resource kit utility.
	
	Contents of Oldms.bat:
	
	     @echo off
	     if "%1"=="" goto nodomain
	     set dom=%1
	     set deloldms=
	     netdom /d:%1 bdc | find "Found PDC" > temp4.txt
	     for /f "tokens=3" %%a in (temp4.txt) do set pdc=%%a
	      if exist ms2.txt del ms2.txt
	      if exist output.txt del output.txt
	      if exist out2.txt del out2.txt
	      if exist temp4.txt del temp4.txt
	     echo.
	     echo Generating Server List of Member Servers and Workstations
	     echo.
	     echo Please Wait...
	     netdom /d:%1 /noverbose member > MS.TXT
	     for /F "delims=\\ tokens=1" %%a in (ms.txt) do echo %%a >> MS2.TXT
	     cls
	     echo.
	     echo Generating List of Member Servers and Workstations - Done
	     echo.
	     echo List Generated.  Checking Password Ages.
	     echo.
	     echo Please Wait...
	     for /F "tokens=1" %%a in (ms2.txt) do call oldms2.bat %%a %dom% %pdc%
	     sort < output.txt > out2.txt
	     del output.txt
	     echo Machine account ages for domain: %dom% >> output.txt
	     echo ------------------------------------------------ >> output.txt
	     type out2.txt >> output.txt
	      if exist ms.txt del ms.txt
	      if exist out2.txt del out2.txt
	      if exist temp3.txt del temp3.txt
	      if exist ms2.txt del ms2.txt
	      if exist temp.txt del temp.txt
	      if exist temp4.txt del temp4.txt
	      if exist total.txt del total.txt
	      if exist working.txt del working.txt
	
	      REM *** IMPORTANT Make the next 2 lines 1 line.  Wrapped for readability ***
	
	     FOR /F "SKIP=2 tokens=1,2,3" %%A IN (OUTPUT.TXT) DO echo %%A %%B
	     %%C>>working.txt
	     type working.txt|find " " /c>total.txt
	     for /f "tokens=1" %%A in (total.txt) do set deloldms=%%A
	     echo.
	     Echo List Complete
	     echo.
	     Echo %deloldms% machine accounts found.
	     echo.
	     echo Now edit OUTPUT.TXT and remove all valid machine accounts.
	     echo Machine accounts remaining in OUTPUT.TXT will be deleted.
	     echo After OUTPUT.TXT has been modified, run DELOLDMS.BAT to
	     echo delete machine accounts.
	     echo.
	     if exist total.txt del total.txt
	     if exist working.txt del working.txt
	     goto end
	     :nodomain
	     echo Specify the target domain on the command line
	     echo EXAMPLE: oldms MyDomainName
	     :end
	
	Contents of Oldms2.bat:
	
	     rem %1 = member server
	     rem %2 = domain
	     rem %3 = pdc
	     nltest /server:%3 /user:%1$ | find "PasswordLastSet" > temp.txt
	     for /F "delims== tokens=2" %%a in (temp.txt) do oldms3.bat %%a %1
	
	Contents of Oldms3.bat:
	
	     rem %1 = date
	     rem %2 = time
	     rem %3 = member server
	     echo %1 > temp3.txt
	
	     REM *** IMPORTANT Make the next 2 lines 1 line.  Wrapped for readability ***
	
	     for /F "delims=/ tokens=1,2,3" %%a in (temp3.txt) do oldms4.bat %%a %%b
	     %%c %2 %3
	
	Contents of Oldms4.bat
	
	     rem %1 = month
	     rem %2 = day
	     rem %3 = year
	     rem %4 = time
	     rem %5 = member server
	     echo %3/%1/%2 %4 %5 >> output.txt
	
	Contents of Deloldms.bat
	
	     @echo off
	     set dom=
	     set deloldms=
	     if exist total.txt del total.txt
	     if exist working.txt del working.txt
	
	     REM *** IMPORTANT Make the next 2 lines 1 line.  Wrapped for readability ***
	
	     FOR /F "SKIP=2 tokens=1,2,3" %%A IN (OUTPUT.TXT) DO echo %%A %%B
	     %%C>>working.txt
	     type working.txt|find " " /c>total.txt
	     for /f "tokens=1" %%A in (total.txt) do set deloldms=%%A
	     cls
	     echo.
	     Echo NOTICE: %deloldms% machine accounts found in OUTPUT.TXT, ready for
	     deletion
	     Echo Press Ctrl + C to abort or..
	     echo.
	     pause
	     FOR /f "tokens=6" %%a in (output.txt) do set dom=%%a
	     if "%dom%"=="" goto nodomain
	     FOR /F "SKIP=2 TOKENS=3" %%A IN (OUTPUT.TXT) DO CALL BAT2 %%A
	     if exist total.txt del total.txt
	     if exist working.txt del working.txt
	     goto end
	     :nodomain
	     Echo Domain Name Missing from OUTPUT.TXT
	     Echo Re-run OLDMS.BAT
	     :end
	
	Contents of Bat2.bat:
	
	     NETDOM /d:%dom% MEMBER %1 /DELETE
	
	MORE INFORMATION
	================
	
	As a part of Windows NT security, machine account passwords are changed every
	seven days. The process described in this article relies on the age of the
	machine account password to determine validity. It is possible for an
	administrator to disable automatic machine account password changes. This
	process can be done on a domain-wide or per-system basis. If this process has
	been done, the administrator cannot rely on the password age to determine the
	validity of the account. You will need to cross reference with your internally
	documented valid machine accounts when editing Output.txt. If this information
	is not available, this technique should not be used.
	
	NOTE: Microsoft provides programming examples for illustration only, without
	warranty either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q154501 How to Disable Automatic Machine Account Password Changes
	
	  Q158148 Domain Secure Channel Utility -- Nltest.exe
	
	Additional query words: Server Manager Clean Up Cleanup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
