---
layout: page
title: "Q194636: HOWTO: Manually Register a VB Remote Component Using CLIREG32"
permalink: kb/194/Q194636/
---

## Q194636: HOWTO: Manually Register a VB Remote Component Using CLIREG32

	Article: Q194636
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbClient kbDCOM kbServer kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 13-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use the CLIREG32.EXE utility to manually
	register remote Visual Basic components on the client machine.
	
	To use the Clireg32 utility, you must have created the remote server files (VBR
	and TLB files) when you compiled your server component. To have Visual Basic
	create these files, go to Project Properties Component Tab, and then select the
	Remote Server Files option.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	You use the method that follows to manually register the remote component.
	
	NOTE: However, before doing this, you need to copy the VBR and TLB files to a
	directory on the client computer.
	
	Use the Clireg32 utility from a command line. To register your remote component
	from a command line, use the following syntax and options:
	
	  
	
	      
	   CliReg32 {path to the VBR file} -s SERVERNAME -t {path to the TLB file)   
	           -d -q
	   -s = Remote server name
	   -t = Type library file name
	   -d = Use DCOM as the remote transport
	   -q = Suppress all dialogs 
	
	  Other command line options available include:
	
	 
	   -l = Specifies a log file
	   -u = Uninstall VBR file
	   -a = Set authentication level (0 - 6)
	   -p = Network protocol
	   -nologo = Do not display copyright information
	
	
	REFERENCES
	==========
	
	Hardcore Visual Basic, second edition by Bruce McKinney
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClient kbDCOM kbServer kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
