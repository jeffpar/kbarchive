---
layout: page
title: "Q197330: XFOR: Configuring LDAP/IMAP Migration Wizard for Exchange"
permalink: /kb/197/Q197330/
---

## Q197330: XFOR: Configuring LDAP/IMAP Migration Wizard for Exchange

{% raw %}

	Article: Q197330
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may want to check that the migration wizard is working by testing it against
	your Exchange Server computers. The new Lightweight Directory Access Protocol
	(LDAP)/Internet Messaging Access Protocol (IMAP) migration wizard requires a
	change in the Mlmigad.ini file in order for it to work with Exchange Server
	computers. This article explains how to test the LDAP/IMAP migration wizard.
	
	MORE INFORMATION
	================
	
	To test the LDAP/IMAP migration wizard, perform the following steps:
	
	1. Locate the Mlmigad.ini file in the Exchsrvr\Bin directory.
	
	2. Open the Mlmigad.ini file and locate the following section:
	
	     [OBJECT_MAP]
	     ; ADSI_ObjectClass is used to determine which objects are mail users.
	     ADSI_ObjectClass=inetOrgPerson
	
	3. Change it to the following:
	
	     [OBJECT_MAP]
	     ; ADSI_ObjectClass is used to determine which objects are mail users.
	     ADSI_ObjectClass=organizationalPerson
	
	4. Save and then close the file. When you run the LDAP/IMAP migration wizard,
	  the recipients will show up correctly.
	
	NOTE: The default LDAP schema settings for the LDAP/IMAP migration wizard do not
	work with Exchange Server computers, because the migration wizard was designed
	to migrate other LDAP servers to Exchange Server.
	
	Depending on the LDAP implementation, you will need to customize the various
	schema names in the mlmigad.ini file to match your LDAP server's naming
	convention.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
