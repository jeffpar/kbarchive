---
layout: page
title: "Q171675: FP: Socket Code 13101 Error Opening, Creating New Web"
permalink: kb/171/Q171675/
---

## Q171675: FP: Socket Code 13101 Error Opening, Creating New Web

	Article: Q171675
	Product(s): Word Front Page
	Version(s): 1.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta kbExtension kbFrontPage kbServer kbVisID100
	Last Modified: 22-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194449.
	
	SYMPTOMS
	========
	
	In FrontPage Explorer, when you open or create a new Web using Secure Sockets
	Layer (SSL) you receive one of the following error messages
	
	  There is no server on port 443 at 'server name'. You have selected the option
	  'Connect Using SSL'. This connection problem may indicate that the server
	  does not support Secure Socket Layer (SSL) communications, or that it uses
	  SSL communications on a different port number.
	
	  -or-
	
	  Unable to connect to server at 'xxx.xxx.xxx.xxx' on port 443 (socket code
	  13101).
	
	where xxx.xxx.xxx.xxx represents the host name or Internet Protocol (IP) address
	of your FrontPage Web.
	
	CAUSE
	=====
	
	SSL connections require a security certificate. Socket code 13101 is generated
	when the security certificate is not from a recognized certificate authority or
	when it is from a recognized certificate authority but it cannot be read by
	FrontPage.
	
	RESOLUTION
	==========
	
	Method 1: Obtain a Certificate from a Recognized Authority
	----------------------------------------------------------
	
	FrontPage 97 only recognizes certificates signed by the following certificate
	authorities:
	
	  Verisign-Secure Server Certification Authority
	  RSA Data Secirity, Inc.
	  AT&T-Certificate Services
	  AT&T-Directory Services
	
	If your certificate is from a recognized authority, its public key may not start
	with a "1" bit. In this case, contact the authority to request a new certificate
	with a public key that has its high bit set to "1."
	
	Method 2: Upgrade to FrontPage 98
	---------------------------------
	
	FrontPage 98 can correctly read public keys that begin with values other than 1
	if they are from a recognized certificate authority.
	
	NOTE: Neither FrontPage 97 nor FrontPage 98 support 128-bit encryption.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	SSL is a World Wide Web feature that supports data encryption and server
	authentication. All data sent to or from the client using SSL is encrypted.
	
	You can obtain digital certificates from Verisign or AT&T. For additional
	information, please visit either of the following Web sites:
	
	  http://www.verisign.com/microsoft/
	
	  http://www.att.com
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q142748 Obtaining a Secure Sockets Layer (PCT/SSL) Digital Certificate
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact the third-party vendors listed in this
	article, click the appropriate article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: iStudio front page
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta kbExtension kbFrontPage kbServer kbVisID100 
	Technology        : kbHWMAC kbOSMAC kbVisIDsearch kbFrontPageSearch kbAudDeveloper kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbVisID100 kbVisID600 kbFrontPageMacSearch
	Version           : :1.0,6.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
