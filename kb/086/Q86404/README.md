---
layout: page
title: "Q86404: PC MAPI: Bad lpszDateRecieved Value Doesn't Return Error"
permalink: /kb/086/Q86404/
---

## Q86404: PC MAPI: Bad lpszDateRecieved Value Doesn't Return Error

	Article: Q86404
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the lpszDateReceived field of a MapiMessage contains an invalid value and the
	message is saved with MAPISaveMail, no error message is returned. The message
	will be saved with a valid date after it has been resolved in the following
	manner:
	
	- If the year is invalid, the year is changed to 0.
	
	- If the month is invalid, the month is changed to 1.
	
	- If the day is invalid, the day is changed to 1.
	
	- If the hour is invalid, the hour is changed to 12.
	
	- If the minute is invalid, the minute is changed to 00.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
