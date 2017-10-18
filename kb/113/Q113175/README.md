---
layout: page
title: "Q113175: How to Print Multiple Columns in FoxPro for MS-DOS"
permalink: kb/113/Q113175/
---

## Q113175: How to Print Multiple Columns in FoxPro for MS-DOS

	Article: Q113175
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	A common request is to print multiple columns in FoxPro for MS-DOS. Currently
	this capability is not provided in the Report Writer. However, you can simulate
	this functionality by creating a cursor that creates the "columns," as described
	below.
	
	MORE INFORMATION
	================
	
	NOTE: The following method, though designed specifically for FoxPro for MS-DOS,
	could also be used in FoxPro for Windows and FoxPro for Macintosh.
	
	The following sample program creates an SQL cursor with the requested number of
	columns. You can call the program in the following manner:
	
	  USE <database name>
	  DO colmaker WITH 4 && where 4 is the number of columns desired
	  REPORT FORM <multiple-column report> PREVIEW
	
	The cursor can then be used to create a report. The columns will all be in one
	record, so the fields for the total number of columns desired will be placed on
	the same detail line. The program creates an extra field called TRACKER for
	every column. This field will not be displayed in the report.
	
	     PROCEDURE colmaker
	     PARAMETER colnum
	
	     * Initializes variables
	     **********************
	     * Stores fields in database to an array 'repodbf'
	     =AFIELDS(repodbf)
	
	     * Stores number of fields in database to a variable 'numfield'
	     numfield = ALEN(repodbf,1)
	
	     * Stores database name to variable 'dbfname'
	     dbfname = ALIAS()
	
	     * Initializes procedure variables
	     fldlist = ""
	     whrclause = ""
	     totcur = ""
	     i = 0
	
	     * Calculates variables to deal with extra records
	     extras = RECCOUNT() % colnum
	     IF extras <> 0
	        mtracker = CEILING(RECCOUNT()/colnum)
	     ENDIF
	
	     * Generates field list for SELECT statements
	     FOR i = 1 to numfield
	        fldlist = fldlist + dbfname+ "."+repodbf(i,1) + ","
	     ENDFOR
	
	     * Adds a field to the resulting SELECT statements to organize
	     * records
	     fldlist = fldlist + "CEILING(recno()/"+ALLTRIM(STR(colnum))+") ;
	        AS TRACKER"
	
	     * Deletes any residual temporary databases
	     oldsaf = SET("SAFETY")
	     SET SAFETY OFF
	     FOR i = 1 to colnum
	        fname = "temp"+ALLTRIM(STR(i)) + ".DBF"
	        ERASE &fname
	     ENDFOR
	
	     * Creates databases for columns
	     FOR i = 1 to colnum
	        curname = "temp" + ALLTRIM(STR(i))
	        x = IIF(i<colnum,i,0)
	        SELECT &fldlist FROM (dbfname) INTO TABLE &curname ;
	           WHERE (RECNO()%colnum)=x
	     * Creates names for cursors for use in final SELECT
	        totcur = totcur + curname + ","
	     ENDFOR
	     totcur = SUBSTR(totcur,1,LEN(totcur)-1)
	
	     * Adds blank records to necessary database to account for extra
	     * records
	     IF extras <> 0
	        FOR i = extras+1 to colnum
	           fname = "TEMP" + ALLTRIM(STR(i))
	           SELECT &fname
	           APPEND BLANK
	           REPLACE tracker WITH mtracker
	        ENDFOR
	     ENDIF
	
	     * Builds join condition for resulting databases
	     FOR i = 1 to colnum-1
	        whrclause = whrclause + "temp"+ALLTRIM(STR(i)) + ;
	           ".tracker = temp" + ALLTRIM(STR(i+1)) + ;
	           ".tracker AND "
	     ENDFOR i
	        whrclause = whrclause + "temp1.tracker = temp" + ;
	           ALLTRIM(STR(colnum)) + ".tracker"
	
	     * Combines resulting database into one final database
	     SELECT * FROM &totcur INTO CURSOR final ;
	        WHERE &whrclause
	
	     * Deletes residual databases
	     FOR i = 1 to colnum
	        fname = "temp"+ALLTRIM(STR(i))
	        SELECT &fname
	        USE
	        fname = fname + ".DBF"
	        ERASE &fname
	     ENDFOR
	
	     * Returns to resulting cursor
	     SELECT final
	
	The "final" cursor will contain a copy of each field for the number of columns
	specified. For example, using the CUSTOMER database in the FoxPro TUTORIAL
	subdirectory, you could create a three-column report by placing the following
	expressions in the Detail band:
	
	  CNO_A        CNO_B       CNO_C
	  COMPANY _A   COMPANY_B   COMPANY _C
	
	The records will appear in order across and down the page. For example:
	
	  RECORD 1    RECORD 2   RECORD 3
	  RECORD 4    RECORD 5   RECORD 6
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin multi multiple multi- column multicolumn
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	
