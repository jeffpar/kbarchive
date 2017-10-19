---
layout: page
title: "Q191900: XCLN: How to Use IExpress to Deploy Multiple Packages with ODK"
permalink: /kb/191/Q191900/
---

## Q191900: XCLN: How to Use IExpress to Deploy Multiple Packages with ODK

	Article: Q191900
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a self-extracting archive for use with the
	Microsoft Outlook Deployment Kit (ODK).
	
	
	MORE INFORMATION
	================
	
	When you use the ODK to create a build of Outlook 98, if you choose the option
	to install your ODK build in silent mode, you can only add one custom package.
	By using the IExpress program that comes with the ODK, you can bundle multiple
	files together into one self-extracting executable that you can run at the end
	of the Setup program. This is necessary if you want to deploy multiple patches
	or generate profiles after Outlook 98 is installed.
	
	To generate the package:
	
	1. Create an .inf file that lists the files to copy and commands to execute.
	
	2. Bundle the files into a single executable, using the IExpress Wizard.
	
	Creating the .inf File for Use with the IExpress Wizard
	-------------------------------------------------------
	
	The .inf file contains the list of files to be copied to the users' hard disk
	drives and programs to be executed.
	
	A sample .inf file is presented below that runs three programs. The Program1.exe,
	Program2.exe, and Program3.exe files ware copied to the hard disk drive and
	executed at the end of the Setup program. Substitute your program names for
	Program1, Program2, and Program3.
	
	The [install.files] section is a list of files to copy to the users' computers.
	The [RunPostSetupCommandsSection] section lists the names of the programs to
	execute and the start order. You also need to include any command-line arguments
	in this section.
	
	NOTE: The .inf file is named Odk.inf and must be listed in the [install.files]
	section.
	
	  ; This is a sample INF file to use with the IExpress Wizard.
	  ; Copy this file and save it with the name Odk.inf.
	
	  [Version]
	  Signature="$Chicago$"
	  AdvancedINF=2.0
	
	  [DefaultInstall]
	  CopyFiles=install.files
	  RunPostSetupCommands=RunPostSetupCommandsSection
	
	  [DestinationDirs]
	  install.files=30,IDKTemp
	
	  [install.files]
	  ; List the files that need to be copied to the local hard disk drive.
	  ; This should be the same list of files that are added in the
	  ; "Packaged Files" section of the IExpress Wizard, described in
	  ; Step 4 below.
	
	  Program1.Exe   ; example program #1
	  Program2.Exe   ; example program #2
	  Program3.Exe   ; example program #3
	  Odk.inf
	
	  [RunPostSetupCommandsSection]
	  ; List the programs you want to run and the order in which
	  ; you want them to be executed.
	  ; Include any command-line switches or parameters that are necessary.
	
	  Program1.Exe
	  Program2.Exe
	  Program3.Exe /argument1 /argument2
	
	  [SourceDisksNames]
	  1="default",,1
	
	Combining Multiple Files Using the IExpress Wizard
	--------------------------------------------------
	
	To bundle several programs using the IExpress utility:
	
	1. Start the IExpress Wizard version 2.0. The default location and file name
	  are:
	
	  C:\Program Files\ODK\Tools\Iexpress.exe
	
	  In the Welcome to IExpress 2.0 dialog box, click "Create new self extraction
	  directive file", and then click Next.
	
	2. In the Package Purpose dialog box, click "Extract files and run an
	  installation command" option, and then click Next. In the Package Title box,
	  type a name, such as "Example Installation" (without the quotation marks),
	  and then click Next.
	
	3. On the Confirmation Prompt dialog box, click "No prompt", and then click
	  Next. On the License Agreement dialog box, click "Do not display a license",
	  and then click Next. These options, although not necessary, may be used.
	
	4. On the Packaged Files dialog box, click Add to choose the components that you
	  want to be bundled into the self-extracting executable. For this example,
	  locate the following files:
	
	   - Program1.Exe
	
	   - Program2.Exe
	
	   - Program3.Exe
	
	   - Odk.inf
	
	  Click Open, and then click Next.
	
	5. On the Installation Program to Launch dialog box, type the name of your .inf
	  file. In this example, the file is Odk.inf.
	
	  Under Post Install Command, click None, and then click Next.
	
	6. On the Show Window dialog box, click Default, and click Next. On the Finish
	  Message dialog box, click No Message, and then click Next.
	
	7. On the Package Name and Options dialog box, type the name of your package,
	  specify the directory location, and then click Next. On the Configure Reboot
	  dialog box, click No Reboot, and then click Next.
	
	  NOTE: If you deploy your package by using the ODK, you must click No Reboot.
	
	8. In the Save Self Extraction Directive dialog box, type the location that you
	  want to save the SED file to, and then click Next. This file allows you to
	  change your IExpress configuration and the files that you have selected.
	
	9. When the Create Package Confirmation dialog box is displayed, click Next, and
	  then the package is built. The package is the self-extracting executable with
	  the name you specified. The package can be included in the Outlook Deployment
	  Kit as your single custom package.
	
	10. The final dialog box confirms the creation of your package. It displays
	  information, such as how much compression the files received, how many bytes
	  the package contains, and the amount of time that it took to create the
	  package. Click Finish to exit the wizard.
	
	  The bundled self-extracting executable is now ready to be included in the
	  ODK.
	
	For additional information about adding custom components to the ODK, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q190053 XCLN: Adding Custom Applications to Active Setup with the ODK
	
	For additional information on using IExpress and the ODK, download the IExpress
	Deployment Kit for Outlook 98, which is available at the following location:
	
	  ftp://ftp.microsoft.com/softlib/mslfiles/odkidk98.exe
	
	  and
	
	  http://support.microsoft.com/support/downloads/dp3384.asp
	
	Additional query words: prfadmin prf admin odkidk98.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbhowto
	
	=============================================================================
	
