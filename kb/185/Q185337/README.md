---
layout: page
title: "Q185337: SMS: Existing UNC Connection to Distribution Server Not Reused"
permalink: /kb/185/Q185337/
---

## Q185337: SMS: Existing UNC Connection to Distribution Server Not Reused

{% raw %}

	Article: Q185337
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a client has an existing Universal Naming Convention (UNC) connection to a
	Microsoft Systems Management Server distribution server, Program Group Control
	(PGC) will not use that connection, but instead will randomly select a
	distribution server.
	
	If the randomly selected server is not the one to which there is currently an
	open connection, an additional connection will be made to the new server.
	
	Systems Management Server will not reuse a UNC connection, although it will use a
	drive letter connection, and consequently, will randomly select a distribution
	server.
	
	WORKAROUND
	==========
	
	This behavior is only exhibited when using a UNC connection. If a drive is
	mapped to the same location on the distribution server, Systems Management
	Server will reuse the connection.
	
	NOTE: Although you can use a drive mapping to reuse a connection to a
	distribution server, this connection must be to the distribution location on the
	server. A connection to another share on the same server will not result in a
	reused connection and a server will be randomly selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms VSMSNET UNC distribution
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
