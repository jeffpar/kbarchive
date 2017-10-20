---
layout: page
title: "Q170423: SNA Server's Use of SNASERV, COMLOGS, and COMCFG Sharenames"
permalink: /kb/170/Q170423/
---

## Q170423: SNA Server's Use of SNASERV, COMLOGS, and COMCFG Sharenames

{% raw %}

	Article: Q170423
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing Microsoft SNA Server, version 2.0, 2.1, 2.11, 3.0, or 4.0, the
	Setup program creates the following sharenames on Windows NT Server:
	
	  Sharename   Path
	
	  COMCFG      <snaroot>\SYSTEM\CONFIG
	  COMLOGS     <snaroot>\SYSTEM
	  SNASERV     <snaroot>
	
	Under SNA Server 2.x, only the COMCFG sharename is required by SNA Server. The
	SNASERV and COMLOGS sharenames were provided to support back-level emulation
	products originally designed to work with the DCA/Microsoft OS/2 Communication
	Server product. However, such products have all been updated to work with SNA
	Server and no longer make use of these sharenames.
	
	Under SNA Server 3.0, both the COMCFG and COMLOGS sharenames are required by SNA
	Server.
	
	MORE INFORMATION
	================
	
	SNA Server uses these sharenames/sharepoints as follows:
	
	COMCFG (<snaroot>\SYSTEM\CONFIG)
	
	  This sharename must exist on SNA Server "primary" and "backup" configuration
	  servers and contains the COM.CFG file. The COM.CFG file is where SNA Server
	  configuration information is kept for the SNA Server subdomain. This
	  sharename is required by SNA Server 2.x and 3.x components to read and
	  maintain SNA Server configuration settings.
	
	COMLOGS (<snaroot>\SYSTEM)
	
	  Not used by SNA Server 2.x. Under SNA Server 3.0, SNA Manager uses this
	  sharepoint to support remote installation of SNA Server 3.0 link services.
	
	SNASERV (<snaroot>)
	
	  Not used by either SNA Server version 2.11, 3.0, or 4.0 and can be removed if
	  needed.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	

{% endraw %}
