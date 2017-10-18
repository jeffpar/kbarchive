---
layout: page
title: "Q299752: Problems Occur with Site After You Edit the CCD"
permalink: kb/299/Q299752/
---

## Q299752: Problems Occur with Site After You Edit the CCD

	Article: Q299752
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99,2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit the Component Configuration Document (CCD), your site functions
	incorrectly.
	
	MORE INFORMATION
	================
	
	The CCD is used by the Microsoft Passport Nexus to make sure that your site has
	all of the latest configuration updates. At the heart of the Microsoft Passport
	network is the Passport Nexus, which facilitates synchronization of Passport
	participant sites to ensure that each site has the latest details on network
	configuration and other issues. Each Passport component (for example, Passport
	Manager, Login servers, and Update servers) periodically communicates with the
	Nexus to retrieve the information it needs to locate, and to properly
	communicate with, the other components in the Passport network.
	
	Do not edit the CCD. Editing the CCD causes your site to function incorrectly and
	with unpredictable results. The CCD document is designed to receive updates from
	the Passport Nexus only. Do not set the CCD to read-only or set file permissions
	that prevent it from being overwritten.
	
	REFERENCES
	==========
	
	For additional information about the Component Configuration Document, browse to
	the following Microsoft Developer Network (MSDN) Web site:
	
	  Component Configuration Document
	
	Additional query words: CCD Component Configuration Document XML
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassport200 kbPassportSearch
	Version           : :1.3,1.4,1.99,2.0,2.1
	Issue type        : kbprb
	
	=============================================================================
	
