---
layout: page
title: "Q221667: FIX: Component Gallery Classes Not Automatically Added to Proj"
permalink: kb/221/Q221667/
---

## Q221667: FIX: Component Gallery Classes Not Automatically Added to Proj

	Article: Q221667
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 09-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you drag and drop a class from the Component Gallery to the Project Manager
	it may not get added to the Project Manager automatically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Dragging and dropping a class from the Component Gallery to a project in the
	"Add Class To Project dialog" and then selecting the "Create New Class from
	Selected Class" option and storing the class to a new class library may cause
	the class to not be added to the project. However, if you keep the default Store
	In location, the class will be added to the Project Manager as expected.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Launch Component Gallery.
	
	2. Create a new project.
	
	3. In Component Gallery, expand the Foundation Classes folder and select the
	  Buttons folder.
	
	4. Drag and drop the Cancel button class to the Project Manager.
	
	5. In the Add Class to Project dialog box, select "Create new class from
	  selected class" option.
	
	6. In the New Class dialog box, type in the Class name and change the Store In
	  location to store the class to a class library different from the one
	  displayed.
	
	7. Click OK.
	
	Note that the newly-created class does not show under the Class tab in Project
	Manager. You might not be able to reproduce this problem at all times.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
