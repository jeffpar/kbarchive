---
layout: page
title: "Q133001: PRB: SQL SELECT Statement UDF Executes Twice On First Record"
permalink: kb/133/Q133001/
---

## Q133001: PRB: SQL SELECT Statement UDF Executes Twice On First Record

	Article: Q133001
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; MS-DOS:2.6a; WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user-defined function (UDF) called as a select item in an SQL SELECT statement
	executes twice for the first record of the source table.
	
	CAUSE
	=====
	
	The first iteration of the SQL SELECT statement creates and sizes the columns in
	the output. The first iteration therefore executes once to do this and once to
	determine what data to return from the first record.
	
	RESOLUTION
	==========
	
	Insert code in the UDF to suppress its execution on the first iteration. Please
	see the examples in the More Information section.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table called SQLUDF.DBF, and add a single numeric field called
	  nField1.
	
	2. Place the values 1, 2, 3, 4, and 5 in the first five records.
	
	3. Run the following code:
	
	     * start of SQLUDF.PRG
	     *
	     * This program selects records from the input table and calculates a
	     * running total in the output table by using a UDF.
	
	     nRunningTot = 0        && initialize running total to 0
	     nIterations = 0        && initialize iteration counter to 0
	
	     SELECT *, Add_Em(nField1) as nRunTotal FROM SQLUDF INTO CURSOR temp
	     BROWSE NOWAIT
	
	     PROCEDURE Add_Em
	          PARAMETERS tnFld1
	             nIterations = nIterations + 1  && Increment iteration counter
	
	             WAIT WINDOW "Record Number:        "+ALLTRIM(STR(RECNO())) + ;
	                CHR(13)+ "Number of Iterations: "+ALLTRIM(STR(nIterations)) ;
	
	                TIMEOUT 1
	             nRunningTot=nRunningTot + tnFld1     && Calculate running total
	         RETURN nRunningTot
	     ENDPROCEDURE
	
	     *End of SQLUDF.PRG
	
	SQLUDF.PRG Notes
	----------------
	
	- The Record Number displays 1 twice, then it displays 2 through 5.
	
	- The Number of Iterations displays 1 through 6.
	
	- The values placed in the RunTotal field are 2, 4, 7, 11, and 16 for records 1
	  through 5. The values should be 1, 3, 6, 10, and 15.
	
	Example Workaround
	------------------
	
	The following program is a modification of the above code. It suppresses the
	extra calculation for the first iteration of the UDF:
	
	     * start of SQLUDF2.PRG
	     *
	     * This program sets a logical flag to test for the first iteration of
	     * the UDF to suppress getting a sum from the first record twice.
	     *
	
	     nRunningTot = 0                   && initialize running total to 0
	     nIterations = 0                   && initialize iteration counter to 0
	     lFirst_Time = .T.         && initialize 1st time through variable
	     SELECT *, Add_Em(nField1) as nRunTotal FROM SQLUDF INTO CURSOR temp
	     BROWSE NOWAIT
	
	     PROCEDURE Add_Em
	        PARAMETERS tnFld1
	        IF lFirst_Time != .T.     && Only run if not 1st time through
	           nIterations=nIterations + 1    && Increment iteration counter
	           WAIT WINDOW "Record Number:        " + ;
	              ALLTRIM(STR(RECNO())) + ;
	
	              CHR(13) +"Number of Iterations: " + ALLTRIM(STR(nIterations));
	              TIMEOUT 1
	
	              nRunningTot = nRunningTot + tnFld1   && Calculate running total
	         ENDIF
	         lFirst_Time=.F.        && Togggle to .F. on 1st call to UDF
	         RETURN nRunningTot
	
	     ENDPROCEDURE
	
	     *End of SQLUDF.PRG
	
	Workaround Notes
	----------------
	
	- The lFirst_Time variable causes the UDF to not create a running total when
	  called the first time.
	
	- The Record Number displays 1 through 5.
	
	- The Number of Iterations displays 1 through 5.
	
	- The values placed in the RunTotal field are correct: 1, 3, 6, 10, and 15.
	
	General Notes
	-------------
	
	- If record 1 of the source table does not satisfy a WHERE condition, the UDF
	  is called once for the first record in spite of the workaround code.
	
	- The overriding emphasis remains that the behavior of UDFs called from SQL
	  SELECT statements is unpredictable. Extensive testing should be done to
	  ensure that results are as expected. Please see the subheading
	  <select_item> under SELECT - SQL in the FoxPro Language Reference for
	  more information.
	
	REFERENCES
	==========
	
	For more information about a similar behavior of a UDF, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q124402 Calling a User-Defined Function (UDF) from SQL SELECT
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro260aDOS kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.6a; MS-DOS:2.6a; WINDOWS:2.6a,3.0
	
	=============================================================================
	
