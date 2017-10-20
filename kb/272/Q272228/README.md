---
layout: page
title: "Q272228: SSL Connections Delayed During Initial Connection to Web Server"
permalink: /kb/272/Q272228/
---

## Q272228: SSL Connections Delayed During Initial Connection to Web Server

{% raw %}

	Article: Q272228
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you first attempt to connect (first request) to an Internet Information
	Services (IIS) computer, a delay of 20 to 30 seconds occurs when the Web browser
	is initiating an SSL connection.
	
	CAUSE
	=====
	
	When IIS receives an incoming SSL request from a client, it attempts to build
	its certificate chain before sending its certificate information back to the
	client. During this time, if the IIS computer does not have the issuing
	Certificate Authority's Root certificate installed locally, it tries to connect
	to the Certificate Authority directly to obtain it. This causes the server to
	try and resolve the certificate authority's machine name or fully qualified
	domain name to an IP address.
	
	If the Certificate Authority (Certificate Server) is inaccessible from the IIS
	computer, then IIS keeps trying to resolve the Certificate Authority's IP
	address until it times out. These name resolution queries cause the SSL
	connection to delay.
	
	WORKAROUND
	==========
	
	To work around this issue, you need to manually install the Certificate
	Authority's root certificate to the IIS server's local computer "Trusted
	Certificate Authorities" (Root) certificate store.
	
	To do this, perform the following steps:
	
	1. Download the Certificate Authority Root certificate to the desktop.
	
	2. Right-click the Root certificate, and then click Install Certificate.
	
	3. Click Next, and then choose Place all certificates in the following store.
	
	4. Click Browse, and then click the Show Physical Stores check box.
	
	5. Click to expand Trusted Root Certification Authorities.
	
	6. Click Local Computer, and then click OK.
	
	7. The Certificate Store location should be Trusted Root Certification
	  Authorities\Local Computer.
	
	8. Click Next, and then click Finish.
	
	9. In The Import was successful dialog box, click OK.
	
	The initial connection time should now be much faster.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis 5 ssl delay hang
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
