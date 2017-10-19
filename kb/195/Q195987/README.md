---
layout: page
title: "Q195987: Snatrace Won't Start if &quot;Background Thread&quot; = &quot;Below normal&quot;"
permalink: /kb/195/Q195987/
---

## Q195987: Snatrace Won't Start if &quot;Background Thread&quot; = &quot;Below normal&quot;

	Article: Q195987
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server trace tool (Snatrace.exe) allows you to configure the "Background
	Thread Priority," by selecting the "Tracing Global Properties" tab.
	
	If the priority is set to "Below normal," it won't be possible to start the trace
	tool anymore.
	
	CAUSE
	=====
	
	This is due to an error in the code which treated the value for "Below normal"
	(0xffffffff) as an error when reading it from the registry. That error is
	preventing Snatrace.exe to display the trace property pages.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	To allow the trace tool to start again, the user must reset the registry key
	HKLM\Software\Microsoft\SNA Server\Traces from "FFFFFFFF" to "00000000".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server Versions 3.0, 3.0
	SP1, 3.0 SP2, 4.0, and 4.0 SP1. This problem was first corrected in SNA Server
	3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
