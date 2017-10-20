---
layout: page
title: "Q165842: Opening Manager Takes Long Time with Many LU Pools Configured"
permalink: /kb/165/Q165842/
---

## Q165842: Opening Manager Takes Long Time with Many LU Pools Configured

{% raw %}

	Article: Q165842
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience a long response time when opening SNA Server Manager,
	depending on how many LU Pools are configured.
	
	
	CAUSE
	=====
	
	The mechanism used by SNA Server Manager to insert all the pool items into a
	tree was causing Manager to open slowly when a large number of LU Pools were
	defined.
	
	RESOLUTION
	==========
	
	SNA Server Manager was updated to use a Lazy Tree mechanism for inserting pool
	items into a tree, which resulted in better response time when opening Manager.
	To resolve this problem, obtain the hotfix mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
