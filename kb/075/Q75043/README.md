---
layout: page
title: "Q75043: QEMM and 386MAX: Functionality and Compatibility with CV"
permalink: kb/075/Q75043/
---

## Q75043: QEMM and 386MAX: Functionality and Compatibility with CV

	Article: Q75043
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Quarterdeck Expanded Memory Manager (by Quarterdeck Office Systems),
	otherwise known as QEMM386, and 386MAX (by Qualitas) are memory managers
	providing support for expanded and VCPI-extended memory, the High Memory Area
	(HIMEM), and Upper Memory Blocks for machines using the 80386 or 80486
	processor.
	
	Some customers have reported difficulties loading CodeView versions 3.x into
	extended memory when running under these managers. This article deals with the
	errors, difficulties, and solutions regarding compatibility issues among
	CodeView, QEMM, and/or 386MAX.
	
	MORE INFORMATION
	================
	
	The first thing to check is the version of CodeView in use. CodeView version 3.0
	is not VCPI (Virtual Control Program Interface) compatible, and therefore cannot
	be loaded into extended memory when QEMM or 386MAX is resident. If you are using
	CodeView 3.0, you should upgrade to a later version that is VCPI-compatible.
	
	To make CodeView VCPI compatible, a change was necessary to allow access to the
	memory manager using that management scheme. Since VCPI is a superset of LIM
	4.0, the first thing CodeView does is make a call to the LIM driver to determine
	if it exists. This call actually attempts to establish a 64K page frame. If this
	is not possible, CodeView assumes there is no VCPI driver and looks for other
	methods to load itself and the symbol table.
	
	The most common mistake with QEMM is to use either the FRAME=NONE or the NOEMS
	switch. In both cases, CodeView can't allocate the 64K EMS page frame it
	requires. The same problem occurs when using 386MAX with the NOFRAME or EMS=0
	switch.
	
	The other switches in QEMM and 386MAX are compatible with CodeView. Care must be
	taken, however, to ensure that the allocation scheme leaves enough VCPI memory
	for CodeView.
	
	For example, if QEMM (or 386MAX) is configured so that there are four megabytes
	(MB) of extended memory available and no expanded memory, and a RAM drive is
	loaded to take up 3.5 MB, CodeView will not be able to load because there will
	not be enough available extended memory. Note that this is the simplest case and
	that there are many options and combinations of options that could cause this
	type of problem.
	
	The examples below illustrate various command-line options for CodeView, QEMM,
	and 386MAX along with the resultant output.
	
	Notes:
	
	1. Version 5.10 of QEMM386 and version 5.10 of 386MAX have been used for these
	  examples.
	
	2. 386MAX can a command file (386MAX.PRO) to replace command-line switches. This
	  file contains all the necessary options for 386MAX to load as the user has
	  defined. For purposes of readability, only command-line options will be used
	  in the examples.
	
	3. BLUEMAX is a version of 386MAX that runs on a PS/2 and provides extra
	  capabilities for that platform. For the purposes of this article, BLUEMAX and
	  386MAX can be considered identical.
	
	4. Only one memory manager should be present at any one time. These examples
	  contain the command line and results for both QEMM and 386MAX for the purpose
	  of seeing the result of what each line contains.
	
	5. All of these examples assume that there is enough expanded or extended memory
	  to completely load CodeView and the entire application program. If not, be
	  aware that CodeView will not use disk overlays to load into conventional
	  memory if it was able to partially load into any area above the 640K DOS
	  boundary. If an "Out of Memory" error occurs, a common solution is to use the
	  CVPACK.EXE utility included with the compiler.
	
	Examples:
	
	CV1301 Error: /X: CPU in protected or virtual mode
	--------------------------------------------------
	
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys NOEMS
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys FRAME=NONE
	  CONFIG.SYS with 386MAX -> device=c:\386max\386max.sys EMS=0
	  command line -> cv /x test.exe
	
	CV1304 Error: /E: EMM driver not loaded
	---------------------------------------
	
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys NOEMS
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys FRAME=NONE
	  CONFIG.SYS with 386MAX -> device=c:\386max\386max.sys EMS=0
	  command line -> cv /e test.exe
	
	CodeView hang at load time
	--------------------------
	
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys FORCEEMS
	  CONFIG.SYS with 386MAX -> device=c:\386max\386max.sys NOFRAME
	  command line -> cv {/x | /e | /d} test.exe
	
	CodeView successfully loaded into extended memory
	-------------------------------------------------
	
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys
	  CONFIG.SYS with 386MAX -> device=c:\386max\386max.sys
	  command line -> cv {/x} test.exe
	
	CodeView successfully loaded into expanded memory
	-------------------------------------------------
	
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys
	  CONFIG.SYS with 386MAX -> device=c:\386max\386max.sys
	  command line -> cv /e test.exe
	
	CodeView successfully loaded using disk overlays or
	gives an "Out of Memory" error for large applications
	---------------------------------------------------------------------------------------------------------
	
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys NOEMS
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys FRAME=NONE
	  CONFIG.SYS with 386MAX -> device=c:\386max\386max.sys EMS=0
	  command line -> cv test.exe
	
	  CONFIG.SYS with QEMM -> device=c:\qemm\qemm386.sys CONFIG.SYS with QEMM
	  -> device=c:\qemm\qemm386.sys NOEMS CONFIG.SYS with QEMM ->
	  device=c:\qemm\qemm386.sys FRAME=NONE CONFIG.SYS with 386MAX ->
	  device=c:\386max\386max.sys CONFIG.SYS with 386MAX ->
	  device=c:\386max\386max.sys EMS=0 command line -> cv /d test.exe
	
	Additional query words: kbinf 3.00 4.00 4.10 QEMM-386 386-MAX EMM386 EMM-386
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
