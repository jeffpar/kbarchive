---
layout: page
title: "Q164637: Unknown Demo Link Service Script Found"
permalink: /kb/164/Q164637/
---

## Q164637: Unknown Demo Link Service Script Found

	Article: Q164637
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
	
	After installing a Demo SDLC Link Service, Ft1kmain is listed as an available
	Script File that can be used with the Demo SDLC Link Service. This is an
	undocumented script file.
	
	CAUSE
	=====
	
	This demo link script is only installed if SNA Server is reinstalled over
	itself.
	
	RESOLUTION
	==========
	
	Microsoft SNA Server Setup has been changed to delete this script file before
	reinstallation.
	
	The updated module is Snasetup.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30 snasdlc snasetup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
