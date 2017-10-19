---
layout: page
title: "Q102703: PRB: &quot;Error Creating OLE Object&quot; with Paintbrush &amp; Windows 3.0"
permalink: /kb/102/Q102703/
---

## Q102703: PRB: &quot;Error Creating OLE Object&quot; with Paintbrush &amp; Windows 3.0

	Article: Q102703
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Appending Paintbrush objects in Microsoft Windows version 3.0 to a FoxPro for
	Windows general field will cause the following error message:
	
	  Error creating OLE object
	
	For example, APPEND GENERAL <FLDNAME> FROM \<path>\<file>.bmp
	will cause this error to occur.
	
	CAUSE
	=====
	
	This error occurs because Paintbrush is not an OLE server in Windows 3.0. An
	appropriate OLE server is required to embed or link files of a specific type in
	general fields.
	
	
	Additional query words: FoxWin 2.50 APPEND GENERAL OLE PAINTBRUSH WIN30 object linking and embedding
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a
	Version           : WINDOWS:2.5,2.5a
	
	=============================================================================
	
