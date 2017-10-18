---
layout: page
title: "Q237610: Err Msg: &quot;You Do Not Have Permission to Modify This Print Job&quot;"
permalink: kb/237/Q237610/
---

## Q237610: Err Msg: &quot;You Do Not Have Permission to Modify This Print Job&quot;

	Article: Q237610
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When you attempt to delete a print job from a Windows 95/98 client and the print
	queue resides on a Windows NT Server-based computer, the following error message
	may be displayed:
	
	  You Do Not Have Permission to Modify This Print Job
	
	This error message is displayed even if you are the owner of the print job, and
	have Full Control permissions to manage documents.
	
	CAUSE
	=====
	
	This behavior occurs because of a latency between the time the job actually
	leaves the server, and the time that the client queue refreshes. The print job
	no longer resides on the server; it is already spooled out to the printer and is
	in the printer's memory.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Issue type        : kbprb
	
	=============================================================================
	
