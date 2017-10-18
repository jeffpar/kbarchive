---
layout: page
title: "Q130701: PC Win: Sending Mail Without Delay with ForceScanInterval=1"
permalink: kb/130/Q130701/
---

## Q130701: PC Win: Sending Mail Without Delay with ForceScanInterval=1

	Article: Q130701
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail for Windows mail spooler performs a latency check before
	processing a message. A latency check is done by checking to see if there are
	any other active processes. This latency check is intended to prevent the mail
	spooler background processing from interfering unduly with applications running
	in the foreground.
	
	This feature allow users to send mail and then immediately begin working on other
	tasks.
	
	MORE INFORMATION
	================
	
	For those users who do not require the mail spooler to wait until idle time is
	detected and wish mail messages to be sent immediately, the ForceScanInterval
	entry may be added to the MSMAIL.INI file located in the [Microsoft Mail]
	section.
	
	For the immediate sending of mail, the following entry should be added:
	
	  ForceScanInterval=1
	
	With ForceScanInterval set to the value 1, the mail spooler will demand
	processing time after 1 second has passed. This is contrary to waiting longer
	periods to detect idle time.
	
	The default value for ForceScanInterval is 5 minutes.
	
	NOTE: All users with this option set will experience moments of computer non
	responsiveness as the mail spooler immediately processes every message sent.
	
	Additional query words: 3.00 3.20 Q86100 ForceScanInterval send mail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
