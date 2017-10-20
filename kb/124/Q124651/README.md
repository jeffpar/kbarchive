---
layout: page
title: "Q124651: Err Msg: No Domain Server Was Available to Validate Your..."
permalink: /kb/124/Q124651/
---

## Q124651: Err Msg: No Domain Server Was Available to Validate Your...

{% raw %}

	Article: Q124651
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to log on to a Microsoft Windows NT or Microsoft LAN Manager domain
	through Windows for Workgroups, the following error message may appear:
	
	  No domain server was available to validate your password. You were logged on
	  without password validation.
	
	Even though you receive this error, you may still be able to gain access to
	Windows NT and LAN Manager resources.
	
	MORE INFORMATION
	================
	
	There are a variety of reasons for receiving the above error (such as
	incompatible protocols being used, improper configuration of the domain name
	under Windows for Workgroups, and so forth). Some of these causes do not result
	in the inability to connect to Windows NT and LAN Manager resources.
	
	
	If you have the appropriate permissions through your user ID and password
	combination and the server is online and accessible, you can continue to use
	Windows for Workgroups and connect to LAN Manager and Windows NT resources, even
	after receiving this error. That is, your access to Windows NT and LAN Manager
	servers is based on the access rights assigned to your user ID and password
	combination at the server being accessed, not by the success or failure of your
	initial logon.
	
	For additional information about logon validation and reasons for the above
	error, search for the following key words in the Microsoft Knowledge Base.
	
	  password and validation and server
	
	Additional query words: 3.11 lanman winnt authentication
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
