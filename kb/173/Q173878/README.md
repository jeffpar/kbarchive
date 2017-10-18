---
layout: page
title: "Q173878: PRB: Field Mapping Lost When Project Moved to Different Drive"
permalink: kb/173/Q173878/
---

## Q173878: PRB: Field Mapping Lost When Project Moved to Different Drive

	Article: Q173878
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Moving a project that contains tables to a different drive clears the "Map field
	type to classes" information for the tables.
	
	RESOLUTION
	==========
	
	To workaround the problem place the following code in a Visual Foxpro program
	file:
	
	Sample Code
	-----------
	
	     PARAMETERS lcDBC, lcFromDrive, lcToDrive
	
	     &&lcDBC = Database Container in the project.
	     &&lcFromDrive = The drive where the project was originally.
	     &&lcToDrive = The drive where the project is moved to.
	
	     if ( pcount() = 1 )
	        if ( lower( getenv( "Machine" ) ) == "dfsd pentium" )
	           lcFromDrive = "e"  &&Drive where project originally located.
	           lcToDrive = "h"    &&Drive where project is moved to.
	        else
	           lcFromDrive = "h"  &&Drive where project originally located.
	           lcToDrive = "e"    &&Drive where project is moved to.
	        endif
	     endif
	
	     lcFromDrive = lower( lcFromDrive ) + ":\"
	     lcToDrive = lower( lcToDrive ) + ":\"
	
	     use (lcDBC + ".dbc")
	     scan for objecttype = "Field"
	        if ( at( lcFromDrive, Property ) > 0 )
	           replace property with strtran( property, lcFromDrive, lcToDrive )
	        endif
	     endscan
	     use
	
	Save the file, in the project directory (VFPApp), as movedbc.prg.
	
	After you move the Project directory, for example from C:\VFPApp to D:\VFPApp,
	run Visual FoxPro and type the following commands in the command window:
	
	     SET DEFAULT TO d:\VFPApp
	     movedbc("qa","c","d")
	
	Now when you open the project and then modify the table, you will not get the
	error message, and the Field mapping information will be retained.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If a table is part of a database, then you can map a class library and a class
	to each of the fields in the table using the "Map field type to Classes" option
	in the Table Designer. This way you specify the class you want to create when
	you drag the field onto a form. If all these files (database, table, class
	library) are a part of a project and the project is moved to a different drive
	(for example, from drive "C:" to drive "D:"), then modifying a table within the
	project that had a field mapped to a class will produce "The Class....
	Associated with this field cannot be found - class association is cleared" error
	message, and the Field Mapping information is cleared.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the Windows Explorer to create a directory "c:\vfp5app", or from Visual
	  FoxPro type the following command:
	
	        MD c:\vfp5app
	
	2. In the directory you created in the previous step, create a class library and
	  class by issuing the following commands from the Visual FoxPro Command
	  window:
	
	        CREATE CLASSLIB C:\vfp5app\ccontrols.vcx
	        CREATE CLASS ctextbox OF ccontrols AS TextBox
	
	3. Save the class and close the Class Designer.
	
	4. Create a project, database, and table in the "c:\vfp5app\" directory and name
	  all three of them "QA" with the following commands:
	
	        CREATE PROJECT c:\vfp5app\qa
	        CREATE DATABASE c:\vfp5app\qa
	        CREATE TABLE qa ( iID i, cText c(10) )
	
	  Make sure that the database is open and active when you create the table so
	  that the table is added to it.
	
	5. Add the "QA" database and the class library, created in the previous step, to
	  the "QA" project.
	
	6. Open the "QA" project. From the Project Manager, modify table "QA". When the
	  table designer appears, click the Fields tab.
	
	7. Select "iID" field, and then under the "Map Field type to Classes" section
	  set "Display Library" to "C:\vfp5app\ccontrols.vcx" and "Display Class" to
	  "cTextBox". Do the same for the "cText" field.
	
	8. Close the Table Designer and the project.
	
	9. Using the Windows Explorer, MOVE the whole project, including all the files,
	  to another drive, for example "D:" or "E:", with the same directory structure
	  (D:\vfp5app\ or E:\vfp5app).
	
	10. Open the project.
	
	11. Modify table "QA".
	
	12. When the "The Class.... Associated with this field cannot be found - class
	  association is cleared" error message is displayed, click OK.
	
	13. When the Table designer appears, click the Fields Tab and look at the "Map
	  Field type to Classes" section for each of the fields. Note that both the
	  "Display Library" and "Display Class" properties are blank.
	
	NOTE: Rebuilding the project does not resolve this problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : WINDOWS:5.0a
	Issue type        : kbprb
	
	=============================================================================
	
