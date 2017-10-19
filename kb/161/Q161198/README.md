---
layout: page
title: "Q161198: FIX: Program Code Cannot Set Database Property to Null String"
permalink: /kb/161/Q161198/
---

## Q161198: FIX: Program Code Cannot Set Database Property to Null String

	Article: Q161198
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Database property of a cursor cannot be programmatically set to a null
	string. The Database property always shows the full path of Visual FoxPro. This
	is the same value as contained in the FULLPATH() function. The Database property
	of a cursor contained in the DataEnvironment of a form can be modified.
	
	This problem only appears in Visual FoxPro 5.0; Visual FoxPro 3.0b functions
	properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	This program creates a free table named myTable. Next, the Database property is
	set to null. Finally, WAIT WINDOW commands compare the value of the FULLPATH()
	function with the actual value of the Database property.
	
	Steps to Reproduce Problem
	--------------------------
	
	Create a program, place the following code in it, and run the program:
	
	     CREATE TABLE myTable FREE (myFld C (10))
	     * create the custom data environment object
	     xx = createobject("myDataEnv")
	
	     DEFINE CLASS myDataEnv AS DataEnvironment
	     PROCEDURE init()
	        This.AddObject("oMyCursor","myCursor")
	
	        * The database property is incorrect.
	        * It is showing the current value of FULLPATH("").
	        * The same code under Visual FoxPro 3.0 shows the null string.
	
	        WAIT WINDOW "This is the Value of FULLPATH():" ;
	        + CHR(13) + FULLPATH("") + ;
	        CHR(13) + "Press any key to continue..."
	
	        WAIT WINDOW "This is the value of the Database property :" ;
	        + CHR(13) + this.oMyCursor.Database ;
	        + CHR(13) + "Press any key to continue..."
	
	     ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS myCursor AS Cursor
	        Database = ""    && Sets the Database property to empty string
	        CursorSource = "myTable"
	     ENDDEFINE
	
	In Visual FoxPro 5.0, both the FULLPATH() function and the Database property
	return the same value. In Visual FoxPro 3.0, the Database property returns an
	empty string.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
