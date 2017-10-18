---
layout: page
title: "Q191315: BUG: ON ERROR Does Not Trap &quot;Alias Not Found&quot; Error"
permalink: kb/191/Q191315/
---

## Q191315: BUG: ON ERROR Does Not Trap &quot;Alias Not Found&quot; Error

	Article: Q191315
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro's ON ERROR command does not trap the following error:
	
	  Alias not found error (error 13).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program that contains the following code and run the program:
	
	     SET SAFETY OFF
	     ON ERROR WAIT WINDOW ("FIRST ON ERROR: " + CHR(13) + MESSAGE())
	     CREATE DATABASE Ztest
	     CREATE TABLE Ztest (FirstName C(20), LastName C(20))
	     USE Ztest EXCLUSIVE
	     INDEX ON LEFT(Ztest.FirstName,6) TAG FIRST6 OF Ztest && Comment this
	                                                          && line.
	     SELECT Ztest
	     USE
	     SET SAFETY OFF
	     ON ERROR WAIT WINDOW ("Second ON ERROR: " + CHR(13) + MESSAGE())
	     USE Ztest  ALIAS CLOSE_Ztest
	     SET ORDER TO TAG FIRST6
	     USE
	     ON ERROR
	     *  Clean up and delete files.
	     CLOSE ALL
	     DELETE FILE Ztest.DBC
	     DELETE FILE Ztest.dcx
	     DELETE FILE Ztest.dct
	     DELETE FILE Ztest.DBF
	
	Run the program and note that the ON ERROR routine traps the following error:
	
	  Variable 'First6' not found.
	
	Next, place an asterisk (*) in front of the INDEX ON command in the code. Run the
	code again and note that the ON ERROR command does not trap the "Alias not
	found" error. In addition, the ON ERROR command does not trap error 13 when
	evoked from the Command window either.
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug kbXBase kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
