---
layout: page
title: "Q165047: Get_TP_Properties Returns Incorrectly If Conversation Started"
permalink: /kb/165/Q165047/
---

## Q165047: Get_TP_Properties Returns Incorrectly If Conversation Started

{% raw %}

	Article: Q165047
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a remote node sends SNA Server an Attach (FMH-5) for conversation, the
	Receive_Allocate() and the Get_TP_Properties() complete successfully, but the
	field containing the Local LU contains the Partner LU name. This causes the
	Get_TP_Properties() to return the wrong status for this LU.
	
	CAUSE
	=====
	
	The APPC library extracts the Local Fully Qualified (FQ) LU name from the
	Logical-Unit-of-Work-Identifier (LUWID) in the Attach (FMH-5), rather than using
	a stored copy of the Local LU Name and Network name to reconstruct the Fully
	Qualified (FQ) LU name. While this works correctly for conversations started
	locally, it does not work for remotely initiated conversations where the LUWID
	contains the partner Fully Qualified (FQ) LU name.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
