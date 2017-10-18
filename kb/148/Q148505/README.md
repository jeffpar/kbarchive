---
layout: page
title: "Q148505: HOWTO: Force Files to Be Flushed to Disk"
permalink: kb/148/Q148505/
---

## Q148505: HOWTO: Force Files to Be Flushed to Disk

	Article: Q148505
	Product(s): Microsoft C Compiler
	Version(s): WIN3X:1.0,1.5,1.51,1.52;WINNT:1.0,2.0,2.1,2.2,4.0;
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	C and C++ file operations, by default, perform their own data caching. This
	caching is in addition to the disk caching done by the operating system. Under
	certain conditions it may be necessary to ensure your data is fully flushed to
	the disk. This article explains how to ensure that your data is properly flushed
	to the disk.
	
	MORE INFORMATION
	================
	
	To flush the C runtime buffers, you need a call to fflush for files that are
	opened with fopen or a call to the flush function for C++ ofstream objects.
	Flushing the operating system's disk cache is a little more difficult; it
	depends on the operating system in use.
	
	16-bit Operating Systems - MS-DOS or Windows 3.1
	------------------------------------------------
	
	In MS-DOS or Windows 3.1 running Smartdrv.exe version 4.0 or later, you have two
	choices. You can use the _commit C runtime function or link with Commode.obj and
	use the fflush C runtime function.
	
	32-bit Windows Operating Systems
	--------------------------------
	
	In 32-bit versions of Windows, the operating system has built-in disk caching.
	The only way to force a file to be flushed to disk is by linking to
	Commode.obj.
	
	Commode.obj is designed to affect the way the C Runtime handles files. When you
	link to this .obj file, a call to the C runtime function fflush also forces the
	operating system to flush its cache to disk, making the call to _commit
	unnecessary.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	
	        This sample code is designed to show some of the more
	        common ways to flush both the C runtime buffers and the
	        operating system cache
	     */ 
	
	     #include <stdio.h>
	     #include <ofstream.h>
	
	     void DoSomeCFileIO();
	     void DoSomeCXXFileIO();
	
	     void main()
	     {
	       DoSomeCFileIO()
	       DoSomeCXXFileIO();
	     }
	
	     void DoSomeCFileIO()
	     {
	      FILE* CFileBuf;
	
	     // Open CFileBuf for output & perform some writes
	
	      fflush(CFileBuf);
	      _commit(_fileno(CFileBuf));
	
	     // The call to fflush will cause the C Runtime to flush
	     // the buffers associated with CFileBuf to the
	     // Operating system.
	     // The call to _commit will tell Smartdrv.exe to flush
	     // its cache to the disk.
	     // The _commit function requires a file handle, hence the
	     // call to _fileno
	     // _commit will only function on 16-bit operating systems.
	     // On 32-bit operating systems, you need to link to Commode.obj
	     }
	
	     void DoSomeCXXFileIO()
	     {
	      ofstream CXXFileBuf;
	
	     // Open CXXFileBuf & perform some writes
	
	      CXXFileBuf.flush();
	      _commit(CXXFileBuf.rdbuf()->fd());
	
	     // The call to flush causes the C Runtime to flush
	     // the buffer associated with CXXFileBuf to the operating system.
	     // 
	     // The call to _commit tells Smartdrv.exe to flush
	     // its cache to the disk.
	     // 
	     // The _commit function requires a file handle, hence the
	     // call to ofstream.rdbuf()->fd()
	     // _commit will only function on 16-bit operating systesm.
	     // On 32-bit operating systems, you will need to link to Commode.obj.
	     }
	
	REFERENCES
	==========
	
	See the documentation for fflush(), _commit(), _fileno(), and ofstream.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC151 kbVC200 kbVC210 kbVC152
	Version           : WIN3X:1.0,1.5,1.51,1.52;WINNT:1.0,2.0,2.1,2.2,4.0;
	Issue type        : kbhowto
	
	=============================================================================
	
