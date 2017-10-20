---
layout: page
title: "Q112915: PC Win: How Windows Client Handles Return Receipts"
permalink: /kb/112/Q112915/
---

## Q112915: PC Win: How Windows Client Handles Return Receipts

{% raw %}

	Article: Q112915
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0b and 3.2 of Microsoft Mail for Windows, a return receipt is
	marked and handled as a high-priority mail message, regardless of the actual
	priority set for that message. This is designed to match the way the MS-DOS
	workstation handles registered mail.
	
	To translate between the two clients:
	
	  MS-DOS priority    -> Windows priority
	  ---------------------------------------------------------------------
	
	       1                     Low
	       2                     Normal
	       3                     Normal
	       4                     High
	       5                     High
	       R                     High, with Return Receipt
	
	
	  Windows priority   ->   MS-DOS priority
	  ---------------------------------------------------------------------
	
	     Low                      1
	     Normal                   3
	     High                     4 or 5 (see ** below)
	     Return Receipt           R
	
	There is no way to distinguish between a message with high priority and a message
	with a return receipt in the Windows client. Both messages appear with an
	exclamation point (!) to the left of the icon in the From: heading.
	
	** The Windows client high priority is 5 if the user has been given urgent
	privileges through the Mail Administrator program; otherwise, it is 4.
	
	Additional query words: 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	

{% endraw %}
