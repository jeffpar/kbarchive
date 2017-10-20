---
layout: page
title: "Q182153: BUG: Error When Loading Visual Datatools Add-In"
permalink: /kb/182/Q182153/
---

## Q182153: BUG: Error When Loading Visual Datatools Add-In

{% raw %}

	Article: Q182153
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbAddIn kbRegistry kbVBp500 kbVBp600 kbGrpDSVB kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When launching the Visual Datatools Add-in, the following errors may occur:
	
	  Object variable or with block not set
	
	followed by:
	
	  Visual Basic can not open the Database Tools project file. Please delete
	  <project>.dsp and try again.
	
	CAUSE
	=====
	
	When the MSDN application is launched, it overwrites the LocalServer32 value for
	the MSDEV.APPLICATION CLSID, which is found at the below registry location. It
	replaces this value with a path that points to the Infoviewer application
	(IV5.EXE):
	
	  HKEY_CLASSES_ROOT\ 
	   CLSID\ 
	    {FB7FDAE2-89B8-11CF-9BE8-00A0C90A632C}\ 
	     LocalServer32
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly or creating your own .reg files can
	cause serious, system-wide problems that may require you to reinstall Windows to
	correct them. Microsoft cannot guarantee that any problems resulting from the
	use of Registry Editor can be solved. Use this tool at your own risk. Change the
	Registry entry containing the incorrect path back to the correct location of the
	Developer Studio Shared IDE (MSDEV.EXE) after running MSDN.
	
	The following registry information contained between the asterisks can be
	modified to contain the correct path to MSDEV.EXE on your machine and then saved
	to a file with a .reg extension to aid in changing this registry value. After
	creating the file, double-click on it to launch the Registry Editor, which will
	merge this information into the Registry.
	
	*************
	REGEDIT4
	
	[HKEY_CLASSES_ROOT\CLSID\{FB7FDAE2-89B8-11CF-9BE8-
	00A0C90A632C}\LocalServer32]
	@="C:\\PROGRAM FILES\\DEVSTUDIO\\SHAREDIDE\\BIN\\MSDEV.EXE"
	*************
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install and launch the MSDN Library, January 1998 edition. Other previous
	  editions of the MSDN Library may also cause the same behavior.
	
	2. Close the MSDN application
	
	3. Start Visual Basic 5.0.
	
	4. From the Add-Ins menu, select Add-in Manager.
	
	5. Select the Microsoft Datatools Add-in and press OK.
	
	  NOTE: Selecting the Microsoft Datatools Add-in may prompt the installation of
	  the Visual Datatools which is located on Visual Basic 5.0 CD-ROM. This will
	  only occur if Developer Studio Shared IDE (MSDEV.EXE) has not previously been
	  installed by either Visual C++ 5.0 or Visual InterDev 1.0. After installing,
	  repeat these steps from the beginning.
	
	6. From the Add-ins menu, select the "Visual Database Tools" Add-in. At this
	  point the two errors described at the beginning of this article may occur.
	  IV5.EXE may show up in the process list although MSDN is not running. This
	  process may be terminated by selecting it in the Task Manager process list
	  and pressing the "End Process" button.
	
	  NOTE: This problem might also occur in Visual Basic 6.0 if a version of MSDN
	  older than July 98 is loaded.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAddIn kbRegistry kbVBp500 kbVBp600 kbGrpDSVB kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
