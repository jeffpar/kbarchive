---
layout: page
title: "Q156234: PRB: CLOSE DATABASE ALL Does Not Close All Databases"
permalink: /kb/156/Q156234/
---

## Q156234: PRB: CLOSE DATABASE ALL Does Not Close All Databases

{% raw %}

	Article: Q156234
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the CLOSE DATABASE ALL command to close a database that is opened from
	Project Manager does not close the database.
	
	RESOLUTION
	==========
	
	To close databases opened from the Project Manager, you must close the database
	from the Project Manager or close the project.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you open a database in Visual FoxPro, the database name appears in the
	Database combo box in the Standard toolbar. If you have multiple databases open,
	you can make a database the active database by selecting the name of the
	database in the Database combo box. In order to close all the databases at once,
	you can use the CLOSE DATABASE ALL command. However, if you are closing a
	database opened from the Project Manager, the CLOSE DATABASE or CLOSE DATABASE
	ALL commands do not close the database. Instead, they set the database as an
	inactive database. When you click the Database drop-down list box in the
	Standard toolbar, you can still select the database.
	
	The CLOSE DATABASE or CLOSE DATABASE ALL commands close all databases that were
	opened via any method other than the Project Manager.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Tastrade.pjx project located in the Samples\Tastrade directory under
	  the Visual FoxPro directory.
	
	2. Open the Tastrade database from the open button in the Project Manager.
	
	3. In the Command window enter the following command:
	
	         CLOSE DATABASE ALL
	
	4. Check the Database drop-down list box in the Standard toolbar to see if the
	  database is open.
	
	The database still appears as open in the Database drop-down list box.
	
	Additional query words: VfoxWin ssafe
	
	======================================================================
	Keywords          : kbSSafe kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	

{% endraw %}
