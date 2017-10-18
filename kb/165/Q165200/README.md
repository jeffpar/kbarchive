---
layout: page
title: "Q165200: Network Transports Options Not Available on RISC Systems"
permalink: kb/165/Q165200/
---

## Q165200: Network Transports Options Not Available on RISC Systems

	Article: Q165200
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
	
	The Network Transports check boxes are not available in the Server Configuration
	dialog box within SNA Server Manager on RISC-based SNA Server systems.
	
	To display the Network Transports options, do the following:
	
	1. Right-click on SNA Server in SNA Server Manager.
	
	2. Select Properties on the menu.
	
	3. Click the Server Configuration tab on the Server Properties dialog box.
	
	4. Click the Change button.
	
	CAUSE
	=====
	
	The SNA Server Configuration property page was dynamically loading Snarpcsv.dll
	and doing a GetProcAddr() call using a decorated name. This call failed on
	RISC-based SNA Server systems.
	
	RESOLUTION
	==========
	
	SNA Server Manager was updated to correct this problem on RISC-based systems.
	
	
	The updated module is:
	
	  <Snaroot>\System\Snapage.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: alpha
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
