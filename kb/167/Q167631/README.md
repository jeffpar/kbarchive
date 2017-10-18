---
layout: page
title: "Q167631: SMS: Windows 95 Service Pack 1 Contains Incorrect PDF Format"
permalink: kb/167/Q167631/
---

## Q167631: SMS: Windows 95 Service Pack 1 Contains Incorrect PDF Format

	Article: Q167631
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbnetwork kbInventory smsinv
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The cyclic redundancy check (CRC) numbers listed in the Windows 95 Service Pack
	1 package definition file (PDF) for the Ole32.dll and Shell32.dll files are:
	
	  Ole32.dll      =  512 2048 23537
	  Shell32.dll    =  256 1024 53870
	
	When you import the PDF to create a package, the CRC numbers listed in the
	package are different:
	
	  Ole32.dll      =  512 527152781 257776
	  Shell32.dll    =  256 527152781 257776
	
	They are different because the PDF format is wrong. It needs commas, as in the
	following example:
	
	  Ole32.dll      =  512,2048,23537
	  Shell32.dll    =  256,1024,53870
	
	
	MORE INFORMATION
	----------------
	
	Because of this problem with the PDF, software inventory will be unable to
	determine whether Windows 95 is installed on your clients until you make the
	necessary changes to the CRC data in the PDF file itself.
	
	Additional query words: sms prodsms pdf win95
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbinfo
	
	=============================================================================
	
