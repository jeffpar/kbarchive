---
layout: page
title: "Q191899: XCLN: How to Deploy Exchange 5.5 SP1 KMS Client Fixes with ODK"
permalink: kb/191/Q191899/
---

## Q191899: XCLN: How to Deploy Exchange 5.5 SP1 KMS Client Fixes with ODK

	Article: Q191899
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP1,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a self-extracting file for deploying the
	required client hotfixes which will allow an Outlook 98 client to participate in
	Advanced Security with an Exchange Server 5.5 Service Pack 1 (SP1) Key
	Management Server (KMS). This file may be deployed with the Outlook Deployment
	Kit (ODK),or as a stand-alone executable (.exe) file.
	
	
	MORE INFORMATION
	================
	
	The following client hotfixes were released with the SP1 release:
	
	- Olcsp128.exe
	
	- Ol98qfe.exe
	
	The Olcsp128.exe hotfix updates the Outlook 98 S/MIME security feature to work
	with the new V3 certificates available in the latest version of the Key
	Management Server, 5.5 SP1. It also addresses the issue with renewing Security
	Keys after changing enrollment settings. If you change the settings on the
	Enrollment property page of the Certificate Authority object to allow X.509 V3
	certificates to be issued to users of Advanced Security, Outlook 98 users cannot
	automatically renew their security keys.
	
	The Ol98qfe.exe hotfix includes many protocol and client connectivity fixes
	required by the Outlook 98 client to work correctly with the latest Advanced
	Security features. One of these fixes includes the issue where messages sent to
	multiple recipients using S/MIME encryption cannot be decrypted by recipients
	using Outlook 98 and Outlook Express 4.01. This problem usually occurs when
	there are more than 15 recipients.
	
	This update can also be run in a quiet mode by running ol98qfe.exe /q from a
	command line. This installation mode will not show any warnings unless a version
	of inetcomm.dll earlier than 4.72.2106.0 is present on the computer.
	
	The following error message can be generated if the above security patches are
	not installed:
	
	  "This message could not be secured using the selected security settings.
	  Your e-mail address may not match the e-mail address on the certificate,
	  or some other problem exists with the certificate. Do you want to
	  proceed with the message without security?"
	
	The ODK includes a program called IExpress that allows you to bundle several
	programs together under one name. With this, you can bundle several programs
	together that will execute as one at the end of Outlook setup. It will be
	necessary to do this when deploying the ODK in silent mode because you can add
	only one custom package to the ODK.
	
	The following example will show how to bundle the necessary files to add hotfixes
	to the Outlook client.
	
	To generate the package successfully, the following two steps are necessary.
	
	1. Create a .inf file that lists the files to copy and the commands to execute.
	
	2. Bundle the files together into a single executable, using the IExpress
	  Wizard.
	
	Creating the .inf File for Use with the IExpress Wizard
	-------------------------------------------------------
	
	To execute multiple programs at the end of the Outlook setup, a .inf file is
	needed. The purpose of this file is to indicate which files should be copied to
	the user's hard drive, and which programs should be executed. The list of
	programs can also contain any necessary command-line switches.
	
	For this example, the .inf file will look similar to the following to copy the
	files necessary to run the custom package. Note, in this example, the .inf file
	is named Odk.inf.
	
	     ; INF file to use with the IExpress Wizard.
	
	     [Version]
	     Signature="$Chicago$"
	     ; Enter the name of your .INF file on the line below.
	     LayoutFile=ODK.inf
	     AdvancedINF=2.0
	
	     [DefaultInstall]
	     CopyFiles=install.files
	     RunPostSetupCommands=RunPostSetupCommandsSection
	
	     [DestinationDirs]
	     install.files=30,IDKTemp
	
	     [install.files]
	     ; List the files that need to be copied to the local hard drive.
	     ; This should be the same list of files that are added in the
	     ; "Packaged Files" section of the IExpress Wizard.
	
	     OLCSP128.EXE
	     OL98QFE.EXE
	     ODK.INF
	
	     ; The current .INF file needs to be saved and included in this section.
	
	     [RunPostSetupCommandsSection]
	     ; List the programs you wish to run and the order in which
	     ; you wish them to be executed.
	     ; Include any command line switches or parameters that are necessary.
	
	     OLCSP128.EXE
	     OL98QFE.EXE
	     OL98QFE2.EXE /Q
	
	     [SourceDisksNames]
	     1="default",,1
	
	Combining Multiple Files Using the IExpress Wizard
	--------------------------------------------------
	
	To bundle several programs together under one name using the IExpress utility,
	follow these steps:
	
	1. Start IExpress 2.0. The default location and filename are:
	
	  C:\Program Files\ODK\Tools\Iexpress.exe
	
	2. In the Welcome To IExpress 2.0 dialog box, choose "Create new self extraction
	  directive file," and then click Next.
	
	3. In the Package Purpose dialog box, click the "Extract files and run an
	  installation command" option , and click Next. In Package Title, enter a name
	  such as "Hotfixes," and then click Next.
	
	4. At Confirmation Prompt, click No Prompt, and click Next. At License
	  Agreement, select "Do not display a license," and click Next. These options,
	  although not necessary, may be used.
	
	5. In Packaged Files, click Add to add the components you wish to be bundled
	  into the self-extracting executable. For our example, you would locate the
	  files:
	
	  Olcsp128.exe
	  Ol98qfe.exe
	  Odk.inf
	
	  And then click Add. Once you have selected the components, click Next.
	
	  NOTE: Odk.inf is the file that was created in the section above.
	
	6. For "Installation Program to Launch," specify the name of the .inf file you
	  wish to use that lists the names of the executables to call and in what
	  order. For our example, this is Odk.Inf.
	
	  The Post Install command should stay as None. When you have created and
	  specified the .inf file, click Next.
	
	7. In Show Window, accept the default settings, and click Next. In Finish
	  Message, you can choose to have a display pop-up indicating that the packages
	  have run; however, this is not required. Click Next.
	
	8. In "Package Name and Options," type the name of your package, providing the
	  directory location, and click Next. In Configure Reboot, choose the option
	  for No Reboot after your packages have been installed, and then click Next.
	
	NOTE: If you are deploying this package using the ODK, you must select No Reboot
	if you are going to deploy the package as a stand-alone .exe file.
	
	1. The Save Self-Extraction Directive dialog box asks where you want to save the
	  .sed file. This file will allow you go back into the package configuration
	  and change the components you have bundled together. To be safe, create a
	  .sed file, and click Next.
	
	2. When the Create Package confirmation dialog box appears, click Next, and the
	  package will be built. This will be turned into one .exe file, with the name
	  you specified, that can be included into the Outlook Deployment Kit as your
	  single custom package.
	
	3. The final screen confirms the creation of your package. It will display
	  information such as how much compression the files received, how many bytes
	  the package is, and how long it took. Click Finish to exit the Wizard.
	
	The bundled, self-extracting executable is now ready to be deployed through the
	ODK or as a stand-alone .exe file.
	
	For additional information on using IExpress and the ODK users should download
	the IExpress Deployment Kit for Outlook 98 available at the following location:
	
	  ftp.microsoft.com/softlib/mslfiles/odkidk98.exe
	
	  and
	
	  http://support.microsoft.com/support/downloads/dp3384.asp
	
	Additional query words: prfadmin prf admin odkidk98.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3 kbOutlookDeployKitSearch kbOutlook98DeployKit kbExchange550SP1
	Version           : :5.5 SP1,98
	Issue type        : kbhowto
	
	=============================================================================
	
