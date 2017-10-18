---
layout: page
title: "Q279404: XCON: Site Scope Address Space Considerations"
permalink: kb/279/Q279404/
---

## Q279404: XCON: Site Scope Address Space Considerations

	Article: Q279404
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the Exchange Server 5.5 Internet Mail Service with an address
	space of "*" that is restricted to a site scope, when you send mail from a
	remote site, the mail is still processed as outbound to the Internet by the
	Internet Mail Service.
	
	CAUSE
	=====
	
	In Exchange 5.5, the Message Transfer Agent (MTA) is responsible for all routing
	decisions in the site. The MTA routes on a hop-by-hop basis, and is not aware of
	previous MTA routing decisions. When mail enters this site, the local MTAs
	realize that the Simple Mail Transfer Protocol (SMTP) route is available. They
	then route the mail to the local Internet Mail Service.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The explanation in this section is based on the following scenario:
	
	- <SiteA>: (Internet Mail Service scope setting: Organization)
	
	- <SiteB>: (Internet Mail Service scope setting: This Site)
	
	- Both Internet Mail Services have an address space of "*" and a cost of 1.
	
	- All servers in <SiteA> and <SiteB> are Exchange Server 5.5
	  Service Pack 3 (SP3) builds.
	
	- <SiteA> is connected to <SiteB> by a site connector;
	  <SiteA> and <SiteB> are connected to one or more downstream sites
	  (<OtherSites>) by X.400 connectors.
	
	- SiteB is a hub for <OtherSites2>
	
	To configure the scope settings for the Internet Mail Service, follow these
	steps:
	
	1. Start the Exchange Administrator program.
	
	2. Right-click Internet Mail Service, click Properties, and then click the
	  Address Space tab.
	
	3. Edit the properties of the address space, and then click the Restrictions
	  tab.
	
	4. The scope setting is set to Organization by default. The two other options
	  for scope are This Site and This Location.
	
	If you configure the scope setting for the Internet Mail Service in <SiteB>
	to This Site, the SMTP route is not known or replicated outside of this site.
	The MTAs in <OtherSites2> are only aware of the SMTP address space setting
	for <SiteA>; therefore, they route Internet mail to <SiteA>. On the
	way to <SiteA>, mail passes through <SiteB>. When mail bound for the
	Internet enters this site, it is routed correctly because the MTAs in
	<SiteB> are aware of a local SMTP route.
	
	If you configure the scope setting to This Location, the route is only known to
	the present server, or group of servers in this site. If Internet mail is
	processed by this server or group of servers (location), mail may be routed to
	the scoped address space.
	
	Additional query words: routing IMC IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
