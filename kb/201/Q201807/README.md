---
layout: page
title: "Q201807: SMS: How to Distribute Event to Trap Configuration Data"
permalink: /kb/201/Q201807/
---

## Q201807: SMS: How to Distribute Event to Trap Configuration Data

	Article: Q201807
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbClient kbConfig kbServer kbSNMP kbsms200 kbsms120 kbPackage kbsms
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server has a utility that allows you to send Event
	to Trap configuration data as a package to all of your Microsoft Windows NT
	clients within a site. The utility, EventCmi (or EventCma for Systems Management
	Server 1.2, or EventCmt for Systems Management Server 2.0) can save you time and
	effort when configuring clients and servers to report Event data as Traps.
	
	This utility can be found in the following locations, depending upon your
	platform:
	
	In the Systems Management Server 1.2 CD in the Smssetup\Common\Intl directory:
	
	- EventCma.exe (for Alpha platforms)
	
	- EventCmi.exe (for I386)
	
	In the Systems Management Server 2.0 CD in the
	Smssetup\Scripts\00000409\Eventcmt\<platform> directory:
	
	- EventCmt.exe
	
	To distribute Event to Trap configuration data, follow these steps:
	
	1. Within the Event to Trap Translator, select the configured Events.
	
	2. Click "Save as", to create an Event Configuration file.
	
	3. Create a package to distribute this data to your clients and servers. The
	  source of the package is the EventCmi executable file and the Event
	  Configuration file.
	
	4. Execute the following command line to run this package, where x refers to the
	  version of the utility you are using:
	
	  EventCmx Event.cfg
	
	  NOTE: x applies to the version of the utility you are using.
	
	MORE INFORMATION
	================
	
	You can verify that the data is written to the client by checking the
	configuration data in its registry location:
	
	HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/Snmp_Events/Eventlog/Sources
	
	Additional query words: prodsms smssnmp
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbClient kbConfig kbServer kbSNMP kbsms200 kbsms120 kbPackage kbsmsUtil kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
