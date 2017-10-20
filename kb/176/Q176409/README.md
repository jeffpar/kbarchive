---
layout: page
title: "Q176409: XADM: Internet Newsgroup Public Folder Becomes Visible"
permalink: /kb/176/Q176409/
---

## Q176409: XADM: Internet Newsgroup Public Folder Becomes Visible

{% raw %}

	Article: Q176409
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Newsgroup public folder may become visible to clients in the
	organization after making the folder not visible from the Client Permission
	Property page inside of the Microsoft Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	This can be caused either by:
	
	  Introducing an Exchange Server 5.0 site to the organization through directory
	  replication with the Internet Newsgroups public folder configured to be
	  visible, which is the default.
	
	  - or -
	
	  Installing an Exchange Server 5.0 computer into an existing Exchange Server
	  4.0 site which participates in directory replication with the organization.
	
	RESOLUTION
	==========
	
	Follow these steps to make the Internet Newsgroups public folder not visible to
	Exchange Clients:
	
	1. Connect to the new Exchange Server 5.0 computer from the Exchange
	  Administrator program.
	
	2. Expand the Folders object to expose the Public Folders hierarchy.
	
	3. Expand the Public Folders hierarchy and view the properties of the Internet
	  Newsgroups public folder.
	
	4. Click on the Client Permissions button and clear the "Folder Visible" check
	  box for the role of "Nonediting Author."
	
	This will hide the Internet Newsgroups public folder from your Exchange Clients
	in this site and other sites to which it replicates to throughout the
	organization.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	
	=============================================================================
	

{% endraw %}
