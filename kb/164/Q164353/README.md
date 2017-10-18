---
layout: page
title: "Q164353: SMSINST: Command Line Parameter Order for Installer Executables"
permalink: kb/164/Q164353/
---

## Q164353: SMSINST: Command Line Parameter Order for Installer Executables

	Article: Q164353
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage smsinst
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Systems Management Server Installer installation executable file can accept
	custom command-line parameters that are read into the script variable CMDLINE.
	When using the built-in command line options available, the built-in command
	line arguments must be supplied first on the application command line.
	
	MORE INFORMATION
	================
	
	The following are the built-in command line options available when using an
	installation executable:
	
	Test Mode - /T
	Allows an installation script to be tested without making changes to the system.
	
	Extract Mode - /X and /Z
	
	- /X lists the files contained in the installation executable. Files may be
	  selected for extraction from an installer UI. Placing a directory name after
	  the /X parameter will extract all files to the selected directory.
	
	- /Z performs the same function as /X, except the computer will exit Windows
	  after extraction.
	
	Manual Mode - /M
	Runs an installation in manual mode. The installation executable will prompt for
	certain directories (if required). This will allow files destined for the
	Windows or Windows\System directories to be redirected if required.
	
	Silent Mode - /S
	Performs an installation in silent mode. The background gradient and progress bar
	are not displayed. Messages or prompts that the installation uses (except
	RESTART) will not be displayed.
	
	Please see the Systems Management Server Installer Version 1.0 documentation
	(http://www.microsoft.com/SMSMGMT/installer.htm) for a more complete overview of
	these command-line parameters.
	
	If you want to process custom command-line arguments in your installation
	executable, they must follow the Installer built-in command line options.
	Built-in arguments will be ignored if they are preceded by custom arguments.
	
	The following is an example for a Setup.exe file:
	
	     setup.exe [/S] [/X|Z] [/M] [CMDLINE arguments]
	
	The following is a similar example for an Uninstal.exe file, where /C is for a
	Custom removal, and /A is for an Automatic removal:
	
	     uninstal.exe [/S] [/C] [/A] [x:\path\install.log] "Optional dialog bar
	     message"
	
	Additional query words: prodsms sms uninstall deinstall de-install
	
	======================================================================
	Keywords          : kbusage smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
