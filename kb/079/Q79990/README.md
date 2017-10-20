---
layout: page
title: "Q79990: Idlewild Does Not Work with FAXit for Windows"
permalink: /kb/079/Q79990/
---

## Q79990: Idlewild Does Not Work with FAXit for Windows

{% raw %}

	Article: Q79990
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Idlewild program included with the Windows Entertainment Pack volumes 1, 2,
	and 3 will not work correctly if you have the automatic checking feature of
	FAXit for Windows running on the machine. FAXit's automatic checking program
	will check the hard disk for an incoming fax once every minute. Because of
	FAXit's manipulation of system timers, Idlewild will never time out and blank
	the screen.
	
	MORE INFORMATION
	================
	
	To blank the screen in Idlewild, follow either step 1 or 2 below:
	
	1. Blank the screen manually, as follows:
	  a. From the Options menu, choose Blank Now.
	
	     -or-
	
	  b. Move your mouse to the "sleep now" corner in the upper-right- hand corner
	     of the screen.
	
	     -or-
	
	2. Remove FAXit's fax-checking program (FAXITSCH.EXE) from the WIN.INI load=
	  line and restart Windows.
	
	  Note: If you remove FAXITSCH.EXE, FAXit will not notify you of incoming faxes.
	
	For more information on FAXit for Windows or removing the fax-checking program
	(FAXITSCH.EXE), call Alien Computing at (805) 947-1310.
	
	Additional reference word(s): Alien Computing WEP idle wild set delay auto check
	feature fax checking 1.0 1.0a 1.00 1.00a
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
