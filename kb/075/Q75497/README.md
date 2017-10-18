---
layout: page
title: "Q75497: Writing Embedded Applications for Microsoft Windows"
permalink: kb/075/Q75497/
---

## Q75497: Writing Embedded Applications for Microsoft Windows

	Article: Q75497
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the future, Microsoft Windows and applications developed for Windows are
	likely to run in read-only memory (ROM). The text below lists some things to
	consider during the process writing software that may be burned into ROM. Some
	things are obvious, some are not, and some are specific to system
	implementation.
	
	MORE INFORMATION
	================
	
	1. Code Segment (CS) Variables
	
	  Do not use CS variables. Although the discipline of writing code for protected
	  mode has eliminated many code segment variables, numerous modules use the
	  PrestoChangoSelector function, which causes problems. Never allocate a CS
	  alias unless you have a very good reason. Read-only tables in CS are
	  acceptable. If each table is referenced only within the segment in which it
	  is defined, the code can be patched to correct errors.
	
	  If, for very serious performance reasons, a CS variable is required, the
	  program must copy the entire code segment into RAM. Try to make the code
	  segment as small as possible.
	
	2. Code Patching
	
	  Do not expect any dynamic code patching to work properly. (If an application
	  replaces a device driver, this is acceptable as long as the device driver is
	  built into the ROM image, or the ROM image device drivers are "replaceable,"
	  which may or may not be the case).
	
	3. Accessing the Executable File
	
	  Do not use the AccessResource function or otherwise open the program's EXE
	  file. When a module is placed in ROM, the application cannot access it with
	  MS-DOS read or write functions. Always use the FindResource, LoadResource and
	  LockResource functions to access resources directly. There is no method to
	  work around this limitation; if an application uses AccessResource to access
	  a small part of a large resource, break the resources into smaller segments.
	
	4. Module Paths
	
	  Do not load a module with an explicit pathname unless you know it is not in
	  ROM. The LoadModule function searches the ROM for a module only if the
	  function call does not contain an explicit path.
	
	5. WinFlags
	
	  Import the __WinFlags variable only to check the WF_PMODE bit. In a ROM-based
	  Windows implementation, this address must be part of the ROM image,
	  therefore, other bits may be incorrect. Use the GetWinFlags function to
	  retrieve the run time value of WinFlags.
	
	  In general, do not import a value from a module using an absolute address if
	  the value can change at run time. __WinFlags is the only such value in the
	  Windows core.
	
	Additional query words: 3.00 3.10 DDKMISC
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
