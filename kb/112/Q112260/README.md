---
layout: page
title: "Q112260: PC WRmt: Several Minutes to Time Out Without Modem Attached"
permalink: /kb/112/Q112260/
---

## Q112260: PC WRmt: Several Minutes to Time Out Without Modem Attached

	Article: Q112260
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail Remote for Windows can take several minutes to time out (stop
	trying to send information) if your modem is turned off. If you have time-out
	problems initializing your modem, make sure it is connected properly and turned
	on.
	
	For every "SEND" or "SENDLN" keyword in a script, Microsoft Mail Remote for
	Windows writes to the serial communications layer and checks if the data has
	been written. It also checks to see if the time is up. If the modem is off or
	not attached, nothing gets sent. Microsoft Mail Remote for Windows waits until
	the appropriate time-out for every "SEND" or "SENDLN." Depending upon how many
	"SEND" or "SENDLN" commands are in your script, this can take from several
	minutes to much longer.
	
	Additional query words: 3.20 slow
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
