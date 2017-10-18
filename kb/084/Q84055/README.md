---
layout: page
title: "Q84055: PRB: GDI Functions Do Not Affect Printer Device Context"
permalink: kb/084/Q84055/
---

## Q84055: PRB: GDI Functions Do Not Affect Printer Device Context

	Article: Q84055
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When certain Windows Graphics Device Interface (GDI) functions are used with a
	printer Device Context (DC), the functions do not affect the printed results.
	
	CAUSE
	=====
	
	The printer is a banding device and the application is not performing banding.
	
	RESOLUTION
	==========
	
	Modify the application to perform banding or remove any GDI functions that are
	not supported by metafiles. The "Microsoft Windows Software Development Kit
	Reference Volume 1" for version 3.0 lists on pages 2-41 and 2-42 the functions
	that are valid in a metafile, and the "Microsoft Windows SDK: Programmer's
	Reference, Volume 1: Overview," for version 3.1 lists the valid functions on
	page 107; however, these lists contain some errors. To obtain an updated list of
	valid functions, query on the following words in the Microsoft Knowledge Base:
	
	  prod(winsdk) and metafile and valid and functions
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When an application prints to a banding device and does not perform banding,
	Windows GDI collects all the output function calls and creates a metafile.
	During the process of printing, GDI plays this metafile into each of the bands
	received from the printer driver. Any functions that are not supported in
	metafiles do not work under this scenario.
	
	For more information on adding banding to an application, query on the following
	words in the Microsoft Knowledge Base:
	
	  prod(winsdk) and banding and application
	
	Other sources of information are Chapter 12 of the "Microsoft Windows Software
	Development Kit Guide to Programming" for version 3.0 and "Programming Windows"
	by Charles Petzold (Microsoft Press).
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
