---
layout: page
title: "Q137443: Size and Nesting Level Limitations of Classes"
permalink: kb/137/Q137443/
---

## Q137443: Size and Nesting Level Limitations of Classes

	Article: Q137443
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 3.0 allows you to subclass any of the base classes provided by
	Visual FoxPro. When subclassing, you are free to add your own properties and
	methods to the predefined properties and methods for a base class. This article
	explains some of the considerations in defining and using classes.
	
	MORE INFORMATION
	================
	
	In general, there are no limits to the size of a class definition.
	Theoretically, a class is capable of having four billion members (properties and
	methods). However, every member definition does use a small amount of memory.
	The amount of memory depends on the member name and member value.
	
	Class nesting levels are limited by the following two factors:
	
	- File handles: For each class that is subclassed, the file that contains the
	  class definition must be opened. It is possible to combine class definitions
	  in class files (.vcx or .prg files) to avoid running into this limitation.
	
	- Stack space: When creating instances of objects that are either subclassed or
	  contain objects that are subclassed, Visual FoxPro recursively reads in class
	  definitions for subclasses. This can lead to an "Insufficient Stack Space"
	  situation.
	
	NOTE: As a general rule, well-designed applications should usually have no more
	than five or six levels of subclassing.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
