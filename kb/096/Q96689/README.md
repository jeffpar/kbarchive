---
layout: page
title: "Q96689: PC WRmt: ConnectTimeOut Value Purpose and Use"
permalink: /kb/096/Q96689/
---

## Q96689: PC WRmt: ConnectTimeOut Value Purpose and Use

	Article: Q96689
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: Microsoft Windows NT, on platform(s):
	      - the operating system: Microsoft Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Modem communication can be delayed for several valid reasons. To account for
	this delay, Microsoft Mail modem products set a time-out value, that specifies
	when the connection is considered broken.
	
	When Microsoft Mail Remote version 3.2 for Windows runs with Microsoft Windows
	version 3.1, the time-out value defaults to 60 seconds. To increase this value,
	edit the ConnectTimeOut line in your MSMAIL.INI file (located in your Windows
	directory).
	
	MORE INFORMATION
	================
	
	Your MSMAIL.INI file contains an [SFSREMOTE] section. If you find it necessary
	to change the time-out value, to allow modem communications to idle for a longer
	time before Mail breaks the modem connection for apparent inactivity, edit the
	following line in the [SFSREMOTE] section:
	
	  ConnectTimeOut=<n>
	
	where <n> is a number between 60 and 999 that represents the number of
	seconds to wait before Mail determines that an error has occurred because the
	connection is inactive.
	
	The minimum ConnectTimeOut value is 60.
	
	This feature is also documented in the online help file.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	
