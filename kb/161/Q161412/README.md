---
layout: page
title: "Q161412: SMS: 'Too Many Parameters' Error When Running Smsls.bat"
permalink: kb/161/Q161412/
---

## Q161412: SMS: 'Too Many Parameters' Error When Running Smsls.bat

	Article: Q161412
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbConfig smssetup smsconfigkbfixlist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Smsls.bat file on a client computer running Windows 95, you may
	receive errors, and the command prompt window may display the following
	message:
	
	  Too Many Parameters
	  Bad Command or Filename
	  Bad Command or Filename
	  Too Many Parameters
	
	CAUSE
	=====
	
	If there is a space in the directory name for the "path" environment variable
	(such as "C:\Program Files"), and you run the Smsls.bat file on a client
	computer running Windows 95, Systems Management Server does not parse the path
	correctly.
	
	This problem occurs when Smsls.bat sets the SMS_P=%PATH% environment variable.
	SMS_P is then used in various places in the logon script that contains the
	space, and causes that command-line to clock.
	
	WORKAROUND
	==========
	
	To work around this problem, add quotation marks around the path variable in two
	(and only two) places in the Smsls.bat file.
	
	1. Place quotation marks around the %PATH% variable under :RUN_FROM.
	  For example, change
	
	        if not "%OS%" == "Windows_NT" set PATH=%0\..;%0\..\%SMS_BIN%;%PATH%
	
	to:
	
	        if not "%OS%" == "Windows_NT" set PATH=%0\..;%0\..\%SMS_BIN%;"%PATH%"
	
	2. Place quotation marks around SMS_P when it is reassigned to the path at the
	  end of the script under :RESTORE.
	
	  For example, change
	
	        PATH=%SMS_P%
	
	  to:
	
	        PATH="%SMS_P%"
	
	It is also important to note that completing this workaround causes an error to
	be displayed on Windows NT clients while running Smsls.bat. The following
	message is displayed:
	
	  The name specified is not recognized as an internal or external command,
	  operable program or batch file.
	
	Network traces reveal adding the quotes to :RESTORE section causes Smsls.bat to
	incorrectly determine the location from which to run Clrlevel.com. To complete
	this workaround for both Windows 95 and Windows NT clients, it will be necessary
	to make additional changes to the Smsls.bat file. At the end of the script,
	change the last two lines from
	
	     if errorlevel 1 if  "%OS%"=="Windows_NT" clrlevel
	     if errorlevel 1 if not "%OS%"=="Windows_NT" %0\..\clrlevel
	
	to:
	
	     if errorlevel 1 if  "%OS%"=="Windows_NT" %0\..\clrlevel
	     if errorlevel 1 if not "%OS%"==Windows_NT" %0\..\clrlevel
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsetup kbConfig smssetup smsconfig kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
