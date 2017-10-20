---
layout: page
title: "Q313251: HOW TO: Set Up Anon and Basic Authentication on Same Web Content"
permalink: /kb/313/Q313251/
---

## Q313251: HOW TO: Set Up Anon and Basic Authentication on Same Web Content

{% raw %}

	Article: Q313251
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 19-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Configure an IIS Web Server
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to set up both Anonymous and Basic
	authentication on the same Web content.
	
	Configure an IIS Web Server
	---------------------------
	
	Your network may contain a firewall to protect one or more IIS Web servers. You
	may want to set up a Web site so that internal network users can access the Web
	content with Anonymous authentication (that is, internal network users are not
	required to provide a user name and password). However, because external
	requests are routed through a firewall, external users must connect to the site
	with Basic authentication (which should be used in conjunction with SSL
	encryption).
	
	To set up Anonymous and Basic authentication on the same Web content, follow
	these steps:
	
	NOTE: In the following example, the Web content is stored in the
	E:\Inetpub\WWWroot\Test Site folder.
	
	1. Open the IIS Microsoft Management Console (MMC) Internet Services Manager.
	
	2. Create a new Web site and name it External Site.
	
	3. Bind External Site to a static IP address that maps to a Fully Qualified
	  Domain Name (FQDN) from an authorized registrar (for example,
	  Externaluser.Mysite.com), and make sure that External Site points to
	  E:\Inetpub\WWWroot\Test Site.
	
	4. Install a server certificate on External Site. Set the site to use Basic
	  authentication only.
	
	5. On the Domain Name System (DNS) Server, create a new host record. Obtain the
	  static IP address that is described in step 3.
	
	6. Create a new site and name it Internal Site. Set the IP address to All
	  Unassigned. Set the local path for Internal Site to E:\Inetpub\WWWroot\Test
	  Site.
	
	7. Set the authentication on Internal Site to Integrated Windows authentication
	  (IIS 5.0), Windows NT Challenge/Response (IIS 4.0), or Anonymous
	  authentication, depending on your needs.
	
	REFERENCES
	==========
	
	For additional information on setting up SSL and DNS, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q299525 HOWTO: Set Up SSL Using IIS 5.0 and Certificate Server 2.0
	
	  Q168322 Creating a DNS Alias Record
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
