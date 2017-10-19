---
layout: page
title: "Q294305: IIS Returns HTTP 403.13 Err Msg Although Certificate Not Revoked"
permalink: /kb/294/Q294305/
---

## Q294305: IIS Returns HTTP 403.13 Err Msg Although Certificate Not Revoked

	Article: Q294305
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse to a Web site that is set to require client certificates, you
	may receive the following HTTP error message even if you are sure that the
	client certificate has not been revoked:
	
	  403.13 Client Certificate Revoked
	
	CAUSE
	=====
	
	By default, Internet Information Services (IIS) checks to see if the client
	certificate that is being presented has been revoked. It does this by
	downloading the client certificate's Certificate Revocation List (CRL) from a
	Certificate Distribution Point (CDP) that is listed as part of the client
	certificate. If IIS is unable to download at least one of the CRLs of the client
	certificate, the HTTP error message is displayed in the client's browser.
	
	RESOLUTION
	==========
	
	For each certificate in the chain that has a CDP listed, ensure that IIS is able
	to download at least one CRL. This usually involves adjusting firewall, proxy,
	or Domain Name Server (DNS) settings to admit the necessary traffic; depending
	on the protocol, this can be Hypertext Transfer Protocol (HTTP) or remote
	procedure call (RPC). Note that the Web server must be able to resolve the CRL
	even if the client browser can resolve the CRL because the Web server is
	servicing the HTTP request that requires the client certificate.
	
	To avoid the HTTP 403.13 error message, do one of the following:
	
	- Enable IIS to download the CRL. To do this, follow these steps:
	
	  1. Delete any duplicate client certificates (that is, client certificates
	     that are issued from the same Certificate Authority) from the client
	     browser.
	
	  2. Start with the client certificate and proceed up the certification path.
	     Paste each certificate's CDP HTTP reference in the browser on the server.
	     If the file fails to download, there is a problem with the CDP.
	
	NOTE: Double-click each certificate in the certification path to view its
	properties.
	
	  3. Use the PING, Tracert.exe, or Wfetch.exe utilities to identify any name
	     resolution or network latency issues that arise when you contact the
	     problem CDP.
	
	  4. Find the IP address of the problem CDP and add an entry to the HOSTS file
	     on the IIS computer. This should enable IIS to download the CRL and
	     resolve the error.
	
	  5. Repeat these steps for each certificate in the client certificate's
	     certification path.
	
	- If a proxy computer is involved, change the account that is used to start IIS
	  to a domain administrator account and restart the IIS Admin service. If this
	  resolves the issue, the local system account, or the account that is
	  regularly used to start IIS, does not have sufficient permissions on the
	  proxy server to access the Internet.
	
	MORE INFORMATION
	================
	
	To view a certificate's CDP, follow these steps:
	
	1. In Microsoft Internet Explorer, click Internet Options on the Tools menu.
	
	2. On the Content tab, click Certificates.
	
	3. On the Personal tab, double-click the client certificate.
	
	4. Click the Certification Path tab of the client certificate to display each
	  certificate in the path.
	
	5. Double-click each of these certificates and click the Details tab. The CRL
	  Distribution Point field contains entries that list the path to download the
	  associated .crl file.
	
	NOTE: If a CDP is not listed, proceed to the next higher certificate in the
	path.
	If a CDP extension is present in a certificate that is part of the certification
	path, IIS must be able to download at least one of the CRLs. If IIS is unable to
	resolve the CRL, it returns the HTTP 403.13 error.
	
	Sample CRL Distribution Points:
	
	[1]CRL Distribution Point
	    Distribution Point Name:
	         Full Name:
	              URL=http://server.domain.com/CertEnroll/server%20Root%20CA.crl<BR/><BR/>
	
	[2]CRL Distribution Point
	    Distribution Point Name:
	         Full Name:
	              URL=file://\\server2.domain.com\CertEnroll\server2%20Root%20CA.crl
	
	REFERENCES
	----------
	
	For additional information on Wfetch.exe, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q284285 How to Use Wfetch.exe to Troubleshoot HTTP Connections
	
	For more information, see the "CertCheckMode" topic in the IIS online help.
	
	Additional query words: iis 5, certificate, CRL, CDP
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
