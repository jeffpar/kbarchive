---
layout: page
title: "Q186895: FIX: Custom AppWizard Errors with Applications That Have Help"
permalink: kb/186/Q186895/
---

## Q186895: FIX: Custom AppWizard Errors with Applications That Have Help

	Article: Q186895
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0,
	Operating System(s): 
	Keyword(s): kbwizard kbide kbVC500bug kbVC600fix kbGrpDSToolskbbuglist
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A new, Custom AppWizard project exhibits one of the following two problems if it
	is based on an existing application that has context-sensitive Help support:
	
	- If the existing application has been built already, the Custom AppWizard
	  reports the following error after the Finish button is clicked to create the
	  project:
	
	  The select project contains two or more files with the same filename in
	  different directories and therefore cannot be used to create a custom
	  AppWizard. This is most likely caused by the project containing a subproject.
	
	
	- After resolving the first problem, or if the existing application has NOT
	  been built, Custom AppWizard finishes with no error. A project generated from
	  this new Custom AppWizard build with no errors, but the resulting application
	  has no Help file. The following error message appears when Help Topics is
	  clicked from the application's Help menu:
	
	  Cannot find the <exe_path>\<exe_name>.hlp file. Do you want to
	  try to find this file yourself?
	
	  Choosing No causes the following error report:
	
	  Cannot find the <exe_path>\<exe_name>.hlp Help file. Check to see
	  that the file exists on your disk. If it doesn't, you need to reinstall it."
	
	CAUSE
	=====
	
	Problem 1: Custom AppWizard Error
	---------------------------------
	
	Custom AppWizard sees two .hlp files and two .cnt files in the new project.
	
	Problem 2: No Help File Produced
	--------------------------------
	
	Two distinct problems cause this symptom:
	
	- The new Custom AppWizard does not make custom build settings for its
	  projects' .hpj file. Therefore, the project build does not launch
	  Makehelp.bat to build the help files.
	
	- The project's .hpj file refers to invalid file paths.
	
	RESOLUTION
	==========
	
	The workarounds below resolve both problems.
	
	Problem 1: Custom AppWizard Error
	---------------------------------
	
	Delete the .hlp file and the .cnt file from the existing application's project's
	HLP\ folder. The Custom AppWizard should now finish without error.
	
	Problem 2: No Help File Produced
	--------------------------------
	
	1. Open the project generated from the new Custom AppWizard.
	
	2. On the Project menu, click Settings.
	
	3. In the Settings dialog box, expand the project tree and select the project's
	  .hpj file under the Source Files folder.
	
	4. In the Settings For list, click All Configurations.
	
	5. Click the Custom Build tab.
	
	6. In the Description box, type, "Making help file..." (without the quotation
	  marks).
	
	7. In the Build command(s) box, enter the following text:
	
	        call "$(ProjDir)\makehelp.bat"
	
	8. In the Output file(s) box, enter the following text:
	
	        $(OutDir)\$(TargetName).hlp
	
	9. Click OK to save the settings and exit the dialog box.
	
	10. Open the project's .hpj file in the Visual C++ IDE. Modify the following
	  lines, replacing "project_name" and "project_path" with the correct values
	  for the new project:
	
	        [OPTIONS]
	        ...
	        HLP=project_name.HLP
	        ERRORLOG=project_name.LOG
	        ...
	        [MAP]
	        ...
	        #include <project_path\project_name\hlp\project_name.hm
	
	  For example, for a project named TESTING that resides in the C:\ directory:
	
	        [OPTIONS]
	        ...
	        HLP=TESTING.HLP
	        ERRORLOG=TESTING.LOG
	        ...
	        [MAP]
	        ...
	        #include <C:\TESTING\hlp\TESTING.hm>
	
	11. Save the changes, and close the file.
	
	Rebuild and run the application. Context help should now function correctly.
	
	To permanently fix the invalid file paths problem for a Custom AppWizard, edit
	the root.hpj file in its project "Template Files" folder. Modify the following
	lines exactly as indicated (the macros bracketed by $$ are case- sensitive):
	
	     [OPTIONS]
	     ...
	     HLP=$$root$$.HLP
	     ERRORLOG=$$root$$.LOG
	     ...
	     [MAP]
	     ...
	     #include <$$FULL_DIR_PATH$$hlp\$$root$$.hm>
	
	Save the root.hpj template file and rebuild the Custom AppWizard project. New
	projects generated from this Custom AppWizard now contain the correct file
	paths, making steps 10 and 11 above unnecessary. However, the custom build step
	must still be adjusted manually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Problem 1: Custom AppWizard Error
	---------------------------------
	
	1. Create an AppWizard MFC application with context-sensitive help.
	
	2. Build the application.
	
	3. Create a Custom AppWizard application based on an existing project; use the
	  project created in step 1 as the "based-on" project.
	
	RESULT: The Custom AppWizard displays the error noted above.
	
	Problem 2: No Help File Produced
	--------------------------------
	
	1. Create an AppWizard MFC application with context-sensitive help.
	
	2. Do not build it; create a Custom AppWizard based on this existing project.
	
	3. Build the new Custom AppWizard.
	
	4. On the File menu, click New.
	
	5. Click the Projects tab, and select the newly built Custom AppWizard as the
	  project type.
	
	6. Build and run this new application.
	
	7. From the application's Help menu, click Help Topics.
	
	RESULT: The error messages described above appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbide kbVC500bug kbVC600fix kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : WINNT:5.0,
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
