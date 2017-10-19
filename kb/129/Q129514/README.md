---
layout: page
title: "Q129514: PRB: Loading and Unloading DLLs in the Design Environment"
permalink: /kb/129/Q129514/
---

## Q129514: PRB: Loading and Unloading DLLs in the Design Environment

	Article: Q129514
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
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
	
	You may not be able to overwrite a dynamic-link library (DLL) after calling into
	it from Visual Basic in design time while the Visual Basic design environment is
	still running. This problem is generally encountered when users are developing
	DLLs for Visual Basic and are debugging their DLL code.
	
	CAUSE
	=====
	
	When a function within a DLL is called by a program in the design environment,
	the DLL is loaded into memory. When the program is stopped, the DLL is kept in
	memory and is only unloaded when the user exits the design environment or when a
	hard edit is performed on a Declare statement that references the DLL. This
	prevents Visual Basic from having to load and unload DLLs every time the user
	runs and stops the program at design time.
	
	RESOLUTION
	==========
	
	You can force Visual Basic to unload a DLL by performing a hard edit on the
	Declare statement of a function that is declared within the DLL. For example,
	you can do a hard edit on the Declare statement by just deleting the "r" in
	"Declare" and then typing it back in. This forces a recompile, which causes
	Visual Basic to unload the DLL.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
