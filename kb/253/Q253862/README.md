---
layout: page
title: "Q253862: Error Messages When MMS Database Directory Size Reaches Limit"
permalink: /kb/253/Q253862/
---

## Q253862: Error Messages When MMS Database Directory Size Reaches Limit

	Article: Q253862
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 02-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	- Zoomit VIA, versions 1.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to the Compass client, you may receive the following error
	message:
	
	  Unable to bind
	
	If you try to stop and start the Zoomit Server service, the following error
	message occurs:
	
	  Dr. Watson : **Essential OID definition missing, failed to lookup user
	  password**.
	
	CAUSE
	=====
	
	There is a 2-gigabyte (GB) size limit on the X500.db database file in
	Metadirectory Services. When this size limit is reached, the error messages
	listed above occur and the directory is inaccessible.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Restore from the most recent working backup.
	
	2. Immediately run the Via Compact utility.
	
	Using the Via Compact utility regularly can keep your database compact, reducing
	the chance that the database will reach the size limit. For more information
	about the Via Compact utility, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q250484 How to Use the VIA Compact Utility in Microsoft Metadirectory
	  Services
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbZoomitSearch kb3rdpartySearch kbMMSSearch kbMMS210 kbZoomit100 kbZoomit210
	Version           : :1.0,2.1
	Issue type        : kbprb
	
	=============================================================================
	
