---
layout: page
title: "Q221692: FIX:Project Object Modify Method Fails if Path Contains Spaces"
permalink: /kb/221/Q221692/
---

## Q221692: FIX:Project Object Modify Method Fails if Path Contains Spaces

{% raw %}

	Article: Q221692
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 14-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, modifying a visual class programmatically, using the
	Project object Modify method, fails if the path to the project file contains
	spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Visual Studio 6.0 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a directory named "aa bb."
	
	2. In the Visual FoxPro Command window, change the default directory to "aa bb."
	
	3. Create a project, named Test.
	
	4. In the Project Manager, select the Class tab.
	
	5. In the Class tab, click the New button to create a new form class called F1
	  and saved it as F1.VCX.
	
	6. While the Project Manager is still open, issue the following command in the
	  Command window:
	
	  _VFP.ActiveProject.Files.Item("f1.vcx").Modify("f1")
	   
	
	Note that the following Visual FoxPro error appears:
	
	  OLE error code 0x80004005: Unspecified error
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
