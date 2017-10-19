---
layout: page
title: "Q143423: DOCERR: Columns Collection Does Not Have a Font Property"
permalink: /kb/143/Q143423/
---

## Q143423: DOCERR: Columns Collection Does Not Have a Font Property

	Article: Q143423
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
	
	Attempting to set or read the Font property of a column in a DBGrid control
	results in error 438 - "Object doesn't support this property or method."
	
	RESOLUTION
	==========
	
	The individual columns of the DBGrid control cannot be set to a specific font.
	The column objects of the DBGrid control do not support this property. Page 138
	of the "Microsoft Visual Basic Language Reference," as well as the online help
	incorrectly document "Font" as being a property of the individual columns of the
	Columns collection.
	
	Use the Object Browser to determine what properties are supported by an object.
	To launch the Object Browser, when Visual Basic is running, click the F2 key, or
	click the Object Browser on the View menu.
	
	To determine what properties are supported by the DBGrid control, select the
	MSDBGrid - Apex Data Bound Grid Library from the Libraries / Project drop-down
	combo box. In the Classes / Module list, select Column. The methods and
	properties supported by this object are listed on the right.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
