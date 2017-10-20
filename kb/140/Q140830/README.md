---
layout: page
title: "Q140830: TN3270 Server Does Not Generate a Dr. Watson Log"
permalink: /kb/140/Q140830/
---

## Q140830: TN3270 Server Does Not Generate a Dr. Watson Log

{% raw %}

	Article: Q140830
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the TN3270 Server encounters an exception error it does not produce a Dr.
	Watson log.
	
	For additional information on Dr. Watson, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q139378 Debugging SNA Server Application Exceptions on Winnt
	
	CAUSE
	=====
	
	The exception handling routine is setting an event that causes another thread to
	quit the process. Because the process quits, the general exception handling
	procedure that creates the Dr. Watson log is not called.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file <tnroot>\TN3SERVR.EXE to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
