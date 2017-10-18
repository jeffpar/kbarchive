---
layout: page
title: "Q160209: XCLN: Quiet Mode Setup (setup /q) Defaults to Pacific Time"
permalink: kb/160/Q160209/
---

## Q160209: XCLN: Quiet Mode Setup (setup /q) Defaults to Pacific Time

	Article: Q160209
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running quiet mode Setup (setup /q), with the Microsoft Exchange Windows
	3.x client (16-bit client), the Time Zone defaults to Pacific Time in Microsoft
	Exchange (and Schedule+). There is no stf entry to modify this behavior.
	
	CAUSE
	=====
	
	On a Win16 platform (Windows 3.1x and Windows for Workgroups 3.1x), Time Zone
	information is stored in the [MAPI 1.0 TimeZone] section of the Win.ini file. If
	this section is not present when quiet mode Setup is run, Pacific Time is
	selected during Setup.
	
	Note this is not a problem under Windows 95 or Windows NT.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Prior to running quiet mode Setup with the Microsoft Exchange Windows 3.x
	  client, add the appropriate entries to the [MAPI 1.0 TimeZone] section of the
	  Win.ini file. If these entries are present prior to running quiet mode Setup
	  (setup /q), they will be maintained.
	
	The following (including the header) are examples of entries that would need to
	be added to the Win.ini prior to running the Microsoft Exchange quiet mode
	Setup.
	
	  Win.ini
	  -------
	
	  [MAPI 1.0 Time Zone]
	  Bias=1a4
	  StandardName=Mountain Standard Time
	  StandardStart=00000A00000005000200000000000000
	  StandardBias=0
	  DaylightName=Mountain Standard Time
	  DaylightStart=00000400000001000200000000000000
	  DaylightBias=ffffffc4
	
	  [MAPI 1.0 Time Zone]
	  StandardName=Pacific Standard Time
	  DaylightName=Pacific Daylight Time
	  Bias=1e0
	  StandardBias=0
	  DaylightBias=ffffffc4
	  StandardStart=00000A00000005000200000000000000
	  DaylightStart=00000400000001000200000000000000
	  DaylightFlag=2
	  ActiveTimeBias=1a4
	
	  [MAPI 1.0 TimeZone]
	  Bias=1a4
	  StandardName=Central Standard Time
	  StandardStart=00000A00000005000200000000000000
	  StandardBias=0
	  DaylightName=Central Daylight Time
	  DaylightStart=00000400000001000200000000000000
	  DaylightBias=ffffffc4
	
	  [MAPI 1.0 Time Zone]
	  Bias=12c
	  StandardName=Eastern Standard Time
	  StandardStart=00000A00000005000200000000000000
	  StandardBias=0
	  DaylightName=Eastern Standard Time
	  DaylightStart=00000400000001000200000000000000
	  DaylightBias=ffffffc4
	
	Additional query words: Schedule plus + migrate
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
