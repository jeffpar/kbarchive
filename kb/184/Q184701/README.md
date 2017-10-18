---
layout: page
title: "Q184701: Distributed Password Authentication Checkbox Is Unavailable"
permalink: kb/184/Q184701/
---

## Q184701: Distributed Password Authentication Checkbox Is Unavailable

	Article: Q184701
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view the LDAP instance in the Microsoft Management Console, the
	Distributed Password Authentication checkbox is unavailable (grayed out) and
	unchecked in the Directory Security tab.
	
	MORE INFORMATION
	================
	
	Distributed Password Authentication may be enabled for access to the Membership
	Directory Service (more accurately, Distributed Password Authentication is
	enabled for authentication to the LDAP server) using the command line
	administration tool. The syntax is as follows:
	
	PMADMIN SET LDAP /ID:<membership server instance ID#> /LDAPAUTH:<auth
	type>
	
	- Where <membership server instance ID#> is the instance number of the
	  membership server, underneath which the LDAP server chosen to be managed is
	  found. (A list of membership server names and their instance ID numbers is
	  available by using the following command: PMADMIN LIST INSTANCE).
	
	- Where <auth type> is an integer value for the type of authentication
	  method. The valid integers are as follows:
	
	     1=Anonymous
	     2=Cleartext
	     4=NTLM/DPA
	
	These values are OR'ed together so any combination may be configured by setting
	the sum of the integer values (7=all types). Note that 4 enables Challenge
	Response, which is interpreted automatically as NTLM if the Membership Directory
	Service is configured for Windows NT authentication mode, and Distributed
	Password Authentication is configured for Membership authentication mode.
	
	NOTE: When you enable the Distributed Password Authentication via command line,
	it should display as enabled from the Microsoft Management Console graphical
	user interface (GUI); however, to disable the setting, you must use the command
	line.
	
	Additional query words: DPA LDAP
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : 4.0
	Issue type        : kbinfo
	
	=============================================================================
	
