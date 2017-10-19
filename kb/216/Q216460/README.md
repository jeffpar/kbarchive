---
layout: page
title: "Q216460: XADM: ISINTEG Reports JET_errUpdateNotPrepared"
permalink: /kb/216/Q216460/
---

## Q216460: XADM: ISINTEG Reports JET_errUpdateNotPrepared

	Article: Q216460
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While running the information store integrity checker, Isinteg.exe, the
	following error message may be reported during the folder test phase:
	
	  Error: Folder '5346 (Fid=0001-0000005C7FE0)' "Deleted Items": Error
	  JET_errUpdateNotPrepared fixing bad ptagOldestDeletedOn on this folder.
	
	NOTE: The items in single and double quotes above may differ.
	
	CAUSE
	=====
	
	Isinteg.exe detected a invalid property for a folder and was attempting to fix
	the problem by updating a set of columns in the database. However, Isinteg.exe
	did not properly set up the database session in preparation for updating the
	columns.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+------------------------+
	| File name   | Version  | 
	+------------------------+
	| Isinteg.exe | 5.5.2533 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
