---
layout: page
title: "Q138532: PRB: VB Tab Control Picture Property Doesn't Support Metafiles"
permalink: /kb/138/Q138532/
---

## Q138532: PRB: VB Tab Control Picture Property Doesn't Support Metafiles

	Article: Q138532
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to set the Picture or TabPicture property of the Tab (SSTab)
	control to a Windows metafile, you receive an "Invalid picture" error.
	
	CAUSE
	=====
	
	The Visual Basic Tab control does not support using a metafile for these
	properties. However, the Tab control does support the use of bitmaps and icons
	for the Picture and TabPicture properties.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 Sheridan vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
