---
layout: page
title: "Q199281: XWEB: New Message is Lost When Connection to Web Server is Lost"
permalink: /kb/199/Q199281/
---

## Q199281: XWEB: New Message is Lost When Connection to Web Server is Lost

	Article: Q199281
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are composing a new message using the Outlook Web Access (OWA) client,
	the new message may be lost if your server connection times out or you lose your
	server connection.
	
	CAUSE
	=====
	
	The server has a timeout setting for connections and will break the connection
	when the limit is reached. This may be configured in the Internet Information
	Service manager program under the properties for the Web server.
	
	Once the connection is dropped, any work in progress is dropped as well. OWA does
	not have the ability to automatically save drafts to the Drafts folder like
	Outlook 98 does.
	
	WORKAROUND
	==========
	
	In cases where you will be away from your computer for an extended period of
	time, it is recommended that you save a draft of the new message before leaving.
	This will save the draft to the Inbox for later editing.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
