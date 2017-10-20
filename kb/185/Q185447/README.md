---
layout: page
title: "Q185447: LUA Program Access Violation Occurs If SnaBase Fails to Start"
permalink: /kb/185/Q185447/
---

## Q185447: LUA Program Access Violation Occurs If SnaBase Fails to Start

{% raw %}

	Article: Q185447
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an LUA RUI or SLI application is started while the SnaBase service is not
	running, SnaBase will be started automatically. However, if the SnaBase fails to
	open a sponsor connection to SNA Server and then fails to initialize, the LUA
	application may fail with an access violation in SNADMOD!sepdbubl.
	
	CAUSE
	=====
	
	The problem occurs because the LUA RUI DLL file (Winrui32.dll) does not properly
	handle a failure to initialize the underlying Snadmod.dll.
	
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
	
	This problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around the problem you must correct the problem which is preventing the
	SnaBase service from initializing properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, and 4.0. This problem was first corrected in SNA Server
	3.0 Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
