---
layout: page
title: "Q185008: XADM: Err. Msg.: Information Store Fails to Start with Error 429"
permalink: /kb/185/Q185008/
---

## Q185008: XADM: Err. Msg.: Information Store Fails to Start with Error 429

{% raw %}

	Article: Q185008
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The information store fails to start with Server-specific error 4294966090 after
	an offline restore of a private information store or public information store.
	
	The application event viewer log displays the following events:
	
	  Event ID:  5000
	  Source: MSExchange IS
	  Type:  Error
	  Description: Unable to initialize the Microsoft Exchange Information
	  Store service. Error non-database file or corrupted database.
	
	  Event ID: 1120
	  Source: MSExchange IS
	  Type:  Error
	  Description: Error non-database file or corrupted database initializing
	  the Microsoft Exchange Server information store database.
	
	CAUSE
	=====
	
	The information store being restored is not an Exchange Server 5.5 information
	store.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Restore the information store from an online backup or an offline copy of an
	  Exchange Server 5.5 information store.
	
	-OR-
	
	- Restore the incorrect version information store to its proper environment by
	  installing the version of Exchange Server that corresponds with the version
	  of the offline copies of the Priv.edb and/or Pub.edb files.
	
	MORE INFORMATION
	================
	
	Server-specific error 4294966090 refers to Jet Error -1206 0xFFFFFB4A
	JET_errDatabaseCorrupted non-db file or corrupted db.
	
	For additional information about other causes for server-specific error
	4294966090 or error -1206, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q181824 XADM: Exchange Database Engine Doesn't Detect Removed Page in B-tree
	  Split Operation
	
	  Q195856 XADM: How to Detect and Remove Long Values in Exchange Databases
	
	  Q233295 Error -1206 Starting Database
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
