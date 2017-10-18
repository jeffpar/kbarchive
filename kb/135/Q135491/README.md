---
layout: page
title: "Q135491: SDLC Multidrop Primary Needs to be Remote End = Host System."
permalink: kb/135/Q135491/
---

## Q135491: SDLC Multidrop Primary Needs to be Remote End = Host System.

	Article: Q135491
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
	
	A multidrop connection is a connection through which one primary computer
	communicates with multiple secondary computers. SNA Server supports multidrop
	connections to peer or downstream systems on leased SDLC lines. You can
	configure up to four multidrop connections on each line, with an SNA server as
	the primary server on each.
	
	SNA Server Admin only allows the Multidrop Primary check box to be selected if
	the Link Role is Peer (negotiable). It should be set to host (primary) for
	multi-drop to work correctly. The Link Role is set in the Connection Properties
	dialog box. To get to the Multidrop Primary check box, from the Connection
	Properties dialog box, select the Setup button and then the Advanced button.
	
	RESOLUTION
	==========
	
	Microsoft has updated the file SNAADMIN.EXE to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
