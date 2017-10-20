---
layout: page
title: "Q87008: PRB: Building Setup Toolkit Overwrites DIALOGS.RES File"
permalink: /kb/087/Q87008/
---

## Q87008: PRB: Building Setup Toolkit Overwrites DIALOGS.RES File

{% raw %}

	Article: Q87008
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Resource Compiler builds the resources for the custom DLL in the Setup
	Toolkit provided with the Microsoft Windows Software Development Kit (SDK)
	version 3.1, the DIALOGS.RES file is overwritten.
	
	RESOLUTION
	==========
	
	Modify the files in the Setup Toolkit BLDCUI directory (by default,
	C:\WINDEV\MSSETUP\BLDCUI) as follows:
	
	1. In the DIALOGS.DLG file, add the following two statements:
	
	        #include <windows.h>
	        #include "dialogs.h"
	
	2. Rename the DIALOGS.RC file to MSCUISTF.RC.
	
	3. Edit MAKEFILE as follows:
	
	  a. Find all occurrences of DIALOGS.RC and replace them with MSCUISTF.RC.
	
	  b. Find all occurrences of DIALOGS.RES and replace them with MSCUISTF.RES.
	
	MORE INFORMATION
	================
	
	It is necessary to make these changes before customizing the Setup Toolkit
	dialog boxes with the Dialog Editor. If the dialog box template, DIALOGS.RES,
	grows to larger than 64K, the Dialog Editor cannot load the file. For
	information on rebuilding the dialog template from the DIALOGS.DLG file, query
	in the Microsoft Knowledge Base on the following words:
	
	  " dialog editor corrupt " (without the quotation marks)
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
