---
layout: page
title: "Q175580: XADM: Internet Mail Service Does Not Handle Uudecode Correctly"
permalink: /kb/175/Q175580/
---

## Q175580: XADM: Internet Mail Service Does Not Handle Uudecode Correctly

{% raw %}

	Article: Q175580
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is received by Microsoft Exchange Server version 5.0 from
	Softswitch, the Microsoft Exchange Internet Mail Service will deliver the
	message correctly. However, when a Microsoft Exchange Client opens the message,
	the following error message will be displayed:
	
	  The Microsoft Exchange Server received an Internet message that could
	  not be processed. To view the original message content, open the
	  attached message.
	  <Message.txt>
	
	CAUSE
	=====
	
	The uuencode algorithm starts each line with a character to signify how many
	characters of that line are to be decoded. Here is an example:
	
	     begin 660 test.txt
	     %=&5S= H XXXX
	     end
	
	The "%" is the ascii representation of 0x25. The uudecode algorithm then
	
	1. Subtracts 0x20, leaving 0x05.
	
	2. Divides by 3.
	
	3. Rounds up.
	
	4. Multiplies by 4.
	
	to get 8, the number of characters to decode in the line. The line displayed
	above has 12 characters (plus the length character). Uudecode should not have a
	problem with this as it should stop decoding that line at column 13.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
