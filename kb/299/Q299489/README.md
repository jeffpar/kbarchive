---
layout: page
title: "Q299489: Error 80004005, Network Server Objects Not Initialized!"
permalink: /kb/299/Q299489/
---

## Q299489: Error 80004005, Network Server Objects Not Initialized!

	Article: Q299489
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse to the Passport Login server, you may receive the following
	error message:
	
	  Error 80004005, Network Server Objects Not Initialized!
	
	CAUSE
	=====
	
	This error occurs when there is a problem with the domain authority.
	
	WORKAROUND
	==========
	
	Switch to stand-alone mode to avoid stranding users at a nonfunctioning Passport
	Login server.
	
	MORE INFORMATION
	================
	
	Passport Manager stand-alone mode was created for use in the event of a
	long-term outage of Microsoft Passport network servers due to extraordinary
	circumstances. In such circumstances, participant sites may need to disconnect
	temporarily from the Passport network. Passport Manager allows operators to
	"shift" into stand-alone mode. An operator can set this mode by using the
	Passport Manager Administration utility.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbprb
	
	=============================================================================
	
