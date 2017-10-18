---
layout: page
title: "Q138829: SMS Incorrectly Identifies Windows Clients as MS-DOS Clients"
permalink: kb/138/Q138829/
---

## Q138829: SMS Incorrectly Identifies Windows Clients as MS-DOS Clients

	Article: Q138829
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbsetup smssetup
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Systems Management Server client Setup incorrectly identifies a Windows
	Workstation as an MS-DOS client. (The [SMS] section in the SMS.INI file
	indicates "OS=1" for an MS-DOS client instead of "OS=2" for the Windows client.)
	
	CAUSE
	=====
	
	There are two possible causes:
	
	- Systems Management Server Setup cannot find the WIN.COM file in the path.
	
	  Setup cannot find WIN.COM in the PATH if the subdirectory for Windows is
	  located to far down the path. For example, a system with the following path
	  is detected as an MS-DOS client:
	
	  PATH C:\;C:\DOS;C:\UTIL\PATH;C:\APPS\ORACLE;C:\APPS\PCTOOLS;C:\WFW311
	
	  -or-
	
	- The Systems Management Server batch process runs out of environment space.
	
	
	WORKAROUND
	==========
	
	To work around this problem (Do not change the SMS.INI file manually):
	
	- If your Windows directory is listed far down your path statement, move the
	  Windows subdirectory closer to the beginning of the path statement. For
	  example:
	
	  PATH C:\;C:\DOS;C:\WFW311;C:\UTIL\PATH;C:\APPS\ORACLE;C:\APPS\PCTOOLS
	
	  -or-
	
	- If the batch process is running out of environment space, place the following
	  setting in the SYSTEM.INI of the Windows client:
	
	        [NonWindowsApp]
	        CommandEnvSize=1024
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q105668 Windows Err Msg: Not Enough Environment Space
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
