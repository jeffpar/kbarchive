---
layout: page
title: "Q250482: Establishing Replication Agreements Between MMS Servers"
permalink: /kb/250/Q250482/
---

## Q250482: Establishing Replication Agreements Between MMS Servers

{% raw %}

	Article: Q250482
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can set up replication agreements between two different Microsoft
	Metadirectory Services (MMS) servers to create a shadow copy of some part of the
	directory tree held on a master server. The master server manages the
	information and updates the copy on another server when you run the replication
	agreement. You can also schedule the replication to occur automatically at
	certain intervals.
	
	MORE INFORMATION
	================
	
	There are three types of replication agreements that you can configure:
	
	- Replicate a zone from another LDAP server.
	
	- Update contact records by querying other LDAP servers.
	
	- Allow another LDAP server to access metaverse data.
	
	The Junction node is at the top of the zone you are moving. A zone in MMS is a
	subtree of the metaverse. When you create any replication agreement, the
	Junction node is defined when you initially select the subtree in the metaverse
	that you are replicating. The Junction node is in the form of a Distinguished
	Name, because it refers to the location of the subtree in the Metaverse.
	
	How to Set Up a Replication Agreement
	-------------------------------------
	
	1. Select an organizational unit that you would like to replicate.
	
	2. Click Actions in the Action Panel, and then click New Replication Agreement.
	
	3. Select "Replicate a zone from another LDAP server" from Type of Agreement,
	  and then click OK.
	
	4. On the Configure tab, type the LDAP URL of the secondary server under
	  Connection Information. For example, you might type
	  "ldap://Servername.Domain.com:389 (LDAP Port)" (without the quotation marks).
	
	5. Click Anonymous under Authentication.
	
	6. Click "Start replication".
	
	
	Additional query words: mms via replication zoomit
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
