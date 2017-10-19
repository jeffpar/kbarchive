---
layout: page
title: "Q152246: Refresh Setting in Visual FoxPro Has Effect on Buffered Data"
permalink: /kb/152/Q152246/
---

## Q152246: Refresh Setting in Visual FoxPro Has Effect on Buffered Data

	Article: Q152246
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0;3.0b;6.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp300 kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The setting of Refresh in Visual FoxPro has a direct effect on buffered data. If
	the command:
	
	     SET REFRESH TO 0,0
	
	is issued in a program, or if:
	
	     REFRESH=0,0
	
	is placed in the Config.fpw file, the buffers are never refreshed due to the
	second parameter being a zero (0).
	
	MORE INFORMATION
	================
	
	The setting of Refresh will have an effect on the Browse and also have an effect
	on the Grid container.
	
	REFERENCES
	==========
	
	Please see the "Set Refresh" topic of Visual FoxPro Online Help.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv kbvfp300 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:3.0;3.0b;6.0
	
	=============================================================================
	
