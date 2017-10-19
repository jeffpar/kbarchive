---
layout: page
title: "Q151504: Using Server Push with IIS"
permalink: /kb/151/Q151504/
---

## Q151504: Using Server Push with IIS

	Article: Q151504
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 19-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Server Push function with IIS, the browsers prompt you
	to save a file. The Server Push function uses the multipart/x-mixed mime type.
	
	CAUSE
	=====
	
	IIS does not implement the Server Push function.
	
	MORE INFORMATION
	================
	
	The Server Push function is usually used to display data on the client without
	your input. For example, a Web server can push a Please Wait message to the
	client after a database query is submitted. This prevents the user from clicking
	the Submit button again, which causes another query to be queued.
	
	Additional query words: pushpull pull netscape explorer
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0,5.0
	
	=============================================================================
	
