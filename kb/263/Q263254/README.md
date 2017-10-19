---
layout: page
title: "Q263254: BUG: GraphByRecord FFC Missing Class"
permalink: /kb/263/Q263254/
---

## Q263254: BUG: GraphByRecord FFC Missing Class

	Article: Q263254
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbCtrl kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 22-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the GraphByRecord FoxPro Foundation Class in an application, you
	may get the following error message when you are rebuilding the application:
	
	  Unable to find Visual Class Library
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Visual Studio 6 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project in Visual FoxPro 6.0, and add a new form to it.
	
	2. Click to open the Component Gallery.
	
	3. Locate the Visual FoxPro Catalog:Foundation Classes:Automation folder.
	
	4. Drag-and-drop the GraphByRecord class onto the form.
	
	5. Close the builder, and then close and save the form.
	
	6. On the Project Manager, click the Documents tab, and then drill down on the
	  Forms list until you can see the form you just created. The Build command
	  button becomes enabled.
	
	7. If you see the "Unable to find Visual Class Library _UTILITY" error message,
	  locate it in the FFC directory of the Visual FoxPro home directory.
	
	8. Click on the Build button, click to select Build Application, and then click
	  OK. You should now see the message "Unable to find Visual Class Library,"
	  with no indication of which file it wants to use.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbCtrl kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
