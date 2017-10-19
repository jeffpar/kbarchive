---
layout: page
title: "Q259055: MAPI Exchange Management Agent/Discovery Takes a Long Time"
permalink: /kb/259/Q259055/
---

## Q259055: MAPI Exchange Management Agent/Discovery Takes a Long Time

	Article: Q259055
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 26-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MAPI Exchange management agent's discovery of Microsoft Exchange mailboxes
	may take a long time and a lot of resources.
	
	CAUSE
	=====
	
	There are two problems involved in this issue:
	
	- When the management agent is discovering the Assoc-NT-Account attribute from
	  Exchange, the Exchange server contacts the primary domain controller to
	  verify the value.
	
	- When you perform a container discovery of Exchange with a release prior to
	  MMS 2.1, the management agent discovers the entire site and then discards
	  everything but the containers.
	
	RESOLUTION
	==========
	
	Make sure that you are running Microsoft Metadirectory Services (MMS) 2.1 or
	later. If the management agent continues to be slow, you may want to remove
	Assoc-NT-Account from the list of attributes to discover:
	
	1. Click the Exchange management agent.
	
	2. click Configure MA.
	
	3. Click the Connected Directory Specifics tab.
	
	4. Click the Attributes To Discover tab.
	
	5. In the "Exchange Mailbox attributes to discover" section, remove the
	  Assoc-NT-Account attribute from the list.
	
	NOTE: Before you remove this attribute, make sure that it is not a required
	attribute for your directory project.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: Zoomit Via zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
