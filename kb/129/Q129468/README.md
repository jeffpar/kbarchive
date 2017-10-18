---
layout: page
title: "Q129468: HOWTO: Update a Remote Table from a Local Table"
permalink: kb/129/Q129468/
---

## Q129468: HOWTO: Update a Remote Table from a Local Table

	Article: Q129468
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode KbClientServer kbDatabase kbServer kbvfp300 kbvfp500 kbvfp600
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can update a remote table from a local table by using SQL Pass Through
	commands. This article shows by example how to do it.
	
	MORE INFORMATION
	================
	
	Code Sample
	-----------
	
	Use the SQLExec() command with the SQL-UPDATE command to update the remote data
	with the local data as demonstrated in this code:
	
	     * SQL Pass Through Example Showing How to Update a remote table from a
	     * local FoxPro table.
	
	     * multdata - local data table containing two fields (ckey and cfield).
	     * cfield   - local char 10 field in multdata.
	     * ckey     - local char 10 field used as the updating key value.
	     *
	     * zmultaoc - remote(on SQL Server) database that contains ztest2 table.
	     * ztest2   - remote table that is going to be updated and has fields
	     *            chardata and key that correspond the the local fields
	     *            ckey and cfield.
	
	     * Define datasource, user,and password values
	     datasrc="test"
	     user="sa"
	     passwd=""
	
	     handle=SQLCONNECT(datasrc,user,passwd)
	     IF handle < 0
	        WAIT WINDOW "Error: "+str(ERROR())+MESSAGE()
	     ELSE
	        WAIT WINDOW "Opening Test Data zmultaoc..ztest2" NOWAIT
	        =SQLEXEC(handle,"use ztest2")
	
	        WAIT WINDOW "Change data in BROWSE and Press CTRL+W" NOWAIT
	        USE multdata
	        BROWSE FIELDS cfield
	
	        * Upload the data
	        GO TOP
	        SCAN
	           SCATTER MEMVAR
	           WAIT WINDOW "Updating:"+" "+ALLTRIM(m.ckey) + ;
	              " "+ALLTRIM(m.cfield)NOWAIT
	           retval=SQLEXEC(handle,"update zmultaoc..ztest2 set;
	              chardata=?m.cfield where key=?m.ckey")
	
	           IF retval < 0
	              WAIT WINDOW "Error: Update failed"
	           ENDIF
	        ENDSCAN
	
	        * Check changes
	        WAIT WINDOW "BRINGING BACK CHANGES TO BE VIEWED" NOWAIT
	        retval=SQLEXEC(handle,"select * from zmultaoc..ztest2")
	        IF retval >= 0
	           BROWSE
	        ENDIF
	
	        =SQLDISCONN(handle)
	     ENDIF
	
	Additional query words: passthrough
	
	======================================================================
	Keywords          : kbcode KbClientServer kbDatabase kbServer kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
