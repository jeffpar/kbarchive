---
layout: page
title: "Q163073: Backup Config. Server May Not Always Read Local Config. File"
permalink: /kb/163/Q163073/
---

## Q163073: Backup Config. Server May Not Always Read Local Config. File

	Article: Q163073
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the SNA Server service is configured to start automatically on a backup
	configuration server and the SnaBase broadcast from the primary configuration
	server has not yet been received, SNA Server may read its configuration entries
	from another backup server's configuration file instead of the local Com.cfg
	file. This will likely cause no problems, but it may be inefficient.
	
	If the SNA Server service encounters a network error while reading its
	configuration file entries from another backup server or from the primary
	configuration server, the following error occurs (though the Windows NT Server
	return code may vary):
	
	  Event ID: 351
	  Source: SNA Server
	  Description: Error trying to read from \\server\COMCFG\COM.CFG (rc=995)
	
	Windows NT Server return code 995 = ERROR_IO_INCOMPLETE.
	
	This may indicate a problem with the underlying network. The above error occurred
	at a site where the primary configuration server was located across an IP router
	from the SNA Server. The IP router was acting as a "black hole router," which
	was causing the network session to fail abnormally. For more information on
	"black hole routers," see the following article in the Microsoft Knowledge
	Base:
	
	  Q159211 Diagnoses and Treatment of Black Hole Routers
	
	CAUSE
	=====
	
	When the SnaBase service starts on SNA Server, it listens for "service table"
	broadcast announcements from other SnaBase services running on other computers
	running SNA Server in the SNA subdomain. This broadcast message indicates the
	SNA Server services running on the server, the server's role in the SNA domain,
	and other attributes.
	
	The SnaBase service (on backup and member configuration servers) keeps track of
	the "preferred" location for the SNA Server configuration file for the
	subdomain. When the SNA Server service starts, it reads its configuration
	entries from the configuration file located on the "preferred" server.
	
	If a broadcast is received from the primary configuration server, then the
	primary server is always the preferred server. However, if the SnaBase has not
	yet heard from the primary configuration server, a remote backup server is
	chosen as the preferred server, instead of the local backup configuration file.
	
	RESOLUTION
	==========
	
	A backup configuration server now prioritizes the local Com.cfg file ahead of
	other backup configuration servers, if the primary configuration server
	announcement has not been received or if its SnaBase is not running.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.1, 2.11, and 2.11 Service Pack 1. This problem was corrected in the
	latest SNA Server version 2.11 U.S. Service Pack. For information on obtaining
	this Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna kbbug2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	
	=============================================================================
	
