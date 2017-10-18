---
layout: page
title: "Q82280: DOCERR: To Debug P-Code, TOOLS.INI Requires MODEL: Not MODEL="
permalink: kb/082/Q82280/
---

## Q82280: DOCERR: To Debug P-Code, TOOLS.INI Requires MODEL: Not MODEL=

	Article: Q82280
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01 
	- Microsoft CodeView for Windows, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft CodeView Debugger version 4.0 or 4.01 to debug a p-code
	application causes the following dialog box to appear:
	
	        ------------------------Warning--------------------------
	     |                                                         |
	     |  program being debugged contains p-code but no 'model:' |
	     |                  specified in tools                     |
	     |                                                         |
	     |---------------------------------------------------------|
	     |                                        <OK>   <Help>    |
	      ---------------------------------------------------------
	
	Help advises that putting MODEL=<dllname> in the TOOLS.INI file (where
	dllname is NMD1PCD.DLL for MS-DOS or NMW0PCD.DLL for Windows) will allow p- code
	debugging. However, after following this advice, CodeView gives the warning:
	
	  CV1056: cannot understand entry in 'tools.ini'
	  "MODEL=<dllname>"
	
	CAUSE
	=====
	
	Help should read "MODEL:<dllname>" not "MODEL=<dllname>".
	
	RESOLUTION
	==========
	
	Follow the instructions for "CodeView Debugging P-Code" in the README under the
	\C700 directory. It contains the correct MODEL entry in the TOOLS.INI file.
	
	Note that the path in DETAILS.TXT is relative to where C 7.0 is installed. Also
	note that the tag for p-code debugging for MS-DOS is [cv] and the tag for
	Windows is [cvw]. The following is a sample TOOLS.INI entry for p-code
	debugging.
	
	  [cv] MODEL:C:\C700\BIN\NMD1PCD.DLL
	
	  [cvw] MODEL:C:\C700\BIN\NMW0PCD.DLL
	
	Additional query words: 4.00 4.01 pcode docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView400 kbCodeView401
	Version           : :4.0,4.01
	
	=============================================================================
	
