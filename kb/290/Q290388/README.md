---
layout: page
title: "Q290388: HOW TO: Determine if a VeriSign SGC Is Being Used on a Web Site"
permalink: /kb/290/Q290388/
---

## Q290388: HOW TO: Determine if a VeriSign SGC Is Being Used on a Web Site

	Article: Q290388
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 22-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Identify an SGC Certificate
	
	SUMMARY
	=======
	
	When you connect to a Web site through Secure Sockets Layer (SSL), you are
	probably accessing the site and using some type of a certificate on the site.
	The most common types of certificates are:
	
	- 40-bit
	
	- 128-bit
	
	- Server Gated Cryptography (SGC)
	
	This step-by-step article describes how to identify a VeriSign SGC certificate.
	This is important information when troubleshooting SSL issues, because you may
	not know whether or not a SGC certificate is installed.
	
	SGC stands for "Server Gated Cryptography." You will also see the term "Global
	ID." These terms are synonymous with VeriSign. This type of certificate permits
	40-bit browsers to make 128-bit connections. This type of certificate was used
	because of export laws before these laws were lifted for most countries.
	
	Identify an SGC Certificate
	---------------------------
	
	To identify an SGC certificate when you connect to a site by using HTTPS, either
	connect with a 40-bit browser and point to the padlock to see "128 bit", or
	follow these steps:
	
	NOTE: You can only use this method with Microsoft Internet Explorer 5.0 and
	later.
	
	1. Connect to the site through HTTPS, and then double-click the padlock in the
	  lower right of your browser to view the certificate.
	
	2. Click the Details tab, click All, and then select Enhanced Key Usage. In the
	  bottom pane, you see the following:
	
	      - Unknown Key Usage(2.16.840.1.113730.4.1)
	
	   - Unknown Key Usage(1.3.6.1.4.1.311.10.3.3)
	
	If you do not see Enhanced Key Usage, you are not using an SGC certificate.
	
	Note that your browser, whether it is 40-bit, 56-bit, or 128-bit, will establish
	a 128-bit cipher strength connection if the server has an SGC certificate.
	
	Additional query words: SSL SGC Server Gated Cryptography Global ID Secure Sockets Layer VeriSign
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
