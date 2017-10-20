---
layout: page
title: "Q132208: PC Win: Certain Tab and Hyphen Characters Are Modified"
permalink: /kb/132/Q132208/
---

## Q132208: PC Win: Certain Tab and Hyphen Characters Are Modified

{% raw %}

	Article: Q132208
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A message sent from Mail for Windows may be modified by the system when it is
	sent. There are two modifications that may take place when hyphens or tabs are
	used. When you type a hyphen character (-) in a message, the Windows client adds
	a spaces before it if the hyphen is in the first or 78th position of the line.
	
	Steps to Reproduce
	------------------
	
	1. Install Mail for Windows.
	
	2. Send the following message:
	
	  NOTE: Because they exceed the 76 character limit, the third and fourth and
	  fifth and sixth lines should be on one line.
	
	  tab0   tab1   tab2
	  alongword   tab3
	  123456789012345678901234567890123456789012345678901234567890123456789012345
	  67
	
	  ---------------------------------------------------------------------------
	  --
	
	  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	3. When the message is received, the hyphens characters in positions one and
	  seventy-eight are replaced by a space. The tabulation seems to be the same.
	
	4. Print out the message using the standard MSMAIL3.FON. You will see that the
	  tabulation has been changed and that tab3 is now aligned with tab1.
	
	CAUSE
	=====
	
	The tabulation in the Microsoft Mail Edit window is different from what is sent
	to the printer. In the Mail client, the tabulation is at position 9 followed by
	a tab every 8 positions which gives:
	
	123456789012345678901234567890123456789012345678901234567890123456789012345
	67
	
	t       t       t       t       t       t       t       t       t
	
	What is sent to the printer starts at position 10, and then followed by a tab
	every 8 positions which gives:
	
	123456789012345678901234567890123456789012345678901234567890123456789012345
	67
	
	t       t       t       t       t       t       t       t       t
	
	WORKAROUND
	==========
	
	The only way to prevent hyphen characters from being converted to spaces is to
	start lines in the second column and end in the 77th column. It is difficult to
	get a message with tab characters to print out the same way it looks on the
	screen.
	
	Additional query words: 3.20 3.2a 3.2b wga
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
