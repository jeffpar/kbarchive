---
layout: page
title: "Q254047: Using SSL with Internet Information Server May Cause Browser Err"
permalink: kb/254/Q254047/
---

## Q254047: Using SSL with Internet Information Server May Cause Browser Err

	Article: Q254047
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user connects to an IIS site that uses SSL, the browser may encounter a
	problem. Specifically, Internet Explorer may generate an error message (usually
	a Dr. Watson in Windows NT or a General Protection Fault in Windows 95/98) for
	the Schannel.dll file.
	
	Note: Netscape Navigator does not use the standard Windows Schannel.dll file.
	When you are connecting with Netscape, you are notified that an error occurred
	in the secure communication.
	
	CAUSE
	=====
	
	This problem can be caused when the server certificate (intermediate, non-root
	certificate) installed on IIS has the same Subject and Issuer. For example, if
	the certificate's Issued to: and Issued by: fields both contain "Microsoft."
	
	When Schannel processes the request, it sees this certificate as being
	self-signed (in other words, a root Certificate Authority certificate). Schannel
	does not allow these to be sent out, and therefore sends the client no server
	key. The client, not expecting this, does not know how to process this error.
	
	RESOLUTION
	==========
	
	This problem in the Schannel.dll file has been corrected in Internet Information
	Services 5.0 for Windows 2000.
	
	Note: The server certificate must be deleted and re-installed.
	
	WORKAROUND
	==========
	
	To work around this problem, delete the server certificate, and then create a
	new server certificate with a different Subject and Issuer. You can delete the
	existing certificate, by doing the following:
	
	1. Start Internet Explorer on the IIS computer.
	
	2. From the Internet Options menu, click the Content tab.
	
	3. In the Intermediate Certification Authorities list, remove the server
	  certificate.
	
	For additional information how to install a new certificate, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: iis 5 ssl certificate ie
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
