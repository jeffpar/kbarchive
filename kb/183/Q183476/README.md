---
layout: page
title: "Q183476: Windows NT 4.0 Service Pack 4 Includes a New Version of SMTP"
permalink: kb/183/Q183476/
---

## Q183476: Windows NT 4.0 Service Pack 4 Includes a New Version of SMTP

	Article: Q183476
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea kbOSWinNT400
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 4 includes an updated version of the Simple Mail
	Transfer Protocol (SMTP) service that was included with Microsoft Internet
	Information Server version 4.0.
	
	MORE INFORMATION
	================
	
	Newly Exposed Functionality in SMTP
	-----------------------------------
	
	The Windows NT 4.0 Service Pack 4 release of the SMTP service includes the
	following new functionality:
	
	- SMTP supports the ETRN and authenticated TURN commands for dequeuing mail
	  over dial-up connections.
	
	- SMTP supports multiple virtual servers, or sites.
	
	Perform the following steps to enable this functionality:
	
	1. Create a text file with the following text:
	
	        set obj = GetObject ( "IIS://localhost/smtpsvc" )
	        obj.Put "SmtpServiceVersion", 2
	        obj.SetInfo
	
	  NOTE: This is an Active Directory Service Interface (ADSI) script that updates
	  a value in the metabase:
	
	2. Save this file as Enable.vbs.
	
	3. From a command prompt, type the following and then press ENTER:
	
	  cscript enable.vbs
	
	
	Holding Mail for Hosts with Dial-up Connections
	-----------------------------------------------
	
	Microsoft SMTP service can queue mail for SMTP hosts that only connect
	periodically to the service to send and download messages. There are two
	mechanisms by which a host such as Microsoft Exchange 5.5 can dequeue mail that
	is being held for it: ETRN and authenticated TURN. Which of these is used
	depends mainly on how the connecting host receives its IP address: if the
	connecting host has a static IP address, ETRN is the method of choice; whereas,
	if the connecting host has a dynamically allocated IP address (obtained through
	DHCP), authenticated TURN is preferable.
	
	Configuring ETRN for a Remote Domain
	------------------------------------
	
	When using the ETRN command, a host making a dial-up connection opens an SMTP
	session with Microsoft SMTP Service, issues the ETRN command, and closes the
	session (but not the connection). Microsoft SMTP Service then obtains the
	(static) IP addresses for the domains on the ETRN command from DNS, opens new
	SMTP sessions back to those domains, and sends the queued mail over those
	sessions. You can indicate that mail for a given domain is to be held for ETRN
	by following the following steps.
	
	NOTE: This feature is not available in SMTP Service Manager (HTML).
	
	To Enable ETRN Transmissions for a Remote Domain:
	
	1. In Internet Service Manager, right-click the Domains container, point to New,
	  and then click Domain.
	
	2. Use the New Domain wizard to create a new remote domain.
	
	3. Click the Domain Properties property sheet for the domain.
	
	4. Under Remote, click Queue messages for Remote Triggered Delivery.
	
	Configuring Authenticated TURN for a Remote Domain
	--------------------------------------------------
	
	When using the authenticated TURN command to dequeue mail, a host makes a dial-up
	connection, opens an SMTP session, authenticates to Microsoft SMTP service,
	issues the TURN command, and leaves the session open. Microsoft SMTP Service
	then "turns" the existing SMTP session (rather than opening a new one) and sends
	the queued mail to the connecting host in that session. The domains whose
	messages are dequeued are determined from the account ID of the connecting host
	obtained during the authentication process.
	
	You create a domain for authenticated TURN in the same way you create one for
	ETRN.
	
	NOTE: This feature is not available in SMTP Service Manager (HTML).
	
	To Enable Authenticated TURN Transmissions for a Remote Domain:
	
	1. In Internet Service Manager, right-click the Domains container, point to New,
	  and then click Domain.
	
	2. Use the New Domain wizard to create a new remote domain.
	
	3. Click the Domain Properties property sheet for the domain.
	
	4. Under Remote, click Queue messages for Remote Triggered Delivery.
	
	To Set the Account ID that can TURN a Domain:
	
	In order to enable authenticated TURN, you must set the correspondence between
	the account ID of the host that will be dequeuing the mail and the domains that
	it is allowed to dequeue. This is done by running an ADSI script that sets the
	appropriate values in the metabase. For each domain that is to be TURNed, you
	must:
	
	1. Set AuthTurnList with the username of the account authorized to TURN.
	
	2. Set RouteAction to the value "514" to enable authenticated TURN support.
	
	The following ADSI script creates a domain (TEST.com) in the SMTP server instance
	number two and sets it up to be turned by an account named TESTSERVER. (This
	script assumes that you have not created the domain yet.)
	
	     Dim DomainContainerObj, NewDomainObj
	     Dim domainName, domainPath, serverInstance, userName
	     serverInstance = "2"
	     domainName = "test.com"
	     userName = "testserver"
	     domainPath = "IIS://LocalHost/SMTPSVC/" & serverInstance & "/domain"
	     Set DomainContainerObj = GetObject(domainPath)
	     Set NewDomObj = DomainContainerObj.Create ("IIsSmtpDomain", domainName)
	     NewDomObj.KeyType = "IIsSmtpDomain"
	     NewDomObj.Put "AuthTURNList", userName
	     NewDomObj.Put "RouteAction", 514
	     NewDomObj.SetInfo
	
	Creating and Identifying SMTP Sites
	-----------------------------------
	
	You can create multiple SMTP sites in Microsoft SMTP Service. This section
	describes how to create, identify, and delete sites.
	
	About SMTP Sites
	----------------
	
	You can configure your system to include several physical servers that run
	Microsoft SMTP Service. After the servers are set up, you can manage them
	through Internet Service Manager by setting up an SMTP site for each server. You
	can also set up multiple sites on one computer to manage resources on one
	physical server. This allows you to set different administrative and security
	options for the domains configured for the site.
	
	Setup creates a default site for Microsoft SMTP Service. You can change the name
	of the default site and any others that you create.
	
	Use the property sheets to configure site options. You can then use the Domain
	Properties property sheet to override some settings for specific domains. These
	options are described in other sections of the documentation.
	
	Creating an SMTP Site
	---------------------
	
	You can use the New SMTP Site Wizard to create a new site. Using the wizard, you
	can name the site, set a port and IP address, identify the default directory
	location, and designate the default domain. The wizard creates a site using
	default settings. If you want to configure the site differently, use the
	property sheets to change the settings.
	
	NOTE: Depending on your configuration, you may not be able to use the same
	inbound port for a new site. If you use an IP address for a new site that is
	already being used for another site, you must designate a different port for the
	new site. If you have different IP addresses for each site, you can use the same
	port for each site. The SMTP site will fail to start if you have duplicate IP
	addresses and duplicate port settings. You can identify the port on the SMTP
	Site property sheet.
	
	To Create an SMTP Site:
	
	1. In Internet Service Manager, expand the directory hierarchy and select an
	  existing SMTP site.
	
	2. On the Action menu, point to New, and then click Site.
	
	3. Follow the instructions in the New SMTP Site Wizard to set up the site.
	
	4. Configure the site.
	
	Renaming an SMTP Site
	---------------------
	
	Each SMTP site has a display name in Internet Service Manager. The default SMTP
	site name is assigned during Setup. When you create a site, you designate the
	display name in the wizard. You can change a site name using the following
	steps.
	
	To Rename an SMTP Site:
	
	1. Select the site you want to rename.
	
	2. Click the SMTP Site property sheet.
	
	3. In the Description box, type a new site name.
	
	Designating an SMTP Site IP Address
	-----------------------------------
	
	Each SMTP site has an IP address. The address differs depending on your hardware
	configuration. If you have one physical server with multiple sites, you can use
	the same IP address for all sites. However, the TCP port must be different for
	each site. Alternatively, you can have multiple physical servers, each with a
	separate site in Internet Service Manager. In this case, you must have different
	IP addresses for the sites. You can then use the same TCP port for more than one
	site because the IP address is different for each site.
	
	To Designate an IP Address:
	
	1. Select the site you want to configure.
	
	2. Click the SMTP Site property sheet.
	
	3. In the IP address box, select the IP address for the site. The site can
	  respond to connection requests for all IP addresses configured on the
	  computer.
	
	Deleting an SMTP Site
	---------------------
	
	You can remove any site other than the default site. If you designated a custom
	location for the Microsoft SMTP Service default directories during Setup, those
	directories also need to be deleted or moved. There are several default
	directories set up for each site. For the default site, these are placed in the
	Mailroot folder by default during Setup.
	
	NOTE: Before deleting a site, pause Microsoft SMTP Service so the delivery queues
	can be cleared and queued messages can be delivered. If you do not clear the
	queues before deleting a site, undelivered messages remain in the default
	folders for the site. In this instance, you must manually move messages to a
	different location for processing.
	
	To Delete an SMTP Site:
	
	1. In Internet Service Manager, expand the directory hierarchy and select the
	  SMTP site that you want to delete.
	
	2. On the Action menu, click Delete.
	
	3. Delete or move the Microsoft SMTP Service default folders for the site you
	  removed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea kbOSWinNT400 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : :4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
