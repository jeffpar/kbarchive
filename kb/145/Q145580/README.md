---
layout: page
title: "Q145580: Remotable Link Services Started by SNABASE"
permalink: /kb/145/Q145580/
---

## Q145580: Remotable Link Services Started by SNABASE

{% raw %}

	Article: Q145580
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Link Services marked as Distributed (indicated in SNA Server Setup by having a
	[D] before the link service) are started when SNABASE is started. These link
	services are then available to be used as a remote (Proxy) link service by other
	SNA Servers using the Distributed Link Service (DLS). Starting the SNA Server
	service on the server acting as the proxy is not needed.
	
	NOTE: In SNA Server versions 3.0 and 4.0, link services that are distributed in
	3.0 do not have a (D) by them in SNA Manager. To tell if the link service is
	distributed, check the Link Service Properties.
	
	MORE INFORMATION
	================
	
	Link services not marked as distributed are started by the SNA Server Service
	and used locally by SNA Server service. With the new Distributed Link Service
	the SNA Server service uses the link service running on a remote SNA Server.
	This remote machine acts as a proxy, providing the connectivity to a host.
	
	For more information about Distributed Link Service, see READMESP.WRI and
	\COLLATRL\PRESS\SOGAPR.DOC on the SNA Server 2.11 Service Pack 1 CD-ROM. For SNA
	Server versions 3.0 and 4.0, check the Administration Guide or on-line help
	file, Part 2 Managing SNA Server, What is a Distributed Link Service ?
	
	Additional query words: prodsna SOGA SNAREM
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
