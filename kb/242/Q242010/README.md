---
layout: page
title: "Q242010: FIX: The Data Form Wizard May Not Open an Access 2000 Database"
permalink: /kb/242/Q242010/
---

## Q242010: FIX: The Data Form Wizard May Not Open an Access 2000 Database

{% raw %}

	Article: Q242010
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbATM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Access 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Visual Basic Data Form Wizard to open an Access 2000 database you
	may get the following error:
	
	  "Unrecognized Database Format '....\your_database_name.mdb'"
	
	CAUSE
	=====
	
	The Visual Basic Data Form Wizard uses the Jet OLEDB 3.5 Provider which does not
	recognize the Access 2000 database format.
	
	RESOLUTION
	==========
	
	Open the Access 2000 database through an ODBC DSN using the Access ODBC driver
	version 4.0.
	
	-- Or --
	
	Build your form manually using either the Jet OLEDB version 4.0 provider or an
	ODBC DSN through the Access ODBC driver version 4.0
	
	STATUS
	======
	
	This is a problem with Visual Basic 6.0 Service Pack 3 and earlier versions.
	This problem has been fixed in Service Pack 4 for Visual Basic.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic project.
	
	2. Add a new Form using the Visual Basic Data Form Wizard.
	
	3. Click Next in the Introduction dialog box.
	
	4. Choose Access in the Database Type dialog box.
	
	5. Point to Access 2000 in the Database dialog box.
	
	6. Click Next and you receive the error you saw in the Symptoms section.
	
	REFERENCES
	==========
	
	Q238401 "PRB: Unrecognized Database Format Error Upgrading to Access 2000"
	
	Additional query words: kbgrpvbdb kbdsupport dataform kbdatabase kbAccess
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess2000 kbZNotKeyword2 kbVB600Search kbAccess2000Search kbVB600
	Version           : :2000,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
