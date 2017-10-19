---
layout: page
title: "Q226360: Incorrect Time Format When Using HTMLA Web Administration Forms"
permalink: /kb/226/Q226360/
---

## Q226360: Incorrect Time Format When Using HTMLA Web Administration Forms

	Article: Q226360
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the HTMLA Web Administration Forms included with Internet
	Information Services 5.0, you may notice issues with the time format used in
	many places (for instance, content expiration). This will mainly be a problem
	for the following languages:
	
	  German
	  Japanese
	  Arabic
	  Russian
	  Hindi
	
	The time is displayed in HH:mm format. The following languages would normally be
	formatted as follows:
	
	  German: HH:mm:ss (leading zero, 24 hour clock, no am/pm, separator, seconds)
	
	  Japanese: H:mm:ss (no leading zero, 24 hour clock, am/pm DB characters,
	  separator, seconds)
	
	  Arabic: hh:mm:ss tt (leading zero, seconds, am/pm used, 12 hour clock,
	  separator)
	
	  Russian: H:mm:ss (no leading zero, seconds, no am/pm, 24 hour clock,
	  separator)
	
	  Hindi: HH.mm.ss (leading zero, seconds, am/pm Hindi characters, 24 hour clock,
	  period as separator)
	
	STATUS
	======
	
	This is a known issue with the HTMLA Web Administration Forms that come with
	Internet Information Services 5.0.
	
	Additional query words: HTMLA Globalization iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
