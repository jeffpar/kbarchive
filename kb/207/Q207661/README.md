---
layout: page
title: "Q207661: SMS Installer Watch Doesn't Support Command Line Arguments"
permalink: kb/207/Q207661/
---

## Q207661: SMS Installer Watch Doesn't Support Command Line Arguments

	Article: Q207661
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When passing an argument to the Watch feature of the Systems Management Server
	Installer, the following error might appear:
	
	  The file C:\winnt\program.exe argument is not a valid Win32 application. You
	  must use the 32-bit edition of the Microsoft SMS Installer to run Win32
	  applications and the 16-bit edition to run Win16 applications.
	
	CAUSE
	=====
	
	The Systems Management Server Installer Watch function executes the entire
	string passed to it from the Watch "Application Path" line.
	
	WORKAROUND
	==========
	
	To work around this problem, put the command line with the arguments in a batch
	file and call the batch file from the Systems Management Server Installer Watch
	"Application Path."
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200 kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0; winnt:2.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
