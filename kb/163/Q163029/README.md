---
layout: page
title: "Q163029: FIX: Default Value Does Not Update Table in Local/Remote View"
permalink: /kb/163/Q163029/
---

## Q163029: FIX: Default Value Does Not Update Table in Local/Remote View

{% raw %}

	Article: Q163029
	Product(s): Microsoft FoxPro
	Version(s): 3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 3.0b, when a view is created and default value is set using
	DBSETPROP, the newly-appended records contain the default value in a
	Browse/Append window; but the default values disappear after TABLEUPDATE() and
	REQUERY().
	
	RESOLUTION
	==========
	
	Instead of using default value in a view, manually code some ON KEY LABEL that
	inserts the default values when appending a new record. Since this bug is fixed
	in Visual FoxPro 5.0, the best way to avoid it is upgrading to Visual FoxPro
	5.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy and Paste the following code, and save this file as Prog1.prg under
	  C:\KBTEST
	
	        CLOSE DATABASES
	        SET DEFAULT TO C:\KBTEST
	
	        * Create a database and open it
	
	        IF NOT FILE('Table1.dbf')
	           CREATE DATA Data1
	           CREATE TABLE Table1 (ID C (8) Primary Key, State C (2))
	           SET MULTILOCKS ON
	           =CURSORSETPROP('Buffering', 5, 'Table1' )
	        ELSE
	           OPEN DATABASE Data1 EXCLUSIVE
	        ENDIF
	
	        * Create a view based on Table1
	
	        CREATE SQL VIEW View1 AS SELECT * FROM Table1
	
	        = DBSETPROP('View1.ID', 'Field', 'KeyField', .T.)
	        = DBSETPROP('View1.ID', 'Field', 'UpdateName','Table1.ID')
	        = DBSETPROP('View1.ID', 'Field', 'Updatable', .T.)
	        = DBSETPROP('View1.State', 'Field', 'Updatable', .T.)
	        = DBSETPROP('View1', 'View', 'SendUpdates', .T.)
	
	        * Set the view DefaultValue property
	        = DBSETPROP('View1.State', 'Field', 'DefaultValue', "'WA'")
	
	        SELECT 0
	        USE View1
	        BROWSE
	
	2. Run Prog1.prg.
	
	3. With the View1 Browse window open, append a records by pressing CTRL+Y, and
	  then enter a unique ID value. Add several records this way. The default value
	  of field STATE is automatically inserted as "WA."
	
	4. Close the View1 Browse window.
	
	5. In the Command window, issue the following commands to refresh the update to
	  Table1, and refresh View1 by retrieving data from Table1:
	
	        = TABLEUPDATE(.T.)
	        = REQUERY()
	
	6. Open the Table1 and View1 Browse windows. The STATE field value, "WA," of the
	  newly appended records turns into blank.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300b
	Version           : 3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
