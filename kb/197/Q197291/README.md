---
layout: page
title: "Q197291: XFOR: Dirsync Does Not Correctly Convert Date to UTC Format"
permalink: kb/197/Q197291/
---

## Q197291: XFOR: Dirsync Does Not Correctly Convert Date to UTC Format

	Article: Q197291
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The directory synchronization (dirsync) service may not convert dates to
	coordinated universal time (Universal Time Coordinate, or UTC) correctly. As a
	result, if the logging level for the dirsync service is set to Maximum, the date
	and time may be displayed incorrectly in one or more events that appear in the
	event log. When the date and time are displayed in UTC format in the event
	description, the year may be displayed as one digit instead of two.
	
	Note that this problem is not likely to occur before the year 2000. When the
	problem does occur, the dirsync service functions normally except for the
	symptoms described above. Therefore, you are still able to perform directory
	synchronization successfully.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Directory Synchronization (Dirsync)
	
	  File Name   Version
	  ----------------------
	  Dxa.exe     5.5.2404.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	The UTC format uses the following syntax:
	
	  YYMMDDhhmmssZ
	
	where:
	
	- YY = Year
	
	- MM = Month
	
	- DD = Day
	
	- hh = Hour
	
	- mm = Minutes
	
	- ss = Seconds
	
	- Z represents "Zulu" (same as Greenwich mean time)
	
	Each component of the date and time are normally displayed as two digits. For
	example, if an event is recorded in the event log at 3:11:46 A.M. on December
	31, 1999, the date and time are displayed in the following format in the event
	description:
	
	  991231031146Z
	
	However, if an event is recorded at 3:11:46 A.M. on December 31, 2000, the date
	and time may be displayed in the following format:
	
	  01231031146Z
	
	Note that the year is displayed as one digit instead of two.
	
	Additional query words: dxa
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
