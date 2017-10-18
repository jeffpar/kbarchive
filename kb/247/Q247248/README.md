---
layout: page
title: "Q247248: PRB: BuffDirty and the Class Browser"
permalink: kb/247/Q247248/
---

## Q247248: PRB: BuffDirty and the Class Browser

	Article: Q247248
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp300b kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing the Class Browser, Visual FoxPro may return the following error:
	
	  Invalid buffdirty call
	
	And then Visual FoxPro quits.
	
	CAUSE
	=====
	
	Possible causes of this problem are a corrupted Browser.dbf file resulting from
	an abnormal termination of Visual FoxPro from a power outage, a computer lockup
	or restart, and turning the computer off without properly shutting it down.
	
	RESOLUTION
	==========
	
	There are two ways to resolve the problem.
	
	- Delete the two files, Browser.dbf and Browser.fpt.
	
	  CD (HOME())
	  ERASE browser.dbf
	  ERASE browser.fpt
	
	  NOTE: these two files are created if they do not exist when the Class Browser
	  is run.
	
	- Zap the Browser table.
	
	  USE (HOME() + "browser") EXCLUSIVE
	  ZAP
	  USE
	
	  This clears any corrupted records in the table and prepares it for initial use
	  again.
	
	MORE INFORMATION
	================
	
	The Invalid buffdirty call is not limited to the Class Browser.
	
	Additional query words: Class Browser, GPF, buffdirty
	
	======================================================================
	Keywords          : kbMiscTools kbvfp300b kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
