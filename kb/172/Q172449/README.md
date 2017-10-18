---
layout: page
title: "Q172449: SMS: Unable to Find Logon Server and No Default Server"
permalink: kb/172/Q172449/
---

## Q172449: SMS: Unable to Find Logon Server and No Default Server

	Article: Q172449
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Smsls.bat file is designed for use with the Automatically Detect All Logon
	Servers option, and makes the assumption that the validating domain controller
	is also a Systems Management Server logon server.
	
	If logon servers have been manually configured, and a domain controller that is
	not also a logon server validates the logon attempt, the client may receive the
	following error when running the Smsls.bat file:
	
	  ENU - Error: unable to find logon server and no default server; error 0.
	
	
	The client will not be inventoried or upgraded, and therefore will not be updated
	in the database.
	
	
	MORE INFORMATION
	================
	
	If it is necessary in your environment not to use all domain controllers as
	logon servers, then you should use Runsms.bat for your logon script.
	
	Refer to Appendix D "Automatically Adding Clients" of the Systems Management
	Server 1.2 "Getting Started Guide," and Chapter 3 of the "Installation and
	Configuration" manual, which are available in the online Help.
	
	You can map clients to specific servers by using the Smsls.ini file. For
	information on the Smsls.ini file, see the following article in the Microsoft
	Knowledge Base:
	
	  Q156540 SMS: How Systems Management Server Uses the SMSLS.INI File
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbinfo
	
	=============================================================================
	
