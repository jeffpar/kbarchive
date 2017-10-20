---
layout: page
title: "Q182639: Host Security Domain Listed When Installed on NT Workstation"
permalink: /kb/182/Q182639/
---

## Q182639: Host Security Domain Listed When Installed on NT Workstation

{% raw %}

	Article: Q182639
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install SNA Server on a Windows NT Workstation (for evaluation
	purposes only, as this configuration is not supported), SNA Server lists the
	Host Security Domain in the tree view and gives the option to add a Host
	Security Domain via the Insert option.
	
	CAUSE
	=====
	
	SNA Server did not verify whether it was being installed on a Windows NT Server
	or Windows NT Workstation when Host Security was selected during the Setup
	process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	For more information about supported Host Security configurations, please see
	Knowledge Base article Q175063, "Host Security Integration Setup and
	Architectural Overview."
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
