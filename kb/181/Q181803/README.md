---
layout: page
title: "Q181803: 5250 Demo Screens Scroll with No User Input"
permalink: /kb/181/Q181803/
---

## Q181803: 5250 Demo Screens Scroll with No User Input

	Article: Q181803
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the 5250 application demo supplied with SNA Server version 4.0, the
	5250 Demo Screens scroll with no user input.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The As400tp.exe file does not parse keyboard input correctly. As400tp.exe does
	not take note of the length of the data. The result is that AS400tp.exe
	mistakenly generates menu option 10 - "Run 5250 loop script" when no input or
	"1" was intended.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
