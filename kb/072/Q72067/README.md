---
layout: page
title: "Q72067: DOCERR: Docs for PWB Extension Functions Have Errors/Omissions"
permalink: kb/072/Q72067/
---

## Q72067: DOCERR: Docs for PWB Extension Functions Have Errors/Omissions

	Article: Q72067
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pages 180, 181, and 182 of the C version 6.00 and 6.00a "Advanced Programming
	Techniques" manual (APT) contain a table of Programmer's WorkBench (PWB)
	functions that can be called from a PWB extension. This list contains several
	errors, documenting functions that are not implemented and omitting
	documentation for some functions that are implemented.
	
	The online help that comes with C versions 6.00 and 6.00a also documents some
	functions incorrectly.
	
	MORE INFORMATION
	================
	
	The following functions are listed in "Advanced Programming Techniques" but are
	not documented in the online help, not prototyped in EXT.H, and are not
	implemented in EXPSUP.LIB:
	
	  fGetMake()       Get extmake setting
	  fSetMake()       Set extmake setting
	  KbHook()         Restore keyboard control to PWB
	  KbUnHook()       Remove keyboard control from PWB
	
	The following function is listed in "Advanced Programming Techniques," is
	documented in the online help and prototyped in EXT.H, but is not implemented in
	EXPSUP.LIB:
	
	  GetListEntry()   Get Item from List
	
	The following function is listed in "Advanced Programming Techniques," is
	documented in the online help and implemented in EXPSUP.LIB, but is not
	prototyped in EXT.H:
	
	  REsearch()       Searches for regular expression
	
	To call REsearch(), use the following prototype:
	
	  int REsearch( PFILE pFile, flagType fForward, flagType fAll,
	           flagType fCase, flagType fWrap, char _far *pattern,
	             fl *pflStart );
	
	The following functions are not listed in "Advanced Programming Techniques" but
	are documented in the online help, are prototyped in EXT.H, and are implemented
	in EXPSUP.LIB:
	
	  AddAColor()      Adds colors to the PWB internal color table
	  AddMenu()        Adds a menu to the menu bar
	  AddMenuItem()    Adds a menu item to a menu
	  ChangeMenu()     Modifies a menu item
	  Clearlist()      Clears list
	  farstrncpy()     Same as _fstrncpy()
	  farstrcpy()      Same as _fstrcpy()
	  farstrcat()      Same as _fstrcat()
	  fatstrstr()      Same as _fstrstr()
	  farstrlen()      Same as _fstrlen()
	  farstrnicmp()    Same as _fstrincmp()
	  farstrncmp()     Same as _fstrncmp()
	  farstrcmp()      Same as _fstrcmp()
	  farstradd()      Concatenates one string onto another
	  farstrstrip()    Strips extra characters out of a string
	  atou()           Convert string into decimal number
	  ForFile()        Allows wild-card operations on files
	  GetListHandle()  Gets a handle for a list
	  pFileToBottom()  Moves a file to the bottom of the list
	  SelectFiles()    Brings up a file-selection dialog box
	  SetHilite()      Specifies a range of text to be highlighted
	
	REFERENCES
	==========
	
	For more information on using these functions in PWB extensions, see Section 8.4
	in "Advanced Programming Techniques," the online help for PWB extensions, or the
	"Microsoft C Developer's Toolkit Reference."
	
	Additional query words: 1.00 1.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
