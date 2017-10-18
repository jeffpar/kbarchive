---
layout: page
title: "Q128976: MultiTech MT2834 Modem Incorrectly Reports Hardware Error"
permalink: kb/128/Q128976/
---

## Q128976: MultiTech MT2834 Modem Incorrectly Reports Hardware Error

	Article: Q128976
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a MultiTech MT2834 modem to receive calls using the Windows
	NT Remote Access (RAS) Server service, the following message is written to the
	Windows NT System Log:
	
	  Event ID: 20050
	  Source: RemoteAccess
	  Type: Success Audit
	
	  Description: ...The reason for disconnecting was hardware failure.
	
	NOTE: Other information is also provided in the description message above, such
	as the time connected, time disconnected, duration of the RAS connection, etc.
	
	Event Viewer reports the reason for disconnecting is a hardware failure, even
	when all aspects of the RAS session functioned as expected, and you choose the
	Hang-Up button in the Remote Access application.
	
	
	CAUSE
	=====
	
	According to MultiTech Systems, this behavior is caused by a problem with the
	MultiTech MT2834 modem firmware. The MT2834 modem drops DSR before dropping DCD
	causing the incorrect hardware failure message.
	
	RESOLUTION
	==========
	
	For information about resolving this problem, contact MultiTech Systems.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
