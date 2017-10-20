---
layout: page
title: "Q147667: PRB: 'Invalid Picture' Error When Setting Metafile (WMF)"
permalink: /kb/147/Q147667/
---

## Q147667: PRB: 'Invalid Picture' Error When Setting Metafile (WMF)

{% raw %}

	Article: Q147667
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
	
	Setting the Picture property of picture box control to a metafile (.wmf) format
	file can cause Visual Basic to raise the following error:
	
	  Invalid Picture.
	
	Sample code as well as compiled executables for utilities to convert between
	these metafile formats exist in the articles listed in the REFERENCES section.
	
	CAUSE
	=====
	
	This error may occur if you attempt to set the picture property to an image type
	that the control does not understand. If the file or other source of the image
	is corrupt then the control may not be able to interpret the image well enough
	to determine what kind of image it is, let alone display and manipulate it.
	
	With .wmf (metafile) image formats, an additional wrinkle is relevant. Visual
	Basic 4.0, and other Microsoft products such as Microsoft Word and Microsoft
	Excel, do not use the 'standard' metafile format. Instead, these applications
	use an 'Aldus Placeable Format' metafile. The formats differ in that placeable
	metafiles include a 22-byte 'metafileheader' data structure at the beginning of
	the file. The placeable metafile format is incompatible with such Windows API
	functions as CreateMetaFile, GetMetaFile, CopyMetaFile, and PlayMetaFile.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	The following article provides a 16-bit utility that can convert between normal
	Windows metafiles and the corresponding Aldus Placeable Format metafiles:
	
	  Q129658 SAMPLE: Reading and Writing Aldus Placeable Metafiles
	
	The following article contains a sample that provides a 32-bit utility to work
	with the 32-bit enhanced metafile format. The utility can also convert between
	normal (16-bit) metafiles and Aldus Placeable Format metafiles:
	
	  Q145999 SAMPLE: How to Create & Play Enhanced Metafiles in Win32
	
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
