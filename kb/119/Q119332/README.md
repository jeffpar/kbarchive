---
layout: page
title: "Q119332: Output from &quot;lib /list &lt;import library&gt;&quot;"
permalink: /kb/119/Q119332/
---

## Q119332: Output from &quot;lib /list &lt;import library&gt;&quot;

	Article: Q119332
	Product(s): Microsoft Programming Utilities
	Version(s): winnt:1.0,2.5,2.55
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LIB Utility for Windows NT, versions 1.0, 2.5, 2.55 
	-------------------------------------------------------------------------------
	
	The documentation for the 32-bit LIB utility says that the /LIST option can
	be used to determine the contents on an existing library. The output for an
	object library is a list of the names of the object modules used to build
	the library. However, the output for an import library is the name of the
	module-definition (.DEF) file or the DLL, repeated for each imported
	symbol.
	
	For example, run the following command to view the contents of the import
	library GDI32.LIB:
	
	  lib /list gdi32.lib
	
	
	The output is as follows:
	
	LIB 1.0
	-------
	
	  gdi32.def
	  gdi32.def
	  gdi32.def
	  ...
	  gdi32.def
	  gdi32.def
	
	LIB 2.5x
	--------
	
	  gdi32.dll
	  gdi32.dll
	  gdi32.dll
	  ...
	  gdi32.dll
	  gdi32.dll
	
	This is the format of an import library: all of its modules have the same
	name. Microsoft LINK relies on this information during linking.
	
	Additional query words: 1.00 2.50 kbinf
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbLibSearch kbZNotKeyword3 kbLibMan100NT kbLibMan250NT kbLibMan255NT
	Version           : winnt:1.0,2.5,2.55
	
	=============================================================================
	
