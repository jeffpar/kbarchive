---
layout: page
title: "Q199987: SMS: How to Avoid Client Contention Between SMS 1.2 and SMS 2.0"
permalink: /kb/199/Q199987/
---

## Q199987: SMS: How to Avoid Client Contention Between SMS 1.2 and SMS 2.0

	Article: Q199987
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms120
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Systems Management Server 2.0 client is authenticated in a Systems
	Management Server 1.2 site, the 1.2 site may attempt to replace the 2.0 client
	software with 1.2 client software. To prevent this from occurring, replace the
	Smsls.bat file at the 1.2 site with a version of Smsls.bat that recognizes a 2.0
	client. This version of the Smsls.bat file will exit without installing the
	Systems Management Server 1.2 client software.
	
	MORE INFORMATION
	================
	
	You can get the new version of the Smsls.bat logon script by applying Systems
	Management Server 1.2 Service Pack 4 to your 1.2 site. The service pack Setup
	program will replace the Smsls.bat file. Alternatively, you can manually copy
	the Smsls12a.bat, Check20.exe, and Checkver.exe files from the Systems
	Management Server 2.0 CD to the Winnt\System32\Repl\Export\Scripts directory of
	your Systems Management Server 1.2 site server, and then rename Smsls12a.bat to
	Smsls.bat.
	
	If you are using a customized Smsls.bat file at your 1.2 site, you can manually
	copy the Check20.exe and Checkver.exe files from the 2.0 CD to the
	Winnt\System32\Repl\Export\Scripts directory of your 1.2 site server. After
	doing so, perform the following steps:
	
	1. In the customized 1.2 Smsls.bat file, find the following line:
	
	     if "%OS%" == "Windows_NT" goto RUN_NT:RUN_DOS
	
	2. Immediately after this line, insert the following lines:
	
	     REM call checkver to verify this is a supported OS for 2.0
	     %0\..\checkver
	
	     if errorlevel 1 goto RUN_DOS_2
	
	     REM call to check20 to check if this is a 2.0 client
	     %0\..\check20
	
	     if errorlevel 1 goto RUN_DOS_2
	
	     REM This is an SMS 2.0 Client skip processing
	     goto RESTORE
	
	     :RUN_DOS_2
	
	     REM This is not an SMS 2.0 client process script
	
	3. Find the following line of code:
	
	     :RUN_NT
	
	4. Immediately after this line, insert the following lines:
	
	     %0\..\check20 /v
	     if errorlevel 1 goto RUN_NT_2
	     goto RESTORE
	
	     :RUN_NT_2
	
	To prevent Systems Management Server 1.2 clients from being upgraded by the
	Systems Management Server 2.0 sites they get authenticated by, perform the
	following steps:
	
	1. Create a file in the C:\ directory of the client computer. This file should
	  contain the following lines:
	
	  REM The presence of this file prevents SMS 1.2 client software
	  REM from being overwritten with SMS 2.0 software, provided that
	  REM the login script at the SMS 2.0 site has been modified to look
	  REM for this file and exit if it is found and
	  REM provided that the client setup methods other than Windows NT Logon
	  REM have not been enabled at that site.
	
	2. Distribute the file created in Step 1 of this procedure to the 1.2 clients
	  that are likely to visit 2.0 sites.
	
	3. At each of these sites, go to the Winnt\System32\Repl\Import\Scripts
	  directory of the logon server and edit the Smsls.bat file so that it detects
	  the file you created and exits if that file is found. For example, you could
	  add a line like the following:
	
	     if exist c:\newfile.txt goto end
	
	4. If you expect the visiting computer to be running Windows NT, make sure the
	  Windows NT Remote Client Installation method is disabled.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms120 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
