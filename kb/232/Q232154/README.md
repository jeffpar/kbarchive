---
layout: page
title: "Q232154: IIS: Export Private Key Opt Gray Exporting Server Certificate"
permalink: /kb/232/Q232154/
---

## Q232154: IIS: Export Private Key Opt Gray Exporting Server Certificate

	Article: Q232154
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbIIS kbiis500
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Certificates snap-in in Windows 2000, you can do many tasks regarding
	certificates and certificate management. One of these tasks is exporting server
	certificates for use in an Internet Information Services 5.0 web server. In
	order for a server certificate to be used by the web server, you must export the
	private key along with the certificate. Without the private key, data encryption
	(and therefore secure communications) is not possible.
	
	When exporting the server certificate from the server's personal certificate
	store, you may not have the option to export the private key. If this is the
	case, when the certificate was imported, the option to allow the private key to
	be exported may have been unchecked. This is a security measure to prevent a
	possible compromise of the server's private key. Since this could be a potential
	security risk, the option to mark the private key as exportable is not checked
	by default.
	
	RESOLUTION
	==========
	
	In order to correct this problem, you will need access to the original
	certificate backup (.pfx) file. To ensure this problem does not happen in the
	future (should you want to export the private key again) make sure during the
	import process that you select the box "mark the private key as exportable."
	
	MORE INFORMATION
	================
	
	For additional information about importing server certificates, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q232137 HOW TO: Import a Server Certificate in Internet Information Services
	  5.0
	
	For additional information about exporting (backing up) server certificates,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q232136 HOW TO: Back Up a Server Certificate in Internet Information Services
	  5.0
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbIIS kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
