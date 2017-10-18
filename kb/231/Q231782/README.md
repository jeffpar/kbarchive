---
layout: page
title: "Q231782: SMS: Smsmon32 and/or Odpwin9x May Cause Windows 95/98 to Hang"
permalink: kb/231/Q231782/
---

## Q231782: SMS: Smsmon32 and/or Odpwin9x May Cause Windows 95/98 to Hang

	Article: Q231782
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbClient kbConfig kbsms200
	Last Modified: 10-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Windows 95-based or Microsoft Windows 98-based computer running
	the Systems Management Server (SMS) 2.0 client is running the client software
	distribution agents, SMS Available Programs Monitor (Smsmon32.exe) and/or SMS
	Offer Data Provider (Odpwin9x components) may cause the client computer to stop
	responding (hang).
	
	CAUSE
	=====
	
	This behavior occurs because the Netapi.dll network redirector file is
	out-of-date or is not located in the %WinDir%\System folder.
	
	WORKAROUND
	==========
	
	If the Netapi.dll file is not in the %WinDir%\System folder, copy the file to
	that folder and restart the computer.
	
	The Netapi.dll files with the following date stamps are confirmed to cause this
	behavior:
	
	  Netapi.dll  2,432 bytes  03/14/96
	  Netapi.dll  2,432 bytes  08/16/96
	
	The following versions of the Netapi.dll file resolve this behavior:
	
	  Netapi.dll  106,960 bytes   08/24/96   version 4.00.950
	  Netapi.dll  106,704 bytes   11/25/99   version 4.10.1998
	
	NOTE: Later versions of this file may also resolve the problem.
	
	MORE INFORMATION
	================
	
	This problem can also occur because of a version of the Netapi.dll file that is
	included with some versions of the Banyan Vines redirector for Windows 95.
	
	
	Additional query words: prodsms hung freeze lock up win95 win98
	
	======================================================================
	Keywords          : kbenv kbClient kbConfig kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
