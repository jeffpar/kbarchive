---
layout: page
title: "Q185007: XADM: Event Scan Tool Only Reports Application Log Events"
permalink: /kb/185/Q185007/
---

## Q185007: XADM: Event Scan Tool Only Reports Application Log Events

	Article: Q185007
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Event Scan utility, included in the Microsoft BackOffice Resource Kit, can
	be used to monitor specific events and notify a user by e-mail or a network
	message window to specific computers. The Event Scan utility only monitors the
	Windows NT Event Viewer Application Log.
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If the configuration file contain Event IDs or Sources that are generated in the
	Security or System log, the event will not be logged and the specified action,
	alert, or mailing will not occur.
	
	Sample .cfg file with Event and Source in Security Log
	------------------------------------------------------
	
	     ;Format is EventID;Source;action;Alert list;mail list;comment string
	
	     531;Security;;johndoe;johndoe;Failed Login Attempt
	     528;Security;;johndoe;johndoe;Good Login
	     538;Security;;johndoe;johndoe;Good Login
	
	Sample Screen Output
	--------------------
	
	  Checking event log for server SERVER1 at: 9:01:35 AM
	  Reported 0 events for server SERVER1.
	  Sleeping for 300 seconds...
	  Checking event log for server SERVER1 at: 9:05:35 AM
	  Reported 0 events for server SERVER1.
	  Sleeping for 300 seconds...
	  Checking event log for server SERVER1 at: 9:10:35 AM
	  Reported 0 events for server SERVER1.
	  Sleeping for 300 seconds...
	  Checking event log for server SERVER1 at: 9:15:35 AM
	  Reported 0 events for server SERVER1.
	  Sleeping for 300 seconds...
	
	Sample .cfg file with Event and Source in Application Log
	---------------------------------------------------------
	
	     1016;MSExchangeIS Private;;;;user logged onto store
	
	Sample Screen Output
	--------------------
	
	  Checking event log for server SERVER1 at: 9:01:35 AM
	  Reported 0 events for server SERVER1.
	  Sleeping for 300 seconds...
	  Checking event log for server SERVER1 at: 9:06:35 AM
	
	     user logged onto store
	
	     user logged onto store
	
	Additional query words: evtscan evtscan.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
