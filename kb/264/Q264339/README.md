---
layout: page
title: "Q264339: XADM: Event ID 2037 Creating Mailbox After Applying Q254805 Fix"
permalink: /kb/264/Q264339/
---

## Q264339: XADM: Event ID 2037 Creating Mailbox After Applying Q254805 Fix

{% raw %}

	Article: Q264339
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the Exchange Server Administrator program Exchange Server 5.5
	post-Service Pack 3 fix that is described in the following Knowledge Base
	article
	
	  Q254805 XADM: Exchange Server 5.5 Post-SP3 Administrator Program Fixes
	  Available
	
	Exchange Server may generate the following event message:
	
	  ID: 2037
	
	  Type: Error
	
	  Source: MSExchangeSA
	
	  Description: The file version of
	  \address\<proxy_address_type>\<processor>\<proxy>.dll
	  installed on the local server is not current. Unable to locate a correct
	  version on any server in the site.
	
	The following informational event 2036 message may also be logged:
	
	  The file version of
	  c:\exchsrvr\address\address\<proxy_address_type>\<processor>\<proxy>.dll
	  looking at servers in site for a current version.
	
	The following error message may also be displayed:
	
	  An error occurred while processing an e-mail address.
	
	The error message also references the following ID:
	
	  ID no: C1030b35
	
	CAUSE
	=====
	
	This issue can occur because the fix updates the .dll files, but does not update
	the directory information, specifically the File-Version attribute on the
	address generators.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the File-Version attribute of the address
	generators. For additional information about how to modify the File-Version
	attribute, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q158336 XADM: Modifying Version Values for Proxy Address Generator
	
	MORE INFORMATION
	================
	
	Some examples of proxy generator .dll files are Inproxy.dll and Pcproxy.dll. For
	example, the event ID 2037 message description may state the following:
	
	  The file version of \address\smtp\i386\inproxy.dll installed on the local
	  server is not current. Unable to locate a correct version on any server in
	  the site.
	
	Additional query words: hotfix postsp3 admin proxy generator smtp x400
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
