---
layout: page
title: "Q132547: PC NTMMTA: Using DrivesWAN When Running as a Service"
permalink: kb/132/Q132547/
---

## Q132547: PC NTMMTA: Using DrivesWAN When Running as a Service

	Article: Q132547
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create send-only postoffices with the Microsoft Mail Multitasking MTA for
	Windows NT (NT MMTA) when you run the External Mail program as a service, use
	the Use WAN Drives check box in the Edit Service dialog box.
	
	MORE INFORMATION
	================
	
	When the External Mail program is run as a service, it dynamically allocates
	three drive letters starting at the first available drive. Because these drives
	are not known at the time the External Mail program is run, the DrivesWAN option
	cannot be used.
	
	To create send-only postoffices, check the Use WAN Drives check box. This option
	causes all postoffices in that instance to be send-only. For example, if this
	option is used with the below instance, the External Mail program will send mail
	to PO1-PO4, and it will not distribute the mail to the users on the destination
	postoffice, nor does it check the destination postoffice for outgoing mail.
	Another External Mail program must be running at the destination postoffice to
	assume these responsibilities.
	
	  [External-DrivesWAN]
	  DrivesUNC=\\server\po1
	  DrivesUNC=\\server\po2
	  DrivesUNC=\\server\po3
	  DrivesUNC=\\server\po4
	
	When this instance is started, External will map drives E, F, and G (if this is
	the first instance, and E is the first available drive), where E is the home
	postoffice; F is used for sending, and G is for receiving mail. The External
	Service will apply DrivesWAN to the sending F drive.
	
	Because all DrivesUNCs in a particular instance will have the DrivesWAN option
	applied, it will be necessary to create another instance for postoffices that
	are not send-only.
	
	Additional query words: 3.20 3.50 drivewan driveunc
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
