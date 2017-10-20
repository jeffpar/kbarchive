---
layout: page
title: "Q141912: PRB: AutoOpenTables/AutoCloseTables Ignored in Program"
permalink: /kb/141/Q141912/
---

## Q141912: PRB: AutoOpenTables/AutoCloseTables Ignored in Program

{% raw %}

	Article: Q141912
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a form visually, you discover that the data environment's
	AutoOpenTables property is set to True (.T.) by default and the tables and views
	will automatically be opened when the form is run. If the data environment is
	instantiated from within a program, the value of AutoOpenTables and
	AutoCloseTables is ignored.
	
	WORKAROUND
	==========
	
	Call the OPENTABLES or CLOSETABLES methods directly.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new program file, and type the following code:
	
	     ******* Begin Program **********
	
	     public oData1
	     oData1=CREATEOBJECT("MyData")  && Instaniate the Data Environment
	
	     DEFINE CLASS MyData AS dataenvironment   && DataEnvironment Class
	     Name = "Dataenvironment"
	     AutoOpenTables=.T.
	     AutoCloseTables=.T.
	     ADD OBJECT "Cursor1" AS MyCursor     && ADD OBJECT for each
	     ENDDEFINE                            && cursor in Dataenvironment
	
	     DEFINE CLASS MyCursor AS cursor      && Cursor Class
	     Alias = "author"
	     Database = "C:\vfp\samples\data\testdata.dbc"
	     CursorSource = "customer"
	     Name = "Cursor1"
	     ENDDEFINE
	
	     ******* End Program *******
	
	2. Run the program.
	
	3. Check the View window. You will see that no tables are opened. The Data
	  Environment's AutoOpenTables is ignored.
	
	4. In the Command window type:
	
	  " oData1.OpenTables " (without the quotation marks)
	
	  NOTE: If the Testdata.dbc is not in your Path, you need to locate it.
	
	5. Note that the table is opened.
	
	6. Inside the Command window, type:
	
	  " oData1.CloseTables " (without the quotation marks)
	
	7. The OpenTables/CloseTables must be called directly because AutoOpenTables and
	  AutoCloseTables are ignored.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
