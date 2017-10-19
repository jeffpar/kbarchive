---
layout: page
title: "Q167630: SMS: Office 97 Contains Incorrect PDF Format"
permalink: /kb/167/Q167630/
---

## Q167630: SMS: Office 97 Contains Incorrect PDF Format

	Article: Q167630
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
	
	The cyclic redundancy check (CRC) number listed in the Office 97 package
	definition file (PDF) for the Off97std.ini file is:
	
	     Off97std.ini      =  0 222 47535
	
	When you import the PDF to create a package, the CRC number listed in the package
	is different:
	
	     Off97std.ini      =  0 527152781 257776
	
	It is different because the PDF format is wrong. It needs commas, as in the
	following example:
	
	     Off97std.ini      =  0,222,47535
	
	
	MORE INFORMATION
	----------------
	
	Because of this problem with the PDF, software inventory will be unable to
	determine whether Office 97 is installed on your clients until you make the
	necessary changes to the CRC data in the PDF file itself.
	
	Additional query words: sms prodsms pdf
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbinfo
	
	=============================================================================
	
