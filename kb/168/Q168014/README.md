---
layout: page
title: "Q168014: Corrupt DCASYNC.SYS File in SNA 2.11 SP2 and 3.0 SP1"
permalink: /kb/168/Q168014/
---

## Q168014: Corrupt DCASYNC.SYS File in SNA 2.11 SP2 and 3.0 SP1

{% raw %}

	Article: Q168014
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP2,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Microsoft SNA Server, version 2.11 Service Pack 2 (SP2) or SNA
	Server, version 3.0 SP1 on a system that's using an Attachmate ISCA adapter for
	an SDLC connection, the SNA Server service fails to start, reporting the
	following error:
	
	  The specified image file did not have the correct format.
	  It did not have a proper e_lfarlic in the MZ header.
	
	CAUSE
	=====
	
	These Service Packs contain a corrupt version of DCASYNC.SYS. This file is the
	driver for the Attachmate (DCA) ISCA SDLC card used by the DCA SDLC link
	service. Upon starting, the SNA Server service attempts to start the link
	services installed on the system. The above error is being returned from the
	DCASDLC link service.
	
	RESOLUTION
	==========
	
	DCA X.25 link service uses the same driver as the DCA SDLC link service. Only
	the version in the DCASDLC directory is corrupt. The copy of DCASYNC.SYS in the
	DCAX25 directory can be used for the DCA SDLC link service.
	
	A working copy of the driver is located in the following directory on the Service
	Pack compact disks:
	
	  <CD>\SERVER\I386\SYSTEM\HWSETUP\DCAX25
	
	The DCASYNC.SYS file can be copied from there to the following locations on the
	server:
	
	   <snaroot>/system
	   <snaroot>/system/hwsetup/dcasdlc
	
	STATUS
	======
	
	The versions of SNA Server 2.11 SP2 and SNA Server 3.0 SP1 on the Microsoft FTP
	site have been updated with the correct version of this driver.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.11 SP2,3.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
