---
layout: page
title: "Q166476: Can't Index Embedded Objects in PowerPoint Slideshow"
permalink: kb/166/Q166476/
---

## Q166476: Can't Index Embedded Objects in PowerPoint Slideshow

	Article: Q166476
	Product(s): Internet Information Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using Microsoft Index Server to search for filtered files, embedded
	objects in a PowerPoint slideshow may not indexed properly and therefore a hit
	will not be made from a search query on strings in the embedded object. Text in
	the slide that was not embedded is filtered and indexed properly.
	
	CAUSE
	=====
	
	The Index Server filter for PowerPoint slideshows does not properly handle
	embedded objects.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Index Server 2.0 or Windows 2000 Indexing
	Service.
	
	WORKAROUND
	==========
	
	There is currently no method to force the embedded object to be filtered. To
	work around this problem:
	
	- Save the embedded object as a separate file or embedded in a different
	  application, such as Microsoft Word or Microsoft Excel, that does not exhibit
	  this behavior.
	
	If you want stop the event ID associated with this error, add the following
	registry setting:
	
	  REGEDIT4
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\ContentIndex]
	
	  "EventLogFlags"=dword:00000000
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Index Server version
	1.1. This problem is corrected in Index Server 2.0 and Windows 2000 Indexing
	Service.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : :1.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
