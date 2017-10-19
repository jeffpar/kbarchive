---
layout: page
title: "Q119054: PROFS: The Meaning of the {future date} in VMGATE.LOG"
permalink: /kb/119/Q119054/
---

## Q119054: PROFS: The Meaning of the {future date} in VMGATE.LOG

	Article: Q119054
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Mail Gateway to PROFS/OfficeVision checks the LAN side for
	mail to upload to the host, the text {future date} appears in the VMGATE.LOG log
	file:
	
	  16:56  Checking data files for BELLEVUE1 mail
	  16:56     Queued to: CSIMS (JOHNFO)             865
	  16:56          from: MSFT/MAIL30/MARKEEF        {future date}
	
	The text {future date} means that the message was composed on a computer with a
	system date later than that of the PROFS/Office Vision gateway.
	
	This text does not appear if all machines on the mail network have the same
	system date. Some LAN operating systems have facilities for changing these to
	make them the same.
	
	Versions of the Microsoft Mail Gateway to PROFS/OfficeVision later than 3.0 do
	not show this text.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
