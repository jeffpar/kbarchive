---
layout: page
title: "Q295070: SSL Connection Slow with One Certificate but Faster w/ Others"
permalink: /kb/295/Q295070/
---

## Q295070: SSL Connection Slow with One Certificate but Faster w/ Others

{% raw %}

	Article: Q295070
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice significant response differences when you browse to a Secure
	Sockets Layer (SSL) site and use different client or server certificates.
	
	CAUSE
	=====
	
	IIS is attempting to contact and download various certificate extensions as part
	of the SSL negotiation process. This usually involves Certificate Revocation
	List (CRL) checking, which is disabled by default in IIS 4.0 but enabled by
	default in IIS 5.0. For information on how to change the default values for CRL
	checking, search the IIS online product documentation (located at
	http://<IISComputerName>/iishelp) for the "CertCheckMode" keyword.
	
	RESOLUTION
	==========
	
	First, make sure that the issuing Certificate Authority (CA) root certificate is
	installed on the client. For additional information on how to do this, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q297681 Error Message: This Security Certificate Was Issued by a Company that
	  You Have Not Chosen to Trust
	
	Next, contact the CA that is responsible for issuing the certificate and have the
	CA change the certificate extensions to reflect a faster protocol or download
	location. For a Microsoft Certificate Authority that is running on Microsoft
	Windows 2000, this is done through a policy module.
	
	To change the default policy module, follow these steps:
	
	1. Open the Microsoft Management Console (MMC). To do this, click Programs on
	  the Start menu, click Administrative Tools, and then click Certificate
	  Authority.
	
	2. Right-click the Certificate Authority (CA) MMC snap-in and click Properties.
	
	3. On the Policy Module tab, click Configure and click the X 509 Extensions tab.
	
	The changes above will be reflected in all subsequently issued certificates.
	NOTE: Existing certificates cannot be changed!
	
	NOTE: You may also have to perform the previous steps on intermediate CAs.
	
	WORKAROUND
	==========
	
	If the CA that issued your certificate cannot change the certificate extensions
	to reflect a faster protocol or download location (because the certificate was
	issued by a third party such as Verisign), fix any network or name resolution
	problems that may be preventing IIS from downloading files (usually .crl or .crt
	files) from the servers that are listed in the certificate's extensions.
	
	To troubleshoot this, copy the URLs from the certificate's extensions and paste
	them into the browser on the IIS server, then use the Microsoft Network Monitor
	or the Wfetch.exe utility to identify any name resolution or network latency
	issues as the browser attempts to contact and download the extension files.
	
	For additional information on the Wfetch.exe utility, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q284285 How to Use Wfetch.exe to Troubleshoot HTTP Connections
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	View the certificate's certification path and note the extension details for
	each certificate in the path. The differences in response time are related to
	these extensions.
	
	For example, view the CRL Distribution Point (CDP) extension details. If IIS is
	using client certificates, it attempts to locate and download a CRL from each
	certificate in the path, starting with the first CDP in the list and moving
	downward.
	
	For example, a CDP that is using an LDAP protocol and pulling the CRL from a LDAP
	folder may take longer than a CDP that is using an HTTP protocol and pulling the
	CRL from the local IIS server by using an HTTP GET command.
	
	The following is a sample CDP extension:
	
	NOTE: IIS starts from the first CDP and works downward.
	
	  [1]CRL Distribution Point
	       Distribution Point Name:
	            Full Name:
	
	                URL=http://Caserver.domain.com/CertEnroll/CArootCertifiateName.crl
	
	  [2]CRL Distribution Point
	       Distribution Point Name:
	            Full Name:
	
	                URL=ldap:///CN=LDAPCAserver.domain.com,CN=CDP,CN=Configuration,
	                DC=com?certificateRevocationList?base?objectclass=cRLDistributionPoint
	
	  [3]CRL Distribution Point
	       Distribution Point Name:
	            Full Name:
	
	                URL=file://\\Caserver.domain.com\CertEnroll\CArootCertifiateName.crl
	
	TheAuthority Information Access (AIA) extension also starts from the first CDP
	and works downward.
	
	The following is a sample AIA extension:
	
	  [1]Authority Info Access
	       Access Method=Certification Authority Issuer(1.3.6.1.5.5.7.48.2)
	       Alternative Name:
	
	           URL=http://CAserverName.domain.com/CertEnroll/CAserverName_CArootCertifiateName.crt
	
	  [2]Authority Info Access
	       Access Method=Certification Authority Issuer(1.3.6.1.5.5.7.48.2)
	       Alternative Name:
	
	           URL=file://\\CAserverName.domain.com\CertEnroll\CAserverName_CArootCertifiateName.crt
	
	REFERENCES
	==========
	
	For more information, see the following Knowledge Base article:
	
	  Q289749 Certificate Revocation Lists (CRL) and IIS 5.0: Common Questions
	
	Additional query words: iis 5 kbiisSearch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
