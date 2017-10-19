---
layout: page
title: "Q78705: PC Adm: Time Interval Based on One 24-Hour Day"
permalink: /kb/078/Q78705/
---

## Q78705: PC Adm: Time Interval Based on One 24-Hour Day

	Article: Q78705
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail for PC Networks Administration program (ADMIN.EXE) will not
	allow a postoffice to call a Call/Request Remote Client user during a time
	window that extends beyond a 24-hour day from 1:00 AM to 12:00 PM.
	
	Example
	-------
	
	Suppose you would like to set the time interval to call a Remote client from
	11:00 PM to 2:00 AM. This is not possible. The ADMIN.EXE Remote, Modify command
	will not let the Interval field values fall outside the 1:00 AM to 12:00 PM
	24-hour-day time frame.
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	
