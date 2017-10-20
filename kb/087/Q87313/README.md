---
layout: page
title: "Q87313: Mac Srv: Server Connection Log Inconsistent"
permalink: /kb/087/Q87313/
---

## Q87313: Mac Srv: Server Connection Log Inconsistent

{% raw %}

	Article: Q87313
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the log of Server Connection for version 3.1 of Microsoft Mail for AppleTalk
	Networks, inconsistent information is occasionally displayed regarding
	transferring information. For example:
	
	  Connected to zone ZONE A
	  Scanning for site A
	  Transferring data to site A
	  Can't find site A
	  Performing full zone scan
	  ....
	
	When the log entry "Transferring data to site A" appears in the log, it means
	that the Server Connection has told the local server to begin transferring mail
	to the other site. If the local server can't find the bridge server on the other
	site, then it returns an error to Server Connection: "Can't find site A."
	
	MORE INFORMATION
	================
	
	All processing in Server Connection is asynchronous. In other words, a request
	is made to the server and that work is expected to be done. When the request is
	made, the log reflects that request. If this request fails, then the log should
	reflect that with the next entry.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
