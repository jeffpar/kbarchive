---
layout: page
title: "Q172923: FIX: Copy To ... Type SDF Causes Error Message in Visual FoxPro"
permalink: kb/172/Q172923/
---

## Q172923: FIX: Copy To ... Type SDF Causes Error Message in Visual FoxPro

	Article: Q172923
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing two consecutive COPY TO <filename> TYPE SDF commands causes Visual
	FoxPro 5.0x to return the following error message on the second command:
	
	  File <filename>.txt already exist as part of a database.
	
	This error does not occur in Visual FoxPro 3.0b.
	
	RESOLUTION
	==========
	
	Check for the existence of the first SDF file and if it exists delete it. In the
	code example in the MORE INFORMATION section below, the following code
	accomplishes this task. Place the code between the two COPY TO commands:
	
	     IF FILE("test1.txt")=.t.
	        DELETE FILE test1.txt
	     ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The error message occurs only when zero (0) is the first character in the SDF
	file. However, if the resulting SDF file is smaller than 8000 bytes, the error
	does not occur even if the zero character is in the SDF file. Finally, choosing
	any other file format or placing any other character in the SDF file prevents
	the error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program that contains the following code and execute it:
	
	     CLEAR
	     CREATE TABLE test1.dbf FREE (f C(100))
	     FOR i = 1 TO 80
	        INSERT INTO test1 VALUES ("0")
	     NEXT
	     COPY TO test1.txt TYPE SDF
	     COPY TO test1.txt TYPE SDFF
	
	The error appears on the second COPY TO command.
	
	Additional query words: sdf
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
