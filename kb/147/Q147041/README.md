---
layout: page
title: "Q147041: PC Win: Sending to a Large Distribution List Fails"
permalink: kb/147/Q147041/
---

## Q147041: PC Win: Sending to a Large Distribution List Fails

	Article: Q147041
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message with a very large recipient list, you may receive a
	General Protection (GP) fault or the following non-delivery message from the
	System Administrator:
	
	  Your message did not reach some or all of the intended recipients.
	  Date submitted: <date and time you sent the mail>
	  Message title: <subject of message>
	
	  The following recipient(s) could not be reached:
	
	  <alias name of a group>(<address of the group>)
	  Warning: one or more members of that group could not be located.
	
	NOTE: When the above error occurs, the message may have been sent to some of the
	users.
	
	CAUSE
	=====
	
	The expansion of the To: list has resulted in a large number of users that
	cannot be handled by the client or the message transport.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of the Microsoft
	Mail for Windows. A fix for this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments.
	
	Contact Microsoft Product Support Services for more information on the
	availability of this fix.
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	
