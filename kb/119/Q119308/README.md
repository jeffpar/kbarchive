---
layout: page
title: "Q119308: PROFS: Gateway Export Generates Two Notes to PROFS/OV UserID"
permalink: kb/119/Q119308/
---

## Q119308: PROFS: Gateway Export Generates Two Notes to PROFS/OV UserID

	Article: Q119308
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.2, 3.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to PROFS generates two IBM Notes to the UserID: one
	contains the post office address list and the other contains a notice informing
	the administrator that the post office address list has been downloaded.
	
	The number of notes this generates for the UserID reader may become troublesome.
	
	CAUSE
	=====
	
	By design.
	
	RESOLUTION
	==========
	
	The Microsoft Mail Gateway to PROFS/OfficeVision Host Access component version
	3.3 resolves this problem by making the second note optional.
	
	To disable the second note, set the DIRECTORY_NOTE field to "NO" (without the
	quotation marks) in the PWAINIT DATA file.
	
	Additional query words: 3.20 3.30
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS330
	Version           : :3.2,3.3
	
	=============================================================================
	
