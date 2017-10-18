---
layout: page
title: "Q281913: BUG: Referencing Type Libraries May Render Platform Dependent"
permalink: kb/281/Q281913/
---

## Q281913: BUG: Referencing Type Libraries May Render Platform Dependent

	Article: Q281913
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After compiling a Visual Basic project that references more than one type
	library on one platform (such as a Microsoft Windows 2000-based computer), the
	resulting binary fails to run on other platforms (such as Microsoft Windows NT
	4-, Microsoft Windows 95-, Microsoft Windows 98-, and Microsoft Windows ME-based
	computers) and gets an Access Violation (AV).
	
	CAUSE
	=====
	
	The Visual Basic compiler is case sensitive when it is reading entries for
	dllname in type libraries. As a result, if a project references two or more type
	libraries and the dllname entry for the same DLL is spelled in different cases
	in different libraries, such as dllname("kernel32.dll") in library A, and
	dllname("KERNEL32.DLL") in library B, the compiler generates two import sections
	for the same DLL and renders the binary platform dependent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set up a Windows 2000-based computer and a Windows NT 4-based computer, both
	  with the latest service packs. Also install Visual Basic and Visual C++ 6.0
	  with Service Pack 5 on both computers.
	
	2. On the Windows 2000-based computer, copy-and-paste the following Interface
	  Description Language (IDL) code into Notepad, and save it as lcase.idl.
	  Compile it with MIDL.EXE, "midl lcase.idl" (without the quotation marks). The
	  resulting type library is named lcase.tlb.
	
	  [
	    uuid(D618AA4D-814A-47a2-9AC1-DDE18EDF1C54),
	    version(1.0),
	    helpstring("Lower case test")
	  ]
	  library lcasetest
	  {
	      [
	        dllname("kernel32.dll"),
	        version(1.0),
	        helpstring("Sleep function exported by kernel32.dll")
	      ]
	      module lcasetest {
	          [
	  			entry("Sleep"), 
	  			helpstring("sleep - lcase test.")
	  		]
	          void _stdcall Sleep([in] long dwMS);
	      };
	  };
	
	3. As in step 1, build ucase.tlb with the following IDL code:
	
	  [
	    uuid(3F215C63-D0AD-4980-93F2-5DDF850061E4),
	    version(1.0),
	    helpstring("Upper case test")
	  ]
	  library ucasetest
	  {
	      [
	        dllname("KERNEL32.DLL"),
	        version(1.0),
	        helpstring("Sleep function exported by kernel32.dll")
	      ]
	      module lcasetest {
	          [
	  			entry("Sleep"), 
	  			helpstring("sleep - ucase test.")
	  		]
	          void _stdcall Sleep([in] long dwMS);
	      };
	  };
	
	4. Create a Visual Basic Standard EXE project. Form1 is created by default.
	
	5. On the Project menu, click to select References. In the References dialog
	  box, browse to lcase.tlb and ucase.tlb, select both libraries, and then click
	  OK.
	
	6. Add the following code to Form1:
	
	  Private Sub Form_Load()
	      lcasetest.Sleep 1
	      ucasetest.Sleep 1
	  End Sub
	
	7. On the File menu, click to Save the project, and then select Make
	  Project1.exe to compile the project.
	
	8. Run the executable, Project1.exe, and note that the form appears with no
	  errors.
	
	9. Copy Project1.exe to the Windows NT 4-based computer and run it. Note that an
	  Access Violation occurs.
	
	10. Copy and compile the same project on the Windows NT 4-based computer and run
	  it on both the Windows NT 4- and Windows 2000-based computers. Note that it
	  fails on the Windows 2000-based computer.
	
	Additional query words: tlbpatch
	
	======================================================================
	Keywords          : kbCompiler kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
