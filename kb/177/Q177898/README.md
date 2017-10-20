---
layout: page
title: "Q177898: Dragging LUs Between Pools of the Same Type Does Not Work"
permalink: /kb/177/Q177898/
---

## Q177898: Dragging LUs Between Pools of the Same Type Does Not Work

{% raw %}

	Article: Q177898
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you drag LUs from either an LUA or Downstream LU pool to another pool of
	the same type, the operation fails, which causes an SNAOLE error to be generated
	indicating that the
	
	  Target record already has an owner.
	
	NOTE: The same behavior can occur when you drag 3270 LUs between 3270 Display LU
	Pools.
	
	SNA Manager does not allow LUs to be dragged between different pools. However, it
	does not currently display a useful error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, LUs still cannot be dragged within the same pool or from
	one pool to another. However, instead of the SNAOLE error message, you see a
	symbol that indicates that you are not allowed to drop the LU in the pool. If
	you hold the LU over the pool, a pop-up message tells you that the LU is owned
	by another pool.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
