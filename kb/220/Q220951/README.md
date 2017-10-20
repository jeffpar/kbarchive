---
layout: page
title: "Q220951: Err: Invalid System Time with Real Time Clock and Windows NT"
permalink: /kb/220/Q220951/
---

## Q220951: Err: Invalid System Time with Real Time Clock and Windows NT

{% raw %}

	Article: Q220951
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your Real Time Clock (RTC) or BIOS are not year-2000 compatible, logging on
	to a computer running Windows NT in the year 2000 may result in the following
	error message being displayed:
	
	  Invalid System Time
	
	  The time or date on your system time is invalid. Please use the date/time
	  applet in the Control Panel to properly set your system time and date.
	
	CAUSE
	=====
	
	This problem occurs during the log on process when Windows NT checks the date to
	see if the date is possibly out of synchronization. If Windows NT 4.0 detects
	the date is before 1996, then it assumes that there may be a problem with the
	date and presents the above error message. Windows NT 3.51 uses the date of 1990
	as the reference date.
	
	For more information on how Windows NT interacts with the RTC and BIOS, please
	reference the white paper Microsoft Operating System Interactions with BIOS and
	Real Time Clock.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact your hardware manufacturer and get an update to
	your System BIOS or RTC.
	
	This is the best way to get your hardware ready for the year 2000. Some older or
	specialized computers may not have an updated BIOS available and the above error
	message could become tiresome or could hinder functionality.
	If your system does not have an updated BIOS that addresses the year 2000
	problem, you can use the Time Server Service from the Windows NT resource kit.
	This utility allows one computer to be specified as a time server. The other
	computers in the enterprise connect to the time server and update the Windows NT
	clock. The Time Server service runs as a service so it loads whether a user logs
	on or not. The computer designated as the time server needs to be year-2000
	compliant because the computers that are not year-2000 compliant are
	synchronizing with the time server.
	The Time Server Service utility comes with the Windows NT resource kit and
	instructions on how to use the service are included.
	
	MORE INFORMATION
	================
	
	
	Additional query words: y2k nt rtc timeserver real time clock BIOS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
