---
layout: page
title: "Q326087: Exporting Multiple Certificates to .p7b Imports Bad Certificates"
permalink: /kb/326/Q326087/
---

## Q326087: Exporting Multiple Certificates to .p7b Imports Bad Certificates

{% raw %}

	Article: Q326087
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you import and install certificates on Internet Information Services
	(IIS), the Secure Sockets Layer (SSL) connections may not function properly. If
	you are using Microsoft Internet Explorer and SSL to visit the site, you may
	receive the following error message:
	
	  Page cannot be displayed
	
	You receive the following error message in Event Viewer:
	
	  Event ID: 36189
	  Source: SCHANNEL
	
	  Description:
	  The SSL server credential's certificate does not have a private key
	  information property attached to it. This most often occurs when a
	  certificate is backed up incorrectly and then later restored. This message
	  can also indicate a certificate enrollment failure.
	
	CAUSE
	=====
	
	During the export, each certificate is exported without the private key, so the
	SSL connections that use these certificates are unsuccessful if they are
	imported on the same server or on a different server for IIS.
	
	When certificates are exported on one computer without the private key, the
	certificate is rendered unusable. Therefore, exporting in .p7b format is not a
	valid solution for exporting certificates.
	
	RESOLUTION
	==========
	
	To avoid the error message, Microsoft recommends that you export certificates on
	a one-by-one basis when you save the exported certificates. For additional
	information about exporting certificates, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q232136 HOW TO: Back Up a Server Certificate in Internet Information Services
	  5.0
	
	  Q232137 How to Import a Server Certificate for Use in Internet Information
	  Services 5.0
	
	STATUS
	======
	
	Microsoft is researching this problem and will post more information in this
	article when the information becomes available.
	
	
	MORE INFORMATION
	================
	
	Although the functionality exists to export multiple certificates, Microsoft
	does not recommend this with IIS for restoration purposes.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	For this behavior to occur, you must follow these steps to export multiple
	certificates. To do this, follow these steps in the Certificates Microsoft
	Management Console (MMC):
	
	1. Click Start, click Run, and then type MMC.
	
	2. Click Console, click Add/Remove Snap-In, and then click Add.
	
	3. Add the Certificates snap-in.
	
	4. Click to select Local Computer, click Next two times, and then click Finish.
	
	5. Click the personal folder, and then click Certificates.
	
	6. Hold down the SHIFT key, and then click to select all of the certificates in
	  the right MMC pane.
	
	7. Type a name for the certificate.
	
	NOTE: The format that this procedure generates is .p7b and is only used to export
	multiple certificates to one single file (similar to zipping multiple files in
	one file).
	
	REFERENCES
	==========
	
	For additional information about certificate management in IIS, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q320878 HOW TO: Manage Certificates in Windows 2000
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
