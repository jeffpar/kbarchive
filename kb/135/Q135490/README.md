---
layout: page
title: "Q135490: SDLC Multidrop Primary Configuration Problems"
permalink: /kb/135/Q135490/
---

## Q135490: SDLC Multidrop Primary Configuration Problems

	Article: Q135490
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
	
	You have the following SDLC multidrop primary configuration problem:
	
	- If you assign a multidrop primary connection to a link service once, you are
	  unable to assign other connections to it.
	
	  -or-
	
	- If you assign a non-multidrop primary connection to a link service, for
	  example, a peer to host connection, you cannot assign a multidrop primary
	  connection to the link service.
	
	These symptoms do not occur on standard SDLC leased or switched connections to
	host systems where you select the Host system option in the SNA Admin Connection
	Properties dialog box.
	
	NOTE: A multidrop connection is a connection through which one primary computer
	communicates with multiple secondary computers. SNA Server supports multidrop
	connections to peer or downstream computers on leased SDLC lines. You can
	configure up to four multidrop connections on each line, with an SNA server as
	the primary server on each.
	
	CAUSE
	=====
	
	There is a problem in SNAADMIN.EXE.
	
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
	
