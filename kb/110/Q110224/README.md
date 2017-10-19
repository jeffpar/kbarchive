---
layout: page
title: "Q110224: PC Gen: PODIAG.EXE Command-Line Options"
permalink: /kb/110/Q110224/
---

## Q110224: PC Gen: PODIAG.EXE Command-Line Options

	Article: Q110224
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Post Office Diagnostics Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Postoffice Diagnostics Utility (PODIAG.EXE) has
	several command-line parameters you can enter on the Program Manager File Run
	menu. You can also add these command-line options to the command- line
	properties of the PODIAG icon. The following is an example of the command-line
	properties that will automatically log the administrator in to a postoffice
	mapped to drive M while logging the information to a local log file:
	
	  c:\podiag\podiag.exe -dm:\maildata admin -ppassword
	
	                       -lc:\podiag.log -r -a
	
	MORE INFORMATION
	================
	
	The following is a complete list of all of the command-line options and their
	descriptions.
	
	admin
	-----
	
	The mailbox of the postoffice administrator. This option is used in conjunction
	with the -ppassword option.
	
	-d<path>
	--------
	
	The letter of the network drive where the postoffice data files are located, if
	it is not the current drive. If you do not specify a path, the diagnostics
	utility assumes that the postoffice is in the current directory on the specified
	drive.
	
	For example, if the data files are in the current directory on drive M, and the
	Diagnostics utility is in the PODIAG directory on drive C, you start the
	Diagnostics utility by typing the following line, where the mailbox name used to
	sign in is admin:
	
	  c:\podiag.exe admin -dm
	
	If the postoffice directory is not the current directory on the drive, you need
	to specify the path. For example, if the postoffice is in the MAILDATA directory
	on drive M, type the following line:
	
	  c:\podiag.exe admin -dm:\maildata
	
	The -d command-line parameter can be used in conjunction with the PODIAG.INI
	Login= and Password= settings.
	
	-l<logfilename> (Log File Option)
	---------------------------------
	
	Specifies the log file location and filename. For example:
	
	  -ldiaglog.log
	
	-p<password> (Password Option)
	------------------------------
	
	The password of the mailbox name used to start the diagnostics utility. If you do
	not specify a password, you are required to do so on the Sign In screen.
	
	-r (Batch Run Option)
	---------------------
	
	Runs all tools automatically on a postoffice. To run tools automatically, you
	must specify the administrator mailbox name, the -p<password> option, and
	the -d<drive letter> option.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	
