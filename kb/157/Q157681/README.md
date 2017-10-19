---
layout: page
title: "Q157681: SMS: IP Address Missing from Client Inventory"
permalink: /kb/157/Q157681/
---

## Q157681: SMS: IP Address Missing from Client Inventory

	Article: Q157681
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:3.11; winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Systems Management Server Inventory Agent fails to report an IP address for
	Windows for Workgroups 3.11 client and the following error is logged in the
	Invdos.log file located on the client in the Ms\Sms\Logs directory:
	
	  Executing command: C:\MS\SMS\BIN\ipconfig.exe >
	  C:\MS\SMS\TEMP\ipconfig.sms IP address information not found in output file
	
	CAUSE
	=====
	
	Invdos.exe does not detect TCP/IP inventory while the SMS_P environment variable
	is present. SMS_P is a temporary variable set in Runsms.bat or Smsls.bat, and is
	used for storing path detail, during client setup. The variable is then reset
	during termination of the respective batch file.
	
	MORE INFORMATION
	================
	
	The absence of TCP/IP inventory causes Remote Control using IP sockets to fail.
	The following message appears during inventory (if it is run in verbose mode by
	setting SMSLS=1 prior to execution):
	
	  Looking for TCP/IP stack
	  Looking for Wolverine stack
	  Performing TCP/IP detection
	  <drive>:\MS\SMS\BIN\IPCONFIG.EXE >
	  <drive>:\MS\SMS\TEMP\IPCONFIG.SMS "IP address information not found in
	  output file"
	
	WORKAROUND
	==========
	
	To work around this problem, do the following to Runsms.bat (which resides at
	\SMS\SITE.SRV\MAINCFG.BOX\CLIENT.SRC) or Smsls.bat (which resides at
	\SMS\SITE.SRV\MAINCFG.BOX):
	
	1. Add an additional variable (for example: SMS_P2) to the :START section. For
	  example:
	
	        :START
	
	        REM Check to see if we can save path and reserve the necessary
	        environment
	        REM space before continuing.
	        set SMS_P=%PATH%
	        set SMS_P2=%PATH%
	        set SMS_TEMP=123456789012345678901234567890123456789012345
	        if "%SMS_TEMP%"=="123456789012345678901234567890123456789012345" goto
	        FIND_OS
	        goto LOW_ENV
	
	2. Reset the SMS_P variable prior to execution of Invdos.exe in the :RUN_DOS
	  section. For example:
	
	        :RUN_DOS
	        if not exist %0\..\%SMS_BIN%\setls%SMS_OS%.exe goto NOPATHARG0
	
	        setls%SMS_OS% -m:E -i -p:%SMS_BIN%\CLI_DOS.EXE -pa:/p:%%SMS_UNC%%\ -
	           pa:%SMS_VERBOSE% %SMS_VERBOSE%
	        set SMS_P=
	        setls%SMS_OS% -m:E -i -p:%SMS_BIN%\INVDOS.EXE  -pa:/l:%%SMS_UNC%%\ -
	           pa:/i -pa:%SMS_VERBOSE% %SMS_VERBOSE%
	        goto RESTORE
	
	3. Restore the path from the new variable (SMS_P2) by changing the path line in
	  the :RESTORE section. For example:
	
	        :RESTORE
	        REM Restore the previous path setting.
	        PATH=%SMS_P2%
	        goto END
	
	4. Reset the new variable, instead of SMS_P in the :END section. For example:
	
	        :END
	        set SMS_P2=
	        set SMS_OS=
	
	        set SMS_BIN=
	        set SMS_VERBOSE=
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. This problem has been corrected in the latest U.S. Service
	Pack for Systems Management Server version 1.2. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms sms inventory automatic ip tcp/ip tcpip configuration enabled
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : WINDOWS:3.11; winnt:1.2
	
	=============================================================================
	
