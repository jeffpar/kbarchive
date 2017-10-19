---
layout: page
title: "Q193472: FIX: Exception Error Exiting Top-Level Form App in Windows 95"
permalink: /kb/193/Q193472/
---

## Q193472: FIX: Exception Error Exiting Top-Level Form App in Windows 95

	Article: Q193472
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbDCOM kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using an application where the main form is a Top-Level form, and you
	suppress the display of the Visual FoxPro desktop with the SCREEN = OFF command
	in a Config.fpw file. Then, you create a distribution using the Setup Wizard and
	install this distribution on a computer using Windows 95. When you exit the
	Top-Level form to close the application, you might see an error dialog box, such
	as the following:
	
	  Fatal Exception: error code=c0000005
	
	RESOLUTION
	==========
	
	You can work around this issue by installing the Distributed Component Object
	Model (DCOM) for Windows 95 or by installing Internet Explorer version 4.0 or
	later.
	
	You can install DCOM for Windows 95 from the following Web URL:
	
	  http://msdn.microsoft.com/library/default.htm
	
	You can install Internet Explorer 4.0 or later from the following Web URL:
	
	  http://www.microsoft.com/ie/download/windows.htm
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The installation of either DCOM for Windows 95 or Internet Explorer 4.0
	eliminates the error. The download for DCOM for Windows 95 version 1.2 is 1.2MB
	and the installed files are new version replacements for existing files. There
	is information about redistribution on the DCOM 95 Internet site referenced in
	the RESOLUTION section. Installing Internet Explorer 4.0 gives Internet browser
	functionality, but its installation also requires more disk space than DCOM 95.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual FoxPro project named TestProj.
	
	2. Add a program called Main.prg to the project. It should contain the following
	  code:
	
	     PUBLIC oform1
	        oform1=NEWOBJECT("form1")
	        oform1.Show
	        READ EVENTS
	        RETURN
	
	        DEFINE CLASS form1 AS form
	           ShowWindow = 2
	           AutoCenter = .T.
	           Caption = "Form1"
	           Name = "form1"
	
	           ADD OBJECT command1 AS commandbutton WITH ;
	              Top = 180, ;
	              Left = 144, ;
	              Height = 27, ;
	              Width = 84, ;
	              Caption = "Quit", ;
	              Name = "Command1"
	
	           PROCEDURE QueryUnload
	              Release thisform
	              CLEAR EVENTS
	           ENDPROC
	
	           PROCEDURE command1.Click
	              Release thisform
	              CLEAR EVENTS
	           ENDPROC
	        ENDDEFINE
	
	3. Create a file called Config.fpw in the directory with your project and add
	  the following line:
	
	  SCREEN = OFF
	
	4. Add this file to the project. Click the Other tab in the Project Manager.
	  Select the Text Files item in the list, click the Add button, type
	  "Config.fpw" (without the quotation marks) in the Select file text box, then
	  click OK.
	
	5. Mark the Config.fpw file as included by right-clicking it in the Project
	  Manager, and then choose Include from the Context menu.
	
	6. Build the project into an executable, and save it as Testproj.exe.
	
	7. Place the Testproj.exe file into a directory by itself, such as c:\testproj.
	
	8. Run the Setup Wizard.
	
	9. Select the directory containing the executable file created in the "Setup
	  Wizard - Step 1," and then click Next.
	
	10. In the Setup Wizard dialog box for step 2, select the run-time check box and
	  then click Next.
	
	11. In step 3 of the Setup Wizard dialog box, select a directory and any of the
	  disk image check boxes and then click Next.
	
	12. In step 4 of the Setup Wizard dialog box, type "Test App" (without the
	  quotation marks) in the Setup dialog box Caption text box, enter None in the
	  Copyright information text box, and then click Next.
	
	13. In step 5 of the Setup Wizard dialog box, type "VFP Test Apps" (without the
	  quotation marks) in Program group text box, and then click Next.
	
	14. In step 6 of the Setup Wizard dialog box, check the PM item check box, type
	  "Test App" (without the quotation marks) in the Description text box, and
	  type "%s\testproj.exe" (without the quotation marks) in the Command line
	  text box. Click OK, and then click the Finish button twice. Next, click the
	  Done button in the Disk Statistics dialog box when it appears.
	
	15. Install the program from the 144Disk\Disk1, Netsetup, or Websetup directory
	  that the Setup Wizard creates to a Windows 95 computer. This computer must
	  not have Visual Studio, DCOM 95, or Internet Explorer 4.0 installed.
	
	16. Run the .exe file.
	
	17. Click the Quit button or close the form.
	
	  The form disappears and then an error dialog box appears with the following
	  text:
	
	  Fatal Exception: error code=c0000005
	
	  This error does not occur if DCOM for Windows 95 or Internet Explorer 4.0 is
	  installed on the Windows 95 computer. This error does not occur in Windows
	  NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbDCOM kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
