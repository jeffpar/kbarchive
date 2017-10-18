---
layout: page
title: "Q154041: XCLN: Message Time is Off One Hour on Macintosh's"
permalink: kb/154/Q154041/
---

## Q154041: XCLN: Message Time is Off One Hour on Macintosh's

	Article: Q154041
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive a message in the Microsoft Exchange client for Macintosh and
	are running it on a pre-System 7.5 computer, the time will be off by one hour.
	
	MORE INFORMATION
	================
	
	This is caused by the system lacking a day-light savings option. If messages are
	displayed with the incorrect time in the viewer, we recommend that you upgrade
	your system to 7.5 or greater. These have support for time zones and daylight
	savings time. If you want to run pre-7.5 systems, you need to have the Map
	control panel set correctly for your time zone and daylight savings time.
	
	This behavior also occurs when Microsoft Exchange sends and receives mail from
	different Mail Systems. Any mail sent to or from a Microsoft Exchange Server
	that is set to "Automatically adjust for Daylight Saving Time" will have a 1
	hour difference. This occurs with DEC Allinone systems, Mail Works, and CC Mail.
	All of these communicate over a PMDF and turning off "Automatically adjust to
	Daylight Savings Time" will fix this issue.
	
	WORKAROUND
	==========
	
	Pre-7.5 systems:
	
	1. Open Control Panel:Map
	
	2. Set your location (Seattle).
	
	3. Make sure that the Time zone fields are set correctly for your time zone and
	  daylight savings time. In Seattle, they would be 8h for non-daylight savings
	  time (fall) and 7h for daylight savings time (spring).
	
	In general, controls reset the system time to be correct.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	
