---
layout: page
title: "Q161054: FIX: COPY TO ... TYPE SDF Incorrectly Copies Null Fields"
permalink: kb/161/Q161054/
---

## Q161054: FIX: COPY TO ... TYPE SDF Incorrectly Copies Null Fields

	Article: Q161054
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The COPY TO <filename> TYPE SDF does not properly copy null type fields.
	The null fields do not appear in the output text file. The null fields in the
	SDF file have a zero width.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	The following program illustrates this behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program containing the following code and execute it:
	
	     CREATE CURSOR test (C1 C(5) NULL, C2 C(5) NULL, C3 C(5) NULL, C4 C(5);
	     NULL)
	     FOR i=1 TO 10
	        IF MOD(i,2)=0
	           INSERT INTO test (C1,C2,C3,C4) VALUES ('AAAAA',NULL,'CCCCC',NULL)
	        ELSE
	           INSERT INTO test (C1,C2,C3,C4) VALUES (NULL,'BBBBB',NULL,'DDDDD')
	        ENDIF
	     ENDFOR
	     BROWSE
	
	2. Close the Browse window and type the following commands in the Command
	  window:
	
	     COPY TO Test.txt TYPE SDF
	     MODI COMM Test.txt
	
	3. Notice the null fields from the cursor are not present in the SDF text file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
