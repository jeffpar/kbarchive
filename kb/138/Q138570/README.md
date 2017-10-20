---
layout: page
title: "Q138570: PRB: LIST STRUCTURE Command Truncates Long Field Names"
permalink: /kb/138/Q138570/
---

## Q138570: PRB: LIST STRUCTURE Command Truncates Long Field Names

{% raw %}

	Article: Q138570
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the LIST STRUCTURE command on a table that has long field names and that
	is part of a database, results in a truncated list of field names. The full
	field name, as it appears in the database, does not display.
	
	CAUSE
	=====
	
	The LIST STRUCTURE command looks at the underlying table, not the information
	contained in the database.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Code to Demonstrate Behavior
	----------------------------
	
	  **========================================================**
	  ** Program name: LFNTEST                                  **
	  ** Purpose     :This program demonstrates the behavior    **
	  **              of the LIST STRUCTURE command when used on**
	  **              a table that contains long field names.  **
	  **========================================================**
	  SET SAFETY OFF
	  CLOSE ALL
	  CLEAR
	  CREATE DATABASE captest
	  CREATE TABLE cust (Customer_Identification C(5), ;
	                     Customer_Name C(20))
	  INSERT INTO cust (Customer_Identification, Customer_Name) ;
	            Values ("00001","Acme Inc")
	  CLOSE ALL
	  OPEN DATABASE captest
	  USE cust
	  CLEAR
	  HIDE WINDOW COMMAND
	  DISPLAY STRUCTURE
	  WAIT WINDOW "Press any key to continue..."
	  SHOW WINDOW COMMAND
	
	Additional query words: VFoxWin list structure
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
