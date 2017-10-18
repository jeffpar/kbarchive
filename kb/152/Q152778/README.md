---
layout: page
title: "Q152778: Example Shows How to Pass Objects to FLL"
permalink: kb/152/Q152778/
---

## Q152778: Example Shows How to Pass Objects to FLL

	Article: Q152778
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro provides eight new API routines that allow you to manipulate
	Visual FoxPro objects and controls. In addition, the Value structure defined in
	the Library Construction Kit (LCK) has been expanded to use object references.
	This article gives an example showing how to pass and receive object references
	within an LCK routine.
	
	MORE INFORMATION
	================
	
	The following C code illustrates how to use one of the new API routines, which
	requires an object reference (_WGetObjectClientWindow) and returns a handle to
	the window containing the passed object. The LCK routine clears the command
	button from the window to verify that the program is working as expected.
	
	FoxPro Code
	-----------
	
	  * Place the following code in the Click event of a button on a form:
	  SET LIBRARY TO clearwind.FLL ADDITIVE
	  = CLEARWIND(this)  && we are passing the button object to the C routine
	  RELEASE LIBRARY clearwind
	
	C Code
	------
	
	  #include <pro_ext.h>
	
	  void FAR ClearObjWin(ParamBlk FAR *parm)
	  {
	     WHANDLE Wh;
	     \\ Note that you are passing the address to the Value structure.
	     Wh = _WGetObjectClientWindow(&parm->p[0].val);
	     _WClear(Wh);
	  };
	
	  \\ Note below that the parameter type is "O" (for Object).
	  FoxInfo myFoxInfo[] =
	  {
	     {"CLEARWIND", (FPFI) ClearObjWin, 1, "O"},
	  };
	
	  FoxTable _FoxTable =
	  {
	     (FoxTable FAR *) 0, sizeof(myFoxInfo)/sizeof(FoxInfo), myFoxInfo
	  };
	
	REFERENCES
	==========
	
	For more information about building FLLs for Visual FoxPro, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q135709 PRB: Visual C++ Link Error LNK2001: unresolved external symbol
	
	  Q137059 DOCERR: Missing Visual C/C++ "Multithreaded Using DLL" Setting
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	
