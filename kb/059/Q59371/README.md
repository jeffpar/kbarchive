---
layout: page
title: "Q59371: &quot;Name Not Found&quot; Error Sending Messages to Busy DOS WS"
permalink: /kb/059/Q59371/
---

## Q59371: &quot;Name Not Found&quot; Error Sending Messages to Busy DOS WS

{% raw %}

	Article: Q59371
	Product(s): Microsoft LAN Manager
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an MS-DOS workstation receives a second message while the first message
	pop-up is still displayed on the screen, the sender receives a confusing set of
	error messages:
	
	  NET3722:An error occurred while sending a message to USERNAME.
	  NET2273:The message alias cannot be found on the local area network.
	
	MORE INFORMATION
	================
	
	These messages do not accurately describe the problem, which is that the
	workstation is busy displaying a pop-up and there is no way to get a message
	through to an MS-DOS workstation at this point. MS-DOS is not a multitasking
	operating system, and its single thread of execution is busy waiting for either
	keyboard input or a time-out to exit the netpopup program.
	
	Microsoft has confirmed this to be a problem in MS-DOS LAN Manager versions 1.0,
	1.01, 2.0, and 2.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 1.01 2.00 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbLanManSearch kbLanMan200 kbLanMan210
	Version           : :2.0,2.1
	
	=============================================================================
	

{% endraw %}
