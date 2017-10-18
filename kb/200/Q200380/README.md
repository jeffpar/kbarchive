---
layout: page
title: "Q200380: SMS: Y2K Testing on SMS Site Server Causes Problems"
permalink: kb/200/Q200380/
---

## Q200380: SMS: Y2K Testing on SMS Site Server Causes Problems

	Article: Q200380
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not advised to perform Year 2000 (Y2K) testing on a live Systems
	Management Server (SMS) site server, or the SMS's SQL server machine(s), because
	this will break the SMS funtionality.
	
	MORE INFORMATION
	================
	
	Changing the time/date on an SMS site server will be reflected in the site
	control file that is sent to the SQL database. Once this file is written into
	the database, SMS will be unable to process the next site control file.
	
	When the date is changed back to "current" date/time and the site server writes
	that to the database, SQL will not process this site file because the one with
	the Y2K date is "newer." Thus, no information will go current for the site in
	the database.
	
	See Q154577 "Site Properties Cannot Be Changed," for more information.
	
	Additional query words: prodsms smsy2k
	
	======================================================================
	Keywords          : kbsms120 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
