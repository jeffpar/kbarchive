---
layout: page
title: "Q180028: PRB: DBC With Stored Procedure Produces Error When Opened"
permalink: /kb/180/Q180028/
---

## Q180028: PRB: DBC With Stored Procedure Produces Error When Opened

{% raw %}

	Article: Q180028
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a database container (dbc) that contains stored
	procedures, the following error can occur:
	
	  Object file c:\<dbcname>.dbc was compiled in a previous version of
	  FoxPro.
	
	RESOLUTION
	==========
	
	1. Duplicate the database container copying all the files into a new database
	  container in another folder. This includes files with a .dbc, .dct, and .dcx
	  extension.
	
	2. On the development computer used for building executable files for remote
	  sites, open the new database container with the newer version of Visual
	  FoxPro. The database container now converts automatically.
	
	3. Run the program named Gendbc.prg located in the \Vfp\Tools\Gendbc folder.
	  Select the .dbc file in question and remember the name and location of the
	  output .prg file it creates.
	
	4. Open the .prg file created by Gendbc.prg and copy the code that resembles the
	  code below.
	
	  NOTE: In the following code Test.krt and Test.dbc should be replaced with the
	  name that you gave the .prg file and the .dbc file.
	
	        ********* Procedure Re-Creation *********
	        IF !FILE([Test.krt])
	           ? [Warning! No Procedure File Found!]
	        ELSE
	           CLOSE DATABASE
	           USE 'test.dbc'
	           g_SetSafety = SET('SAFETY')
	           SET SAFETY OFF
	           LOCATE FOR Objectname = 'StoredProceduresSource'
	              IF FOUND()
	                 APPEND MEMO Code FROM [Test.krt] OVERWRITE
	                 REPLACE Code WITH SUBSTR(Code, 70, 66)
	              ENDIF
	           LOCATE FOR Objectname = 'StoredProceduresObject'
	              IF FOUND()
	                 APPEND MEMO Code FROM [Test.krt] OVERWRITE
	                 REPLACE Code WITH SUBSTR(Code, 136)
	              ENDIF
	        SET SAFETY &g_SetSafety
	        USE
	        OPEN DATABASE [Test.dbc]
	        ENDIF
	
	5. Make a project and then create a .prg file within the project and paste the
	  code copied from step 4 into the .prg file.
	
	6. Build an executable making sure that the file with the .krt extension, which
	  was created by the Gendbc program, is placed in the folder with the database
	  container that needs to be converted.
	
	7. When you run the executable in the folder where the old database container is
	  located, the executable places the code from the .krt file into the memo
	  field of the database container that needs conversion. When you run the
	  executable that opens the database container, the .dbc file should open
	  correctly.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This error occurs when the database container contains stored procedure code and
	you attempt to open the database container with an executable that was created
	with a version of Visual FoxPro older than the version used to create the
	database container.
	
	The newer version of Visual FoxPro must compile the stored procedure code in the
	database container. This allows the database container to open properly. If the
	database container does not have any stored procedure code, it can be opened
	without an error because conversion is not needed.
	
	If you open the database container in the development environment of the newer
	version of Visual FoxPro, then the stored procedure code is compiled
	automatically and the error does not occur.
	
	The error can be eliminated by opening the database container in the development
	environment of the newer version of Visual FoxPro. However, this presents a
	problem for database containers that are at a remote site where a newer version
	of a Visual FoxPro run-time executable is shipped. Since the development
	environment of Visual FoxPro is not available, the executable cannot
	automatically compile the stored procedure code and the COMPILE DATABASE command
	returns a "Feature not available" error message when used.
	
	You can create a separate executable to convert the database container by
	following the steps in the RESOLUTION section.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database container in Visual FoxPro 3.x by typing the following in
	  the FoxPro Command window:
	
	        CREATE DATABASE old_vfp
	
	2. Next, in the Command window type:
	
	        MODIFY DATA
	
	3. Click the right mouse button (called right-click) while the mouse pointer is
	  in the database container. Select the New Table menu option to build a new
	  table called OLD_TABLE in the database container.
	
	4. Add a couple of fields to the table, save the table, and then add a couple of
	  records to the table.
	
	5. From the Visual FoxPro menu bar, select the Database menu option and choose
	  the Edit Stored Procedures menu bar. Type the following:
	
	        PROCEDURE my_proc
	        WAIT WINDOW "In my Stored Procedure"
	
	6. Create a project in the newer version of Visual FoxPro and add a .prg file
	  with the following code:
	
	        OPEN DATABASE old_vfp
	        USE old_table
	        BROWSE
	
	7. Select the Build button on the project to create an executable file. Place
	  the executable file in the same folder that contains the database container
	  and run the program outside the Visual FoxPro environment.
	
	  The error "Feature not available" appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
