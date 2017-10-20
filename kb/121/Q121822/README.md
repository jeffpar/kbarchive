---
layout: page
title: "Q121822: Deadlocks When Using Asynchronous Named Pipes"
permalink: /kb/121/Q121822/
---

## Q121822: Deadlocks When Using Asynchronous Named Pipes

{% raw %}

	Article: Q121822
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 3.5 
	- Microsoft SNA Server, versions 2.0, 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Windows NT Workstation and Windows NT Server version 3.5 are stressed by
	asynchronous named pipes, such as by Microsoft SNA Server for Windows NT, the
	Windows NT redirector (RDR.SYS) doesn't create enough worker threads fast enough
	and system deadlock occurs.
	
	CAUSE
	=====
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOSWinSearch kbSNAServSearch kbOSWinNTSearch
	Version           : WINDOWS:2.0,2.1; winnt:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
