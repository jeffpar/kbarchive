---
layout: page
title: "Q168521: HOWTO: Reapply Default Values to Reuse/Recycle Deleted Record"
permalink: kb/168/Q168521/
---

## Q168521: HOWTO: Reapply Default Values to Reuse/Recycle Deleted Record

	Article: Q168521
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how you can retrieve default values for a deleted
	record being reused or "recycled" in Visual FoxPro 3.x and 5.x.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro, the DELETE command does not delete a record physically;
	rather, it only marks the record for deletion. Using the RECALL command unmarks
	the deleted record.
	
	In order to physically delete a record from a table in Visual FoxPro, use the
	PACK command. Using PACK requires the table to be opened exclusively.
	
	In a multi-user environment, it may be difficult to obtain exclusive use of the
	file for packing. To work around this problem, you can recycle deleted records
	by using the technique illustrated below.
	
	This article assumes you have an existing database and certain fields have
	default values in the table.
	
	The following code snippet does the following:
	
	1. Looks for a deleted record.
	
	2. Retrieves the default values from the table in the database.
	
	3. Re-uses the first deleted record found.
	
	If no deleted records are found, a new record is appended:
	
	     LOCAL lcDeleted, dExpr, nCount, a_field[1]
	     lcDeleted = set("DELETED")
	     SET DELETED OFF
	
	     * Looks for deleted record in the table
	     LOCATE FOR DELETED()
	
	     IF FOUND()
	        * bring it back to life and blank its fields
	        RECALL
	        * blank out the contain of the deleted record
	        BLANK
	
	       * Retrieve all default values from the base table.
	        FOR nCount = 1 to AFIELDS(a_field)
	            dExpr = DBGetProp(CursorGetProp("SourceName")+ ;
	                    "." + a_field[nCount, 1], "Field", "DefaultValue")
	            * if there is a default value, use it
	            IF !Empty(dExpr)
	               REPLACE (a_field[nCount, 1]) WITH EVAL(dExpr)
	            ENDIF
	       ENDFOR
	     ELSE
	       APPEND BLANK
	     ENDIF
	
	     SET DELETED &lcDeleted
	
	In order to retrieve default values from the database, the database needs to be
	open at all times. If the database is not open, an error occurs.
	
	NOTE: Unused space in memo files will not be recycled. To recover unused space in
	memo files, you must issue a PACK MEMO command (which requires that the table be
	opened EXCLUSIVELY).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
