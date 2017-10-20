---
layout: page
title: "Q164648: DLS Properties Should Require Entry for Remote Link"
permalink: /kb/164/Q164648/
---

## Q164648: DLS Properties Should Require Entry for Remote Link

{% raw %}

	Article: Q164648
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
	
	The SNA Server 3.0 Manager Distributed Link Service (DLS) property page does not
	require a value to be present in the Remote Link Service field, and allows the
	user to continue without any value present.
	
	CAUSE
	=====
	
	This is a problem with SNA Server Manager.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	The updated module is:
	
	  <Snaroot>\System\Remcfg.dll
	
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
