---
layout: page
title: "Q145706: New Local Schedule+ Files Do Not Synchronize with Server"
permalink: /kb/145/Q145706/
---

## Q145706: New Local Schedule+ Files Do Not Synchronize with Server

{% raw %}

	Article: Q145706
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	7.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using the Microsoft Schedule+ 7.0 Windows Client and have never
	opened your Microsoft Schedule+ file, you will not have a <username>.SCD
	file on your local machine. If you receive a meeting request, Microsoft
	Schedule+ will book the meeting for you and place it on your mail server's copy
	of your schedule.
	
	When you open Microsoft Schedule+ for the first time you will be prompted to
	choose a name for your local .SCD file. Upon viewing your new Microsoft
	Schedule+ file, the events booked prior to this that were placed on the server
	will not be visible.
	
	MORE INFORMATION
	================
	
	In order to see events booked prior to first use, you should synchronize your
	.SCD file with the server. Synchronize Now can be found by clicking on Options
	on the Tools menu. Microsoft Schedule+ does not check the server for
	appointments made prior to the first use nor automatically synchronize the .SCD
	files. A newly created .SCD file will not prompt Microsoft Schedule+ to
	synchronize it with the server.
	
	Additional query words: 7.0 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
