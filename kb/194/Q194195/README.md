---
layout: page
title: "Q194195: FIX: Setup Wizard Cannot Differentiate Files With Same Name"
permalink: /kb/194/Q194195/
---

## Q194195: FIX: Setup Wizard Cannot Differentiate Files With Same Name

{% raw %}

	Article: Q194195
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbAppSetup kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup Wizard is not able to differentiate between files in the same project
	that have the same name but are stored in different directories.
	
	RESOLUTION
	==========
	
	Save the files so that they have different file names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in the updated version of the Setup Wizard Vfp6swiz.exe
	dated 10/08/1998. This bug was corrected in Visual Studio 6.0 Service Pack 3.
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	If a project has files that have the same name but are saved in different
	directories, the Setup Wizard is not able to differentiate between them. The
	Setup Wizard pulls the first file that it finds and then installs the same file
	to the different directories.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Project Directory Tree as follows:
	
	     ..\TestProj
	      ..\TestProj\File1\ 
	       ..\TestProj\File2\ 
	
	2. Create a new project and save it as MyProj1 to the TestProj directory.
	
	3. Create the following files and store them in the ..\TestProj\File1
	  directory:
	
	   - A Table named "Tbl1" with at least one character field. This can be a free
	     table or in a database container (.dbc). Insert a string such as "11111"
	     to the character field.
	
	   - A form named "Frm1." Add a label and set the caption of the label to
	     "ONE."
	
	   - A class library named "ClsLib1" with a class called Test, based on the
	     form class. Add a label to the class and set its caption to "ONE."
	
	   - A program file named "Prg1" with the " WAIT WINDOW 'ONE' " command.
	
	4. Create the following files and store them in \TestProj\File2 directory:
	
	   - A table named "Tbl1" with at least one character field. This can be a free
	     table or in a database container (.dbc). Insert a string like "22222" into
	     the character field.
	
	   - A form named "Frm1". Add a label and set the caption of the label to
	     "TWO."
	
	   - A class library named "ClsLib1" with a class called Test, based on the
	     form class. Add a label to the class and set its caption to "TWO."
	
	   - A Program file named "Prg1" with the " WAIT WINDOW 'TWO' " command.
	
	5. Run the Setup Wizard and create the distribution files.
	
	6. Install the application from the distribution files to a directory named
	  "..\TstApp."
	
	7. Modify each of the files in "..\TstApp\File2."
	
	Note that the contents of each of the file in "..\TstApp\File2" are the same as
	their counterparts in "..\TstApp\File1," instead of the actual entries. For
	example:
	
	- Tbl1 contains the record "11111" instead of "22222."
	
	- The Caption of the label in Frm1 is "ONE" instead of "TWO."
	
	- The Caption of the label in Test class is "ONE" instead of "TWO."
	
	- The command in Prg1 is Wait Window "ONE" instead of Wait Window "TWO."
	
	  RESULTS: The Setup Wizard took the set of files in the "..\TestProj\File1"
	  source directory and installed the same files to both the "..\TestApp\File1"
	  and "..\TestApp\File2" directories. The Setup Wizard should have pulled and
	  installed two different sets of files for the File1 and the File2 sub-
	  directories of TestApp.
	
	REFERENCES
	==========
	
	For more information on the updated Setup Wizard, please see the following URL:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbAppSetup kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
