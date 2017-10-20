---
layout: page
title: "Q131636: PC WSPlus: Last Update Received/Sent Is Never"
permalink: /kb/131/Q131636/
---

## Q131636: PC WSPlus: Last Update Received/Sent Is Never

{% raw %}

	Article: Q131636
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Schedule+ Administrator (Admin) program (ADMINSCH.EXE) title screen always
	shows Last Update Received and Last Update Sent as Never.
	
	CAUSE
	=====
	
	This is set by default with the installation of the Schedule+ Admin program.
	
	RESOLUTION
	==========
	
	1. Change Sending Times from the Distribution Settings dialog box from the
	  default of Never, or change the Sending Times from the Modify Distribution
	  Frequency dialog box from the default Sending Times of Send at Default Times.
	
	2. Run the Schedule Distribution program (SCHDIST.EXE) with drives mapped to the
	  root of the postoffices participating in schedule distribution.
	
	3. Wait the timeframe specified in step 1. The minimum timeframe available is 15
	  minutes. At this point, the time should be updated.
	
	Additional query words: schedule plus 1.00 dynamic connections
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
