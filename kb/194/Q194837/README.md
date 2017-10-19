---
layout: page
title: "Q194837: HOW TO: Distribute a Visual Basic Windows CE Application"
permalink: /kb/194/Q194837/
---

## Q194837: HOW TO: Distribute a Visual Basic Windows CE Application

	Article: Q194837
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB kbAudDeveloper k
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Create the Installation Program for Applications
	- For Windows CE HPC Projects
	- For Windows CE HPC Pro Projects
	- For Palm-size PC Projects
	- Distributing and Installing the Application
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Once you complete the development and testing of a Windows CE Toolkit Visual
	Basic 6.0 (VBCE), you need to be properly compile, distribute, and install the
	application on target devices. The purpose of this article is to walk through
	the steps necessary to complete this process using the Application Install
	Wizard, installed as a part of VBCE. The Application Install Wizard handles the
	creation of the installation package for your application (including the project
	and all of the necessary supporting files) and takes care of downloading the
	required components to handheld devices.
	
	It is expected the application has been fully tested for use on the targeted
	handheld devices and that the project has been compiled into a .vb file before
	you create the installation package for your project using the Application
	Install Wizard. Please note that, unlike the Application Setup Wizard in Visual
	Basic, the VBCE Application Install Wizard does not give you the option of
	recompiling the program.
	
	By default, the directory in which compiled VBCE applications are placed is:
	
	  C:\Program Files\Microsoft Visual Studio\VB98
	
	The Application Install Wizard can be accessed from the Windows CE menu in the
	Visual Basic design environment or selected via the Start menu from the Windows
	CE folder, which exists by default under the respective Visual Basic folder.
	
	Create the Installation Program for VBCE5 Applications
	------------------------------------------------------
	
	1. Launch the Application Install Wizard. An introduction screen will appear.
	  Click Next to begin.
	
	2. The step 2 screen of the Application Install Wizard appears. It prompts you
	  for the full path to the .vbp project file. Click Browse to go to the correct
	  location. At this point you will receive a warning asking whether you are
	  certain that the project has been compiled to a .vb file. If it has, proceed
	  to Step 3. Otherwise, compile the project and re-run the Application Install
	  Wizard.
	
	3. In step 3, you are prompted for the full path to the compiled .vb file. Click
	  Browse to go to the correct location. VBCE will save the .vb file to the
	  location you specified when the .vb file was compiled. Click Next to
	  continue.
	
	4. In step 4, you are prompted for the full path to where the Setup directory is
	  to be created. The Application Install Wizard outputs all components that
	  will be distributed to this directory. Specific information regarding the
	  files generated and output to this directory will be discussed later in this
	  article. Click Next to continue.
	
	  Note that if the following error occurs, the VBCE.ini file may be damaged,
	  missing, or incomplete:
	
	  Unable to find list of available processors from the SDK specified by this
	  project. Please verify that the most recent version of this platform SDK has
	  been installed on your system.
	
	  The VBCE.ini file should include processor information for each of the
	  installed Platform SDKs. The format of a platform section should look
	  something like this:
	
	  [{0B7D1301-289F-11D2-974F-00A0240918F0}]
	  SH 3 (1K) v2.0=4,3,2,0,1024,10003
	  Mips 3000 (4K) v2.0=1,3,2,0,4096,4000
	  Mips 4000 (1K) v2.0=1,4,2,0,1024,4000
	
	  If the VBCE.ini file is not present or the necessary information is not
	  present, reinstall the appropriate Platform SDK.
	
	5. In step 5, you are prompted to select the target processors. You must select
	  at least one processor. While your application is the same across all
	  processors, the run-time components and ActiveX controls that are to be
	  distributed with your project are processor-specific. This step in the
	  process tells the wizard which processor-specific files are to be included
	  with the distribution package. Click Next to continue.
	
	6. In step 6, you choose the ActiveX controls that need to be distributed and
	  installed with your application. If an ActiveX control is not supported for a
	  processor you selected in step 5, it will not appear on the list of available
	  controls. Click Next to continue.
	
	7. In step 7, you can include any additional files that you would like to
	  distribute with your program. This could include data, text, or any other
	  files. Once a file has been selected, the wizard will ask whether the file
	  selected is a system file. All system files are installed to the \Windows
	  directory. All other files are installed to the application directory. If you
	  decide to include the device run-time in the cab file, the following files
	  will be included:
	
	   - pvbform2.dll
	   - pvbhost2.dll
	   - pvbload.exe
	   - vbscript.dll
	   - vbsen.dll
	
	  If the device you are targeting already has the VBCE run-time files installed
	  (either in ROM or in RAM), you can clear this check box to minimize the size
	  of the installation package. Click Next to continue.
	
	8. In step 8, you specify the following:
	
	   - Default Install Directory
	   - Application Name
	   - Description
	   - Company Name
	
	  Each field must be filled in. The default install directory will include
	  "Program Files\" plus whatever directory name you provide. For example, if
	  you specify "MyApp" as the install directory, the Application Install Wizard
	  will install the program to the "Program Files\MyApp" directory.
	
	  The application name that you provide will be the name that your application
	  is given on the H/PC or H/PC Pro device. Click Next to continue.
	
	9. In step 9, you have one last chance to cancel the process. Click Create
	  Install to begin the process of generating the installation package. Click
	  Finish when the process has completed.
	
	  The Application Install Wizard creates the following directories, based on the
	  processors you specified in step 7, in the location specified in step 4.
	
	For Windows CE HPC Projects:
	
	- \App
	- \Cd1
	- \Mips 3000 (4k) v2.0
	- \Mips 4000 (1k) v2.0
	- \SH 3 (1k) v2.0
	
	For Windows CE HPC Pro Projects:
	
	- \App
	- \Arm 1100 (4K) v2.10
	- \Arm 720 (4K) v2.10
	- \Cd1
	- \Intel 486 (4K) v2.10
	- \Mips 3000 (4k) v2.10
	- \Mips 4000 (1k) v2.10
	- \Mips 4000 (4k) v2.10
	- \PPC 821 (4K) v2.10
	- \SH 3 (1k) v2.10
	- \SH 4 (4K) v2.10
	
	For Palm-size PC Projects:
	
	- \App
	- \Cd1
	- \Mips 3000 (4k) v2.11
	- \Mips 4000 (1k) v2.11
	- \SH 3 (1k) v2.11
	
	The App directory includes the compiled .vb file as well as any additional files
	that were specified in step 7 above.
	
	The Cd1 directory includes the Setup.exe file that will be launched from the
	desktop to install the application on a remote device. Also in this directory
	are the CAB files for the appropriate processors and the initialization file for
	the Setup program.
	
	The remaining directories include the processor-specific VBCE run-time and
	ActiveX control files that were specified during the wizard process.
	
	Please see the REFERENCES section below for more information.
	
	Distributing and Installing the Application
	-------------------------------------------
	
	Only the contents of the Cd1 directory need to be distributed in order to install
	the application on a H/PC or H/PC Pro device.
	
	To install your application, run the Setup.exe program on your desktop machine.
	The first dialog that appears allows the user to select the location on the
	desktop to where the application's .cab and .ini files will be copied. If the
	handheld device is connected to the desktop, the program will be downloaded and
	installed. Otherwise, this will occur on the next connection.
	
	To uninstall a program from the handheld device, run the Remove Programs applet
	from the Control Panel and select the program to uninstall.
	
	REFERENCES
	----------
	
	Windows CE Toolkit Help for Visual Basic 6.0
	
	For additional information regarding processor-specific problems, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q185223 HOWTO: Manually Uninstall Visual Basic CE Applications
	
	  Q186861 BUG: Install Wizard Cannot Distinguish Between MIPS CPUs
	
	  Q307595 HOWTO: Distribute an eMbedded Visual Basic Application
	
	Additional query words: vbce wce wince vbce6
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
