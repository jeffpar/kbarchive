---
layout: page
title: "Q272187: XADM: Error Message When Viewing the Organization Forms Library"
permalink: kb/272/Q272187/
---

## Q272187: XADM: Error Message When Viewing the Organization Forms Library

	Article: Q272187
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Forms Administrator on the Tools menu in the Microsoft Exchange
	Server Administrator program to view the Organization Forms Library, you may
	receive the following error message:
	
	  One or more forms in the form library could not be loaded. The contents of
	  this public folder are currently unavailable. Either the Microsoft Exchange
	  Server computer servicing this public folder is down or the public folder has
	  not been replicated to this site. See your administrator.
	
	When you click OK, the Forms Administrator tool is displayed.
	
	In addition, when you try to view the properties of an Organization Forms Library
	in EFORMS REGISTRY in the Public Folder hierarchy, you may receive the following
	error message:
	
	  The contents of this public folder are currently unavailable. Either the MS
	  Exchange computer servicing this public folder is down or the public folder
	  has not been replicated to this site. See your administrator.
	  Microsoft Exchange Server Information Store
	  ID no: 80004005-0507-00000000
	
	CAUSE
	=====
	
	This issue can occur in the following scenario:
	
	- The organization is using decentralized administration between sites
	  (different administrators with no trusts).
	
	- There are multiple Organization Forms Libraries of either the same language
	  or multiple languages throughout the organization.
	
	- Local replica is not available in the site.
	
	- Public Folder affinity is not being used.
	
	A list of Organization Forms Libraries may be displayed in the Public Folder
	hierarchy in System Folders/EFORMS REGISTRY, but you cannot view the
	Organization Forms libraries in Forms Administrator.
	
	WORKAROUND
	==========
	
	To resolve this issue, use a centralized site to manage an Organization Forms
	Library for each language that is used (one library for each language in the
	organization). Also, use either of the following methods in the organization:
	
	- Replicate each Organization Forms Library (one library for each language for
	  each organization) in EFORMS REGISTRY to at least one Public Folder server in
	  each site in the organization.
	
	  -or-
	
	- Configure Public Folder affinity to each site in the organization, and ensure
	  that at least a one-way trust is configured.
	
	For additional information about Public Folder affinity and multiple domains,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q229565 XADM: Public Folder Affinity and Multiple Domains
	
	When you complete either of these methods, multiple copies of the Organization
	Forms Library of the same language are not created in the organization.
	
	NOTE: It is recommended that you carefully plan how you want to replicate the
	Organization Forms Library to each site. You must consider how the client
	computer uses the Organization Forms Library.
	
	MORE INFORMATION
	================
	
	For additional information about how to use the Organization Forms Library,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q253526 XADM: Organizational Forms Library and Different Languages
	
	Additional query words: organizational replication OST Synchronization Org Locale Locales Synch 80004005-507-0-522 8004010F-501-0-521
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
