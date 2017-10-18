---
layout: page
title: "Q216967: Disclaimer For COMTI Host Sample Code Included in SNA 4.0 SP2."
permalink: kb/216/Q216967/
---

## Q216967: Disclaimer For COMTI Host Sample Code Included in SNA 4.0 SP2.

	Article: Q216967
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order to use the SNA Server 4.0 SP2 COM Transaction Integrator "MS Link" type
	Remote Environment to invoke link-model CICS transactions through TCP/IP, you
	must write a Concurrent Server program that implements the functionality defined
	by the Mscmtics.cbl sample "MS Link" program.
	
	NOTE: Mscmtics.cbl is intended to be a demonstration program only, and is not for
	production use.
	
	REFERENCES
	==========
	
	The mainframe application requirements for implementing a TCP/IP Listener or the
	Server function are documented in the following IBM publication:
	
	IBM TCP/IP for MVS, CICS TCP/IP Socket Interface Guide and Reference, Document
	Number SC31-7131-03
	
	An additional resource is available to help you develop a server for the
	IBM-provided listener: IBM provides a sample program EZACICSC.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	
