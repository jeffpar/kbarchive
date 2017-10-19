---
layout: page
title: "Q165648: Host Security Setup Missing Description of Services"
permalink: /kb/165/Q165648/
---

## Q165648: Host Security Setup Missing Description of Services

	Article: Q165648
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The setup for host security is missing descriptions for the services. Setup for
	host security (from the Hostsec folder on the SNA Server compact disc), prompts
	the user to select components to install. Clicking this button presents the user
	with a list of services to install. When the service is selected, the
	description in the right window pane is blank.
	
	CAUSE
	=====
	
	These descriptions were omitted in SNA Server 3.0
	
	RESOLUTION
	==========
	
	Descriptions for the following services were added:
	
	  
	
	  Windows NT Password Synchronization
	  -----------------------------------
	
	  Manages coordination of password changes between host and Windows NT. Install
	  in domains in which user accounts are defined.
	
	  Host Account Cache
	  ------------------
	
	  Maintains database associating host and Windows NT accounts. Install in
	  domains containing SNA Servers.
	
	To resolve this problem, obtain the hotfix mentioned below. The updated file is:
	
	  Snafile.stf
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
