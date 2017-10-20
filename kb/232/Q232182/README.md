---
layout: page
title: "Q232182: XCON: MTA Problems w/High Network Use on Low Bandwidth WAN Link"
permalink: /kb/232/Q232182/
---

## Q232182: XCON: MTA Problems w/High Network Use on Low Bandwidth WAN Link

{% raw %}

	Article: Q232182
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Exchange Server site can span geographical locations provided there is
	adequate bandwidth available for remote procedure call (RPC) based
	communication. In a single Exchange Server site with multiple physical locations
	connected by a low bandwidth WAN link, that is 128 Kbps or lower, there may be
	high network usage, and the Exchange Server Message Transfer Agent (MTA) may
	occasionally stop responding (hang) or not function properly.
	
	MORE INFORMATION
	================
	
	For example, an Exchange Server site that has 27 physical sites and seven of
	them are connected by 128-Kbps links. These sites with low bandwidth WAN
	connectivity could experience the following problems.
	
	- High network usage at low bandwidth WAN link because of network applications,
	  business software, and databases trying to share the same bandwidth at remote
	  physical locations.
	
	- MTAs may have messages queued up occasionally, and the MTA may hang when
	  processing large messages such as public folder replication messages, which
	  can be several megabytes in size.
	
	Exchange Server contributions to this high network usage are:
	
	- Within a site, the Directory service on an Exchange Server computer
	  replicates with every other Exchange Server computer's directory every five
	  minutes. This can cause excessive traffic itself, depending on how often
	  directories are changed.
	
	  Keep in mind that within a site, the Directory service communicates directly
	  with the Directory service on other servers without going through the message
	  transfer agent (MTA), so this traffic is not visible through the MTA.
	
	- If public folder replication is scheduled, it puts a severe load on the
	  network, and depending on the size of the folder replication, it can saturate
	  the network and eventually hang the MTAs.
	
	- Exchange Server itself causes messaging traffic.
	
	Recommendations
	---------------
	
	Keep the following recommendations in mind when you design a site with the
	above-mentioned criteria and existing low speed WAN links, or, if an existing
	Exchange Server site starts to see this problem:
	
	- Upgrade or increase the available network bandwidth. This is the best
	  solution because it provides enough bandwidth for all applications. How much
	  additional bandwidth is needed depends on network use.
	
	- Make physical sites with low bandwidth separate Exchange Server sites. They
	  can then be connected by X.400 connectors. X.400 connectors have several
	  tuning and performance optimization settings that can be configured for
	  connectivity across slow WAN links.
	
	- Set message size restrictions on the MTA to reduce network traffic. This can
	  be done in the Microsoft Exchange Server Administrator program, on the
	  General tab of the MTA Properties page. This way users are restricted from
	  sending large messages that can cause severe problems on the network.
	
	- Schedule public folder replication for after hours, or for times when there
	  is extremely low traffic or no traffic on the network.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
