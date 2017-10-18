---
layout: page
title: "Q298969: Web Site Operator Capabilities and Limitations"
permalink: kb/298/Q298969/
---

## Q298969: Web Site Operator Capabilities and Limitations

	Article: Q298969
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists basic capabilities and limitations of a Web site operator.
	
	MORE INFORMATION
	================
	
	A Web site operator can act as a Web site administrator and can change or
	reconfigure the Web site.
	
	A Web site operator can set Web site access permissions, enable logging, change
	the default document or footer, set content expiration, and enable content
	ratings features.
	
	A Web site operator is not permitted to change the identification of Web sites,
	configure the anonymous user name or password, throttle bandwidth, create
	virtual directories or change their paths, or change application isolation.
	
	Web site operators have more limited privileges than Web site administrators. Web
	site operators are unable to remotely browse the file system, and therefore
	cannot set properties on directories and files unless a UNC path is used.
	
	To fully administer a Web site, an account must be made an administrator on the
	Microsoft Windows NT or Microsoft Windows 2000 server.
	
	To add an operator to the Web site, follow these steps:
	
	1. In the Internet Information Services snap-in, right-click the Web site and
	  click Properties.
	
	2. On the Operators tab, under Web Site Operator, click Add. This opens the Add
	  Users and Groups window.
	
	3. Either select a user or group from the Names list, or select another name
	  list from the List Names From box.
	
	4. Select a member from a group of users by clicking Members and selecting the
	  member from the window.
	
	5. Search for a user or group on a network by clicking Search.
	
	REFERENCES
	==========
	
	For additional information on Web site operators, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q227611 IIS 5.0 'Site Operators Can Administer This Site Remotely' Option
	
	  Q259076 Cannot Add Users or Groups as Operators in Default FTP and Default
	  Web Sites
	
	  Q263857 Items in the ISM Are Missing or Appear Dimmed on Windows 2000
	  Professional
	
	  Q239770 Metabase Deployment Causes Duplicate Users on Operators Tab
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
