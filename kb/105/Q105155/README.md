---
layout: page
title: "Q105155: Explanation of Seed Router Roles in AppleTalk Internets"
permalink: /kb/105/Q105155/
---

## Q105155: Explanation of Seed Router Roles in AppleTalk Internets

{% raw %}

	Article: Q105155
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	SUMMARY
	=======
	
	The AppleTalk world includes different kinds of routers, all of which forward
	data from one physical network to another. Seed routers provide a unique
	additional service: they initialize and broadcast information about one or more
	physical networks that tells other routers where to send each packet of data.
	Each physical network must have at least one seed router, and it must be started
	first in the network to assure that all other routers are initialized
	correctly.
	
	MULTIPLE SEED ROUTERS
	---------------------
	
	A LocalTalk network can have more than one seed router, and in some cases
	multiples are recommended. For one thing, multiple seed routers increase network
	reliability. For another, administrators for wide area networks (WANs) can
	install several seed routers and make them independent so that users in one area
	don't have to wait for seed routers in remote areas to start.
	
	Multiple seed routers must have identical seeding information. If a Windows NT
	Advanced Server seed router at startup detects another network seed router with
	different information, the first router's information is used to seed the
	network, and the second router is referenced in an "Invalid network range" event
	written in the Windows NT Advanced Server event log. LAN Manager Services for
	Macintosh does not inform you of this; the Apple Internet router simply refuses
	to start and reports that there is another seed router with different
	information.
	
	SEEDING INFORMATION
	-------------------
	
	There are three types of seeding information:
	
	- A network number or range associated with each physical network. A network
	  number is a unique identifier for an AppleTalk physical network (any number
	  from 1 through 65,279) which routers use to send incoming data to the correct
	  physical network. It is highly recommended that you plan your AppleTalk
	  Internet first. For information on how, see Chapter 3 of "Windows NT Advanced
	  Server Services for Macintosh" or Chapter 2 of the "LAN Manager Services for
	  Macintosh Installation Guide."
	
	- The zone list associated with each physical network. A zone is a logical
	  group of networks that allows the Internet to be controlled in segments,
	  rather than as a single entity. LAN Manager and Windows NT domains are groups
	  of users; AppleTalk zones are groups of machines. In LocalTalk networks, each
	  physical network can be associated with only one zone. AppleTalk Phase 2 does
	  not observe a strict relationship between zone names and network numbers, so
	  two nodes in different zones can have the same network number.
	
	- The default zone for the network, into which all AppleTalk devices fall if
	  they do not specify otherwise. Each Macintosh can select which zone to belong
	  to. The KB article "How to Enable Seed and Non-Seed Routing" explains how to
	  set up zone assignments properly.
	
	Remember: seed routers must be started (booted) before any other Internet routers
	and ALL of the above seeding information must be the same for all seed routers
	in the Internet.
	
	Additional query words: sfm 1.0a appletalk osi concepts seed router
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
