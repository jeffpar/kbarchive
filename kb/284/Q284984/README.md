---
layout: page
title: "Q284984: Event ID 115 When Attempting to Connect to Web Site Using HTTPS"
permalink: kb/284/Q284984/
---

## Q284984: Event ID 115 When Attempting to Connect to Web Site Using HTTPS

	Article: Q284984
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Web site by using HTTPS, the following error
	message occurs in Microsoft Internet Explorer:
	
	  This page cannot be displayed
	
	The following information occurs in the Event Logs:
	
	  Event Type: Error
	  Event Source: W3SVC
	  Event ID: 115
	  Description: The service could not bind instance 1. The data is the error
	  code. For additional information specific to this message please visit the
	  Microsoft Online Support site located at:
	  http://www.microsoft.com/contentredirect.asp.
	  Data: 0000: 34 00 00 00 4...
	
	NOTE: The "instance" in the error description refers to the Web site number. As
	Web sites are added to IIS, they are incrementally numbered. This error
	indicates that the Default Web Site (or site number 1) is having problems.
	Specifically, in this example "Event ID: 115" refers to the SSL portion of the
	Default Web Site not being able to start. "Event ID: 113" refers to the port 80
	bindings (non-SSL) having difficulty starting.
	
	CAUSE
	=====
	
	This error can occur for several reasons, but basically, IIS is not able to bind
	to the port or IP address specified in your settings, because another program or
	service is already using them. For examples of this problem, and possible
	resolutions, see the "Workaround" section of this article.
	
	WORKAROUND
	==========
	
	Example 1:
	
	Web site number 3 has the following settings:
	
	  IP address assigned as 192.168.0.1
	  TCP Port assigned as 80
	  SSL Port assigned as 443
	  Host Header of www.company.com
	
	Web site number 10 has the following settings:
	
	  IP address assigned as 192.168.0.1
	  TCP Port assigned as 80
	  SSL Port assigned as 443
	  Host Header of www.different.com
	
	To host multiple Web sites on IIS, each Web site must be unique by using
	different IP addresses, different port numbers, or different Host Headers. In
	this example, the settings seem to be correct, because the Host Header on each
	site is different. For the purpose of SSL, however, Host Headers cannot be used,
	which means that the SSL portion of the Web sites have the same settings. As the
	Web service initializes, it can start the first Web site completely. When it
	tries to start Web site 10, it can start the port 80 portion, but cannot start
	the port 443 portion, which causes the Event ID 115 error. To resolve this
	particular problem, assign one of these Web sites a different IP address, so
	that they are unique for both TCP and SSL.
	
	Example 2:
	
	Web site number 3 has the following settings:
	
	  IP address assigned as "All Unassigned"
	  TCP Port assigned as 80
	  SSL Port assigned as 443
	  Host Header is blank since we cannot use it with SSL
	
	Web site number 10 has the following settings:
	
	  IP address assigned as 192.168.0.1
	  TCP Port assigned as 80
	  SSL Port assigned as 443
	  Host Header is blank since we cannot use it with SSL
	
	In this example, there are unique settings for both SSL and TCP, because Web site
	1 is not bound to any particular IP address, and Web site 10 is bound to a
	particular IP address. If you are using SSL, when the SSL portion of Web site 1
	initializes, it essentially binds to all IP addresses on port 443, which causes
	Event ID 115 on instance 10.
	
	Example 3:
	
	If you have assigned each SSL Web site a unique IP address and you still receive
	an Event ID 115, there may be some Advanced settings on a web site which are
	preventing the SSL portions of your Web sites from being unique. To view these
	settings go into the Properties for each Web site and click Advanced on the Web
	Site tab. You will see a section called Multiple SSL Identities for this Web
	Site. If the Web site only has one IP address assigned to it ensure that there
	is also only one SSL identity.
	
	Example 4:
	
	If all else fails, it is likely that another program or service is running on
	your computer that is already bound to port 443. If this is the case, all of
	your Web sites (instances) that use SSL are logged with an Event ID 115. To
	verify this, use the following steps:
	
	1. From a command prompt, type "net stop iisadmin" (without the quotation
	  marks), and then press ENTER to stop the IISADMIN service.
	
	  NOTE: You may need to stop other IIS services.
	
	2. Type "netstat -an" (without the quotation marks), and then press ENTER. (If
	  the output is too long, you may need to pipe the output by using "| more"
	  (without the quotation marks) or "> output.txt" (without the quotation
	  marks).)
	
	3. Look for "0.0.0.0:443" or any other IP address ending in ":443" under the
	  Local Address column. 0.0.0.0 means something is bound to all IP addresses
	  onport 443 and 192.0.0.1:443 (this is only an example) means something is
	  bound to the IP address of 192.0.0.1 on port 443. If after the IISADMIN
	  service is stopped, if you see "0.0.0.0:443," then something else is bound
	  and listening on port 443 other than IIS. To allow your web sites to run
	  properly stop the other program that is using port 443.
	
	Additional query words: iis 5 4
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
