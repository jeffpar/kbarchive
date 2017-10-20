---
layout: page
title: "Q180702: Deleting LUA Pool from TN3270 May Delete Pool"
permalink: /kb/180/Q180702/
---

## Q180702: Deleting LUA Pool from TN3270 May Delete Pool

{% raw %}

	Article: Q180702
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you delete an LUA pool assignment from the TN3270 service, the LUA pool
	itself may be deleted. This problem occurs when you are using the Microsoft
	Management Console (MMC) SNA snap-in interface with SNA Server 4.0, but not with
	the SNA Manager interface.
	
	CAUSE
	=====
	
	The SNA MMC snap-in is incorrectly referencing the LUA pool object instead of
	the TN3270 LUA pool assignment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: snammc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
