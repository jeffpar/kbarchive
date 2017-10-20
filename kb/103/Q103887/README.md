---
layout: page
title: "Q103887: Password Encryption"
permalink: /kb/103/Q103887/
---

## Q103887: Password Encryption

{% raw %}

	Article: Q103887
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	SUMMARY
	=======
	
	PASSWORD ENCRYPTION
	-------------------
	
	The only presentation layer functionality currently implemented in Microsoft
	networks is the password encryption function provided by the redirector and
	supported by the server service.
	
	Microsoft network systems provide resource protection by means of an elaborate
	security subsystem. Users must provide identification and receive authentication
	before being granted access to protected resources. An account is created for
	each network user in the server's user accounts database. The administrator
	specifies a password and other logon restrictions, based on security policy, for
	each account created.
	
	In concert with the server service, the redirector's double encryption mechanism
	ensures that whenever password verification is required--at logon and each time
	the user requests a connection to a new server--no actual password information
	is transmitted on the network.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
