---
layout: page
title: "Q234639: XFOR: Server Location and the Internet Mail Service"
permalink: kb/234/Q234639/
---

## Q234639: XFOR: Server Location and the Internet Mail Service

	Article: Q234639
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the concept of server location in Exchange Server and
	explains how to use server location to restrict users on a server or a group of
	servers to use only a specified Exchange Server connector.
	
	MORE INFORMATION
	================
	
	Server locations in Exchange Server are generally used to control public folder
	access in a large Exchange Server organization. However, server locations can
	also be used to restrict users on an Exchange Server computer or group of
	Exchange Server computers to only use a specified Internet Mail Service or other
	Exchange Server connector.
	
	The most common reasons to restrict the use of a connector are to allow only
	certain users (such as high-priority or management users) located on a server or
	group of servers to use a certain connector, or to restrict use by physical
	subnet or geographical location.
	
	This article provides steps to create server locations for the Internet Mail
	Service, but you can also use server locations for the X.400 Connector, the Site
	Connector, and the Dynamic Remote Access Service (RAS) Connector. You can use
	the steps in this article to create server locations for any of these Exchange
	Server connectors.
	
	For example, you may have two groups of Exchange Server computers in an Exchange
	Server site that are in different physical locations or on different physical
	subnets. Each location or subnet has one Exchange Server computer that has an
	Internet Mail Service (location 1 and location 2, respectively). Because of
	firewall and network issues, you may need the users in location 1 to send and
	receive e-mail from the only the Internet Mail Service in location 1, and users
	on the Exchange Server computers in location 2 to only send and receive Internet
	e-mail from the server that has the Internet Mail Service in location 2.
	
	NOTE: Server locations only apply within a site, not between sites.
	
	To enter a server location for location 1:
	
	1. In the Microsoft Exchange Server Administrator program, click the server
	  name.
	
	2. On the File menu, click Properties, and then click the General tab.
	
	3. In the Server Location box, type "Location 1" (without the quotation marks)
	  to replace the default none.
	
	4. Click Apply. When the following question is displayed
	
	  Are you sure you want to create the new location 'Location 1'?
	
	  click Yes.
	
	5. Open the Internet Mail Service properties for each server that you want to
	  associate with location 1, and then click the Address Space tab.
	
	6. Double-click the Simple Mail Transfer Protocol (SMTP) address to open the
	  properties.
	
	7. Click the Restrictions tab, click This Location, and then click Apply.
	
	Use these steps to add location 1 as the server location for the entire group of
	servers that you want to include in that server location. Then use the same
	steps to add location 2 as the server location for the different group of
	servers that you want to include in a separate server location.
	
	After you perform these steps, all of the users on a server in location 1 use the
	services of the server in location 1 only, and all of the users on a server in
	location 2 use the services of the server in location 2 only. These users do not
	use the services of any other server.
	
	When you want to bring a new server into the site, start the Administrator
	program, click the new server, click Properties on the File menu, click the
	General tab, and then type the name of the location (in this example, either
	"Location 1" (without the quotation marks) or "Location 2" (without the
	quotation marks)) that you want the new server to join.
	
	You may want to restrict users in other sites from using Internet Mail Service
	connectors in a different site. This is a completely separate issue. In this
	case, you must keep address spaces from being replicated to other sites, and you
	must mark the address space as LOCAL on its originating site. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q161947 XCON: MTA: Address Space Replication with LOCAL Address Spaces
	
	For additional information the concept of server location in Exchange Server and
	how you can use server location to control public folder access, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q234638 XADM: Server Location and Public Folder Access
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
