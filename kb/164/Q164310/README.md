---
layout: page
title: "Q164310: XCLN: Exchange Server Available Application Program Interfaces"
permalink: kb/164/Q164310/
---

## Q164310: XCLN: Exchange Server Available Application Program Interfaces

	Article: Q164310
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a brief summary of the available Microsoft Exchange Server
	application program interfaces (API's) and what they are generally used for.
	
	MORE INFORMATION
	================
	
	Messaging Application Programming (MAPI) SDK.
	This is the messaging client and transport side API for Microsoft Exchange
	Server. The MAPI SDK includes Simple MAPI, CMC (Common Mail Calls) and Extended
	MAPI for C\C++ languages, as well as OLE Messaging 1.0 and Active Messaging 1.1
	for the Microsoft Visual Basic language. Both 16 and 32 bit platforms are
	supported.
	
	Availability:
	Available with the Microsoft Win32 SDK.
	
	More information on the MAPI SDK can be found at:
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/mapi/intro_69k7.htm
	
	Microsoft Exchange Installable Indexed Sequential Access Method (ISAM) driver:
	This is an ISAM driver for use with Microsoft Access 97. This driver works on top
	of MAPI using Data Access Objects (DAO) code and, is therefore, a messaging
	client\transport side driver (not a direct "hook" into the Microsoft Exchange
	database). However, it does offer the developer an alternative to writing
	messaging applications in C\C++ or Microsoft Visual Basic.
	
	Availability:
	Available as the Data Access Pak with the ValuPak for the Microsoft Office '97
	Professional Edition.
	
	Microsoft Exchange Development Kit (EDK):
	This is the server side API to Microsoft Exchange Server. The EDK is typically
	used to develop messaging gateways to Microsoft Exchange Server, mailbox agents
	(custom rule processing), and add-in applications (applications that do not use
	a mailbox for communication to the Microsoft Exchange Server).
	
	Availability:
	Available with the Microsoft BackOffice SDK or MSDN Platform SDK.
	
	More information on the Microsoft Exchange SDK can be found on:
	
	  http://www.microsoft.com/msdn/sdk/
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
