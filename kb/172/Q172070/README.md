---
layout: page
title: "Q172070: Deleting 3270 Pool May Result in Unnamed Pool in SNA Manager"
permalink: /kb/172/Q172070/
---

## Q172070: Deleting 3270 Pool May Result in Unnamed Pool in SNA Manager

{% raw %}

	Article: Q172070
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you delete a 3270 pool using SNA Server Manager, the pool name appears as
	a dash (-) and the 3270 pooled LUs still appear in Manager. After the 3270 LU
	Pool is deleted, a dash (-) appears in the left pane of the Manager window under
	the Pools folder. In the right pane of the window there is a 3270 LU Pool
	without a name associated with it. If you try to delete this "unnamed" pool, SNA
	Server Manager closes without warning. If SNA Server Manager is closed before
	you try to delete the Pool, the LU Pool will not be shown when SNA Server
	Manager is restarted.
	
	CAUSE
	=====
	
	The internal data structures in SnaExp.exe contain an incorrect pointer when a
	pool is first viewed under a configured user before it is viewed in the pool
	folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
