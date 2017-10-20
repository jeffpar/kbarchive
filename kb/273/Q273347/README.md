---
layout: page
title: "Q273347: Dirsync Server and Remote Requestor Objects Not Removed"
permalink: /kb/273/Q273347/
---

## Q273347: Dirsync Server and Remote Requestor Objects Not Removed

{% raw %}

	Article: Q273347
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remove a Microsoft Mail Connector that is configured with a directory
	synchronization (dirsync) server and a remote dirsync requestor, the Dirsync
	Server and Remote Dirsync Requestor objects may remain in the Connectors tree.
	All other Microsoft Mail Connector objects are deleted as expected.
	
	When you delete the Dirsync Server object manually, the following error message
	may appear:
	
	  An invalid ADSI pathname was passed.
	  ID no : 80005000 Exchange System Manager
	
	When you delete the Remote Dirsync Requestor object, the following error message
	may appear:
	
	  The requested operation did not satisfy one or more constraints associated
	  with the class of the object.
	  LDAP Provider
	  ID no : 80072014 Exchange System Manager
	
	CAUSE
	=====
	
	This issue can occur if an Exchange Server administrator created these objects
	during Microsoft Mail Connector configuration, instead of their being created
	automatically during Setup.
	
	RESOLUTION
	==========
	
	To work around this issue, delete the objects manually and just click through
	the error messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 2000 Server.
	
	MORE INFORMATION
	================
	
	If you need to remove the Microsoft Mail Connector, first delete the Dirsync
	Server and Remote Dirsync Requestor objects, and then remove the connector.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
