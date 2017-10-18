---
layout: page
title: "Q163906: XADM: Year 2000 Support for DateTime Properties"
permalink: kb/163/Q163906/
---

## Q163906: XADM: Year 2000 Support for DateTime Properties

	Article: Q163906
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RAW display of the last updated field in the properties of a mailbox is
	displayed in the format YYMMDD. Although there are only 2 digits for the year,
	the actual data is valid up to the year 2079. The date and time of this field is
	year 2000 friendly and satisfies the X500 ITU standards. The X.500 ITU standards
	recommend that vendors use this format until the year 2010, and then begin
	transitioning to a longer date format. The transition should be completed no
	later than the year 2025, a 15-year grace period.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Directory stores datetime Raw properties, such as
	When-Changed and When-Created, in Universal Coordinated Time (UTC) string
	format, as specified by the X.500 standards. UTC is the same as Greenwich Mean
	Time (GMT).
	
	The UTC format has only two digits representing the year but they are valid for
	the years 1980 to 2079. Therefore, this will not be a problem for dates that
	rollover to the year 2000 or beyond.
	
	The UTC String format uses the following syntax:
	
	  YYMMDDhhmmssZ
	
	where
	
	  YY = Year
	  MM = Month
	  DD = Day
	  hh = Hour
	  mm = Minutes
	  ss = Seconds
	  Z = Zulu (same as GMT)
	
	For example, a datetime value of 06/03/2000 10:58.20 PM would be represented as
	follows:
	
	  000603225820Z
	
	Please note that this value is base on GMT and the hour (hh) may vary according
	to location and other factors.
	
	Additional query words: year 2000
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbinfo
	
	=============================================================================
	
