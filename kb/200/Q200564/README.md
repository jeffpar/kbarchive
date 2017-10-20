---
layout: page
title: "Q200564: XFOR: Cc:Mail Migration Fails with Event ID 238, 8149 and 8002"
permalink: /kb/200/Q200564/
---

## Q200564: XFOR: Cc:Mail Migration Fails with Event ID 238, 8149 and 8002

{% raw %}

	Article: Q200564
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate users from a Lotus cc:Mail post office using the Migration
	wizard, the migration process may fail. The following event IDs may be logged in
	the event viewer:
	
	  Event ID: 238
	  Source: MSExchangeMigDS
	  Type: Error
	  Category: None
	  Description: The e-mail address specified for import object <cc:Mail
	  address> is not unique. <cc:Mail addres> has already been assigned
	  to the address book entry <X400 address>.
	
	  Event ID: 8149
	  Source: MSExchangeMig
	  Type: Error
	  Category: None
	  Description: Directory Section <Location of migration temporary
	  files>\Directory.pri Line:5 Unknown DAPI error occurred importing this
	  line. (See error logged by 'MSEXCHANGEMigDS')
	
	  Event ID: 8002
	  Source: MSExchangeMig
	  Type: Error
	  Category: None
	  Description: Errors occurred during the Migration process. A recovery file has
	  been created called <drive>\<path>\xxxxxxxx.PRI.
	
	CAUSE
	=====
	
	The cc:Mail user account custom recipient object exists in the Exchange Server
	directory. This error normally occurs if the cc:Mail post office has been
	participating in directory synchronization with Exchange Server.
	
	RESOLUTION
	==========
	
	Ensure that the cc:Mail user account that is being migrated is not in the
	Exchange Server directory. Also verify that the custom recipient account is not
	hidden.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
