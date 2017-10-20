---
layout: page
title: "Q112335: BUG: CK1020 or CK4009 Encountered When Type Info Exceeds 64K"
permalink: /kb/112/Q112335/
---

## Q112335: BUG: CK1020 or CK4009 Encountered When Type Info Exceeds 64K

{% raw %}

	Article: Q112335
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.10,4.25,4.26,4.27
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CVPACK for MS-DOS, versions 4.0, 4.10, 4.26 
	- Microsoft CVPACK Utility for Windows NT, versions 4.25, 4.27 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building a debug version of an application containing more than 64K of type
	index information may cause one or more of the following error messages,
	depending on what version of CVPACK is being used:
	
	  CVPACK: fatal error CK1020: packed type index exceeds 65535 in module
	  <filename.obj>
	
	  CVPACK: warning CK4009: exceeded 64K types ... discarding subsequent types.
	
	  cvpack.exe INTERNAL ERROR, exception code - 0xc0000005.
	
	CAUSE
	=====
	
	These errors are due in part to the fact that CodeView's symbolic type
	information index is a 16 bit value, which causes an overflow if the number of
	packed symbol types exceeds 64K.
	
	Note that CK4009 is a Visual C++ version 1.0 (32-bit) and version 1.5 (16- bit)
	replacement for the older CK1020 error message. With CK1020, the packer failed
	and the program could not be debugged. With CK4009, the packer does not fail,
	but discards all subsequent nonprimitive types. This will at least allow the
	program to be debugged for those symbols whose types have not been discarded.
	
	RESOLUTION
	==========
	
	Here are a few things that can be done to reduce the number of symbols in an
	application so that it can be successfully debugged:
	
	1. Compile only the source files that you need to debug with /Zi and use /Zd for
	  the rest. This will reduce the number of symbols in your application. (If you
	  are using Programmer's WorkBench (PWB) or the Visual Workbench, it will also
	  require you to use an external makefile, because compilation is not module
	  selective within these tools.) If you choose to compile with /Zd, you will
	  get line number support only for the modules. With a linker mapfile you can
	  determine the location of your public symbols so you can at least view your
	  global data in CodeView if needed. For additional information, please see the
	  following article(s) in the Microsoft Knowledge Base:
	
	  Q48241 Relationship between Map File Addresses and Location in Memory
	
	2. If you are using MFC with Visual C++, try rebuilding the MFC libraries with
	  the /Zi switch instead of /Z7. This will build a .PDB (Program Database) file
	  for the entire library that will contain all of the symbolic type
	  information. While compiling the source files, each time the compiler
	  generates type information for a new symbol, it checks the PDB file to see if
	  this type is already present. If so, the type is not added. Using this
	  process, the total amount of type information is reduced by eliminating
	  redundant types that would otherwise be present in the .OBJ files created for
	  the Microsoft Foundation Class (MFC) libraries using /Z7. Using /Zi causes
	  redundancies to be reduced before the packer code executes, which helps the
	  packer operate more efficiently.
	
	3. For Visual C++ projects, compile using /Fd to specify a single .PDB file for
	  your application. Again, the idea here is to reduce the number of types by
	  eliminating redundancies that are present in multi module applications before
	  the packer executes. Note that this is automatic if you are building from the
	  Visual Workbench. The default file will be named MSVC.PDB: using /Fd allows
	  you to specify an alternative name. Since the default is to use PDB files
	  (which eliminates redundant information), the problem is much less likely to
	  occur. To enable use of the PDB, use /Zi not /Z7 when compiling, and don't
	  turn off "Program Database" in the IDE (or use /PDB:NONE on the command
	  line).
	
	4. If possible, consider eliminating some of the more complex types such as
	  classes, structures, enums, and unions. This will reduce the likelihood of
	  the types being redundantly included in your application.
	
	5. Compile some of the modules without any debugging information at all. If
	  using the Microsoft Foundation Classes, care must be taken not to mix modules
	  compiled with _DEBUG and modules compiled without _DEBUG. Try building the
	  MFC library with CODEVIEW=0 or CODEVIEW=2 to reduce the amount of symbolic
	  information (the default for DEBUG is "=1", which defines _DEBUG). When the
	  class library is built with CODEVIEW = 0, you will not have any library
	  debugging information available. The MFC debugging functions TRACE and ASSERT
	  will still be available, however. With CODEVIEW=2, some components of the
	  library will be built with debugging information. The README.TXT in
	  ..\MFC\SRC explains further what each of the options do in terms of limiting
	  the debugging information available for the MFC library. Additional
	  information can also be found in the Appendix of the "Class Libraries User's
	  Guide" as follows:
	
	  Appendix B for Visual C++ version 1.0 (16-bit)
	  Appendix A for Visual C++ version 1.5 (16-bit)
	  Appendix B for Visual C++ version 1.1 (32-bit)
	
	6. One other unconfirmed possible solution is related to precompiled headers.
	  You might try enabling or disabling the use of precompiled headers, whichever
	  is not currently being used, and then rebuild everything. This may have
	  varying effects depending on your application's use of header files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CVPACK utility for MS-DOS,
	versions 4.0, 4.1, and 4.26, and CVPACK Utility for Windows NT, version 4.25. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The Symbol and Type OMF Specification requires that symbolic debugging
	information be contained in two tables emitted by the compiler (in Visual C++
	these are included in the object modules and the .PDB file). The first table is
	called $$SYMBOLS and describes the symbols in the object file; while the second
	is called $$TYPES and contains information about the symbol types. For example,
	the statement "int i;" defines the symbol "i" of type "int". There are fields in
	the records of both tables that are used to index into the records of the other
	table. Furthermore, there is a third table of symbolic information that is
	generated by the linker and written into the executable file. This table is
	called PUBLICS and contains the symbol records for each public symbol
	encountered while processing the object files.
	
	CVPACK's purpose is to remove duplicate symbol and type information and rewrite
	the remaining information in a format optimized for CodeView processing. The
	type indices for this remaining information must not exceed 64K, because the
	index itself is a 16-bit value. Because this index is part of the specification,
	it cannot be changed without breaking the tools that depend on it, many of which
	are supplied by third-party vendors.
	
	Additional query words: 4.00 4.01 4.10 4.25 4.26 4.27
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVPACKSearch kbCVPACK400DOS kbCVPACK410DOS kbCVPACK426DOS kbCVPACK425NT kbCVPACK427NT
	Version           : :4.0,4.10,4.25,4.26,4.27
	
	=============================================================================
	

{% endraw %}
