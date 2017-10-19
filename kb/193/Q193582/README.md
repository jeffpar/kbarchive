---
layout: page
title: "Q193582: PRB: Project Base Class Is Added to Visual SourceSafe"
permalink: /kb/193/Q193582/
---

## Q193582: PRB: Project Base Class Is Added to Visual SourceSafe

	Article: Q193582
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe600 kbvfp600 kbVS600
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have created a Visual FoxPro project (.pjx) that utilizes a ProjectHook
	class and you add the project to SourceSafe, you receive the following error:
	
	  Source Control cannot operate on open file <projecthook file name>.
	  Close the file and try again.
	
	CAUSE
	=====
	
	When you add files to Visual SourceSafe through Visual FoxPro integration, the
	files must be closed. The ProjectHook class .vcx is opened automatically by the
	.pjx and cannot be added to Visual SourceSafe.
	
	RESOLUTION
	==========
	
	In the "Add Files to Source Control" dialog box, deselect the .vcx that contains
	the ProjectHook class. If you want to store the ProjectHook class in Visual
	SourceSafe, create a new .pjx that is not based on a ProjectHook class and add
	the .vcx there. You can then add the new .pjx to Visual SourceSafe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Visual FoxPro version 6.0 allows you to create a .pjx that utilizes a
	ProjectHook class, which allows you to associate code with certain project
	events. By default, the .vcx containing the ProjectHook class is added to Visual
	SourceSafe when the .pjx is added to Visual SourceSafe.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure Visual SourceSafe Integration is available and working.
	
	2. In the Visual FoxPro command window, type the following command:
	
	        CREATE CLASS CaptainHook OF CaptainHook.vcx AS ProjectHook NOWAIT
	
	3. In the QueryAddFile Event of the ProjectHook, add the following code:
	
	        WAIT WINDOW cFileName
	
	4. Save the class and close the Class designer.
	
	5. In the Visual FoxPro command window, type the following command:
	
	        CREATE PROJECT CaptainHook
	
	6. Click Project Info, select the Project Class check box and choose the
	  CaptainHook class from CaptainHook.vcx.
	
	7. Close the project and reopen it.
	
	8. Add a program (new or existing) to the project. Note the WAIT WINDOW with the
	  program's name.
	
	9. From the Project menu, click Add Project To Source Control. Logon, using a
	  valid UserName and password, and store the project in the appropriate
	  location in the Visual SourceSafe database.
	
	10. When the Add Files to Source Control dialog box appears, note that the
	  project hook class .vcx is selected in the list of files to be added to
	  Visual SourceSafe.
	
	11. Click OK.
	
	RESULT: The following error message appears:
	
	  Source Control cannot operate on open file <path>\captainhook.vcx.
	  Close the file and try again.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help
	
	Visual FoxPro Programmer's Guide
	
	What's New in Visual FoxPro
	
	Application Development and Developer Productivity
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe600 kbvfp600 kbVS600 
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP600 kbSSafe600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
