---
layout: page
title: "Q171272: FIX: SQL-SELECT into Array Causes Illegal Operation"
permalink: /kb/171/Q171272/
---

## Q171272: FIX: SQL-SELECT into Array Causes Illegal Operation

	Article: Q171272
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp500aFIX
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a SQL-SELECT statement to populate an array from a FoxPro 2x table
	containing deleted records with DELETED set on causes the operating system to
	close Visual FoxPro 5.0.
	
	When running under Windows 95, the following error appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	In Windows NT 4.0, the following error appears:
	
	  An application error has occurred and an application error log is being
	  generated.
	  VFP.exe
	  Exception: access violation <error number>, Address: <memory
	  address>.
	
	In both cases, the operating system then closes Visual FoxPro.
	
	RESOLUTION
	==========
	
	Do not issue a SET DELETED ON command and simply rewrite the SQL-SELECT
	statement, as in the following example:
	
	     SELECT * FROM ZTEST INTO ARRAY Zjunk WHERE DELETED()=.F.
	
	-or-
	
	     SELECT * FROM ZTEST INTO ARRAY Zjunk WHERE !DELETED()
	
	Also, the results of the SQL-SELECT statement could be directed to a destination
	other than to an array.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 5.0a and
	does not occur in Visual FoxPro 3.x.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code in a program file or line by line from the Visual
	  FoxPro Command window:
	
	        CLEAR
	        SET SAFETY OFF
	        USE HOME()+"samples\data\customer.dbf" EXCLUSIVE
	        COPY TO HOME()+"Ztest.dbf" TYPE FOX2X
	        SET SAFETY ON
	        CLOSE ALL
	        USE HOME()+"Ztest.dbf"
	        DELETE ALL FOR RECNO() < 10
	        USE
	        SET DELETED ON
	        SELECT * FROM HOME()+"Ztest" INTO ARRAY Zjunk
	        ? ALEN(zjunk)
	        USE
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp500aFIX 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
