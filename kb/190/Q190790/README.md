---
layout: page
title: "Q190790: BUG: Circular Dependency Error After Breaking Compatibility"
permalink: /kb/190/Q190790/
---

## Q190790: BUG: Circular Dependency Error After Breaking Compatibility

	Article: Q190790
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After breaking and restoring binary compatibility of an ActiveX control that is
	hosted by another ActiveX control in the same Visual Basic project, the
	following error occurs:
	
	  Circular dependencies between modules
	
	This error occurs whenever you open the hosting control. In addition, the hosted
	control is replaced by a picture box. Any attempt to add the hosted control back
	to the hosting control generates the above error again.
	
	RESOLUTION
	==========
	
	Take the following steps to resolve this issue:
	
	1. Remove the hosted control (.ctl) from the project.
	
	2. Save and close the project.
	
	3. Reopen the project and add the hosted control (.ctl) back to the project by
	  selecting Add Control from the Project menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. From the Project menu, click Add User Control.
	
	3. In the Add User Control dialog box, double-click User Control. This will
	  create UserControl2.
	
	4. In the Project Explorer window, right-click on UserControl2 and click View
	  Code.
	
	5. Enter the following code in UserControl2:
	
	        Event Test()
	
	6. Close both the designer and code windows for UserControl2.
	
	7. From the Toolbox window, place Usercontrol2 on UserControl1.
	
	8. On the File menu, click Make Project1.ocx to compile the project.
	
	9. On the Project menu, click Project1 Properties, and then click the Components
	  tab.
	
	10. Under Version Compatibility, select Binary Compatibility and click OK.
	
	11. Close both UserControl designer windows, if open.
	
	12. In the Project Explorer, right-click on UserControl2 and click View Code.
	
	13. Comment out the following line of code, entered in step 5:
	
	        Event Test()
	
	14. Open UserControl1's designer. The following incompatibility error occurs:
	
	  The "Test" event exists in the version-compatible component, but not in the
	  current project.
	
	  Click Cancel to continue past this error.
	
	15. A second error will occur:
	
	  Error loading "c:\windows\temp\vbc2e4.tmp", a control could not be loaded due
	  to load error. Continue?
	
	  Click No to continue past this error.
	
	  NOTE: The path shown in the above error may vary due to varying temporary
	  file names.
	
	16. Remove the comment on the Event Test line in UserControl2; this should
	  restore compatibility.
	
	17. Open UserControl1's designer.
	
	RESULT: The error "Circular dependencies between modules" is received followed by
	the same message in step 15. If you select Yes to continue loading, then
	Usercontrol1 opens with a picture box instead of Usercontrol2. If you delete the
	Picture Box and attempt to add back UserControl2 to UserControl1, the above
	error will be shown again.
	
	Additional query words: kbDSupport kbDSS kbCtrl kbVBp600bug kbCtrlCreate kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbbug
	
	=============================================================================
	
