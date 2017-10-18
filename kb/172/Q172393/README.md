---
layout: page
title: "Q172393: BUG: Can't Export Symbols Differing Only by Leading Underscores"
permalink: kb/172/Q172393/
---

## Q172393: BUG: Can't Export Symbols Differing Only by Leading Underscores

	Article: Q172393
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLinker kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.0a, 4.1, 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the linker supplied with the Visual C++ compiler versions
	mentioned above to build a DLL and the following applies:
	
	1. You export multiple symbols from a DLL.
	
	2. The symbols differ only by the number of leading underscores or by the number
	  of leading question marks.
	
	3. The first letter in the symbol is uppercase.
	
	4. The symbols are located in an assembly source file.
	
	Then, the Visual C++ linker incorrectly matches some of the symbol names.
	
	RESOLUTION
	==========
	
	There are several workarounds:
	
	- Do not use leading underscores or leading question marks to differentiate
	  between different symbols.
	
	-or-
	
	- Use Visual C or Visual C++ instead of assembly.
	
	-or-
	
	- Use aliases in the EXPORTS section of the .def file as shown below. The
	  left-hand side of the "=" symbol is the name of the function that is exported
	  by the DLL and an external application/DLL can call. The right- hand side is
	  the symbol the linker will use to match during the link phase. Note the
	  missing underscore on the right hand side symbol.
	
	  EXPORTS
	
	  _symbol1=symbol1
	
	  Use the following link command to build the DLL:
	
	  link -dll -out:MYDLL.LIB -def:MYDLL.DEF MYDLL.OBJ
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	The following sample code is used to demonstrate the third (last listed)
	workaround. The "-noentry" option is used for the linker in this sample because
	no entry point function is defined for the DLL. The "-map" option is used for
	comparison with the DUMPBIN output of exported symbols.
	
	Assembler options needed: /nologo /coff /Cx /c
	
	Linker options: -dll -noentry -map -out:MYDLL.LIB -def:MYDLL.DEF \ MYDLL.OBJ
	
	  TITLE    mydll.asm
	
	  .386
	  .MODEL flat, SYSCALL
	
	  .CODE
	
	  Nosymbol PROC
	       ret
	  Nosymbol ENDP
	
	  _symbol PROC
	      ret
	  _symbol ENDP
	  __symbol PROC
	      ret
	  __symbol ENDP
	
	  ___symbol PROC
	      ret
	  ___symbol ENDP
	
	  ____symbol PROC
	      ret
	  ____symbol ENDP
	
	  _symbol1 PROC
	      ret
	  _symbol1 ENDP
	
	  __symbol2 PROC
	      ret
	  __symbol2 ENDP
	
	  ___symbol3 PROC
	      ret
	  ___symbol3 ENDP
	
	  ____symbol4 PROC
	      ret
	  ____symbol4 ENDP
	
	  END
	
	Use the following module definition file to build the DLL:
	
	  ; The module definition file MYDLL.DEF
	
	  EXPORTS
	    Nosymbol
	
	    _symbol=symbol
	    __symbol=_symbol
	    ___symbol=__symbol
	    ____symbol=___symbol
	
	    _symbol1=symbol1
	    __symbol2=_symbol2
	    ___symbol3=__symbol3
	    ____symbol4=___symbol4
	
	Following are the contents of the mydll.map file:
	
	mydll
	
	Timestamp is 33e12fbb (Thu Jul 31 17:37:15 1997)
	
	Preferred load address is 10000000
	
	Start         Length     Name                   Class
	0001:00000000 00000009H .text                   CODE
	0002:00000000 000000e5H .edata                  DATA
	
	 Address         Publics by Value              Rva+Base   Lib:Object
	
	0001:00000000       Nosymbol                   10001000 f mydll.obj
	0001:00000001       _symbol                    10001001 f mydll.obj
	0001:00000002       __symbol                   10001002 f mydll.obj
	0001:00000003       ___symbol                  10001003 f mydll.obj
	0001:00000004       ____symbol                 10001004 f mydll.obj
	0001:00000005       _symbol1                   10001005 f mydll.obj
	0001:00000006       __symbol2                  10001006 f mydll.obj
	0001:00000007       ___symbol3                 10001007 f mydll.obj
	0001:00000008       ____symbol4                10001008 f mydll.obj
	
	entry point at        0000:00000000
	
	Static symbols
	
	Compare the symbols of the above map file output with that of the "DUMPBIN
	/exports mydll.dll" output below.
	
	Microsoft (R) COFF Binary File Dumper Version 5.00.7022
	Copyright (C) Microsoft Corp 1992-1997. All rights reserved.
	<BR/><BR/>
	
	Dump of file mydll.dll
	<BR/><BR/>
	
	File Type: DLL
	
	        Section contains the following Exports for mydll.dll
	
	                  0 characteristics
	           33E12FBA time date stamp Thu Jul 31 17:37:14 1997
	               0.00 version
	                  1 ordinal base
	                  9 number of functions
	                  9 number of names
	
	           ordinal hint   name
	
	                 1    0   Nosymbol  (00001000)
	                 2    1   ____symbol  (00001004)
	                 3    2   ____symbol4  (00001008)
	                 4    3   ___symbol  (00001003)
	                 5    4   ___symbol3  (00001007)
	                 6    5   __symbol  (00001002)
	                 7    6   __symbol2  (00001006)
	                 8    7   _symbol  (00001001)
	                 9    8   _symbol1  (00001005)
	
	    Summary
	
	       1000 .rdata
	       1000 .reloc
	       1000 .text
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLinker kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100 kbVCNET
	Version           : :4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
