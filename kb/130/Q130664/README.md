---
layout: page
title: "Q130664: HOWTO: Use the Setup Wizard in Professional Visual FoxPro"
permalink: /kb/130/Q130664/
---

## Q130664: HOWTO: Use the Setup Wizard in Professional Visual FoxPro

	Article: Q130664
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbnokeyword kbvfp300 kbvfp500
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the steps followed by the Visual FoxPro Setup Wizard. The
	Professional Visual FoxPro Setup Wizard creates distribution disks from the
	files in your distribution tree. To learn about the distribution process and how
	to prepare your distribution tree before running the Setup Wizard, please see
	Chapter 10, "Creating Distribution Disks," in the Professional Features Guide.
	
	NOTE: The Setup Wizard is included only with the Professional Edition of Visual
	FoxPro.
	
	MORE INFORMATION
	================
	
	NOTE: If the Setup Wizard has never been run, an additional step occurs before
	Step 1 listed below. This additional, initial step asks for a directory to place
	compress file in. This directory cannot be the same as the root directory of
	your application.
	
	Step 1 - Distribution Tree
	--------------------------
	
	The directory that you specify for your distribution tree must contain all files
	and subdirectories you want to create in a user's environment. The Setup Wizard
	uses this directory tree as the source for files that it will compress into the
	disk image directories.
	
	The Setup Wizard records the options you set for each distribution tree and uses
	them as default values the next time you create a setup routine from the same
	distribution tree.
	
	NOTE: You cannot use the DISTRIB directory that the Wizard creates as the
	directory for your distribution tree. Also, it is a good idea to place your
	source tree outside the Visual FoxPro directory.
	
	Step 2 - Optional Components
	----------------------------
	
	Select the system features your application uses and the operating systems on
	which users can install your application. The Setup Wizard will create a setup
	routine that includes all necessary system files for the system features you
	specify.
	
	The following table lists the sizes of files that could be included with
	your setup routine.
	<BR/><BR/>
	                                       Select this option if
	Option                         Size     your application...
	-----------------------------------------------------------------------
	
	Visual FoxPro 3.0 Runtime      3.5 MB   Requires the Visual FoxPro Runtime
	                                       (Vfp300.esl) to execute.
	
	Microsoft 5.0 Graph Runtime    2.2 MB   Includes forms that use Graph 5.0
	                                       controls.
	
	ODBC Drivers                   3.5 MB   Communicates with tables other than
	                                       Visual FoxPro .dbf files. When you
	                                       select this option, the ODBC
	                                       Drivers dialog box appears so that
	                                       you can select necessary drivers.
	
	ODBC Drivers (Win32s)          4.3 MB   Communicates with tables other than
	                                       Visual FoxPro .dbf files. When you
	                                       select this option, the ODBC
	                                       Drivers dialog box appears so that
	                                       you can select necessary drivers.
	
	Win32S (1)                     4.0 MB   Is being distributed to users
	                                       running Windows version 3.11.
	                                       Visual FoxPro applications require
	                                       Win32s.
	
	Windows 95 (1)                 0.5 MB   Is being distributed to users
	                                       running Windows 95.
	
	Windows NT (1)                 0.5 MB   Is being distributed to users
	                                       running Windows NT.
	
	(1) If you are distributing files other than Visual FoxPro applications,
	such as a Help file, you don't need to select a platform option.
	
	The sizes listed above represent the bytes used after the files have been
	installed on a user's hard disk. When the user runs the setup these sizes might
	be slightly exaggerated.
	
	Step 3 - Disk Images
	--------------------
	
	The Setup Wizard creates a distribution subdirectory containing disk images for
	each disk type you specify. If you select the Netsetup option, the Setup Wizard
	creates a single directory to hold all the files.
	
	You can create the disk image directory before you run the Setup Wizard. If you
	want the Setup Wizard to create the directory for you, type a directory name in
	the text box.
	
	Step 4 - Setup Options
	----------------------
	
	The Setup Wizard creates installation dialog boxes with the title you specify in
	the Dialog Caption box. It also places the copyright statement in the About
	Setup dialog box that the user can access from the About command on the Setup
	application's control menu. Entries are required in the Dialog Caption and Setup
	Copyright boxes. The Post-Setup Executable entry is optional.
	
	NOTE: To advance to Step 5, you must ensure that the insertion point (mouse
	pointer) is not in the Dialog Caption or Setup Copyright box.
	
	Step 5 - Default Destination Directory
	--------------------------------------
	
	The setup routine places your application in the directory you specify in the
	Default Destination Directory box.
	
	Step 6 - File Summary
	---------------------
	
	NOTE: To create a Windows Program Item and icon for your application, you must
	select the PM Item option, providing the information described in the following
	table.
	
	The Setup Wizard lists your files in a grid. You can change the settings for any
	file by clicking the item you want to change. The following table describes the
	settings displayed in each column:
	
	Column       Description
	------------------------------------------------------------------------
	File         The file name as it will be created on the user's computer.
	
	Target Dir   The file can be installed on the user's machine in the
	            Application directory, Windows directory, or Windows System
	            directory.
	
	PM Item      If you select this option, the Wizard displays the Program
	            Manager Item dialog box, so you can specify the program item
	            properties (description, command line, and icon).
	
	            In the command line, you can use an embedded %s sequence to
	            replace the application directory. The "s" must be lowercase.
	            Use the %s sequence when you install files in application
	            subdirectories. This ensures that files are installed in
	            the correct subdirectory if your users specify a name for
	            the application directory other than the default name. The
	            following example installs MYDATA.DBF in the MAINDATA
	            subdirectory of the application directory:
	
	               %s\MAINDATA\MYDATA.DBF
	
	            If you specify an icon that is outside your source tree, the
	            setup routine installs the icon in your application directory.
	
	OLE          If you select this option, the generated setup registers the
	            OLE control when it is installed on a user's computer. This
	            does not register a design-time license for the control on the
	            user's computer. It is a good idea to have your setup register
	            OLE controls to ensure that your user always uses the correct
	            version of the control.
	
	            Visual FoxPro allows an OLE control to be created or
	            instantiated only if the control and its license have been
	            purchased and installed on your computer. License information
	            is saved with the form or class. This allows distributed forms
	            to run successfully on users' computers. Users cannot modify
	            these forms in design-time unless they also purchase a
	            design-time license from the manufacturer of the control.
	
	            You may distribute visual class libraries that contain OLE
	            controls. New controls based on these visual classes can be
	            added to running forms. Users, however, may not modify these
	            visual classes, create controls based on them, or subclass
	            them.
	
	            OLE controls may be developed and distributed without charge
	            or licensing requirements. However, most are designed so that
	            they fail without a license. There are currently two types of
	            licenses for OLE controls, design-time and run-time. A
	            design-time license allows you to create new OLE controls. A
	            run-time license allows you to run a form that contains an OLE
	            control.
	
	            For more information about distributing applications with OLE
	            controls, please see the "Distributing OLE Applications" topic
	            in the Visual FoxPro Help file.
	
	Step 7 - Finish
	---------------
	
	When you choose Finish, the Setup Wizard records the configuration for use the
	next time you create distribution disks from the same distribution tree. It then
	starts creating the application disk images.
	
	The Setup Wizard creates and compresses several unique files the first time it
	runs and saves them for subsequent runs. Therefore, the first run of the Setup
	Wizard takes longer than subsequent runs.
	
	After the Setup Wizard creates the disk images you specified, copy the images to
	master disks. Then copy and combine the disks with the rest of your distribution
	package.
	
	After you create a set of master disks, you can delete the disk image
	subdirectories. However, you should retain the COMPRESS subdirectory, so the
	next time you use the Setup Wizard, it only needs to compress files that have
	changed since creating the previous set of disks.
	
	The COMPRESS directory contains the same files that are in the source directory.
	The only difference is that they are compressed. If one of the files in the
	source directory has been changed, then the Setup Wizard will recompress it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbnokeyword kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
