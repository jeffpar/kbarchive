---
layout: page
title: "Q78389: PRB: Cannot Print Object from an Embedded Window in Viewer"
permalink: /kb/078/Q78389/
---

## Q78389: PRB: Cannot Print Object from an Embedded Window in Viewer

	Article: Q78389
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Multimedia Viewer, when attempting to print a 256-color image
	from an embedded window, only the text around the embedded window prints.
	
	CAUSE
	=====
	
	Multimedia Viewer version 1.0 does not support printing the content of an
	embedded window. The code to support displaying a 256-color image in an embedded
	window is provided by a dynamic-link library (DLL), which is independent of
	Viewer.
	
	RESOLUTION
	==========
	
	One method to work around this lack of support is to copy the undithered image
	to the Windows Clipboard using the CopyBmp macro. Then use a bitmap editor to
	print the image. (For more information about the CopyBmp macro, see page 7-8 of
	the "Microsoft Multimedia Development Kit Multimedia Viewer Developer's
	Guide.")
	
	It is also possible to create a DLL to print the embedded window image. The DLL
	could be triggered as a hot spot (similar to the CopyBmp macro). For more
	information, see the sample DLLs provided with the Microsoft Multimedia
	Development Kit (MDK) in the VIEWER directory. Writing a DLL that interfaces
	with Viewer is discussed in chapters 14 and 15 of the "Multimedia Viewer
	Developer's Guide."
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer100
	Version           : :1.0
	
	=============================================================================
	
