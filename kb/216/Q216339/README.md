---
layout: page
title: "Q216339: Using SSL, Root Certifying Authority Certificates, and Iisca.exe"
permalink: /kb/216/Q216339/
---

## Q216339: Using SSL, Root Certifying Authority Certificates, and Iisca.exe

{% raw %}

	Article: Q216339
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Internet Information Server (IIS) 4.0 with secure sockets layer (SSL)
	and you install a root certifying authority certificate (other than those issued
	by well-known third parties, such as VeriSign, Thawte Consulting, or Microsoft),
	you may need to reinstall the affected root certifying authority certificates
	after you install SP4. You must do this if you're using Microsoft Certificate
	Server 1.0, which shipped with the Windows NT Option Pack (NTOP).
	
	MORE INFORMATION
	================
	
	To reinstall the root certifying authority certificate, do the following:
	
	1. Open Internet Explorer 4.0.
	
	2. Browse to the root certifying authority certificate that you want to add.
	
	For example, for Microsoft Certificate Server, go to
	http://server/certsrv/CertEnroll/cacerts.htm and click the root certifying
	authority certificate you want.
	
	3. Select Open this file from its current location, and then click OK.
	
	4. Click Install certificate.
	
	5. After the Certificate Manager Import wizard has started, click Next.
	
	6. Select Place all certificates into the following store.
	
	7. Click Browse, and then click Show physical stores.
	
	8. Expand the Trusted Root Certification Authorities, select Local Computer, and
	then click OK.
	
	9. Click Next, and then click Finish.
	
	10. Restart your Web server.
	
	NOTE: There is no longer any need to use the Iisca.exe tool.
	
	Additional query words: iisca SP4 certificate ca
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
