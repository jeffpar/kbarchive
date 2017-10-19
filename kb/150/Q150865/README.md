---
layout: page
title: "Q150865: IBM Twinax Link Service Install Failure in SNA Server 2.11 SP1"
permalink: /kb/150/Q150865/
---

## Q150865: IBM Twinax Link Service Install Failure in SNA Server 2.11 SP1

	Article: Q150865
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to start the SNA Server service in SNA Admin, the status may go to
	Pending and back to Inactive. The System Event log may also contain the
	following Event ID 7001 message:
	
	  The SnaServer service depends on the SnaTdlc1 service which failed to
	  start because of the following error: The file could not be found.
	
	CAUSE
	=====
	
	The IBM Twinax Link Service is not installed properly if you install SNA Server
	2.11, then update immediately to SP1 without first installing the IBM Twinax
	link service, or installing from the SNA Server version 2.11.sp1 compact disc.
	
	The files: Ibmtdlc.sys and Snatdlc.dll are not copied into the \Sna\System
	directory from the \Sna\System\Hwsetup\Ibmtdlc directory.
	
	NOTE: This does not occur with other link services, such as the Andrew Twinax
	Link service or the Barr SDLC Link service.
	
	WORKAROUND
	==========
	
	Either copy the Ibmtdlc.sys and Snatdlc.dll files into the \Sna\System directory
	or remove and reinstall the IBM Twinax Link Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11.sp1. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	
	=============================================================================
	
