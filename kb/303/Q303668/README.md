---
layout: page
title: "Q303668: HOW TO: Configure Remote Domains in Windows 2000"
permalink: /kb/303/Q303668/
---

## Q303668: HOW TO: Configure Remote Domains in Windows 2000

	Article: Q303668
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool kbAudITPro kbHOWTOmaster
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Setting a Route Domain
	
	   - To Designate a Route Domain
	
	- Enabling TLS Encryption for a Remote Domain
	
	   - To Enable TLS Encryption for a Remote Domain
	
	- Authentication for a Remote Domain
	
	   - To Disable Authentication for Outgoing Messages
	- To Set Basic Authentication for Outgoing Messages
	- To Set Windows Security Package for Outgoing Messages
	
	- Configuring ATRN for a Remote Domain
	
	   - To Enable ATRN Transmissions for a Remote Domain
	
	SUMMARY
	=======
	
	This step-by-step article describes how to configure remote domains.
	
	You can set unique delivery requirements for a specific remote domain by adding a
	domain and configuring it accordingly. For example, you can set a predetermined
	delivery route, set authentication, and require that TLS encryption be used on
	all connections to the domain.
	
	Setting a Route Domain
	----------------------
	
	If the remote domain is not specifically configured, Microsoft SMTP Service does
	not use any of these operations when delivering to this domain. However, it does
	complete a normal DNS lookup.
	
	You can specify a delivery path that may be faster and less expensive than a
	direct link. Type the name or IP address of the server through which you would
	like to route messages for this remote domain.
	
	To Designate a Route Domain:
	
	1. Expand the appropriate SMTP virtual server node.
	
	2. Right-click the Domains node, point to New, and then click Domain.
	
	3. Use the New Domain Wizard to create a remote domain. In the Details pane,
	  right-click the new remote domain, and then click Properties.
	
	4. On the General tab, under Route domain, click "Forward all mail to smart
	  host", and then type the name or IP address of the server through which you
	  would like to route messages for this remote domain. This setting overrides
	  the smart host setting on the Delivery tab.
	
	  NOTE: You can identify the smart host by FQDN or an IP address (but if you
	  change the IP address you would have to change it on every virtual server as
	  well). If you use an IP address, enclose it in brackets [ ] to increase
	  system performance. Microsoft SMTP Service checks first for a server name,
	  then an IP address. The brackets identify the value as an IP address, so the
	  DNS lookup is bypassed.
	
	Enabling TLS Encryption for a Remote Domain
	-------------------------------------------
	
	You can set up alias domains that use the same settings as the default domain.
	Messages that are received by the Microsoft SMTP Service for the alias domain
	are placed in the Drop directory that is designated for the default domain.
	
	If you choose not to use TLS encryption for the SMTP virtual server, but you
	select the "TLS encryption" check box for this remote domain, SMTP will use TLS
	encryption when it connects to the remote domain. Domain configurations always
	override the virtual server configurations.
	
	To Enable TLS Encryption for a Remote Domain:
	
	1. Expand the SMTP virtual server, and then click Domains.
	
	2. In the Details pane, click the remote domain you want to change. On the
	  Action menu, click Properties.
	
	3. On the General tab, click Outbound Security to open the Outbound Security
	  dialog box.
	
	4. Click "Windows security package".
	
	5. Type the Windows account and password.
	
	6. Click to select the TLS encryption check box, and then click OK.
	
	  NOTE: If the remote domain does not support TLS encryption, all messages will
	  be returned with an NDR.
	
	Authentication for a Remote Domain
	----------------------------------
	
	You can configure the SMTP virtual server to provide the authentication
	credentials that are required by the remote domain. There are two types of
	authentication available: basic (clear text) and Windows Security Package.
	
	You can override the SMTP virtual server authentication by selecting a
	configuration option.
	
	- If messages are commonly sent to multiple addresses, disable authentication
	  for the SMTP virtual server.
	
	  NOTE: If attempts to deliver messages to an address do not work because of
	  authentication requirements, add a remote domain for the address. Then enable
	  authentication for the domain at the same level that is required by the
	  server.
	
	- If you disabled authentication for the SMTP virtual server and attempts to
	  deliver messages to an address do not work because of authentication
	  requirements, add a remote domain for the address, and then enable
	  authentication for the domain at the same level that is required by the
	  server.
	
	  NOTE: Determine what level of authentication is required to connect. Then
	  enable authentication for the SMTP virtual server by using the same level. If
	  you want to then send messages to other addresses, set up remote domains and
	  set different authentication options. If you use this option, it is likely
	  that the account name that is used is the one that identifies the computer
	  that is set up as the smart host.
	
	To Disable Authentication for Outgoing Messages:
	
	You can disable authentication, which is the default option.
	
	1. Expand the SMTP virtual server, and then click Domains.
	
	2. In the Details pane, click the remote domain you want to change. On the
	  Action menu, click Properties.
	
	3. On the General tab, click Outbound Security to open the Outbound Security
	  dialog box.
	
	4. Click "Anonymous access", and then click OK.
	
	To Set Basic Authentication for Outgoing Messages:
	
	With the basic option, the account name and password of the server you're
	connecting to is transmitted in clear text.
	
	1. Expand the SMTP virtual server, and then click Domains.
	
	2. In the Details pane, click the remote domain that you want to change. On the
	  Action menu, click Properties.
	
	3. On the General tab, click Outbound Security to open the Outbound Security
	  dialog box.
	
	4. Click "Basic authentication".
	
	5. Type the user name and password of the computer to which you are connecting.
	
	6. Click OK.
	
	To Set Windows Security Package for Outgoing Messages:
	
	The Windows Security Package option requires a Windows account name and
	password.
	
	1. Expand the SMTP virtual server, and then click Domains.
	
	2. In the Details pane, click the remote domain that you want to change. On the
	  Action menu, click Properties.
	
	3. On the General tab, click Outbound Security to open the Outbound Security
	  dialog box.
	
	4. Click "Windows security package".
	
	5. Type the Windows account name and password.
	
	6. Click OK.
	
	Configuring ATRN for a Remote Domain
	------------------------------------
	
	The Microsoft SMTP Service can hold mail for clients that connect periodically to
	download messages. In this case, the client issues an ATRN command. The remote
	SMTP service then starts sending messages to the ATRN domain.
	
	You can create a remote domain for an address that periodically reviews messages
	and enable ATRN for the domain.
	
	To Enable ATRN Transmissions for a Remote Domain:
	
	1. Expand the SMTP virtual server, and then click Domains.
	
	2. In the Details pane, click the remote domain that you want to change. On the
	  Action menu, click Properties.
	
	3. Click the Advanced tab, and then click to select the Queue messages for
	  remote triggered delivery check box.
	
	4. Click Add or Remove as necessary to select Windows 2000 accounts that will be
	  allowed to use the ATRN command in this domain.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool kbAudITPro kbHOWTOmaster 
	Technology        : kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbiisSearch kbiis500
	Version           : :2000,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
