---
layout: page
title: "Q165653: Cannot Open Pipe for NetMN (Access Denied)"
permalink: /kb/165/Q165653/
---

## Q165653: Cannot Open Pipe for NetMN (Access Denied)

{% raw %}

	Article: Q165653
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
	
	The following event will be logged in the application event log when a Netview
	Connection is defined in the Server Properties page:
	
	  Cannot open pipe for NetMN (Access denied)
	
	CAUSE
	=====
	
	The problem is caused by missing a registry value.
	
	RESOLUTION
	==========
	
	Setup now adds the following registry entry when adding a Netview connection:
	
	  HKEY_LOCAL_MACHINE\CurrentControlSet\Services\LanmanServer\Parameters
	     \NullSessionPipes:REG_MULTI_SZ:COMNETMN
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sna Netmn
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
