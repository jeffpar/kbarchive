---
layout: page
title: "Q168906: XCON: Setting up Advanced Logging on Exchange 5.0 and 5.5 MTAs"
permalink: kb/168/Q168906/
---

## Q168906: XCON: Setting up Advanced Logging on Exchange 5.0 and 5.5 MTAs

	Article: Q168906
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are times when it may become necessary to enable advanced logging on the
	Microsoft Exchange Message Transfer Agent (MTA) in order to diagnose a problem.
	This is in addition to the logging provided in the Windows NT application log.
	
	The logs must be removed from the MTADATA directory prior to restarting the MTA
	or they will be reset to zero and no information will be saved.
	
	To enable the advanced logging, start the Windows NT Registry Editor and go to
	the following key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA
	                    \Parameters
	
	Find Text Event Log and set it to 1 (the default is 0).
	
	Add the following DWORD values, entering the names EXACTLY as shown:
	
	  Unbounded Event Log
	  Unbounded APDU Log
	  Unbounded Interop Log
	
	These write to the Ev0.log, Bf0.log, and Ap0.log files, respectively.
	
	To enable the logging operation, start the Microsoft Exchange Administrator
	program, open the MTA Properties page, click the Diagnostics Logging tab, and
	set the desired logging level on the categories in question.
	
	During normal operation, the value for the above 3 entries should be 0. However,
	when a problem arises, setting any one or all of these to 1, along with setting
	the Text Event Log to 1, will start writing the logs to the Exchsrvr\mtadata
	directory.
	
	MORE INFORMATION
	================
	
	Unbounded Event Log:
	
	  This enables uninterupted logging to the Ev0.log file. This is basically a
	  text version of the Windows NT application log and will log every event that
	  is in the application log.
	
	Unbounded APDU Log:
	
	  This enables uninterupted logging to the Bf0.log file. This log is enabled by
	  setting X.400 Service and APDU logging to maximum in the MTA Properties page,
	  Diagnostics Logging tab. The APDU log is a binary trace of all the ASN.1
	  activity within the MTA. This data can be viewed with the ASN.1 viewer
	  (Aspirin) located on the BackOffice Resource Kit 2 compact disk.
	
	Unbounded Interop Log:
	
	  This enables uninterupted logging to the Ap0.log file. This log is enabled by
	  setting Interoperability logging to maximum in the MTA Properties page,
	  Diagnostics Logging tab. The Interoperability log is a text 'sniff' of the
	  incoming and outgoing transport activity for the subject MTA.
	
	Additional query words: x400 spdu 1988 1984 blue red book itu ccitt
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	
