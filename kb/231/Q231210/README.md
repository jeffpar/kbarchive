---
layout: page
title: "Q231210: SMS: Smsman.exe Is Unable to Start the Removal Process"
permalink: kb/231/Q231210/
---

## Q231210: SMS: Smsman.exe Is Unable to Start the Removal Process

	Article: Q231210
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbServer kbsms200 kbsms200bug kbsmsUtil
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Systems Management Server (SMS) 2.0 Installation
	Wizard (Smsman.exe) to remove SMS components from a Microsoft Windows NT or
	Windows 2000 client, you receive the following error message:
	
	  Systems Management was unable to start the removal process.
	
	After you click OK to close the error message, you receive the following
	message:
	
	  No changes have been made to your system. If you need assistance, contact
	  your SMS administrator.
	
	CAUSE
	=====
	
	This behavior can occur if the original SMS client component installation was
	not successfully completed. The removal process requires one of the components
	(Clicore.exe) to be successfully installed.
	
	WORKAROUND
	==========
	
	The SMS client components can be forcibly removed by using the 20CliCln.bat
	utility that is included with the SMS 2.0 Service Pack 2 Support Tools package.
	Updated support tools are available from the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt
	
	To install SMS 2.0 supportability files and run the Client Cleaner utility,
	follow these steps:
	
	1. Run Support\Support.exe from the SMS 2.0 installation compact disc or Web
	  site download on the site server or a network server.
	
	2. Share the SMS 2.0 Supportability Files folder for read-only access.
	
	3. Connect to the SMS 2.0 Supportability Files share from the Windows NT or
	  Windows 2000 client.
	
	4. Start Reskit\Bin\I386\Cleancli\20clicln.bat.
	
	NOTE: You must have Administrator rights on the client computer when using this
	tool. Otherwise, some SMS 2.0 files and registry settings will not be removed.
	
	The Client Cleaner utility can also be copied to run locally on the client
	computer. The following files must be copied to the new location for the utility
	to operate successfully:
	
	- 20CliCln.bat
	
	- Hammer.exe
	
	- Kill.exe
	
	- SetEvnt.exe
	
	Client Cleaner Syntax:
	
	  20clicln.bat [/SCRUB]
	
	  /SCRUB
	
	This causes the Smscfg.ini file to be deleted from the directory indicated by
	%SMS_LOCAL_DIR%; it represents a more thorough cleanup because the Smscfg.ini
	file may contain the previous SMS identifier used by the client.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbServer kbsms200 kbsms200bug kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
