---
layout: page
title: "Q156031: PRB: Ordinal Not Found When Starting VFP or Application"
permalink: /kb/156/Q156031/
---

## Q156031: PRB: Ordinal Not Found When Starting VFP or Application

	Article: Q156031
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Visual FoxPro 5.0 or Visual FoxPro 5.0 applications on Windows
	NT version 3.51, you might see the following message:
	
	  VFP.EXE - Ordinal Not Found The ordinal 419 could not be located in the
	  dynamic-link library file, Oleaut32.dll.
	
	
	This message can occur if you are doing one of the following:
	
	- Attempting to run Visual FoxPro before restarting the computer as directed
	  after installing the full version of Visual FoxPro.
	
	- Attempting to run a Visual FoxPro application created with the Setup Wizard
	  before restarting the computer as directed after installing the application.
	
	- Attempting to run Visual FoxPro or a Visual FoxPro application after
	  installing a Windows NT 3.51 Service Pack.
	
	CAUSE
	=====
	
	The message appears if you are using an outdated version of the Oleaut32.dll
	file.
	
	WORKAROUND
	==========
	
	In the situations described by the first two items above, restarting the
	computer corrects the problem. The proper version of the Oleaut32.dll file is
	present, but is not loaded until NT 3.51 has been restarted.
	
	In the situation described in the third item above, the NT 3.51 Service Pack
	installation program has overwritten the Oleaut32.dll file with an earlier
	version. To remedy this problem, you must uninstall and then reinstall Visual
	FoxPro or the Visual FoxPro application in order to restore the proper version
	of the Oleaut32.dll file.
	
	Alternately, you can update the version of the Oleaut32.dll file in the Service
	Pack to the version included with Visual FoxPro and then reinstall the Service
	Pack, as described below.
	
	Updating the Service Pack Version of the Oleaut32.dll File
	----------------------------------------------------------
	
	The following procedure was tested with Windows NT 3.51 and Service Pack 4, and
	it allows Visual FoxPro to start without error. This information is supplied as
	a possible alternative to reinstallation of Visual FoxPro or the distributed
	application.
	
	CAUTION: This procedure is not supported. Use it at your own risk and only after
	backing up all relevant files.
	
	1. In the Windows NT Service Pack directory (the directory that contains the
	  Update.exe file), rename the Oleaut32.dll file to Oleaut32.old.
	
	2. From the Os\system folder on the Visual FoxPro CD, copy the Oleaut32.dll file
	  to the Service Pack folder.
	
	3. Reinstall the Service Pack by running the Update.exe file.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro or a Visual FoxPro application on a computer running
	  Windows NT 3.51.
	
	2. Attempt to start Visual FoxPro or the application. The message described in
	  the SYMPTOMS section above occurs.
	
	-or-
	
	1. Install a Windows NT 3.51 Service Pack on a computer with Visual FoxPro or a
	  Visual FoxPro application installed.
	
	2. Attempt to start Visual FoxPro or the application. The message described in
	  the SYMPTOMS section occurs.
	
	REFERENCES
	==========
	
	Readme.hlp, Visual FoxPro for Windows, version 5
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.00
	
	=============================================================================
	
