---
layout: page
title: "Q180010: XADM: An Unexpected Error Has Occurred ID no: c106fbf8"
permalink: /kb/180/Q180010/
---

## Q180010: XADM: An Unexpected Error Has Occurred ID no: c106fbf8

	Article: Q180010
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to upgrade a computer running Exchange Server version 5.5, the
	following error message may appear:
	
	  An unexpected error has occurred. ID no: c106fbf8
	
	The Event viewer shows the following information:
	
	  Event ID 50:
	  MSExchangeIS [(147)] The database engine could not access the file
	  called c:\exchsrvr\mdbdata\priv.edb
	
	  Event ID 50:
	  MSExchangeIS [(147)] The database engine could not access the file
	  called c:\exchsrvr\mdbdata\pub.edb
	
	  Event ID 11:
	  MSExchangeIS [(147)] The database engine stopped.
	
	  Event ID 10:
	  MSExchangeIS [(147)] The database engine started.
	
	  Event ID 2000:
	  Verify that the Microsoft Exchange MTA has started.  Consecutive ma-open
	  calls are failing with error 3051.
	
	The above events may be repeated several times as the database attempts to stop
	and restart. After you click OK to continue, the following error message
	appears:
	
	  Error: Your upgrade did not complete successfully. Please restart your
	  Microsoft Exchange Services and your system will behave as it did before the
	  upgrade was attempted.
	  Please contact Microsoft Product Support Services for more information.
	  Microsoft Exchange Server Setup
	  ID no: c1032c08
	
	  Microsoft Exchange Server Setup was interrupted before your new software was
	  fully installed. You can run Microsoft Exchange Server Setup in its entirety
	  at a later time to complete the installation.
	
	Click OK to quit Setup. If you attempt to restart Setup again, the following
	error messages will appear:
	
	  Microsoft Exchange Server Setup
	  While attempting to stop the Microsoft Exchange System Attendant service, the
	  following error was encountered:
	
	  The service cannot accept control messages at this time.
	
	  Microsoft Windows NT
	  ID no 0xc0020425
	
	Checking the Event viewer shows:
	
	  Event ID 2000:
	  Verify that the Microsoft Exchange MTA has started. Consecutive ma-open
	  calls are failing with error 3051.
	
	This event 2000 may be repeated several times in the event log. At this point,
	the only choice is to click OK to quit Setup again.
	
	CAUSE
	=====
	
	During the initial process when Setup is making sure the system is ready for
	installation, Setup is trying to shut down the following services:
	
	- Message Transfer Agent (MTA)
	
	- Internet Mail Service
	
	- Event service
	
	- MDB
	
	- Directory service
	
	- System Attendant
	
	Setup successfully shuts down the MTA and Internet Mail Service but fails to shut
	down the Event service.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Restart the server to stabilize the Exchange Server services.
	
	2. Manually stop the event server service.
	
	3. Restart Exchange Server 5.5 Setup.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
