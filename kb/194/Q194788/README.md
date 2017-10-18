---
layout: page
title: "Q194788: Windows NT Service Pack 4 and Client Certificates"
permalink: kb/194/Q194788/
---

## Q194788: Windows NT Service Pack 4 and Client Certificates

	Article: Q194788
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Explorer and attempt to connect to a Web server that
	requires Client Certificates, the browser may not display applicable Client
	Certificates. However, the Client Certificates are visible in the Authorities
	area of Internet Explorer Options.
	
	If you use Internet Information Server (IIS) 4.0 with Secure Sockets Layer (SSL)
	and you have installed a root certifying authority certificate (other than those
	issued by well-known third parties, such as VeriSign, Thawte Consulting, or
	Microsoft), you may need to reinstall the affected root certifying authority
	certificates after you install SP4. You need to do this if you are using
	Microsoft Certificate Server 1.0, which shipped with the Windows NT Option Pack.
	
	CAUSE
	=====
	
	Internet Information Server 4.0 has Windows NT Service Pack 4 installed, which
	includes an updated Capi32.dll.
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	The Iisca.exe program that resolved this issue prior to this service pack is no
	longer functional after you install Service Pack 4.
	
	The following changes must made to the Internet Information Server computer, not
	the browser computer.
	
	To reinstall the root certifying authority certificate:
	
	1. Open Internet Explorer 4.0.
	
	2. Browse to the root certifying authority certificate that you want to add. For
	  example, for Microsoft Certificate Server, go to
	  http://server/certsrv/CertEnroll/cacerts.htm and click the root certifying
	  authority certificate you want.
	
	3. Select "Save this file to disk."
	
	4. Close the browser.
	
	5. Right-click on the downloaded certificate and choose Install.
	
	6. After the Certificate Manager Import wizard has started, click Next.
	
	7. Choose to place all certificates into the following store.
	
	8. Click Browse, and then click "Show physical stores."
	
	9. Expand Trusted Root Certification Authorities, select Local Computer, and
	  then click OK.
	
	10. Click Next, and then click Finish.
	
	11. Reboot your Web server computer.
	
	NOTE: If you choose Open in step 3 instead of "Save this file to disk," the
	process may not resolve the issue.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
