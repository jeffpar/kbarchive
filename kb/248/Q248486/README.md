---
layout: page
title: "Q248486: XCCC: Mailbox Access Across Domains Is Denied Through OWA"
permalink: /kb/248/Q248486/
---

## Q248486: XCCC: Mailbox Access Across Domains Is Denied Through OWA

	Article: Q248486
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Outlook Web Access (OWA) to gain access to Microsoft Exchange
	Server 5.5 in another domain, you may receive one of the following error
	messages indicating that access is denied:
	
	  Failed to get Inbox
	
	  OWA was unable to get your inbox
	
	  Access is Denied
	
	All users who are members of the same domain as the Exchange Server computer can
	access their mail through OWA, but no one in your domain is able to do so. The
	domains are in a two-way trust relationship.
	
	CAUSE
	=====
	
	This behavior can occur when users in the remote domain do not belong to a local
	group in the domain where the Microsoft Internet Information Server (IIS)
	computer is located and have not been granted the right to log on locally.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the global group of OWA users to the local group in
	the local domain, and assign the correct permissions:
	
	1. Create a global group in the remote domain and then add all of the OWA users.
	
	2. Create a local group, in the local domain, on the IIS computer.
	
	3. Add the global group from the remote domain to the local group in the local
	  domain.
	
	4. Assign the new local group the right to Log On Locally and "Access this
	  computer from the network".
	
	MORE INFORMATION
	================
	
	For more information about correctly configuring Outlook Web Access, please see
	the Troubleshooting Guide for Outlook Web Access at the following Microsoft Web
	site:
	
	  http://support.microsoft.com/support/exchange/content/whitepapers/owa_tshoot.asp
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
