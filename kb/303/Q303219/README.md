---
layout: page
title: "Q303219: Incorrect Buddy Name Exposed When Using Inspect With MSN Explore"
permalink: /kb/303/Q303219/
---

## Q303219: Incorrect Buddy Name Exposed When Using Inspect With MSN Explore

	Article: Q303219
	Product(s): The Microsoft Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	With a Microsoft Active Accessibility (MSAA) enabled screen reader running, you
	start MSN Explorer. You click the Online Buddies icon. You select a buddy from
	the list, and then the Online Buddies Instant Message window appears. If your
	screen reader supports reading of the Status bar, you press the keyboard
	sequence that will read this information. Or you have your screen reader read
	the entire window. Your screen reader will not read the Buddy name, alias, and
	online status visible in the Status bar--you will only hear the title of the
	window.
	
	CAUSE
	=====
	
	This Status bar is currently owner drawn and does not support the standards that
	allow the information to be exposed through MSAA.
	
	RESOLUTION
	==========
	
	Some screen readers are able to provide this information through "non- MSAA
	mode". If your screen reader supports this, try the keyboard sequence again. If
	your screen reader is still unable to read the Status bar, you can get this
	information in other places within MSN Explorer.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Issue type        : kbprb
	
	=============================================================================
	
