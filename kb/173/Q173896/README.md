---
layout: page
title: "Q173896: XWEB: Err Msg: Netscape is Unable to Connect to the Server"
permalink: /kb/173/Q173896/
---

## Q173896: XWEB: Err Msg: Netscape is Unable to Connect to the Server

{% raw %}

	Article: Q173896
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using Netscape Communicator to access a Microsoft Exchange Server
	using Outlook Web Access (OWA), and rapidly click the Seen button, the following
	message may be displayed:
	
	  Netscape is unable to connect to the server at the location you have
	  specified. The server may be down or busy. Try connecting again later.
	
	This message may give you the impression that there is a problem with the
	Exchange Server, which is not the case.
	
	CAUSE
	=====
	
	Netscape Communicator establishes a connection to the Exchange Server each time
	the Seen button is clicked in order to perform a store command. The number of
	concurrent IMAP connections it can keep open are limited. As soon as this limit
	is reached, all connections are closed by Netscape and the above error message
	is reported.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	
	=============================================================================
	

{% endraw %}
