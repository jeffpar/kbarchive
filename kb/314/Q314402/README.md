---
layout: page
title: "Q314402: PRB:Slow Clients Disconnected When Large Synchronous Writes Used"
permalink: /kb/314/Q314402/
---

## Q314402: PRB:Slow Clients Disconnected When Large Synchronous Writes Used

{% raw %}

	Article: Q314402
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Web clients who are using slow connections may be disconnected.
	
	CAUSE
	=====
	
	The Web server is using large synchronous write methods to send data.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Increase the connection timeout value in the Web site properties on the
	  server.
	
	- Use asynchronous I/O (note that this is only possible with an ISAPI filter or
	  extension).
	
	- Call the various write methods with a small amount of data in a loop, and
	  keep looping until all of the data is sent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	In Active Server Pages (ASP) pages, this may occur when you call Response.Write
	or Response.BinaryWrite with large amounts of data. In Internet Server
	Application Programming Interface (ISAPI) extensions, this problem may occur
	when you issue synchronous WriteClient calls with large data buffers.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
