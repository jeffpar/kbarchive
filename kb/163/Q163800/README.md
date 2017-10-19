---
layout: page
title: "Q163800: INFO: Create an SQL Command with &gt; 255 Characters"
permalink: /kb/163/Q163800/
---

## Q163800: INFO: Create an SQL Command with &gt; 255 Characters

	Article: Q163800
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): KbClientServer kbDatabase kbServer kbvfp300 kbvfp500 kbvfp600
	Last Modified: 25-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is often necessary to create an SQLEXEC command that contains more than 255
	characters. However, if the command does contain more than 255 characters one of
	the following error messages appears:
	
	In Visual FoxPro 3.0 and 5.0:
	
	  Syntax error
	
	In Visual FoxPro 6.0:
	
	  Command contains unrecognized phrase/keyword
	
	This article demonstrates one example of how the "insert string" might be
	concatenated to avoid this behavior.
	
	MORE INFORMATION
	================
	
	The following is an example of how you might use concatenation to execute a
	SQLEXEC command that would require more that 255 characters:
	
	  handle=SQLCONNECT("Pubs")
	     m=SQLEXEC(handle, "CREATE TABLE t255 (one char(50)," + ;
	
	         "two char(50), three char(50), four char(50)," + ;
	         "five char(50), six char(50))")
	
	     * The next command will insert the string successfully.
	     b=SQLEXEC(handle, "INSERT INTO t255 (one) ;
	
	       VALUES('xxxxxxjklmnopqrstuvwabcdefghijklmnopqrstuvw')")
	
	     * The next command will also insert successfully.
	     b=SQLEXEC(handle, "INSERT INTO t255 (one,two,three,four) ;
	
	       VALUES('abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw', + ;
	       'abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw', + ;
	       'abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw', + ;
	       'abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw')")
	
	     *The next command will produce a syntax error because the length
	     *of the string starting with insert is more than 255 characters.
	     b=SQLEXEC(handle, "INSERT INTO t255 (one,two,three,four,five) ;
	
	       VALUES('abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw', + ;
	       'abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw', + ;
	       'abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw', + ;
	       'abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw', + ;
	       'abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw')")
	
	     f1='abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw'
	     f2='abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw'
	     f3='abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw'
	     f4='abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw'
	     f5='abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw'
	     f6='abcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvw'
	
	     *The next line works because there is no string
	     *longer than 255 characters
	     b=SQLEXEC(handle, "INSERT INTO t255" + ;
	
	       "(one,two,three,four,five,six) " + ;
	       "VALUES('"+ f1 + "','" + f2 + "','" + ;
	       f3 + "','" + f4 + "','" + f5 + "','" + ;
	       f6 + "')")
	
	NOTE: You could use the same method with SELECT statement as well. If you are
	using a SELECT statement that is longer than 255 characters, you could store the
	field list and/or the WHERE conditions in a memory variable and pass the memory
	variable with the SELECT statement. For example, if you have to run a lengthy
	SELECT statement like the following:
	
	  SELECT FIELD_1, FIELD_2, FIELD_3 ......., FIELD_50 FROM TABLE1 WHERE CONDITION1 = CRITERIA1
	
	you could alternatively do this by running the following:
	
	  CF1 = "FIELD_1, FIELD_2, FIELD_3 ......., FIELD_50 "
	
	  RESULT = SQLEXEC(handle, "SELECT " + CF1 + " FROM TABLE1 WHERE CONDITION1 = CRITERIA1")
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbDatabase kbServer kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
