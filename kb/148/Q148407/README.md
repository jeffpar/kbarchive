---
layout: page
title: "Q148407: PRB: Error: Cannot load ODBC Library Odbc32.dll"
permalink: /kb/148/Q148407/
---

## Q148407: PRB: Error: Cannot load ODBC Library Odbc32.dll

	Article: Q148407
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message "Cannot load ODBC Library odbc32.dll" appears when you perform
	ODBC related tasks.
	
	CAUSE
	=====
	
	This message can be caused by a missing or old version of the Odbc32.dll file.
	If this file already exists at the time Visual FoxPro is installed, it won't be
	overwritten.
	
	RESOLUTION
	==========
	
	Make sure you are using the version shipped with Visual FoxPro. The file can be
	found in the Windows System directory and should have the following properties:
	
	Visual FoxPro    Number
	Version          of Bytes     Last Modified/Created
	---------------------------------------------------
	3.0              64,512       11/09/94  1:00am
	3.0b             64,512       11/09/94  1:00am
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
