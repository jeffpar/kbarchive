---
layout: page
title: "Q193114: XCLN: How To Generate A User-Specific Profile w/ IExpress &amp; ODK"
permalink: /kb/193/Q193114/
---

## Q193114: XCLN: How To Generate A User-Specific Profile w/ IExpress &amp; ODK

{% raw %}

	Article: Q193114
	Product(s): Microsoft Exchange
	Version(s): 5.5,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a self-extracting archive to generate a
	user-specific profile for use with the Microsoft Outlook Deployment Kit (ODK)
	and the IExpress Deployment Kit for Outlook 98.
	
	For additional information on using IExpress and the ODK, users should download
	the IExpress Deployment Kit for Outlook 98 available at the following
	locations:
	
	  ftp.microsoft.com/softlib/mslfiles/odkidk98.exe
	
	and
	
	  http://support.microsoft.com/support/downloads/dp3384.asp
	
	MORE INFORMATION
	================
	
	When using the ODK to create a build of Outlook 98, if you choose the option to
	install your ODK build in silent mode, you can only add one custom package. By
	using the IExpress program that comes with the ODK, it is possible to bundle
	multiple files together into one self-extracting executable that can be run at
	the end of Setup. This is necessary if you wish to deploy multiple patches, or
	generate profiles once Outlook is installed.
	
	Generating the package successfully requires two phases, which are explained in
	detail in the following sections:
	
	1. Create an .inf file that lists the files to copy, and commands to execute.
	
	2. Bundle the files together into a single executable, using the IExpress
	  Wizard.
	
	Creating the .inf for Use with the IExpress Wizard
	--------------------------------------------------
	
	The .inf file contains the list of files to be copied to the users' hard drives
	and programs to be executed.
	
	Listed below is a sample .inf file that will run the programs necessary to
	generate a dynamic profile. Profgen.exe, Newprof.exe, and Outlook.prf will be
	copied to the hard drive, and then executed at the end of Setup.
	
	The [install.files] section is a list of files to copy to the users' computers.
	
	The [RunPostSetupCommandsSection] section lists the names of the programs to
	execute, and the launch order. You should also include any command-line
	arguments in this section.
	
	NOTE: The .inf file is named Odk.inf, and must be listed in the [install.files]
	section.
	
	  ; This is a sample .inf file to use with the IExpress Wizard.
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
	  ; List the files that need to be copied to the local hard drive.
	  ; This should be the same list of files that are added in the
	  ; "Packaged Files" section of the IExpress Wizard as described in
	  ; step 4 below.
	
	  Profgen.exe     ;used in generating profiles
	  Newprof.exe     ;used in generating profiles
	  Outlook.prf     ;configuration file used in generating profiles
	  Odk.inf
	
	  [RunPostSetupCommandsSection]
	  ; List the programs you wish to run, and the order in which
	  ; you wish them to be executed.
	  ; Include any command line switches or parameters that are necessary.
	
	  profgen.exe newprof.exe -P outlook.prf -x -l -u -n -j -r -t
	
	  ; The above command line generates a profile based on current logon ID
	  ; and setting listed in the Outlook.prf file. Additional information
	  ; on command-line switches is listed at the end of this article.
	
	  [SourceDisksNames]
	  1="default",,1
	
	Combining Multiple Files Using the IExpress Wizard
	--------------------------------------------------
	
	To bundle several programs together using the IExpress utility, follow these
	steps:
	
	1. Start the IExpress 2.0 wizard. The default location and filename is:
	
	  C:\Program Files\ODK\Tools\Iexpress.exe.
	
	  In the Welcome To IExpress 2.0 dialog box, click "Create new self extraction
	  directive file," and then click Next.
	
	2. In the "Package purpose" dialog box, click the option "Extract files and run
	  an installation command," and click Next. In "Package title," enter a name
	  such as "Example Installation," and then click Next.
	
	3. In "Confirmation prompt," click "No prompt," and click Next. In "License
	  agreement," click "Do not display a license," and click Next. These options,
	  although not necessary, may be used.
	
	4. In "Packaged files," click Add to choose the components you wish to be
	  bundled into the self-extracting executable. For our example, you would
	  locate the files:
	
	  Profgen.exe
	  Newprof.exe
	  Outlook.prf
	  Odk.inf
	
	  Click Open, and then click Next.
	
	5. For "Installation Program to Launch," specify the name of your .inf file. For
	  our example, this is Odk.inf.
	
	  Specify None as the Post Install command, and then click Next.
	
	6. In "Show window," click Default, and click Next. In "Finish Message," click
	  No Message, and then click Next.
	
	7. In "Package Name and Options," type the name of your package, specify the
	  directory location, and click Next. In Configure Reboot, click the No Reboot
	  option, and then click Next.
	
	  NOTE: If you are deploying your package using the ODK, you must select No
	  Reboot.
	
	8. In the "Save Self Extraction Directive" dialog box, specify the location to
	  save the SED file, and then click Next. This file allows you to change your
	  IExpress configuration and the files you have selected.
	
	9. When the Create Package confirmation dialog is displayed, click Next and the
	  package will be built. This is the self-extracting executable with the name
	  you specified. This can be included in the Outlook Deployment Kit as your
	  single custom package.
	
	The final screen confirms the creation of your package. It will display
	information, such as how much compression the files received, how many bytes the
	package is, and how long it took to create the package. Click Finish to exit the
	wizard.
	
	The bundled self-extracting executable is now ready to be included in the ODK.
	
	For additional information on adding custom components to the ODK, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q190053 XCLN: Adding Custom Applications to Active Setup with the ODK.
	
	The command-line switches for Profgen and Newprof are listed here for reference.
	
	PROFGEN.EXE  <path>\NEWPROF.EXE -P <path>\DEFAULT.PRF [-S] [-X] [-L] [-U]
	
	<path>\NEWPROF.EXE        - This is the name of the file NEWPROF.EXE, with
	                           complete path.
	-P <path>\DEFAULT.PRF     - This specifies the name of the .prf file to be
	                           used.
	-I <Logon ID>             - Use the logon ID specified.
	-J                        - Modifies the PathtoPersonalFolders and the
	                           PathToPersonalAddressBook, by substituting the
	                           current logon ID, in place of $USERNAME$.
	                           Hence, if the .prf file has the entry
	                           PathtoPersonalFolders =
	                           H:\$USERNAME$\mailbox.pst, the program will
	                           change it to PathtoPersonalFolders =
	                           H:\LogonID\mailbox.pst, LogonID is the current
	                           login ID.
	                           The PathToPersonalAddressBook will be similarly
	                           modified.
	                           For the PathtoPersonalFolders to be modified,
	                           the "Personal Folders" service must be
	                           included in the .prf file.
	                           For the PathToPersonalAddressBook to be
	                           modified, the "Personal Address Book"
	                           service must be included in the .prf file.
	-L                        - Create a log file, C:\PROFGEN.LOG.
	-N                        - Use the current logon ID as the name of the
	                           profile.
	-R                        - Do not rename the .prf file after the program
	                           has run.
	-S                        - Run NEWPROF.EXE with the -S option.
	-T <path>                 - Specifies the directory where the profgen.tmp
	                           file should be created. The default location is
	                           c:\.
	-U                        - Use the current logon ID in the profile being
	                           created. Update the MailboxName= entry
	                           in the .prf file specified with the -P option,
	                           even if it already contains a value.
	-X                        - Run NEWPROF.EXE with the -X option
	
	Newprof.exe accepts the following command line options:
	
	  NEWPROF [-P <Path to .prf file>] [-S] [-X] [-Z]
	
	Where:
	
	-P  <Path to .prf file> is the .prf file with the complete path.
	-S  Causes the Newprof.exe to program to bring up a window, allows
	   the user to choose a .prf file, and displays status and error
	   messages in this window.
	-X  Causes Newprof.exe to start execution automatically when the -S
	   option is used, without waiting for a .prf file to be selected.
	   Requires the -P option to be used or the Default.prf file to be
	   present in the windows directory.
	-Z  Causes Newprof.exe to display MAPI error codes in case any errors
	   are encountered. This option requires the -S option.
	
	For additional information on Outlook.prf, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q172073 : OL97: Contents of the Outlook.prf File
	
	  Q166778 : OL97: Contents of the Profile.doc Readme File
	
	Additional query words: ODK profgen newprof iexpress rollout prfadmin prf admin odkidk98.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : :5.5,98
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
