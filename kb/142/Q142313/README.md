---
layout: page
title: "Q142313: FIX: Using RI Builder &amp; Long Table Names Makes Triggers Fail"
permalink: /kb/142/Q142313/
---

## Q142313: FIX: Using RI Builder &amp; Long Table Names Makes Triggers Fail

{% raw %}

	Article: Q142313
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the RI Builder's code along with tables that have long table names and
	Private datasessions results in triggers constantly failing. The underlying
	error causing the triggers to fail is Error 1 "File <file_name> does not
	exist."
	
	CAUSE
	=====
	
	There are two causes. First the SET DATABASE command is scoped to Private
	Datasessions. Thus, there is no Database current and the appropriate database
	must be current for Visual FoxPro to be able to resolve long table names.
	Second, the Referential Integrity (RI) Builder does not take this previous issue
	into account.
	
	WORKAROUND
	==========
	
	Modify the RIOPEN procedure the RI Builder created. The modifications would
	consist of finding the Database the table with the long table name belongs to,
	using CURSORGETPROP(), SET DATABASE to this Database. Let the RIOPEN routine
	open the table. Then use SET DATABASE to set the database back to the original
	database if any.
	
	Example Workaround
	------------------
	
	To work around this problem, make the following modifications to the RIOPEN
	Procedure:
	
	1. Copy the entire RIOPEN procedure, and paste it below the "__RI_FOOTER"
	
	2. Add the following variables to the copied RIOPEN's LOCAL declarations:
	
	     __lcCurDBC, __tcOldTable
	
	3. Insert the following lines immediately after the copied RIOPEN's LOCAL
	  declarations:
	
	     && Replace any spaces in Long Table name with "_".
	     && because this is what VFP does in the DE, Aliases
	     && are not allowed to contain spaces.
	     __tcOldTable=tcTable
	     tcTable=STRTRAN(ALLTRIM(tcTable)," ","_")
	
	     && Find the DBC name the Table belongs to
	     __lcCurDBC=SET('DATABASE') &&Get any current DBC
	     __lcDBCName=CURSORGETPROP('DATABASE',tcTable) && Get Database Name
	
	     __lcDBCName=substr(__lcDBCName,rat('\',__lcDBCName)+1) &&Remove path
	     __lcDBCName=substr(__lcDBCName,1,rat('.',__lcDBCName)-1) &&Remove '.DBC'
	
	     SET DATABASE TO (__lcDBCName)
	
	     && Restore original value, the USE needs the actual Long Table name
	     tcTable=__tcOldTable
	
	4. Insert the following line immediately after the first ENDIF of the copied
	  RIOPEN procedure:
	
	     && Set back to original DBC
	     SET DATABASE TO &__lcCurDBC
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new database with a Parent Child Persistent Relation, and give the
	  parent table a long table name.
	
	2. Set the RI Builder so that there is RESTRICT on the Child table's Insert.
	
	3. Create a new form, and add both tables to its Data Environment.
	
	4. Set the Child Cursors's BuffermodeOverride property to 5.
	
	5. Set the form's DataSession property to 2-Private Datasession.
	
	6. Add the child table's Foreign Key to the Form.
	
	7. Add a Command button to the form. Set its Caption property to Add, and Add
	  the following code to its Click event:
	
	     SELECT <child table>
	     APPEND BLANK
	     THISFORM.REFRESH
	
	8. Add another Command button to the form. Set its caption property to Save, and
	  add the following code to its Click event:
	
	   SELECT<child table>
	     IF .NOT. TABLEUPDATE(.T.,.T.)
	        =TABLEREVERT(.T.) &&Revert the change
	        IF TYPE('gaErrors[1,1]') <> 'L'
	           =MESSAGEBOX('Trigger Failed - '+gaErrors[1,2],0,;
	             'Data Entry Error/Trigger Failed')
	        ENDIF
	        GO TOP
	     ENDIF
	     THISFORM.REFRESH
	
	9. Run the form. Click the Add button, and type in a value that is not in the
	  Parent's Primary Key. Click the "Save" button.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
