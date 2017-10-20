---
layout: page
title: "Q216119: FIX: PDW Add Files Dialog Doesn't Allow Selecting Multiple Files"
permalink: /kb/216/Q216119/
---

## Q216119: FIX: PDW Add Files Dialog Doesn't Allow Selecting Multiple Files

{% raw %}

	Article: Q216119
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a distribution set for your application using the Package and
	Deployment Wizard (PDW) and attempt to add a group of files to the distribution
	set from the Add dialog of the Included Files screen, the dialog window does not
	allow the selection of multiple files. Additionally, if you double-click on a
	file to add it, the PDW will display the Dependency Information screen instead
	of adding it to the set.
	
	RESOLUTION
	==========
	
	The files must be added one at a time.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Make Project1.exe from the File menu to compile the project.
	
	3. Start the Package and Deployment Wizard.
	
	4. Browse to Project1 and select Package to build the distribution set for the
	  project.
	
	5. On the Included Files screen, click Add, and browse to any folder that
	  contains multiple files. Note that you cannot select more than one file in
	  the dialog window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
