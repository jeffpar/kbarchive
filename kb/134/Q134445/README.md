---
layout: page
title: "Q134445: Flight Simulator 5.1: Panasonic KXL-D720 Does Not Read Disc"
permalink: kb/134/Q134445/
---

## Q134445: Flight Simulator 5.1: Panasonic KXL-D720 Does Not Read Disc

	Article: Q134445
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	5.10
	MS-DOS
	kb3rdparty kbsetup kbhw kberrmsg kbref
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use Microsoft Flight Simulator with the Panasonic KXL-D720
	CD-ROM drive, you receive the following error message when you attempt to read
	or access the compact disc:
	
	  Not Ready Error Reading Drive
	
	CAUSE
	=====
	
	This error message occurs because the Panasonic drive does not recognize the
	Flight Simulator disc as a valid compact disc.
	
	RESOLUTION
	==========
	
	To correct this problem, contact Panasonic Technical Support for information on
	obtaining a firmware upgrade.
	
	
	MORE INFORMATION
	================
	
	Like most CD-ROM drives, the Panasonic KXL-D720 is calibrated to the installed
	compact disc. The KXL-D720 does this by moving the read head 3.5 millimeters
	from the center and reading the address mark on the disc.
	
	The Panasonic KXL-D720 fine tunes the position of the head until the correct
	address mark is read. No data exists on the Microsoft Flight Simulator compact
	disc at the 3.5-millimeter mark (location) and, therefore, no address mark
	exists. The error occurs because the CD-ROM drive cannot be calibrated to that
	location.
	
	REFERENCES
	==========
	
	Panasonic Technical Support: (800) 222-0584
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 5.10 flightsim fltsim error errors errmsg dos Dir readme read-me cdr101 nec
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.1
	Issue type        : kbprb
	
	=============================================================================
	
