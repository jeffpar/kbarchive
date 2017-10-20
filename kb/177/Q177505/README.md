---
layout: page
title: "Q177505: How to Use Personalization Server w/ Anonymous Authentication"
permalink: /kb/177/Q177505/
---

## Q177505: How to Use Personalization Server w/ Anonymous Authentication

{% raw %}

	Article: Q177505
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Site Server version 2.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Microsoft Personalization Server to work
	on Internet Information Server version 4.0 using Anonymous authentication.
	Anonymous logins are common when accessing the Web. Web administrators will want
	to enable anonymous login capabilities when their Web sites are being accessed
	by Internet users.
	
	MORE INFORMATION
	================
	
	1. In the Microsoft Management Console, select Default Web Site, and then click
	  Properties on the context menu.
	
	2. Click the Directory Security tab, and then click the Edit button for
	  Anonymous Access and Authentication Control.
	
	3. Click the Edit button on the Authentication Methods tab. This will bring up
	  the Anonymous User Account dialog box, which contains the Enable Automatic
	  Password Synchronization checkbox and an Edit box to change the password.
	
	4. Add a password, then close Anonymous User Account dialog box and enter the
	  same password for the account in the Windows NT User Manager for Domains.
	
	5. If the files are stored on a different computer than the Web server, do one
	  of the following:
	
	   - Enable the guest account on the file server
	
	   - Create an account on the file server with the same name and password as
	     the anonymous account used by the Web server.
	
	  In either case, you must make sure that the account has access to the share on
	  which the propdb files are stored.
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbSiteServ200
	Version           : WINNT:2.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
