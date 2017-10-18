---
layout: page
title: "Q148389: XFOR: How to Backbone MSMail 3.x over Exchange"
permalink: kb/148/Q148389/
---

## Q148389: XFOR: How to Backbone MSMail 3.x over Exchange

	Article: Q148389
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbinterop exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to backbone Microsoft Mail 3.x over a Microsoft
	Exchange Server.
	
	MORE INFORMATION
	================
	
	NOTE: At this point you can only send mail. If you don't have directory
	replication setup between the two sites you won't be able to reply to any
	messages that are sent by MS Mail users from outside of your site.
	
	To backbone Microsoft Mail 3.x over a Microsoft Exchange Server there are a few
	items that must be configured correctly before it will work.
	
	The interesting thing about backboning over Microsoft Exchange is the ability to
	use all the connectors that come with Microsoft Exchange. We can use the
	Internet Mail Connector, X.400 Connector, and the Site Connector. The trick to
	doing this is assigning the correct address space to each connector that you use
	and having custom recipients for the MSMail users. Microsoft Exchange needs the
	custom recipients to resolve the address to a user.
	
	The best way to explain this is by example. In this example we will have two
	Microsoft Exchange Sites connected in various ways and two Microsoft Mail post
	offices. We will call the Microsoft Exchange sites A and B. The post offices
	will be on the mail network of MICROSOFT and be called PO1 and PO2.
	
	To begin we will connect the Microsoft Exchange sites. Site A will connect to
	site B via an X.400 connector. After connecting the Microsoft Exchange sites,
	connect in the Microsoft Mail post offices. In this example, we will connect PO1
	to Site A and PO2 to Site B. What this includes is setting up the Microsoft Mail
	Connector on Site A and Site B.
	
	Now what we have looks like this:
	
	  PO1 -> Site A -> Site B -> PO2
	
	Now that we have the pieces in place, we can start understanding what is involved
	to get messages flowing.
	
	Microsoft Exchange uses custom recipients to resolve Microsoft Mail addresses.
	These custom recipients will have to be created at Site A and Site B. Site B
	will have a custom recipient for every user on the Microsoft Mail post office
	PO2. Likewise, Site A will have a custom recipient for every user on the
	Microsoft Mail post office PO1. As an administrator, the recommended way to get
	the custom recipients into Microsoft Exchange is to DirSync them in. The other
	way is to manually create a custom recipient for each user. This can also be
	done via an import file and using the Microsoft Exchange Administrator program.
	
	ESTABLISH ROUTE FROM PO1 to PO2
	-------------------------------
	
	At Site A, run the Microsoft Exchange Administrator program and go to the object
	for the X.400 connector to Site B. On this connector, add the address space for
	Microsoft Mail. At this site, use MICROSOFT for the network and PO2 for the post
	office in the address space. Leave the mailbox entry empty so every piece of
	mail addressed to anyone on PO2 will go through. At this point we defined the
	route to PO2.
	
	ESTABLISH ROUTE FROM PO2 to PO1
	-------------------------------
	
	At Site B, run the Microsoft Exchange Administrator program and go to the object
	for the X.400 connector to Site A. On this connector, add the address space for
	Microsoft Mail. At this site, use MICROSOFT for the network and PO1 for the post
	office in the address space. Leave the mailbox entry empty so every piece of
	mail addressed to anyone on PO1 will go through. At this point we defined the
	route to PO1.
	
	MOVING MAIL
	-----------
	
	Now that the routes are defined in Microsoft Exchange we need to define the
	routes in Microsoft Mail. On post office PO1 we need to define post office PO2
	as indirect via the shadow post office in Site A. This will send all mail
	addressed to PO2 to the shadow post office on the Microsoft Exchange server.
	When the mail reaches the shadow post office, the Microsoft Mail Interchange
	service will retrieve the mail and hand it off to the Microsoft Exchange Message
	Transfer Agent (MTA) for routing. We need to do the same on post office PO2. At
	post office PO2, define post office PO1 as indirect via the shadow post office
	on the Microsoft Exchange Site B. This will send all mail addressed to PO1 to
	the shadow post office on the Microsoft Exchange server. This completes the
	Microsoft Mail configuration.
	
	Now that all the routes are in place we can move mail. To address mail from PO1
	to someone on PO2 we must have some pieces in place. We need to have an MTA that
	moves mail from the Microsoft Mail post office to the Shadow post office on the
	Microsoft Exchange Server. This article assumes that these are in place. Now
	that these are in place we can "one-off" address to a user on another post
	office.
	
	The above setup allows the users on the Microsoft Mail post offices to "one- off"
	address to another user. To avoid this we can use directory synchronization.
	Directory synchronization will allow user lists on both post offices to be
	updated. This will allow the users to pick another user from the global address
	list or the network post office address list.
	
	
	Another item to consider is implementing a Directory Replication Connector
	between the Microsoft Exchange Sites. This will eliminate the need for assigning
	address spaces to the connectors. When directory replication is involved, the
	Microsoft Exchange MTA will be able to know more about the mail routing. Each
	Microsoft Exchange site will be able to resolve the address and choose the
	correct route for the mail message.
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbinterop exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
