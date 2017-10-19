---
layout: page
title: "Q129700: PRB: Compile Out of Memory If too Many Public Members in Class"
permalink: /kb/129/Q129700/
---

## Q129700: PRB: Compile Out of Memory If too Many Public Members in Class

	Article: Q129700
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
	
	A project containing a class module with a large number (approximately 2000) of
	public class module variables will run successfully in the IDE but will cause an
	"Out of memory" error when you attempt to compile the project to make an
	executable file.
	
	CAUSE
	=====
	
	There is a limit to the number of public members you can put in a class module.
	The out of memory error is caused by exceeding the type library's (object
	library) capacity limit for definitions. When making an executable file, Visual
	Basic creates a type library and creates a typeinfo (an object description) for
	all the basic classes. The public members of the class are moved to the typeinfo
	in the type library. There is a limit (approximately 1100 members) to the number
	of definitions that you can have in a module.
	
	RESOLUTION
	==========
	
	Limit the number of public members in a class.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
