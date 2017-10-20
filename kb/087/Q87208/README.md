---
layout: page
title: "Q87208: PROFS: How Much Address Conversion Is Done by the Gateway?"
permalink: /kb/087/Q87208/
---

## Q87208: PROFS: How Much Address Conversion Is Done by the Gateway?

{% raw %}

	Article: Q87208
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For messages and files sent from IBM PROFS, the Microsoft Mail Gateway to IBM
	PROFS and OfficeVision translates both the TO: and FROM: fields.
	
	Any addresses in the TO: field of a note from PROFS are mapped from
	Nodename(UserID) format to:
	
	  TO: Mailbox Network/Postoffice
	
	The originator's address in the FROM: field is mapped from Nodename(UserID)
	format to:
	
	  FROM: UserID PROFS/Nodename
	
	All of this conversion is performed by the Host Access component code on MS-GATE,
	when the message is placed in FFAPI file format. The LAN- side gateway program
	(HostDisp or VMGATE) then uses this FFAPI file to generate a mail item in the MS
	Mail database.
	
	
	Additional query words: 3.00 pcmail profslan address conversion
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
