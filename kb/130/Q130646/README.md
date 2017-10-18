---
layout: page
title: "Q130646: PRB: DAO References Not Enabled When Porting an Older VB App"
permalink: kb/130/Q130646/
---

## Q130646: PRB: DAO References Not Enabled When Porting an Older VB App

	Article: Q130646
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	A reference to any database object or method in a Visual Basic program generates
	the error:
	
	  User-defined type not defined
	
	This error often occurs when loading your first Visual Basic version 3.0 program
	into Visual Basic version 4.0.
	
	CAUSE
	=====
	
	When you load your first Visual Basic version 3.0 project, a dialog box asks
	you:
	
	  Would you like Visual Basic to add this library reference now?
	
	If you selected the "No for All Older Projects" button, an entry was made in your
	VB.INI file that says AutoReferenceDAO=1. If you remove this line, you will see
	the dialog box again and be able to add needed Visual Basic 3.0 project
	references automatically.
	
	RESOLUTION
	==========
	
	For the current project, choose References from the Tools menu, and select the
	Microsoft DAO 2.5/3.0 Compatiblity Library check box. This enables compatibility
	with the older syntax found in Visual Basic version 3.0 programs. Microsoft
	reccommends that you upgrade the syntax in your programs to the new DAO 3.0
	syntax used in Visual Basic version 4.0, replacing the DAO 2.5/3.0 with the DAO
	3.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 2.50 3.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
