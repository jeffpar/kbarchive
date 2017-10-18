---
layout: page
title: "Q118767: PRB: Custom Control or Library Not Working with VB 4.0"
permalink: kb/118/Q118767/
---

## Q118767: PRB: Custom Control or Library Not Working with VB 4.0

	Article: Q118767
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible that a custom control or dynamic link library that used
	undocumented features of Visual Basic version 3.0 will not work correctly in
	Visual Basic version 4.0.
	
	CAUSE
	=====
	
	Visual Basic version 4.0 is designed to be backward compatible. However, some
	third-party companies have based custom controls and routines on undocumented
	features in Visual Basic version 3.0. The internal structure of Visual Basic has
	changed significantly for version 4.0. Therefore, controls and libraries based
	on undocumented features or undocumented internal structures may no longer work.
	
	RESOLUTION
	==========
	
	If you find that your third-party custom control or library that worked in
	Visual Basic version 3.0 is not working correctly in Visual Basic version 4.0,
	please contact the third-party add-on manufacturer. The company may have an
	updated version designed to work with Visual Basic version 4.0.
	
	
	Additional query words: 4.00 vbx incompatible incompatibility vb4all vb4win
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Issue type        : kbprb
	
	=============================================================================
	
