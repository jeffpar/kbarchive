---
layout: page
title: "Q193415: PRB: Setting Decimals to 10 or More Creates Incorrect Result"
permalink: kb/193/Q193415/
---

## Q193415: PRB: Setting Decimals to 10 or More Creates Incorrect Result

	Article: Q193415
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Decimals set to 10 or greater, the SUM() function returns results that do
	not match the lesser decimal equivalent.
	
	RESOLUTION
	==========
	
	Here are two potential workarounds depending on the application's needs:
	
	- Use the Currency field datatype where possible.
	
	-or-
	
	- Use the Round() function when comparing a value to another with decimal
	  places set to > 9.
	
	Example
	-------
	
	     IF Round(m.x3,2) <> 300.03
	        ? "Mismatch 3"
	     ENDIF
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code in a program file.
	
	     *******************Begin Code****************
	     CLOSE ALL
	     CLEAR
	     SET DECIMALS TO 10
	
	     CREATE CURSOR test2 (f1 N(10,2))
	     CREATE CURSOR test3 (f1 N(10,2))
	     CREATE CURSOR test4 (f1 N(10,2))
	     CREATE CURSOR test5 (f1 N(10,2))
	     CREATE CURSOR test6 (f1 N(10,2))
	
	     INSERT INTO test2 VALUES(100.01)
	     INSERT INTO test2 VALUES(100.01)
	
	     INSERT INTO test3 VALUES(100.01)
	     INSERT INTO test3 VALUES(100.01)
	     INSERT INTO test3 VALUES(100.01)
	
	     INSERT INTO test4 VALUES(100.01)
	     INSERT INTO test4 VALUES(100.01)
	     INSERT INTO test4 VALUES(100.01)
	     INSERT INTO test4 VALUES(100.01)
	
	     INSERT INTO test5 VALUES(100.01)
	     INSERT INTO test5 VALUES(100.01)
	     INSERT INTO test5 VALUES(100.01)
	     INSERT INTO test5 VALUES(100.01)
	     INSERT INTO test5 VALUES(100.01)
	
	     INSERT INTO test6 VALUES(100.01)
	     INSERT INTO test6 VALUES(100.01)
	     INSERT INTO test6 VALUES(100.01)
	     INSERT INTO test6 VALUES(100.01)
	     INSERT INTO test6 VALUES(100.01)
	     INSERT INTO test6 VALUES(100.01)
	
	     SELECT test2
	     SUM f1 TO m.x2
	
	     SELECT test3
	     SUM f1 TO m.x3
	
	     SELECT test4
	     SUM f1 TO m.x4
	
	     SELECT test5
	     SUM f1 TO m.x5
	
	     SELECT test6
	     SUM f1 TO m.x6
	
	     IF m.x2 <> 200.02
	        ? "Mismatch 2"
	     ENDIF
	
	     IF m.x3 <> 300.03
	        ? "Mismatch 3"
	     ENDIF
	
	     IF m.x4 <> 400.04
	        ? "Mismatch 4"
	     ENDIF
	
	     IF m.x5 <> 500.05
	        ? "Mismatch 5"
	     ENDIF
	
	     IF m.x6 <> 600.06
	        ? "Mismatch 6"
	     ENDIF
	     *******************End Code**************************
	
	Notice that there are two errors listed:
	
	- Mismatch 3
	
	-and-
	
	- Mismatch 6
	
	Another way to verify the problem is to step through the code in the Visual
	FoxPro Debugger. Place the following in the Watch window:
	
	     M.X3=300.03
	     M.X6=600.06
	
	Both of these entries return ".F."
	
	If you change the number of decimals to less than 10 using the SET DECIMALS TO
	command, the problem does not occur. Furthermore, changing the number of
	decimals stored in the table does not matter.
	
	Additional query words: kbVFp500 kbVFp600 kbVFp500a kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
