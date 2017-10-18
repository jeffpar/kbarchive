---
layout: page
title: "Q263705: XADM: Time Settings Incorrect"
permalink: kb/263/Q263705/
---

## Q263705: XADM: Time Settings Incorrect

	Article: Q263705
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Administrator program on a computer other
	than the Exchange Server computer, the time zone of the computer on which the
	Administrator program is run is used to adjust any time settings that may be
	made.
	
	This results in the Administrator setting schedules that may not be what is
	expected.
	
	CAUSE
	=====
	
	This situation is normally seen when the Exchange Server administration is
	centralized in one location and there are Exchange Server computers in different
	time zones around the world. The Administrator program runs on a computer in one
	time zone and then changes are made to the schedules of Exchange Server
	computers in different time zones.
	
	For example, an Administrator program on a computer in the Central time zone
	connects to a server in Japan with the Japanese time zone setting. The
	administrator changes the information store maintenance schedule to be between
	12 midnight and 2 A.M. Because the computer on which the Administrator program
	run is in the Central time zone, the information store maintenance schedule that
	actually gets set on the Japanese server is 2 P.M. to 4 P.M., which is not what
	the administrator intended. The reason for this is that all time settings are
	converted into Universal Time (GMT) using the local computer's time zone
	setting, and then saved in the Exchange Server computer's database. When you
	view the settings, the local time zone is used to convert the Universal time
	into local time.
	
	WORKAROUND
	==========
	
	Some possible workarounds to this issue are to run the Administrator program
	remotely on the Exchange Server computer itself or to change the time zone
	setting on the computer that is running the Administrator program to match that
	of the Exchange Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
