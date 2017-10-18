---
layout: page
title: "Q300398: IIS:  Cannot Create a 128-bit SSL Session with IIS"
permalink: kb/300/Q300398/
---

## Q300398: IIS:  Cannot Create a 128-bit SSL Session with IIS

	Article: Q300398
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install a 128-bit high encryption certificate onto Internet Information
	Server (IIS) version 4.0 or 5.0, then browse with a 128-bit enabled Web browser
	to IIS by using https://. However, the Web browser only makes a 40-bit or 56-bit
	Secure Sockets Layer (SSL) session with IIS. If you open the Internet Services
	Manager and edit the Secure Communication property to Require 128-bit
	encryption, you may receive the following error message when you browse to IIS:
	
	  HTTP Error 403
	  403.5 Forbidden: SSL 128 required
	
	  This error message indicates that the resource you are trying to access is
	  secured with a 128-bit version of Secure Sockets Layer (SSL). In order to
	  view this resource, you need a browser that supports this level of SSL.
	
	  Please confirm that your browser supports 128-bit SSL security. If it does,
	  then contact the Web server's administrator and report the problem.
	
	CAUSE
	=====
	
	The server that is hosting IIS does not have the Windows High Encryption Pack
	installed. If the encryption level is not 128-bit, IIS cannot create a 128-bit
	SSL session.
	
	RESOLUTION
	==========
	
	Update Microsoft Windows with the High Encryption pack.
	
	NOTE: The Windows High Encryption Pack is the same as the Microsoft Internet
	Explorer High Encryption Pack.
	
	Windows NT 4.0
	
	The High Encryption Pack can be installed onto Windows NT 4.0 by updating to the
	High Encryption version of the latest Windows NT Service Pack. For additional
	information on how to obtain the latest service pack, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	Windows 2000
	
	The Windows 2000 High Encryption Pack is available for download from the
	following Microsoft Web site:
	
	  Windows 2000 High Encryption Pack
	  http://www.microsoft.com/windows2000/downloads/recommended/encryption/
	
	MORE INFORMATION
	================
	
	To verify the encryption level that is installed, open Microsoft Internet
	Explorer on the IIS server computer and click About Internet Explorer on the
	Help menu. In the About Internet Explorer dialog box, the encryption level is
	listed next to Cipher Strength.
	
	Additional query words: iis 5 4 sgc Verisign key lock
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
