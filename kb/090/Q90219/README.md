---
layout: page
title: "Q90219: Cannot Edit OLE Object Linked to Another Computer"
permalink: kb/090/Q90219/
---

## Q90219: Cannot Edit OLE Object Linked to Another Computer

	Article: Q90219
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some object-linking-and-embedding (OLE) applications provide menu entries and
	shortcut key combinations to edit linked objects. When you link an object using
	information from another computer's ClipBook, these options are not available.
	
	MORE INFORMATION
	================
	
	There are two basic types of OLE objects: linked objects and embedded objects.
	Both of these are supported by ClipBook Viewer.
	
	All information that describes an embedded object is held in the ClipBook page,
	and can be inserted in a document on another computer. If the application used
	to create the information is available on the other computer, the object can be
	edited as well.
	
	When an object is linked, the information remains on the computer where it was
	created. Links to the object in documents on other computers receive updates of
	the information from the originating computer.
	
	Most OLE applications provide the ability to edit an object that has been linked
	(not embedded) into another document. This operation is not possible when the
	linked object is from another computer. The OLE process depends on access to the
	original source file, which in this case resides on another computer.
	
	While the original source file can be made available to others through file
	sharing, creating a DDE share does not give others the ability to edit your
	source document.
	
	Depending on the applications involved and the security setting, attempting to
	edit an object linked from another computer may change the appearance of the
	server application (preparing it for editing), or report an error.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
