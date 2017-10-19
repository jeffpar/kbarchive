---
layout: page
title: "Q148647: Adding Unlisted Network Card Vendor ID to Network Monitor"
permalink: /kb/148/Q148647/
---

## Q148647: Adding Unlisted Network Card Vendor ID to Network Monitor

	Article: Q148647
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbtool smsnetmon smshowto
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	Network card vendors have 6-digit prefixes pre-pended to the network card
	MAC address. Do one of the following to obtain the MAC address for your
	network card:
	
	- From a Windows NT Command Prompt, type the following:
	
	  ipconfig /all
	
	  -or-
	
	- On a NetWare server, type the following:
	
	  config
	
	  -or-
	
	- Look at the documentation that is included with the network card.
	
	Approximately 650 vendor ID numbers are stored internally in Network
	Monitor. To add a new or unlisted vendor, you must modify the NETMON.INI
	file in the <SMS Root>\Netmon\<platform> directory. The following is a
	sample [Vendor_IDS] section in NETMON.INI:
	
	     [Vendor_IDS]
	
	     VID0= 002211, <New card 1>
	     VID1= 002222, <New card 2>
	     NumberIDs = 2
	
	NOTE: The length of <New card 1> and <New card 2> must be no greater than 6
	characters.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool smsnetmon smshowto 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
