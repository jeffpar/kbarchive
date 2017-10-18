---
layout: page
title: "Q253000: Last Foreign User Update Time Appears Not to Be Updated"
permalink: kb/253/Q253000/
---

## Q253000: Last Foreign User Update Time Appears Not to Be Updated

	Article: Q253000
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a management agent (MA) that processes foreign users, the
	zcdsLastExportTime setting remains set to a previous date. In some situations,
	the MA processes only 2,000 transactions in a single run and export only 1,000
	records. The zcdsLastExportTime setting is only slightly incremented and appears
	to be "stuck" on a single date. When you run the MA concurrently, approximately
	1,000 records are processed each time, picking up where the previous MA run left
	off.
	
	CAUSE
	=====
	
	The Importt tool is reading only a portion of the transactions and quitting.
	Importt is not able to recover for the next set of 2,000 transactions without
	running the MA again.
	
	
	RESOLUTION
	==========
	
	This issue has been resolved with a patch. Please contact Technical Support for
	a fix or upgrade to Microsoft Metadirectory Services (MMS) 2.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
