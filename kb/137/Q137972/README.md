---
layout: page
title: "Q137972: How to Find Which Files Are Referenced as Visual FoxPro Starts"
permalink: /kb/137/Q137972/
---

## Q137972: How to Find Which Files Are Referenced as Visual FoxPro Starts

{% raw %}

	Article: Q137972
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To troubleshoot configuration problems effectively, you need to know which files
	Visual FoxPro looks at when it starts up and what information those files
	contain. That information is given in this article and in the Visual FoxPro Help
	file.
	
	MORE INFORMATION
	================
	
	Foxpro.ini
	----------
	
	The Foxpro.ini file is located in the Windows directory and contains the
	information for the main FoxPro window. It is saved each time you exit Visual
	FoxPro, so when it restarts it looks the way it did when you closed it.
	
	Config.fpw
	----------
	
	The Config.fpw file contains optional settings you can make to your environment.
	It is located in the Visual FoxPro working directory, unless otherwise specified
	with a startup command switch. Many of these are duplicates of the Registry
	settings. For more details, please see the Help file topic on this file.
	
	Reg.dat
	-------
	
	The registry information is found in Reg.dat. This is where the product saves the
	Options dialog box settings. The Options settings are mostly a subset of the
	possible Config.fpw settings. The Config.fpw overrides any Options settings
	saved to the Registry, which would indicate that the Config.fpw is opened after
	the registry. This is an assumption. See the Help file for information on the
	Options dialog.
	
	Foxuser
	-------
	
	The Foxuser file is the generic Resource file. It is Foxuser.dbf by default,
	although you can set it to any .dbf file. FoxPro creates it if it doesn't exist.
	You can set it ON or OFF. It is mostly a table of preferences, such as Browse
	window size, location, and attributes. See the Help file for more information on
	the Foxuser.dbf file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
