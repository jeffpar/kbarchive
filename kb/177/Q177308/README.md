---
layout: page
title: "Q177308: XADM: Slow Client Logon Due to Missing Addressing Template"
permalink: /kb/177/Q177308/
---

## Q177308: XADM: Slow Client Logon Due to Missing Addressing Template

{% raw %}

	Article: Q177308
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following are symptoms of this issue:
	
	  Slow client logons (up to 10 minutes or more) during peak logon hours or even
	  relatively slow logons for solitary or small group logons.
	
	  In the Windows NT Performance Monitor (PerfMon), Process, % CPU utilization,
	  DSAMAIN.EXE (DS) will sustain a very high CPU utilization percentage (75% or
	  more) throughout the peak logon periods. In addition, the DS may jump up high
	  for relatively long times (1-4 minutes) for solitary or small group logons
	  (~5).
	
	  Enabling the Directory Service logging, ExDS interface logging to maximum will
	  log numerous "ds_read entered" and "ds_read completed" events (1136 and 1137,
	  respectively). Also, enabling maximum MAPI interface, logs NspiBind events
	  (1136 - client and otherwise).
	
	  A network trace between the Exchange client and server may show that a long
	  time elapses between when the first RPC OpNum2 request to the store's GUID is
	  issued, and when the server actually returns an RPC response to this request.
	
	CAUSE
	=====
	
	When the client logs on, a comparison between the existence of one-off address
	templates in the directory, and the Address-Types in the ODI cache of the store
	is performed. If an address-type exists in the ODI cache, but a corresponding
	address template does not exist in the DS, a flag is set to reload the ODI
	cache. The cache is reloaded, but the flag is never reset, so a cache reload is
	continually signaled.
	
	The logon process is serialized behind this cache reload.
	
	This can noticeably impact logon if:
	
	1. There are many non-native Exchange address-types, or if a particular
	  non-native Exchange address type has many entries in the Microsoft Exchange
	  Administrator program under:
	
	  <org>/<local-sitename>/Configuration/Site Addressing/Routing tab
	
	2. No address template is installed in the site for this address-type.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	- Make sure that there is a one-off addressing template installed within the
	  site for any non-native Exchange address-type.
	
	- Examine \exchsrvr\mtadata\GWART0.MTA to derive a list of unique address
	  types.
	
	- View the list of installed one-off address templates under:
	
	  <org>/<local-sitename>/Configuration/Addressing/One-off Address
	  Templates/<language>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	A code change has been implemented to discriminate between the cases when an
	address template is "not found" versus the case when "an error occurred looking
	for an address template". The reload flag is no longer signaled for the former
	case.
	
	This case involved a single-server Exchange version 4.0 site that had replicated
	with the rest of the organization, which included a mix of Exchange 4.0 and 5.0
	sites and servers. One of the 5.0 sites had implemented a CCMAIL connector to an
	extensive cc:Mail installation. This resulted in many CCMAIL routes being added
	into the routing table (GWART). These routing entries were replicated throughout
	the organization.
	
	Exchange 5.0 supports the CCMAIL address-type as a native Exchange address- type,
	and includes a One-off Address template for this address-type. Exchange 4.0 does
	not support the CCMAIL address-type as a native Exchange address-type. The
	solitary Exchange 4.0 Site did not have a CCMAIL One-off Address template
	installed, thus logons within this site experienced this inefficiency.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
