---
layout: page
title: "Q166421: FPNW Returns Time Stamp with 60 Seconds to Clients"
permalink: /kb/166/Q166421/
---

## Q166421: FPNW Returns Time Stamp with 60 Seconds to Clients

	Article: Q166421
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you save a file where the seconds portion of the time stamp is 59 to a
	folder on a Windows NT server, File and Print Services for NetWare (FPNW)
	clients see the seconds portion as 60 instead.
	
	Some applications may return error messages stating that the file is invalid or
	corrupt. This problem has occurred with Microsoft Project 4.0.
	
	CAUSE
	=====
	
	When calculating the time stamp, FPNW server rounds up odd second time stamps
	but does not propagate the carry. For example, 16 minutes and 59 seconds should
	be rounded up to 17 minutes and 0 seconds (and not 16 minutes and 60 seconds).
	
	MORE INFORMATION
	================
	
	The MS-DOS FAT file system and the NCP protocol are using two bytes to represent
	both a date and time stamp. Of the 16 bits of the time stamp, 5 bits are
	reserved for the hour (0-23,) 6 for the minute (0-59,) and 5 for the second
	(0-29) part of the time stamp.
	
	There can only be time stamps in two seconds granularity. This is the reason why
	FPNW has to do this calculation. The fix now calculates the same way as the
	Server Message Block (SMB) server does.
	
	RESOLUTION
	==========
	
	Obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbServicesNetwareSearch kbFPNW400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
