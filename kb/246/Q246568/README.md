---
layout: page
title: "Q246568: Changing System Dates In Production Environments"
permalink: /kb/246/Q246568/
---

## Q246568: Changing System Dates In Production Environments

	Article: Q246568
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbYear2000 win95 win98 win98se
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft does not recommend or support the changing of system dates for test
	purposes (such as year 2000 testing) in a production environment.
	
	Potential data integrity problems can result from performing this action.
	
	MORE INFORMATION
	================
	
	Changing the system date to a date other than the current date in a production
	environment, followed by rolling back to the correct date, can have a serious
	impact on the integrity of program data as well as operating system functions.
	
	This action can affect service functions that are date sensitive, such as DHCP
	leases and WINS registrations, and can also invalidate program data that is
	processed during the period that the date is incorrect.
	
	Some of the known issues related to changing the system date are discussed in the
	following Microsoft Knowledge Base articles. Potential problems may not be
	limited to those problems discussed in the following articles. The effects of
	setting the system date to an invalid date are not entirely predictable.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q244703 XGEN: Advancing and Rolling Back System Time Clock for Y2K Test
	
	  Q242502 Domain Logon List Is Not Updated
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbYear2000 win95 win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
