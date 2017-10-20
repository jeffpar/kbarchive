---
layout: page
title: "Q186103: HOWTO: Use Oracle Nextval Function from Visual FoxPro"
permalink: /kb/186/Q186103/
---

## Q186103: HOWTO: Use Oracle Nextval Function from Visual FoxPro

{% raw %}

	Article: Q186103
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below demonstrates how to use the Nextval function of an Oracle
	database from Visual FoxPro. The Nextval function retrieves the next available
	number from a sequence.
	
	Oracle Sequence is similar to Identity Columns in Microsoft SQL Server version
	6.0, which contains system-generated sequential values that uniquely identify
	each row within a table.
	
	MORE INFORMATION
	================
	
	SQL Passthrough Sample Code
	---------------------------
	
	     Sqlhandle=sqlconnect("Oracle_Server")
	     =Sqlexec(Sqlhandle,"Insert into person(P_id,lastname,firstname) ;
	     values (PersonSN.nextval,'Lastname','Firstname')")
	
	Remote View
	-----------
	
	The Remote View designer parses 'PersonSN.nextval' as a field named "nextval" in
	a table named "PersonSN". Since a table named "PersonSN" does not exist, the
	following error occurs at run-time:
	
	  Alias not found.
	
	In order to retrieve the sequence from Oracle, you must call an Oracle User
	Defined Function (UDF) before appending a record.
	
	  Oracle Server
	  -------------
	
	     ** Create a Sequence name "PersonSN"
	
	     CREATE SEQUENCE PersonSN
	     INCREMENT BY 1
	     START WITH 100001
	     NOCACHE;
	
	     ** Create a Server Function "FNext" to return the next sequence from
	     ** Person.
	
	     CREATE OR REPLACE FUNCTION FNext RETURN NUMBER
	     IS
	        Count1 NUMBER(10,2);
	     BEGIN
	        SELECT PersonSN.nextval INTO Count1
	        FROM dual;
	      RETURN(Count1);
	     END;
	     / 
	
	  Visual FoxPro
	  -------------
	
	     =SQLEXEC(Sqlhandle,"Select FNext from dual")
	
	Additional query words: VFoxWin kbDSupport KBDSE
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
