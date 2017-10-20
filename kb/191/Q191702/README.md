---
layout: page
title: "Q191702: SNA Server Manager Traps When Deleting LUA Pool"
permalink: /kb/191/Q191702/
---

## Q191702: SNA Server Manager Traps When Deleting LUA Pool

{% raw %}

	Article: Q191702
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an LUA pool is deleted from SNA Server Manager and the configuration is
	saved, SNA Server Manager suddenly closes. When the manager is re-opened, the
	LUA pool is still in the configuration.
	
	Steps to Reproduce the Problem:
	
	1. Insert an LUA/LU on a connection.
	
	2. Assign the LUA/LU to an LUA pool.
	
	3. Assign the LUA pool to a user or group, such as "Everyone".
	
	4. Save the configuration.
	
	5. Delete the LUA pool. When you are prompted "Are you sure you want to remove
	  LUAPOOL?", click OK.
	
	6. Save the configuration. SNA Server Manager closes.
	
	7. Re-open SNA Server Manager. The LUA pool is still present in the
	  configuration.
	
	CAUSE
	=====
	
	The LUA pool has been assigned to a configured user or group. If the assignment
	is not removed before the LUA pool is deleted, the SNA Server Manager traps.
	Deleting the LUA pool does not remove it from the user record automatically.
	
	WORKAROUND
	==========
	
	To work around this problem, before you delete an LUA pool from SNA Server
	Manager, delete the LUA pool from the configured user's assigned LUs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	SP1. A supported fix is now available, but has not been fully regression-tested
	and should be applied only to systems experiencing this specific problem. Unless
	you are severely impacted by this specific problem, Microsoft recommends that
	you wait for the next Service Pack that contains this fix. Contacts Microsoft
	Product Support Services for more information.
	
	
	MORE INFORMATION
	================
	
	In SNA Server 3.0 and 2.11, an LUA pool could not be assigned to a configured
	user.
	
	This also occurs on SNA Microsoft Management Console (MMC).
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : :4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
