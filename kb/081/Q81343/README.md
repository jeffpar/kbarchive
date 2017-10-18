---
layout: page
title: "Q81343: Mac Fax: Err Msg: Unable to Connect to Modem"
permalink: kb/081/Q81343/
---

## Q81343: Mac Fax: Err Msg: Unable to Connect to Modem

	Article: Q81343
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.0a,3.0b,3.1,3.1a,3.1c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.0a, 3.0b, 3.1, 3.1a, 3.1c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Mail for AppleTalk Networks and the Microsoft Mail
	Gateway to Fax, the following error message may be displayed:
	
	  Unable to connect to modem. Sending and Receiving turned off. Error -2005.
	
	CAUSE
	=====
	
	This is a standard time-out error that is returned when the fax/modem does not
	respond to commands from the FaxINIT. This message can be caused by one of the
	following problems:
	
	- The fax modem is not turned on or is not connected correctly.
	
	- An incorrect FaxINIT is being used for the fax/modem.
	
	- There is a serial port contention. Some other software is attempting to use
	  the same serial port as the fax gateway. The fax gateway is configured to
	  only use the modem port.
	
	- Running on an AppleShare file server sometimes causes this problem if there
	  is heavy server activity. Intense network activity can cause enough of a
	  delay in the FaxINIT-fax/modem communications to cause an error.
	
	- There may be various INIT conflicts. Try changing the load order of the INITs
	  or removing unnecessary INITs.
	
	- Running fax gateway on a Mac IIfx without the IIfx Serial Switch. This is a
	  Control Panel device from Apple, which must be set to Compatible.
	
	Additional query words: 3.00 3.00a 3.00b 3.10 3.10a 3.10c faxgate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN300a kbMailATN300b kbMailATN310 kbMailATN310a kbMailATN310c
	Version           : WINDOWS:3.0,3.0a,3.0b,3.1,3.1a,3.1c
	
	=============================================================================
	
