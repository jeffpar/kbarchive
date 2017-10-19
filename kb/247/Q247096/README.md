---
layout: page
title: "Q247096: Tips for Making HTMLA (HTML Administrator) Secure"
permalink: /kb/247/Q247096/
---

## Q247096: Tips for Making HTMLA (HTML Administrator) Secure

	Article: Q247096
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides tips for securely using "Internet Service Manager (HTML)",
	also known as the HTML Administrator, HTMLA, Web Administrator, and WebAdmin.
	
	MORE INFORMATION
	================
	
	Use some or all of the following suggestions to more securely use the HTMLA.
	
	Restrict Directory Permissions to Inetsrv\Iisadmin:
	
	Restrict the directory permissions of the
	<%SystemRoot%>\System32\inetsrv\iisadmin directory, so that only the
	appropriate users or user groups have access to it.
	
	Disable Anonymous Access on Default Web's IISAdmin VDir:
	
	Using the Internet Service Manager Microsoft Management Console (MMC) snap-in,
	perform the following to disable anonymous access to the default Web site's
	IISAdmin virtual directory:
	
	1. Open the default Web site, right-click the IISADMIN virtual directory, and
	  then click Properties.
	
	2. Click the Directory Security tab.
	
	3. Click Edit, and then clear the Allow Anonymous Access check box.
	
	Restrict Access to the Administration Web Site:
	
	Again using the MMC snap-in, perform the following:
	
	1. Disable anonymous access to the Administration Web site and enable basic
	  authentication or challenge/response (NTLM) access:
	
	  a. Open the Property sheet of the Administration Web site, and then click the
	     Directory Security tab.
	
	  b. Click Edit, and then clear the Allow Anonymous Access check box.
	
	  c. Select either Basic Authentication or Windows NT Challenge/Response
	     (NTLM), depending on the type of authentication you want to use.
	
	2. Restrict knowledge of the Administration Web site's TCP port number: When
	  Internet Information Server is installed, a random TCP port number is created
	  for the Administration Web site. If users who should not administer Internet
	  Information Server learn this port number, you can change it and then only
	  provide the new number to users who should administer the site. To change the
	  TCP port number, open the Web Site tab on the Property sheet, and change it
	  to a value between 1024 and 9999.
	
	3. Deny access to the Administration Web site by IP address or domain name: Use
	  this feature to limit access to the Administration Web site by user IP
	  address or domain name. To do this, open the Property sheet and go to the IP
	  Address and Domain Name Restriction section of the Directory Security tab.
	
	4. Use SSL to connect with the Administration Web site: To use SSL, open the
	  Property sheet and go to the Secure Communications section of the Directory
	  Security tab.
	
	5. Use client certificates (optional): Use client certificates to better ensure
	  that users of the Administration Web site are correctly authenticated. Note,
	  however, that this involves the extra overhead of issuing client certificates
	  to all users and requiring that the users install their client certificates.
	
	Why Use HTMLA Instead of MMC?
	-----------------------------
	
	The HTMLA is commonly used to remotely administer Internet Information Server,
	particularly through a firewall or over the Internet, which may not be possible
	when using the MMC.
	
	For additional information about problems that occur when using the MMC remotely,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q218471 ISM/MMC Does Not Work Through a Firewall
	
	Additional query words: ism mmc stops responding hangs freezes metabase rename hints tricks
	
	======================================================================
	Keywords          : kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
