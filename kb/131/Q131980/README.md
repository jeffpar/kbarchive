---
layout: page
title: "Q131980: PC Win: Truncated Addresses in To: Line When Printing Message"
permalink: /kb/131/Q131980/
---

## Q131980: PC Win: Truncated Addresses in To: Line When Printing Message

{% raw %}

	Article: Q131980
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a message in versions 3.2 and 3.2a of Microsoft Mail for Windows
	with over 350 addresses in the To: line or enough addresses to span a printed
	page, and one or more addresses in the Cc: line with information in the Subject:
	field, and text typed in the body of the message, the following may occur:
	
	- The addresses that would span the printed page are missing on the printed
	  page.
	
	- The addresses on the Cc: line are missing.
	
	- The text that was typed in the Subject: line is missing.
	
	CAUSE
	=====
	
	The To: address line will not except carriage return control characters. It will
	see them as an invalid address.
	
	RESOLUTION
	==========
	
	You can create a Personal Group of individual addresses and print that group for
	record keeping.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.2 and 3.2a of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
