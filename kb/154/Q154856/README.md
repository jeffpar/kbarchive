---
layout: page
title: "Q154856: SMS: Software Audit Fails to Find Package"
permalink: kb/154/Q154856/
---

## Q154856: SMS: Software Audit Fails to Find Package

	Article: Q154856
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create an Audit rule file for a package that scans for multiple files,
	the Audit will fail to report the package if the files you specified are found
	in different subdirectories.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create an Audit rule file similar to the following:
	
	        package 0 "MY Application"
	           file "Myapp.exe"
	           file "Mydll.dll"
	
	2. Follow the proper steps for creating and distributing an Audit package.
	
	If Myapp.exe is found in a different directory than Mydll.dll, both Audit16.exe
	and Audit32.exe fail to report the package. Audit16.exe creates a .nhm file that
	does not contain a group for Audited Software. Audit32.exe does not create a
	.nhm file.
	
	STATUS
	======
	
	This is by product design.
	
	Additional query words: prodsms audit
	
	======================================================================
	Keywords          : kbnetwork kbusage kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
