---
layout: page
title: "Q298559: How to Load Balance Web Traffic Between Two IIS Servers"
permalink: kb/298/Q298559/
---

## Q298559: How to Load Balance Web Traffic Between Two IIS Servers

	Article: Q298559
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up certificates for secure communication
	between servers and Web clients when the servers are load balanced.
	
	MORE INFORMATION
	================
	
	To install certificates on load balanced Web servers, install the same key on
	all the servers that are being load balanced. To do this, follow these steps:
	
	1. Install the certificate on the first Web site.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q228991 How to Create and Install an SSL Certificate in IIS 4.0
	
	2. Export the key to the other server in the load balance. To do this, follow
	  these steps:
	
	  a. Open the Microsoft Management Console (MMC) for IIS and expand the
	     Internet Information Server folder.
	
	  b. Click the plus sign (+) sign next to the computer name.
	
	  c. The default Web site is available now. Right-click the Default Web Site
	     icon, click Properties, and then click the Directory Security tab.
	
	  d. In Secure Communications, click the Edit button.
	
	     NOTE: If the button reads Key Manager instead of Edit, you do not have an
	     encryption certificate for the WWW service installed.
	
	  e. In the second Secure Communications window, click Key Manager.
	
	  f. In Key Manager, under Local Computer, select WWW.
	
	  g. On the Key menu, click Export Key.
	
	  h. Click Backup File and note the location where the file is stored. Copy the
	     backup file to the other server that is being load balanced and note the
	     location where it is copied.
	
	3. Import the key onto the other Web servers that are being load balanced. To do
	  this, follow these steps:
	
	  a. Open the Microsoft Management Console (MMC) for IIS and expand the
	     Internet Information Server folder.
	
	  b. Click the plus sign (+) sign next to the computer name.
	
	  c. The default Web site is available now. Right-click the Default Web Site
	     icon, click Properties, and then click the Directory Security tab.
	
	  d. In Secure Communications, click the Key Manager button.
	
	     NOTE: If the button reads Edit instead of Key Manager, you already have an
	     encryption certificate for the WWW service installed. You must delete this
	     key before you proceed.
	
	  e. In Key Manager, select WWW.
	
	  f. On the Key menu, click Import Key.
	
	  g. Click Backup File and browse to the location where the file was copied.
	
	  h. Commit the changes and ensure that port 443 is entered in the SSL field on
	     the Web Site tab within the default Web site.
	
	You can now load balance SSL Web traffic between the server on which the
	certificate was originally installed along with the server where the certificate
	was imported to.
	
	REFERENCES
	==========
	
	For more information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q219277 Load Balancing HTTP with WLBS
	
	Additional query words: iis 5, load balance, certificates, SSL
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
