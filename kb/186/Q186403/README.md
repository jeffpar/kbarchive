---
layout: page
title: "Q186403: SMS: How to Generate a PDF from an Existing SMS Package"
permalink: /kb/186/Q186403/
---

## Q186403: SMS: How to Generate a PDF from an Existing SMS Package

	Article: Q186403
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article summarizes the process that you can use to generate a Package
	Definition File (PDF) from a package that was created manually in Systems
	Management Server Administrator.
	
	This is useful if you need to add the following line
	
	     SynchronousSystemExitRequired = TRUE
	
	to an existing package or if you would like to easily regenerate the package at a
	later time.
	
	MORE INFORMATION
	================
	
	Obtain the Writepdf.exe file. This file is included in the Systems Management
	Server Resource Kit, which is available for download from the Microsoft Web site
	at
	
	  http://www.microsoft.com/smsmgmt/.
	
	This utility will create a generic PDF from the information entered in the
	package setup.
	
	Usage
	-----
	
	  writepdf.exe <sqlserver> <sqlaccount> <password>
	  <database> <package_id>
	
	Examples
	--------
	
	  writepdf.exe sqlsvr2 sa secret sms sms12345
	
	  or
	
	  writepdf.exe sqlsvr2 sa "" sms sms12345
	
	NOTE: If the SQL account password is blank or contains one or more spaces, place
	it within quotation marks.
	
	This will generate a PDF file with the package_id as the name in the current
	directory.
	
	REFERENCES
	==========
	
	Systems Management Server Resource Guide Supplement (BackOffice Resource Kit
	Part 2)
	
	Additional query words: prodsms create SynchronousSystemExitRequired
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
