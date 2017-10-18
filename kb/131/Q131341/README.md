---
layout: page
title: "Q131341: ADT/ODE: Setup Wizard Error Creating Disk Images with ADT or ODE"
permalink: kb/131/Q131341/
---

## Q131341: ADT/ODE: Setup Wizard Error Creating Disk Images with ADT or ODE

	Article: Q131341
	Product(s): Microsoft Access Distribution Kit
	Version(s): 2.0 7.0 97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you use the Microsoft Office 97 Developer Edition Tools Setup Wizard or the
	Microsoft Access Developer's Toolkit Setup wizard for versions 2.0 and 7.0, to
	create disk images that include a workgroup information file (called System.mdw
	in Microsoft Access 97 or 7.0 and System.mda in version 2.0), you may receive
	the following error message.
	
	In Microsoft Access 97 and 7.0
	------------------------------
	
	  Setup Wizard
	  Permission Denied
	
	and then
	
	  The creation of your custom Setup program was not completed successfully.
	
	In Microsoft Access version 2.0
	-------------------------------
	
	  File 'c:\access\system.mda' is opened for exclusive access by another
	  application.
	
	CAUSE
	=====
	
	In the ODE or ADT Setup Wizard's List Of Files box, you added the workgroup
	information file that is in use by Microsoft Access.
	
	RESOLUTION
	==========
	
	Copy the workgroup information file in use to another folder (directory), and
	then run the Setup Wizard to create the disk images. To do so, follow these
	steps:
	
	1. If you have Microsoft Access open, quit Microsoft Access.
	
	2. Open Windows Explorer (or File Manager in Windows 3.x) and locate the
	  workgroup information file that is in use.
	
	3. Copy the workgroup information file to another folder.
	
	4. Run the ODE or ADT Setup Wizard. In the "File Name and Path" box (List Of
	  Files box in version 7.0 or Files To Include box in version 2.0) type the
	  full path to the workgroup information file that you copied in step 3.
	
	5. Click the Next button and proceed with the Setup Wizard. When you have added
	  all the information for your custom application, the Setup Wizard will create
	  the disk images.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Windows Explorer (or File Manager in Windows 3.x) and locate the
	  Wrkgadm.exe file in the folder where Microsoft Access is stored.
	
	2. Double-click the Wrkgadm.exe file to open the Workgroup Administrator dialog
	  box. Write down the full path to the System.mdw file (or System.mda file in
	  version 2.0). Exit the Workgroup Administrator.
	
	3. Start the Setup Wizard. In the "File Name and Path" box (or List Of Files box
	  in version 7.0 or Files To Include box in version 2.0), add the application
	  files you want to include. Add the System.mdw (or System.mda in version 2.0)
	  from the path and file name that you wrote down in step 2, and then click
	  Next.
	
	4. Proceed through the wizard, entering the necessary information and clicking
	  Next.
	
	5. In the folder for your Disk Images box (or Application Setup Directory in
	  version 2.0), type "c:\disks". Click the Network Setup (Flat) option, and
	  then click Finish. Note that you receive the error message mentioned earlier
	  in this article.
	
	REFERENCES
	==========
	
	For more information about creating a custom setup program, search the Help
	Index for "Setup Wizard," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : 2.0 7.0 97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
