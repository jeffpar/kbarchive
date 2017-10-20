---
layout: page
title: "Q257608: BUG: Record Inserted Even Though the Field Does Not Accept NULL"
permalink: /kb/257/Q257608/
---

## Q257608: BUG: Record Inserted Even Though the Field Does Not Accept NULL

{% raw %}

	Article: Q257608
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp500 kbvfp500a kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 04-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When inserting a NULL value to a field that does not accept NULL, the record is
	inserted anyway depending upon the order of the NULL field in the table. The
	same behavior exists when inserting values by using the Visual FoxPro ODBC
	driver.
	
	RESOLUTION
	==========
	
	The workaround for this behavior is to create an error trapping routine to
	capture the error generated from the insertion of the .NULL. values and revert
	the table records. The following code illustrates how to accomplish this:
	
	Paste the code below into a Visual FoxPro Program (.PRG) and run it:
	
	  CLEAR
	  SET MULTILOCKS ON
	  ON ERROR DO nullerror
	
	  CREATE TABLE myinsert ;
	         (col1 i    NOT NULL, ;
	  	col2 c(5) NOT NULL, ;
	  	col3 c(5) NOT NULL)
	  CURSORSETPROP('Buffering', 3, 'MyInsert') && Enable Record Level Buffering
	
	  *!* These insertions will be reverted after they generate Error 1581
	  INSERT INTO myinsert VALUES (1,     NULL, 'xxx')
	  INSERT INTO myinsert VALUES (NULL, 'xxx', 'xxx')
	  INSERT INTO myinsert VALUES (1,    'xxx',  NULL)
	
	  ON ERROR
	
	  PROCEDURE nullerror
	
	  AERROR(aerrorarray)     && Creates Array with Error details
	  IF aerrorarray(1) = 1581
	  	WAIT aerrorarray(2) WINDOW TIMEOUT 2
	  	TABLEREVERT()
	  ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Paste the code below into a Visual FoxPro Program (.PRG) and run it:
	
	  CREATE TABLE myInsert ;
	  	(col1 I    NOT NULL, ;
	  	 col2 C(5) NOT NULL, ;
	  	 col3 C(5) NOT NULL)
	
	  *!* Inserts a record with a value in col1, but not col2 or col3
	  INSERT INTO myInsert VALUES (1,     NULL, 'xxx')  
	
	  *!* Does not insert a record
	  INSERT INTO myInsert VALUES (NULL, 'xxx', 'xxx')  
	
	  *!* Inserts a record with values in col1 and col2, but not col3.
	  INSERT INTO myInsert VALUES (1,    'xxx',  NULL)
	
	NOTE: Data insertion stops at the first field that fails.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp500 kbvfp500a kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
