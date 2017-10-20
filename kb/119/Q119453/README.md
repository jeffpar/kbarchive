---
layout: page
title: "Q119453: PRB: GDI Heap Fills Up While Playing a Metafile"
permalink: /kb/119/Q119453/
---

## Q119453: PRB: GDI Heap Fills Up While Playing a Metafile

{% raw %}

	Article: Q119453
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the playback of a metafile or printing, the GDI heap fills up and it is
	not possible to create additional GDI objects.
	
	CAUSE
	=====
	
	This filling of the GDI heap can be caused by a metafile that does not contain
	any DELETEOBJECT metafile records. The GDI objects created during the metafile
	playback never get deleted, which fills up the GDI heap. An application that
	prints without using banding in Windows version 3.1 causes a metafile to be
	created on behalf of the application. The problem listed above then occurs.
	
	The DELETEOBJECT metafile record is a new feature developed for Windows version
	3.1. This record is used to record DeleteObject() calls into the metafile, so
	that the specified GDI object is deleted during playback of the metafile. If you
	call DeleteObject() on an object that is currently selected into a metafile
	Device Context (DC), a DELETEOBJECT record will not be recorded into the
	metafile. The documentation for DeleteObject() states that the object must not
	be selected into a DC.
	
	RESOLUTION
	==========
	
	Make sure to deselect the object in your metafile DC before calling
	DeleteObject() to delete the object.
	
	For additional information about calling DeleteObject() for a metafile object,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q68296 Windows 3.x Metafiles Support DeleteObject()
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
