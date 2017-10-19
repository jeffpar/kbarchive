---
layout: page
title: "Q171251: Eicon Drivers not Copied when Updating to SNA 3.0 SP1"
permalink: /kb/171/Q171251/
---

## Q171251: Eicon Drivers not Copied when Updating to SNA 3.0 SP1

	Article: Q171251
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Eicon SDLC or X.25 link services will not start after upgrading an SNA
	Server 3.0 configuration to SNA Server 3.0 Service Pack 1. This problem will not
	occur when running SETUP.EXE from SNA Server 3.0 Refresh CD that incorporates
	Service Pack 1.
	
	CAUSE
	=====
	
	This is due to a bad statement in the UPDATE.INI file from SNA Server 3.0
	Service Pack 1. Running UPDATE.EXE resulted in the current
	EC<SDLC/X25>.DLL being renamed to EC<SDLC/X25>.DL$, and the updated
	EC<SDLC/X25>.DLL being copied only in
	<SnaRoot>\system\hwsetup\ec<sdlc/x25> while it should also be copied
	in the <SnaRoot>\system directory.
	
	RESOLUTION
	==========
	
	Once the upgrade process is complete, the user needs to manually copy the
	EC<SDLC/X25>.DLL file from the
	<SNA>\system\hwsetup\ec<sdlc/x25> directory to
	<SnaRoot>\system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 1. This problem was corrected in the latest SNA Server for Windows NT 3.0
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
