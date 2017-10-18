---
layout: page
title: "Q260824: Changing CAPs or Client Connection Accounts May Orphan Clients"
permalink: kb/260/Q260824/
---

## Q260824: Changing CAPs or Client Connection Accounts May Orphan Clients

	Article: Q260824
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbsms200
	Last Modified: 12-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When transitioning Client Access Points (CAP) or client connection accounts
	within a site, Systems Management Server (SMS) clients may be orphaned.
	
	CAUSE
	=====
	
	This issue can occur because within a site, clients use the CAP to check their
	assignments and refresh site configuration data. Clients refresh this
	information on a set schedule (approximately once a day) or you restart the
	computer. If the administrator removes all of the CAPs that a client can use, or
	removes the client connection accounts, the clients are not able to connect to a
	CAP, and so are not able to send inventory data or receive new advertisements.
	
	If the administrator removes all of the old CAPs and then adds new ones, the
	existing clients have the "old" CAP list. Similarly, if the administrator
	removes all of the old client connection accounts and then adds new ones, the
	clients have the old client connection accounts and are unable to connect to any
	CAPs.
	
	If a site has Windows Networking Logon Client Installation enabled, and is
	orphaned for one of the previous reasons, they are able to get the new list of
	CAPs and connection accounts by authenticating through the SMS Logon Point.
	However, for sites that do not have Windows Networking Logon Client Installation
	enabled, the clients do not authenticate through the logon point, and are unable
	to regain connectivity to the CAP.
	
	WORKAROUND
	==========
	
	To work around this issue and avoid this situation, gradually transition from
	the old CAPs to the new CAPs or from the old client connection accounts to the
	new client connection accounts. When you decide how long the transition should
	take, consider how long clients in the site can be disconnected from the network
	under normal conditions (for example, over the weekend, overnight, or during a
	holiday break). During this transition, have both the old and new CAPs or the
	old and new client connection accounts enabled, and permit sufficient time for
	the clients to update their configuration with the new CAP list or client
	connection account list. After the clients have received the updates, remove the
	old CAPs or client connection accounts.
	
	MORE INFORMATION
	================
	
	For additional information about related topics, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q237759 SMS: Avoiding Client Lockouts When Using Client Connection Accounts
	
	  Q236052 SMS: Recovering When a client Connection Account Is Locked Out
	
	  Q227033 SMS: Changing SMSClient_SiteCode Password Can Cause Lockouts
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
