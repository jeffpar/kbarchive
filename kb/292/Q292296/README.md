---
layout: page
title: "Q292296: &quot;Cannot find server&quot; or &quot;DNS&quot; Errors When Using SSL (Q &amp; A)"
permalink: /kb/292/Q292296/
---

## Q292296: &quot;Cannot find server&quot; or &quot;DNS&quot; Errors When Using SSL (Q &amp; A)

{% raw %}

	Article: Q292296
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Cannot find server" or "DNS error" browser error messages are symptoms of
	several different problems. This article lists some of the more common reasons
	this error may occur when the Web site is using Secure Sockets Layer (SSL) and
	is therefore accessed by using https://.
	
	MORE INFORMATION
	================
	
	- Was the Web server certificate part of an export or import process?
	
	There is a known problem during the import process in which the wrong
	cryptographic service provider (CSP) is chosen. You may also see an Schannel
	Event ID: 36871 message. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q261655 Cannot Make an SSL Connection After Exporting and Importing an Server
	  Certificate
	
	- Is the Web Server running Windows 2000, and has the Web server certificate
	  recently renewed? The usual renewal process involves sending a renewal
	  request to the Web server certificate issuer (that is, a Certificate
	  Authority such as VeriSign, Netscape, or Microsoft.)
	
	A fix has been developed that ensures that a standard PKCS10-formatted renewal
	request is created. For more information, see the following Knowledge Base
	article:
	
	  Q262979 Cannot Renew Verisign Certificates in IIS 5.0
	
	- Is the Sspifilt.dll file loaded on the IIS master properties ISAPI Filter
	  tab?
	
	If not, add the Sspifilt.dll name and the \Winnt\System32\Inetsrv\Sspifilt.dll
	execution path to the IIS master properties ISAPI Filter tab.
	
	- Were any changes made to the IIS computer or Web site while a certificate
	  request was pending? (For example, a certificate request was generated and
	  sent to VeriSign. Before the certificate was installed, a service pack was
	  applied, the high encryption pack was installed, or the Web site bindings
	  were changed.)
	
	If so, you must generate a new certificate request. It is important that you do
	not change anything while a certificate request is pending.
	
	- Does the Web site have a secure identity?
	
	To confirm this, follow these steps:
	
	  1. Make sure that the Web site is bound to a secure port.
	
	     a. From the Microsoft Management Console (MMC), right-click the Web site
	        and click Properties.
	
	     b. On the Web Site tab, note the IP address (this may be All Unassigned)
	        and SSL port.
	
	NOTE: If the SSL port is blank, type "443" (without the quotation marks) and
	restart the IIS service. If the port is dimmed, a server certificate has not
	been successfully installed. For more information, see the following Knowledge
	Base article:
	
	  Q228836 Installing a New Certificate with Certificate Wizard for Use in
	  SSL/TLS
	
	  2. Confirm that the Web site is correctly bound to the network card.
	
	     a. From a command prompt, type "netstat -an" (without the quotation
	        marks).
	
	     b. If the Web site was bound to the All Unassigned IP address and SSL port
	        443, verify that the Local Address entry is 0.0.0.0:443.
	
	        If the Web site was bound to a specific IP address (for example,
	        172.26.207.120) and SSL port 443, verify that the Local Address entry
	        is IPaddress:443 (for example, 172.26.207.120:443).
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	
	=============================================================================
	

{% endraw %}
