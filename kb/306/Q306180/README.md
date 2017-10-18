---
layout: page
title: "Q306180: Client Certificate Window Doesn't Display All Certificates"
permalink: kb/306/Q306180/
---

## Q306180: Client Certificate Window Doesn't Display All Certificates

	Article: Q306180
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When it connects to your Internet Information Server (IIS) 4.0 server, a browser
	that needs to provide a client certificate may not show client certificates that
	originate from a certain Certification Authority. This may occur even after you
	have imported the Certification Authority root certificate into the IIS 4.0
	server's Trusted Root Certification Authorities certificate store.
	
	CAUSE
	=====
	
	The IIS 4.0 server to which you are connecting does not have the Certificate
	Authority's root certificate installed correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps to reinstall the Certificate
	Authority's root certificate on the IIS computer:
	
	1. On the IIS server, start Microsoft Internet Explorer.
	
	2. On the Tools menu, click Internet Options.
	
	3. On the Content tab, click Certificates.
	
	4. Click the Trusted Root Certification Authorities tab, and remove any
	  certificates that point to the Certificate Authority that issued the client
	  certificates. To do this, select the certificate that you want to remove,
	  click Remove, and then click Yes for each dialog box that you receive.
	
	5. Click Close, then click OK to clear any remaining dialog boxes.
	
	6. Obtain a copy of the Certificate Authority root certificate.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	7. Right-click the Certificate Authority root certificate and click Install.
	
	8. After the Certificate Manager Import Wizard has started, click Next.
	
	9. Select Place all certificates into the following store.
	
	10. Click Browse, and then click Show physical stores.
	
	11. Expand Trusted Root Certification Authorities, select Local Computer, and
	  then click OK.
	
	12. Click Next, and then click Finish.
	
	13. Restart your Web server computer.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q231718 Client Certificates May Not Appear in Internet Explorer
	
	  Q216782 Internet Explorer Displays a Blank Personal Certificate List
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
