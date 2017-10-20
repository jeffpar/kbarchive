---
layout: page
title: "Q108837: PC Gen: PODIAG.INI Entries in &#91;User Mail Check&#93;"
permalink: /kb/108/Q108837/
---

## Q108837: PC Gen: PODIAG.INI Entries in &#91;User Mail Check&#93;

{% raw %}

	Article: Q108837
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
	are contained in the [User Mail Check] section.
	
	The Microsoft Mail Postoffice Diagnostics Utility has two PODIAG.INI files. One
	of the PODIAG.INI files exists in the MAILDATA\INI subdirectory; this .INI file
	contains all of the postoffice-specific settings. The second PODIAG.INI file
	exists in the WINDOWS subdirectory and contains environment- specific
	information. Only the PODIAG.INI file in the MAILDATA\INI subdirectory contains
	a [User Mail Check] section.
	
	MAILDATA\INI\PODIAG.INI
	-----------------------
	
	The default settings of the [User Mail Check] section of the postoffice- specific
	PODIAG.INI file are as follows:
	
	  [User Mail Check]
	  Depth=3
	  Existence=Yes
	  Size=Yes
	  Contents=Yes
	  Attribs=Yes
	  MailbagPointers=Yes
	
	Depth=<1/2/3/4>
	---------------
	
	This is the level of depth selected for the check in the tool Preferences dialog
	box. The default is 3, to check both user mailbags and mail messages. Use 1 to
	disable the tool, 2 to check mailbags only, or 4 to check all mail-related
	files.
	
	Existence=<Yes/No>
	------------------
	
	The default is Yes, to check that files exist.
	
	Size=<Yes/No>
	-------------
	
	The default is Yes, to check file size.
	
	Contents=<Yes/No>
	-----------------
	
	The default is Yes, to check contents of files.
	
	Attribs=<Yes/No>
	----------------
	
	The default is Yes, to check file attributes.
	
	MailbagPointers=<Yes/No>
	------------------------
	
	The default is Yes, to check that each user mailbag file contains pointers to
	mail messages.
	
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
