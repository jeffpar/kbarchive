---
layout: page
title: "Q163970: DNS Sample File Place.dns Contains an Error"
permalink: kb/163/Q163970/
---

## Q163970: DNS Sample File Place.dns Contains an Error

	Article: Q163970
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install DNS, a SAMPLES subdirectory is created under the
	\%systemroot%\system32\DNS directory.
	
	This subdirectory contains a sample Zone file called Place.dns. This file has an
	error in one of the values included in the example Start Of Authority (SOA)
	resource record.
	
	MORE INFORMATION
	================
	
	The Place.dns file contains the following SOA example:
	
	@   IN  SOA     nameserver.place.dom.  postmaster.nameserver.place.dom. (
	                              1            ; serial number
	                              36000        ; refresh   [1h]
	                              600          ; retry     [10m]
	                              86400        ; expire    [1d]
	                              3600 )       ; min TTL   [1h]
	
	The value shown for Refresh is 36000. The comment shows this as [1h], or one
	hour. However, the value should actually read 3600, which is the correct amount
	of seconds in one hour (this is also the default setting for this value).
	
	Additional query words: prodnt wisconsin docerr domain name system
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	
	=============================================================================
	
