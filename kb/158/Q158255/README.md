---
layout: page
title: "Q158255: HOWTO: Modify a Table in Visual FoxPro Using Its Rules"
permalink: /kb/158/Q158255/
---

## Q158255: HOWTO: Modify a Table in Visual FoxPro Using Its Rules

{% raw %}

	Article: Q158255
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp600 KbDBFDBC
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro 5.0 or later, the field validation rules and the record
	validation rules can now modify the table to which they belong. This is not
	possible in Visual FoxPro 3.0.
	
	MORE INFORMATION
	================
	
	For example, suppose you want to track when each update was made to a record,
	check a maximum order amount, and capitalize entries in a certain field. The
	following steps illustrate how this might be done.
	
	1. Create a new DBC called "mydbc."
	
	2. Issue the following command to create a table:
	
	        CREATE TABLE cust(custname c(10),chg_date D, order N(5), ;
	        max N(5), limit L)
	
	3. Enter some records in the table.
	
	4. Enter the following in the stored procedures:
	
	        PROCEDURE rec_valid
	           REPLACE chg_date WITH DATE()
	           IF order > max
	              REPLACE limit With .t.
	           ELSE
	              REPLACE limit with .f.
	           ENDIF
	        ENDPROC
	
	        PROCEDURE fld_valid
	          IF !EMPTY(ALLTRIM(custname)) AND ;
	             ALLTRIM(PROPER(custname))<>ALLTRIM(custname)
	              REPLACE custname WITH PROPER(custname)
	          ENDIF
	        ENDPROC
	
	5. Modify the table, and in the record validation rule type rec_valid().
	
	6. In the field validation rule for custname, type fld_valid().
	
	7. Browse the table, add new records, and edit existing records.
	
	Notice the chg_date is modified for each new record and for any existing record
	that is edited. The limit field is set to true each time the order field exceeds
	the max field. The first letter of custname is always capitalized regardless of
	how the name is entered or changed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp600 KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
