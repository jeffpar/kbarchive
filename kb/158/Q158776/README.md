---
layout: page
title: "Q158776: SNA Server May Log Event 23, Qualifier 0x000A"
permalink: /kb/158/Q158776/
---

## Q158776: SNA Server May Log Event 23, Qualifier 0x000A

{% raw %}

	Article: Q158776
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using SNA Server version 2.11 Service Pack 1 (SP1) and later with a remote
	link service (which communicates to a distributed link service running on a
	"remote" computer running SNA Server), SNA Server may log Event 23 with a
	qualifier code of 000A. This code is not documented in the "SNA Server Reference
	Guide:"
	
	  
	
	  Event:  23
	 Source: SNA Server
	 Description: Connection TOKEN1   using Link Service SNAREM1  failed
	              Qualifier = 000A
	
	CAUSE
	=====
	
	This qualifier can occur if:
	
	  The server running the distributed link service has been powered off or has
	  failed.
	
	  -or-
	
	  The LAN session between the remote link service and the distributed link
	  service has been lost. To diagnose the cause of a LAN disconnect, a Network
	  General Sniffer(TM) or Microsoft Network Monitor trace of the LAN session
	  disconnect should be captured.
	
	
	MORE INFORMATION
	================
	
	If a connection failure occurs, SNA Server logs Event 23 to the Windows NT
	application event log, indicating a "qualifier" code that provides information
	on the cause of the failure. These qualifier codes are documented in the "SNA
	Server Reference Guide."
	
	However, a qualifier code of 000A is not documented in the SNA Server Reference
	Guide, because this special code is returned by the remote link service that is
	new with SNA Server 2.11 Service Pack 1.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1,3.0,4.0
	
	=============================================================================
	

{% endraw %}
