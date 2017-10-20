---
layout: page
title: "Q135361: BUG: SEEK Command Fails If Collate Is Set to &quot;Machine&quot;"
permalink: /kb/135/Q135361/
---

## Q135361: BUG: SEEK Command Fails If Collate Is Set to &quot;Machine&quot;

{% raw %}

	Article: Q135361
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SEEK command and there are trailing spaces in the seek key, the
	seek fails if you previously used this command:
	
	  SET COLLATE TO "machine"
	
	However, the seek succeeds if you previously used this command:
	
	     SET COLLATE TO "general"
	
	WORKAROUND
	==========
	
	Remove the trailing spaces from the seek key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Code to Reproduce Problem
	-------------------------
	
	  * Begin program
	  * This program uses Customer.dbf found in the \Samples\Data subdirectory.
	  * It is assumed that you have installed the sample data to the
	  * default directory under the main VFP directory.
	
	  CLEAR
	  CD SYS(2004) + "\samples\data"
	  USE customer IN 0
	  SET COLLATE TO "machine"
	  DO theprog
	  SELECT classd1
	  USE
	
	  SET COLLATE TO "general"
	  DO theprog
	
	  SELECT classd1
	  USE
	  SELECT customer
	  USE
	
	  PROCEDURE theprog
	
	  * This is just a simple SELECT statement to create a cursor to use
	  * for this example. This SELECT creates a small set of records
	  * from the Customer table and then creates a tag where the key is
	  * concatenation of several fields.
	
	     SELECT cust_id,company,contact,phone,SUBSTR(contact,1,1) ;
	     AS flag,' ' AS done;
	        FROM customer ;
	        WHERE SUBSTR(contact,1,1)$"AI" ;
	        INTO CURSOR classd1
	     INDEX ON done + cust_id + flag TAG dcust
	
	  * Now that the cursor is created, seek a record that you know is in
	  * the new set of records. Then report the collation sequence
	  * and the results of the seek.
	
	     SEEK " LAMAI A "
	
	  * Print the collation sequence that is in effect. Then if you are at
	  * the end of file marker, you know the record was not found; in which case,
	  * print the word "not." If not at EOF, you found the record, so print
	  * "found."
	
	     ?"With the collation sequence set to " + SET("collate");
	      + " the record was " + IIF( EOF(),"not ","") + "found"
	
	  * End Program
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
