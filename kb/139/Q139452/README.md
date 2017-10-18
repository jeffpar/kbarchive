---
layout: page
title: "Q139452: Computer BIOS and Windows NT Daylight Savings Time Settings"
permalink: kb/139/Q139452/
---

## Q139452: Computer BIOS and Windows NT Daylight Savings Time Settings

	Article: Q139452
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some system BIOS adjust the computers built-in real-time clock to compensate for
	daylight savings time automatically. Windows NT can also be configured to adjust
	for daylight savings time. If both the BIOS and Windows NT adjust the close for
	daylight savings time, your clock will be one hour off.
	
	MORE INFORMATION
	================
	
	Windows NT updates its internal date and time every hour by reading the CMOS on
	the motherboard. In-between the one hour intervals, Windows NT increments its
	own clock approximately every 10 milliseconds. Because Windows NT cannot detect
	when the system BIOS/CMOS (hardware level) adjusts the clock for daylight
	savings time, it may change the clock by one hour, just as the BIOS does. This
	causes your computer clock to be one hour ahead in the Spring or one hour behind
	in the Fall after both your computer's BIOS and Windows NT adjust the clock for
	daylight savings time.
	
	If you encounter this problem, change your BIOS or Windows NT configuration so
	that only one adjusts for daylight savings.
	
	NOTE: If you boot you computer under both Windows 95 and Windows NT, both
	operating systems will adjust for daylight savings time independently, also
	causing the clock to be off by an hour.
	
	For more information on Windows NT daylight savings time implementation, please
	see the following article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q129574
	  TITLE : Time Stamp Changes with Daylight Savings
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
