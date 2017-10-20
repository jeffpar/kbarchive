---
layout: page
title: "Q216158: BUG: Multiple &quot;Please Insert Disk&quot; Messages Installing VB6 App"
permalink: /kb/216/Q216158/
---

## Q216158: BUG: Multiple &quot;Please Insert Disk&quot; Messages Installing VB6 App

{% raw %}

	Article: Q216158
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbCAB kbVBp kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to install a distribution set built by the Package and Deployment
	Wizard (PDW), you receive one of the following messages:
	
	  Please insert disk <number>
	
	  -or-
	
	  Cannot find file '<file or folder name>'. Please insert disk
	  '<number>'
	
	NOTE: <file or folder name> is the name of a setup file or the folder that
	contains the setup files and <number> is either the number of a diskette
	or blank.
	
	If you click OK, you are prompted to insert a disk again.
	
	CAUSE
	=====
	
	There are two known causes of this problem:
	
	- Files from a previous failed installation attempt are still on the system.
	
	  -or-
	
	- The application's long file name was not converted to a valid short file name
	  when creating the .cab files for a floppy-based distribution set. (There is a
	  space within the first six characters of the application's .exe file name,
	  and the resulting .cab file names contain a space.)
	
	
	RESOLUTION
	==========
	
	Testing for Left-Over Setup Files
	---------------------------------
	
	1. In the Windows folder (or Winnt folder on Windows NT and Windows 2000) on the
	  target computer, look for a copy of each .cab file from your Setup. If found,
	  delete the .cab file(s).
	
	2. In the Windows\Temp folder (or the folder specified by the TEMP environment
	  variable in Windows NT and Windows 2000), look for a subfolder named
	  Msftqws.pdw. If found, delete the subfolder.
	
	3. Run Setup again.
	
	Removing Space from CAB File Names
	----------------------------------
	
	NOTE: The following steps remove the space from the names of your existing .cab
	files. If you create .cab files using the PDW again later, the problem reoccurs.
	Instead, you may want to remove any spaces from the first six characters of your
	project (.vbp) and executable (.exe) file names to avoid this problem in future
	PDW sessions for this application.
	
	1. On the development computer, open the Package\Support\<project
	  name>.ddf file in a text editor, such as Notepad. Change the following
	  line:
	
	     .Set CabinetNameTemplate="<name with space>*.CAB"
	
	  to:
	
	     .Set CabinetNameTemplate="<new name without space>*.CAB"
	
	  NOTE: <name with space> is the current name that contains a space and
	  <new name without space> is a new name that is six characters long
	  without a space. For example, if the existing CabinetNameTemplate is set to
	  "Test A*.CAB", you should change it to something like "TestAp*.CAB".
	
	2. Save the changes to the .ddf file and close it.
	
	3. Double-click <application name>.bat in the Package\Support folder
	  (where <application name> is the name of your application's .exe file)
	  to create new .cab files in the Package folder.
	
	4. Delete the old .cab files from the Package folder.
	
	5. Open Setup.lst in a text editor, such as Notepad, and change the following
	  line:
	
	     CabFile=<old name of first CAB>.CAB
	
	  to:
	
	     CabFile=<new name of first CAB>.CAB
	
	  NOTE: <old name of first CAB> is the name of your old first .cab file
	  that contained a space and <new name of first CAB> is the new name of
	  your first .cab file.
	
	6. Run Setup again.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbCAB kbVBp kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
