---
layout: page
title: "Q216881: Line Added to Autoexec.bat on Client Cannot Be Truncated"
permalink: kb/216/Q216881/
---

## Q216881: Line Added to Autoexec.bat on Client Cannot Be Truncated

	Article: Q216881
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbsms200
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Windows 95-based or Microsoft Windows 98-based Systems Management
	Server (SMS) 2.0 client may receive an "Out of environment space" error message
	and the client software may not be correctly installed if the line that is added
	to the client's Autoexec.bat file is manipulated every time the system is
	rebooted.
	
	For example, this behavior can be caused by a program file in the Autoexec.bat
	file that truncates all lines to 80 characters. Because the line that is added
	by SMS contains over 80 characters, the line is truncated. The SMS Client
	service detects that the line is not correct and adds it again to the first
	line. This process continues until eventually there are many truncated lines and
	the client receives an "Out of environment space" error message at startup.
	
	CAUSE
	=====
	
	When an SMS 2.0 client is installed, the following line is added to the
	Autoexec.bat file:
	
	  if not "%OS%"=="Windows_NT" if "%COMSPEC%"=="C:\WINDOWS\COMMAND.COM" set
	  SMS_LOCAL_DIR=C:\WINDOWS
	
	Each time the SMS Client service is started, it checks to make sure that the line
	in the Autoexec.bat file is present and complete. If not, it adds the line to
	the top of the Autoexec.bat file.
	
	A known cause of this behavior is an Aztech audio driver that is placed in the
	Autoexec.bat file. During startup, it truncates all lines in the Autoexec.bat
	file to 80 characters if the /A:ON switch is present. For example:
	
	  AZTPNP.EXE /A:ON
	
	RESOLUTION
	==========
	
	To work around this behavior, remove this switch or the driver itself.
	
	
	Additional query words: prodsms cli32
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
