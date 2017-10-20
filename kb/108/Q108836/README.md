---
layout: page
title: "Q108836: PC Gen: PODIAG.INI Entries in &#91;Microsoft Mail PO Diagnostics&#93;"
permalink: /kb/108/Q108836/
---

## Q108836: PC Gen: PODIAG.INI Entries in &#91;Microsoft Mail PO Diagnostics&#93;

{% raw %}

	Article: Q108836
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Post Office Diagnostics Utility, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists and describes all the entries in the Microsoft Mail
	Postoffice Diagnostics Utility (PODIAG.EXE) private profile, PODIAG.INI, that
	are contained in the [Microsoft Mail PO Diagnostics] section.
	
	The Microsoft Mail Postoffice Diagnostics Utility has two PODIAG.INI files that
	both contain a section called [Microsoft Mail PO Diagnostics]. One of the
	PODIAG.INI files exists in the MAILDATA\INI subdirectory; this .INI file
	contains all of the postoffice-specific settings. The second PODIAG.INI file
	exists in the WINDOWS subdirectory and contains environment- specific
	information.
	
	MAILDATA\INI\PODIAG.INI
	-----------------------
	
	The default settings of the [Microsoft Mail PO Diagnostics] section of the
	postoffice-specific PODIAG.INI file are as follows:
	
	  [Microsoft Mail PO Diagnostics]
	  LogFile=C:\MAIL32\MAILDATA\log\podiag.log
	  LogViewer=notepad.exe
	  LogTabs=Yes
	  LogUsrDecisions=Yes
	  AutoFix=No
	
	LogFile=<pathname>
	------------------
	
	This is the path and filename of the diagnostics utility log file. The default is
	PODIAG.LOG in the LOG directory of the postoffice database. This setting is
	required.
	
	LogViewer=<pathname>
	--------------------
	
	This is the path and editor program used to view the log file. The default is
	NOTEPAD.EXE. This setting is required. The Help file incorrectly lists this
	setting as "LogView."
	
	LogTabs=<Yes/No>
	----------------
	
	This specifies whether you want to use tabs or spaces to separate entries in the
	log file. The default is Yes, to use tabs. This setting is required.
	
	LogUsrDecisions=<Yes/No>
	------------------------
	
	This specifies whether you want each decision you make to fix a problem or cancel
	a check when running tools to be recorded in the log file. The default is Yes,
	to record user choices. This setting is required.
	
	AutoFix=<Yes/No>
	----------------
	
	This specifies whether you want the diagnostics utility to automatically fix any
	database problems it encounters without prompting you for a decision. The
	default is No, to not automatically fix problems without prompting. This setting
	is required. Use this option only if you are sure you do not want to be asked
	you whether you want to proceed to fix any problems that are found.
	
	Login=<mailbox name>
	--------------------
	
	This is the administrator mailbox name used to sign in to the diagnostics utility
	and open the postoffice specified with the Run command in Program Manager. The
	default is "Admin." This setting is optional; if it is used, you do not need to
	enter a user (mailbox) name in the Sign In dialog box. To bypass the Sign In
	dialog box entirely, you also need to specify a password with the Password
	setting. In addition, you must add the "Dir=M:\MAILDATA" setting to the
	environment-specific WINDOWS\PODIAG.INI file; otherwise, this setting will not
	work.
	
	Password=<password>
	-------------------
	
	This is the password of the administrator mailbox used to sign in to the
	diagnostics utility and open the postoffice specified with the Run command in
	Program Manager. The default is "Password." This setting is optional and is used
	in conjunction with the administrator mailbox name; if it is used, you do not
	need to enter a password in the Sign In dialog box. To bypass the Sign In dialog
	box entirely, you also need to specify an administrator mailbox with the Login
	setting. In addition, you must add the "Dir=M:\MAILDATA" setting to the
	environment-specific WINDOWS\PODIAG.INI file; otherwise, this setting will not
	work.
	
	If you enter a password in the PODIAG.INI file in the INI subdirectory of the
	postoffice, anyone can automatically sign in to that postoffice. For security
	reasons, you should not enter the password in the PODIAG.INI file.
	
	C:\WINDOWS\PODIAG.INI Settings
	------------------------------
	
	The default settings of the [Microsoft Mail PO Diagnostics] section of the
	environment-specific PODIAG.INI file are as follows:
	
	  [Microsoft Mail PO Diagnostics]
	  MostRecentlyUsed1=M:\MAILDATA
	  MostRecentlyUsed2=
	  MostRecentlyUsed3=
	  MostRecentlyUsed4=
	
	Dir=<pathname>
	--------------
	
	Use this command if you want to automatically access a specific postoffice each
	time the utility is run on the workstation. An example of the proper syntax is
	"Dir=M:\MAILDATA". This setting is not documented in the help file but is
	required in order to use the "Login" and "Password" settings in the
	postoffice=specific PODIAG.INI file.
	
	  MostRecentlyUsed1=<pathname>
	  MostRecentlyUsed2=<pathname>
	  MostRecentlyUsed3=<pathname>
	
	MostRecentlyUsed4=<pathname>
	----------------------------
	
	These are the paths to the most recently accessed postoffices. This information
	appears under the File menu and can be used to select a postoffice to log in to
	with the PODIAG utility.
	
	MORE INFORMATION
	================
	
	The PODIAG.INI file is created in the MAILDATA\INI subdirectory the first time
	one of the PODIAG tools is run on the postoffice. In addition, an INI
	subdirectory will be created if the INI subdirectory does not already exist (as
	in the case of a version 2.1 postoffice). The environment-specific PODIAG.INI
	file is created in the WINDOWS subdirectory the first time PODIAG is run on a
	workstation.
	
	The WINDOWS\PODIAG.INI file only contains one section called [Microsoft Mail PO
	Diagnostics] and only contains the MostRecentlyUsed postoffice settings.
	
	There are five possible sections in the postoffice-specific PODIAG.INI:
	
	- Microsoft Mail PO Diagnostics
	
	- Address & Group Check
	
	- Directory Synchronization Check
	
	- Server Folder Check
	
	- User Mail Check
	
	Each of the sections is created when the corresponding tool is run on the
	postoffice. The one exception is the Microsoft Mail PO Diagnostics section,
	which is created when the postoffice is closed. These sections can exist in the
	postoffice-specific PODIAG.INI file, in any order.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbMailPODiagnostic320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
