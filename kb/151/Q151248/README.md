---
layout: page
title: "Q151248: XCLN: URLs With Spaces are Truncated by Exchange Client"
permalink: /kb/151/Q151248/
---

## Q151248: XCLN: URLs With Spaces are Truncated by Exchange Client

{% raw %}

	Article: Q151248
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a URL that points to a long filename, containing spaces, on the
	server, the resulting hotlink created by the Microsoft Exchange client is
	truncated.
	
	CAUSE
	=====
	
	The client looks for a space to determine the end of the URL. When it comes upon
	a space in the filename, it interprets this as the end of the filename.
	
	RESOLUTION
	==========
	
	Find the associated 8.3 name of the file and send that filename in the URL.
	
	For example, when you try to send a hot link to a file called Contents Page.htm:
	
	  http://server/subdir/contents page.htm
	
	use:
	
	  http://server/subdir/conten~1.htm
	
	MORE INFORMATION
	================
	
	You can find the 8.3 filename on Windows 95 by using the dir command from a
	command prompt. On Windows NT, use the dir /x command.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
