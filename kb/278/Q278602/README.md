---
layout: page
title: "Q278602: Error Message &quot;SChannel error = 80090304&quot;"
permalink: /kb/278/Q278602/
---

## Q278602: Error Message &quot;SChannel error = 80090304&quot;

	Article: Q278602
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After exporting a secure sockets layer (SSL) Certificate from a Microsoft
	Windows 2000 computer in Personal Information Exchange (PFX) format, and then
	trying to import that Certificate into Microsoft Windows NT 4.0 Key Manager (IIS
	4.0), the following error message occurs and the import fails:
	
	  Unable to install the certificate because you did not enter the correct
	  password.
	  SChannel Error = 80090304
	
	CAUSE
	=====
	
	Key Manager is the only way to import, export, or install an SSL Certificate on
	Windows NT 4.0. PFX format Certificate exports are a newer technology that
	Windows NT 4.0 Key Manager does not recognize. It is possible to import a PFX
	file by using Microsoft Internet Explorer; however, this does not properly bind
	the public and private SSL keys to any Web sites.
	
	RESOLUTION
	==========
	
	Currently there is no way to accomplish this export/import scenario.
	
	WORKAROUND
	==========
	
	To be able to freely export and import SSL Certificates to Windows NT 4.0 and
	Microsoft Windows 2000, install the certificate on a Windows NT 4.0 server
	initially, and then export the Certificate to an *.key file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
