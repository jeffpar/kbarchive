---
layout: page
title: "Q130298: INFO: Cursors and the Data Environment on Forms and Reports"
permalink: /kb/130/Q130298/
---

## Q130298: INFO: Cursors and the Data Environment on Forms and Reports

{% raw %}

	Article: Q130298
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you add a table or view to the data environment of a form or report in
	Visual FoxPro, you may notice that the table is referred to as a cursor. This
	may be confusing for developers who are accustomed to the version 2.x definition
	of a cursor as a temporary table.
	
	MORE INFORMATION
	================
	
	The cursor referred to in the data environment is a "cursor object." By adding
	the table or view as an object, you gain several advantages. During design time,
	you can specify values for several properties including Exclusive, Alias,
	ReadOnly, NoDataOnLoad and others. By modifying these properties at design time,
	control is gained over the behavior of the data within the form, without having
	to close and reopen files. At run-time, these properties can provide useful
	information.
	
	A cursor object also has three events (Init, Destroy, and Error). This allows
	encapsulation of code for each table. You might want to create one table if it
	does not exist when opened, but generate a dialog box for the user if unable to
	connect to a remote view in the same form or report.
	
	The cursor object does not create a temporary table. If you modify data, the
	changes affect the table directly unless buffering is enabled. If buffering is
	enabled, changes are written to a buffer until they are applied to the source
	table or view.
	
	REFERENCES
	==========
	
	For more information on the cursor object, please see the Visual FoxPro Help
	file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
