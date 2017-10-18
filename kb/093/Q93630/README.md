---
layout: page
title: "Q93630: PRB: Paste Link Command Not Available for Microsoft Graph"
permalink: kb/093/Q93630/
---

## Q93630: PRB: Paste Link Command Not Available for Microsoft Graph

	Article: Q93630
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use the Paste Link command to link to a graph created in Microsoft
	Graph fails.
	
	CAUSE
	=====
	
	The Paste Link command links data contained in a separate file. To edit a data
	file, the Paste Link command calls the server application associated with the
	file. Microsoft Graph does not store data in a file; it graphs data received
	from a client application.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin FoxWin 2.50 OLE Insert Object
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
