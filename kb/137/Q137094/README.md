---
layout: page
title: "Q137094: PRB: Early Binding Fails with Out-Of-Process OLE Servers"
permalink: kb/137/Q137094/
---

## Q137094: PRB: Early Binding Fails with Out-Of-Process OLE Servers

	Article: Q137094
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When performing early binding on an out-of-process OLE server class, you might
	expect the Visual Basic 4.0 compiler to detect references made to invalid
	methods or properties. Yet, sometimes such invalid references are ignored by the
	compiler and are only detected at run time.
	
	CAUSE
	=====
	
	There are two probable causes for this problem:
	
	- Improper declaration of object variable. For early binding to work, you must
	  declare your object variable as follows:
	
	        Dim MyObjectVar As New MyServer.MyClass
	
	  If you use the following, early binding will not work:
	
	        Dim MyObjectVar As Object
	
	-or-
	
	- Compile On Demand option is set on. Click Options on the Tools menu, and
	  click the Advanced tab. The Compile On Demand option must be set to false for
	  the compiler to detect references made to invalid methods or properties in
	  the server class.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
