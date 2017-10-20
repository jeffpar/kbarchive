---
layout: page
title: "Q123423: Err Msg: No Domain Server Was Available to Validate Your..."
permalink: /kb/123/Q123423/
---

## Q123423: Err Msg: No Domain Server Was Available to Validate Your...

{% raw %}

	Article: Q123423
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	When you try to log on to a Microsoft Windows NT or Microsoft LAN Manager
	domain through Microsoft Windows for Workgroups, the following error
	message appears:
	
	  No domain server was available to validate your password. You were logged on
	  without password validation.
	
	This error can occur if the domain name specified in the Domain Name field
	of the Startup Settings dialog box is invalid (that is, no Windows NT or
	LAN Manager domain by that name exists). To check this setting, use the
	following procedure:
	
	1. From Control Panel, choose Network.
	
	2. In the Microsoft Windows Network dialog box, choose the Startup icon.
	
	3. Verify the domain name listed in the Domain Name field of the Startup
	  Settings dialog box and make sure Log On to Windows NT or LAN Manager Domain
	  is selected.
	
	You can also find the domain name on the LogonDomain line in the [Network]
	section of the SYSTEM.INI file.
	
	Note that even though you may be able to browse the domain and connect to
	network shares, you still need to be validated when logging on if you have
	a logon script that needs to run.
	
	NOTE: A common problem is putting a space in the computername. This is an
	invalid computername.
	
	This is only one reason why you may not be validated. For additional
	information on logon validation and other reasons for the above error,
	search for the following keywords in the Microsoft Knowledge Base.
	
	  password and validation and server
	
	Additional query words: 3.11 wfw wfwg lanman winnt authentication
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
