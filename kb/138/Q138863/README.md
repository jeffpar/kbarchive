---
layout: page
title: "Q138863: SNA Server Setup Always Adds COMNETMN to Registry in Error"
permalink: kb/138/Q138863/
---

## Q138863: SNA Server Setup Always Adds COMNETMN to Registry in Error

	Article: Q138863
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install SNA Server 2.11, SNA Server Setup incorrectly adds a second
	COMNETMN entry to the registry even though the existing entry is the only entry
	necessary for SNA Server link services to send link alerts to Netview, provided
	a Netview connection is configured in SNA Server Admin.
	
	The second COMNETMN entry is added to the Windows NT registry under the subtree
	HKEY_LOCAL_MACHINE under the following subkey:
	
	    SYSTEM/CurrentControlSet/Services/LanmanServer/Parameters/NullSessionPipes
	
	CAUSE
	=====
	
	SNA Server Setup fails to check if the COMNETMN pipe name is already specified
	in the registry.
	
	RESOLUTION
	==========
	
	Obtain the update to SNA Server Setup mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	KBCategory: kbnetwork kbbug2.11
	KBSubcategory: ntnetserv
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
