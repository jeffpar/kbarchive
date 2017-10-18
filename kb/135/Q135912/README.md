---
layout: page
title: "Q135912: PRB: Wrong Resources Loaded by Resource Editor or AppStudio"
permalink: kb/135/Q135912/
---

## Q135912: PRB: Wrong Resources Loaded by Resource Editor or AppStudio

	Article: Q135912
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtshoot _IK920 kbVC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kb
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Intermittently, The Resource Editor opens the resources, but the latest
	modifications are not visible in the editor. This may occur with a project that
	uses a version control system that doesn't update the timestamp on a file when
	the file is checked out. It is not a bug in the Resource Editor.
	
	CAUSE
	=====
	
	The Resource Editor generates and uses a .APS file. This file contains a binary
	format of the resources. The Resource Editor loads the resources from this file
	to reduce the time required to load them. The article mentioned in the
	"References" section of this article gives more information about this file.
	
	The Resource Editor uses dependency checking to determine if the this file has to
	be regenerated. In the following scenario, the .APS file is not regenerated.
	None of the following steps occur simultaneously.
	
	1. Person X checks out the resource file from the source control system.
	
	2. Person X modifies and saves the changes to a local copy of the resources. The
	  time on the resource file is now C.
	
	3. Person Y retrieves a copy of the resource file from the source control
	  system.
	
	4. Person Y opens and closes the local copy of the resources for the first time.
	  A local version of the .APS file is generated on Y's machine at this point in
	  time. The time on .APS file is now C + delta.
	
	5. Person X checks in the modified resource file.
	
	6. Person Y checks out the resources from the source control system and opens
	  the resources.
	
	Person Y will see the resources without the modifications that were made by
	Person X. The .APS file on Y's machine has a later timestamp (time C + delta)
	than the resource file (time C), thus the .APS file is not regenerated, and the
	old version of the resources is loaded.
	
	RESOLUTION
	==========
	
	Ensure that the resources are loaded from the resource file instead of from the
	.APS file whenever the resource file has been updated. One approach is to use a
	source control system that updates the timestamp of a file upon checkout. The
	source control system may have a timestamp update option that can be set. If
	this approach is not possible, delete the .APS file after checking out the
	resources from source code control software. In either case, the Resource Editor
	will then open the resources from the resource files and regenerate the .APS
	file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To delete the .APS file after checking out the resource, a menu item can be
	added to the Tools menu. The following sections provide one way to implement the
	menu item.
	
	This menu item does not work in Visual C++, versions 5.0 and 6.0. The .APS file
	is in-use while the project is open. Because of this, you need to manually
	delete the .APS file before the project is loaded.
	
	Steps to Implement Menu Item
	----------------------------
	
	To implement a menu item to delete the .APS file, follow these steps:
	
	1. Create the batch file DELAPS.BAT containing the following command:
	
	     del %1
	
	2. Add the item to the tools menu via the method described below.
	
	Steps to Add New Menu Item to Tools Menu in Visual C++ 2.x
	----------------------------------------------------------
	
	1. On the Tools menu, click Customize to bring up the Customize Property Sheet.
	
	2. Click the Tools Tab.
	
	3. Click the Add button to add a tool.
	
	4. Type: " <path>\DELAPS.Bat " (without the quotation marks) where
	  <path> is the location of the batch file.
	
	5. On the Tools tab of the Customize Property Sheet, fill in the following
	  information for the new tool:
	
	  " Menu Text: Delete .APS files Arguments: $PROJDIR*.APS" (without the
	  quotation marks)
	
	6. Select the 'Close Window on Exit' check box.
	
	Steps to Add New Menu Item to Tools Menu in Visual C++ 1.5x
	-----------------------------------------------------------
	
	1. On the Options menu, click Tools to bring up the Tools dialog box.
	
	2. Click the Add button to add a tool.
	
	3. From the Add Tool dialog box, select the DELAPS.BAT file.
	
	4. Enter the following information in the Tools dialog box:
	
	  " Menu Text: Delete .APS file Arguments: $PROJDIR$PROJ.APS" (without the
	  quotation marks)
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q132340 INFO: Common File Extensions Used by Visual C++
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot _IK920 kbVC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
