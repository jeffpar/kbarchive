---
layout: page
title: "Q286216: XADM: Error Message When Modifying a Remote Distribution List"
permalink: /kb/286/Q286216/
---

## Q286216: XADM: Error Message When Modifying a Remote Distribution List

{% raw %}

	Article: Q286216
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the user mailbox properties for a mailbox that is homed in a
	remote site, and you try to modify a distribution list (DL), you may receive the
	following error message:
	
	  This object has not yet been completely replicated or cannot be changed from
	  this connection. Try connecting to a Microsoft Exchange Server computer in
	  the same site as this object.
	
	  Microsoft Exchange Directory
	  id c1010ac1
	
	If you increase the diagnostic logging level on Directory Access under the
	Directory object for the user's mailbox server, the following event ID message
	may be logged in the Application event log:
	
	  Event Type: Information
	  Event Source: MSExchangeDS
	  Event Category: Directory Access
	  Event ID: 1173
	  Date: 1/16/2001
	  Time: 10:28:42 AM
	  User: DOMAINB\ADMINB
	  Computer: WOLFMAN1
	  Description:
	  A privileged operation (rights required = 0x2) on object
	  /o=ORG/ou=REMOTESITE/cn=Recipients/cn=REMOTEDL failed because a non-security
	  related error occurred.
	
	CAUSE
	=====
	
	The issue can occur because one site is trying to write to an object in another
	site that it does not own. When you use the Microsoft Exchange Server
	Administrator program that is connected to the site where the mailbox is being
	modified to modify the DL, you cannot modify the list because it is owned by
	another site.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the DL on the site that owns the DL.
	
	MORE INFORMATION
	================
	
	Similar situations can occur when you try to modify a DL that is owned in remote
	site.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q185579 XADM: Duplicating a Mailbox That Belongs to DL in Another Site
	
	  Q167194 XADM: Could Not Modify the DL Membership of Object
	
	
	Additional query words: 284 c1010ac1 exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbprb kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
