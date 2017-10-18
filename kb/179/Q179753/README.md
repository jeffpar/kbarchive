---
layout: page
title: "Q179753: HOWTO: Use the Microsoft RemoteData Control"
permalink: kb/179/Q179753/
---

## Q179753: HOWTO: Use the Microsoft RemoteData Control

	Article: Q179753
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:97; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbwizard kbActiveX kbAppSetup kbCOMt kbCtrl kbMFC kbODBC kbVC500 kbVC600 kbVS97 k
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the Microsoft RemoteData Control.
	
	MORE INFORMATION
	================
	
	If you have installed Visual Studio 97 Service Pack 2 (SP2), the following
	instructions will not work. You must install Visual Studio 97 Service Pack 3
	(SP3). The instructions will also work with Visual Studio 97 and Visual C++
	version 5.0 without SP2.
	
	1. Create a new AppWizard (.exe) project. For this example, we will name the
	  project RDC. This example also uses the "StdReg32.mdb" database file, from
	  the Enroll tutorial. This sample assumes you have registered the "Student
	  Registration" database as described in the Enroll tutorial. (See the
	  InfoViewer topic "The Tutorial Example: Enroll" for more information)
	
	2. In the MFC AppWizard Step 1, select Dialog Based, click Finished, and click
	  OK on the New Project Information dialog box.
	
	3. From the Project menu, click "Add to projects", and then select "components
	  and controls". Select the "Registered ActiveX Controls" folder. Select
	  "Microsoft RemoteData Control version 5.0" (RDC), and click Insert. Click OK
	  on the "Insert this component" dialog box. Then click OK on the "Confirm
	  Classes" dialog box.
	
	4. Use the same method to insert "Microsoft Masked Edit Control, version 5.0".
	  Close the "Components and Controls Gallery" dialog box.
	
	5. Bring the Application Dialog (IDD_RDC_DIALOG) box into the resource editor.
	  Delete the "OK" and "Cancel" buttons, and the "TODO" static text.
	
	6. Select the "Microsoft RemoteData Control" (RDC) from the control panel. If
	  the control panel is not mapped, right-click a gray area to the right of the
	  Microsoft Developer Studio menu and tool buttons and click "controls."
	
	7. Insert the RDC into the dialog box. Insert a static text control below it and
	  label it "Course." Insert a "Microsoft Masked Edit Control" (MEC) to the
	  right of the Course static text control. Insert two more static text controls
	  and MEC's below the first pair. Label the static text controls "Title" and
	  "Hours."
	
	8. Right-click the RDC and select "Properties." Pin down the Properties dialog
	  box. Select the Control tab. In the DataSource list, select "Student
	  Registration." In the SQL edit box type "select * from course" (don't include
	  the quotes).
	
	9. In the Dialog Editor, select the course MEC. In the Properties dialog box,
	  click the All tab. The DataSource Property Value shows "<Not bound to
	  DataSource>." Use the drop-down list box to select the RDC you inserted
	  into the dialog box. (IDC_REMOTEDATACTL1 if you took the default name) Change
	  the DataField property to CourseID. Do the same for the title and hours MEC's
	  (except set the dataFields to "CourseTitle" and "Hours").
	
	10. Build the application and test it. You should now be able to navigate the
	  Course table.
	
	REFERENCES
	==========
	
	Visual C++ Books Online: The Tutorial Example: Enroll
	
	Additional query words: MfcDatabase
	
	======================================================================
	Keywords          : kbole kbwizard kbActiveX kbAppSetup kbCOMt kbCtrl kbMFC kbODBC kbVC500 kbVC600 kbVS97 kbVS600 kbCompGallery kbDSupport 
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVS97 kbVS97Search kbVC500Search
	Version           : WINDOWS:97; winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
