---
layout: page
title: "Q164640: SNA 3.0 Manager Does Not Show APPC/CPI-C Application Name"
permalink: /kb/164/Q164640/
---

## Q164640: SNA 3.0 Manager Does Not Show APPC/CPI-C Application Name

{% raw %}

	Article: Q164640
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
	
	The Microsoft SNA Server 3.0 Manager tool does not display the APPC or CPI-C
	application which is using an LU6.2 conversation. The SNA Server 2.x Admin tool
	included this functionality.
	
	CAUSE
	=====
	
	This functionality was left out of the Microsoft SNA Server 3.0 Manager by
	design. This feature has been added to the SNA Server 3.0 Manager tool.
	
	RESOLUTION
	==========
	
	An update to Microsoft SNA Server 3.0 is available to support this new feature.
	The updated module is \<snaroot>\System\Snaole.dll.
	
	The APPC Sessions display for Local and Remote LUs now includes an extra column
	for "Exe Name." This is the same information that is available under Active
	Users. This column is hidden by default and can be enabled through the View
	Columns menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30 snamanager
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
