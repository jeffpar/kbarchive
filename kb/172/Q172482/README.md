---
layout: page
title: "Q172482: Properties for IPX Directory Services Shown Intermittently"
permalink: /kb/172/Q172482/
---

## Q172482: Properties for IPX Directory Services Shown Intermittently

{% raw %}

	Article: Q172482
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view the Properties tab of an SNA Server computer in SNA Server
	Manager, the IPX Directory Services Properties tab may be intermittently visible
	or invisible when it should not be.
	
	CAUSE
	=====
	
	Information about what transports an SNA Server computer is using is stored in
	both the configuration file (Com.cfg) and the Windows NT registry. If they are
	out of sync (that is, a change is not saved to the configuration file), the
	registry settings should take precedence, but these settings are not being
	queried by Snapage.dll and Snaole.dll when deciding what property pages to
	display.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, Snapage.dll and Snaole.dll query the registry entries.
	
	Additional query words: nds bindery
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
