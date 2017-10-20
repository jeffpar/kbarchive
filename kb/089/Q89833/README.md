---
layout: page
title: "Q89833: Zenith Znote Does Not Resume Net Operation When Paused"
permalink: /kb/089/Q89833/
---

## Q89833: Zenith Znote Does Not Resume Net Operation When Paused

{% raw %}

	Article: Q89833
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Zenith Data System Znote 386 laptops models 320L, 325L, and 325Lc may lose all
	network connections if they enter stand-by mode while running in MS-DOS or
	Windows.
	
	RESOLUTION
	==========
	
	To resolve the problem, increase the stand-by timer value, or reconnect network
	drives after they are lost.
	
	You can set the timer to any time between one minute and three hours.
	
	MORE INFORMATION
	================
	
	With stand-by mode there is a timer set within the system that detects absence
	of activity and automatically stops the CPU clock, shuts off the video subsystem
	and allows the hard disk motor to spin down. This laptop feature helps to extend
	the batteries' life span.
	
	Znote stand-by mode functions as follows:
	
	- The Znote does not enter stand-by mode when connected to AC power.
	
	- The system always enters stand-by mode if you close the lid while the unit is
	  running on battery power.
	
	- The unit also enters stand-by mode if you press FN+F6.
	
	- If the unit enters stand-by mode, you generally need to reboot it to resume
	  normal functions.
	
	All Znote models include network cards and pre-installed network client shells
	for Microsoft LAN Manager, Novell NetWare, and Banyan VINES.
	
	For further information, contact the Zenith Customer Assistance Center at (800)
	227-3360 between 7 AM and 7 PM Central time, Monday through Friday.
	
	The Zenith Znote computers included here are manufactured by vendors independent
	of Microsoft; we make no warranty implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.10 3.11 z-note z note standby stand 3rdparty by
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
