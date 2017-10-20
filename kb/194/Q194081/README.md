---
layout: page
title: "Q194081: Unable to Cancel TEST_RTS_AND_POST if Verb Issued Synchronously"
permalink: /kb/194/Q194081/
---

## Q194081: Unable to Cancel TEST_RTS_AND_POST if Verb Issued Synchronously

{% raw %}

	Article: Q194081
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an APPC/CPI-C conversation is deallocated while a TEST_RTS_AND_POST command
	is outstanding, the TEST_RTS_AND_POST may complete after the calling application
	has deleted the post event, causing an application exception.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Issue the TEST_RTS_AND_POST verb synchronously.
	
	2. End the application by issuing a DEALLOCATE command.
	
	3. In the middle of the application's shutdown, TEST_RTS_AND_POST might set the
	  event causing an application exception.
	
	CAUSE
	=====
	
	The APPC library included in SNA Server was not designed to cancel an
	outstanding TEST_RTS_AND_POST call when an APPC/CPI-C conversation was
	deallocated.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This update will issue a CANCEL_TEST_RTS_AND_POST command when the DEALLOCATE
	command is issued.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
