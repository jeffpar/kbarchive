---
layout: page
title: "Q162114: HOWTO: How To Issue a Recursive GET Based on a Project Label"
permalink: /kb/162/Q162114/
---

## Q162114: HOWTO: How To Issue a Recursive GET Based on a Project Label

{% raw %}

	Article: Q162114
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:3.04,3.1,4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSSafe310 kbSSafe304 kbSsafe
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three methods in Visual SourceSafe that you can use to "Get" files
	based on a project-level label. This article discusses each of these methods and
	describes their respective results.
	
	MORE INFORMATION
	================
	
	Of the three methods mentioned above, one uses the Visual SourceSafe Explorer
	and the other two use the command line.
	
	Using the Command Line
	----------------------
	
	The two command line methods are:
	
	     SS GET $/<path to project>/*.* -r -gf -vl<label>
	
	-or-
	
	     SS GET $/<path to project> -r -gf -vl<label>
	
	Where <path to project> is the Visual SourceSafe path to the desired
	project and <label> is the project label against which the Get is
	executed. The -gf switch tells Visual SourceSafe to Get the files into their
	working directory, not the current DOS directory.
	
	The results of these two examples are quite different. The command in the first
	example yields all files and subprojects in <path to project> that are
	currently in the project. The files are returned in the state at which the label
	was applied. This means that any file or subproject that was deleted (and not
	permanently destroyed) after the label was applied will not be returned.
	
	The command in the second example returns all files and subprojects in <path
	to project> that were in the project at the time the label was applied,
	except for those files that were deleted or permanently destroyed.
	
	The following procedure illustrates this difference:
	
	1. Open or switch to Visual SourceSafe, and create a project called Vssrocks off
	  of the root($/).
	
	2. Create a subproject of Vssrocks called Vssrules.
	
	3. Add two files, one to Vssrocks and the other to Vssrules.
	
	4. Apply a project-level label called Label1 to Vssrocks.
	
	  NOTE: This level is inherited by Vssrules.
	
	5. Set the working directory of Vssrocks to C:\Vssrocks (create this directory
	  if it does not already exist).
	
	6. Delete, but do not destroy, the project Vssrules, and then close the Visual
	  SourceSafe Explorer.
	
	7. Open a DOS window and set your path to include \Vss\Win32.
	
	8. Type the following command in the DOS window:
	
	     SS GET $/VSSROCKS/*.* -r -vlLABEL1
	
	  NOTE: Only the file added to Vssrocks is returned.
	
	9. Type the following command in the DOS window:
	
	     SS GET $/VSSROCKS -r -vlLABEL1
	
	  The error message "File or project not found" appears, but the contents of
	  both Vssrocks and Vssrules are returned.
	
	Using the Visual SourceSafe Explorer
	------------------------------------
	
	The following procedure describes how to use a recursive Get on a label to return
	all files and subprojects in a project that were in the project at the time the
	label was applied, except for those projects that have been deleted or
	permanently destroyed.
	
	1. Open or switch to Visual SourceSafe and create a project called Vssrocks off
	  of the root($/).
	
	2. Create a subproject of Vssrocks called Vssrules.
	
	3. Add two files, one to Vssrocks and the other to Vssrules.
	
	4. Apply a project-level label called Label1 to Vssrocks.
	
	  NOTE: This level is inherited by Vssrules.
	
	5. Set the working directory of Vssrocks to C:\Vssrocks (create this directory
	  if it does not already exist).
	
	6. Delete, but do not destroy, the project Vssrules.
	
	7. Right-click the Project Vssrocks and click Show History.
	
	8. Select the version that the label was applied to and click Get.
	
	9. Select the Recursive check box and click OK (do not select the Build Tree
	  check box). Note that the contents of both Vssrocks and Vssrules are
	  returned.
	
	REFERENCES
	==========
	
	For additional information on project and file labels please see the following
	article in the Microsoft Knowledge Base:
	
	  Q139298 How to Include Specific File Revisions in a Project Label
	
	Additional query words: 4.0 4.0a 5.0 kbdss
	
	======================================================================
	Keywords          : kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSSafe310 kbSSafe304 kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword3 kbSSafe304 kbSSafe310 kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:3.04,3.1,4.0,4.0a,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
