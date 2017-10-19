---
layout: page
title: "Q104865: PRB: &quot;Report File Invalid&quot; or &quot;Memo File Missing/Invalid&quot;"
permalink: /kb/104/Q104865/
---

## Q104865: PRB: &quot;Report File Invalid&quot; or &quot;Memo File Missing/Invalid&quot;

	Article: Q104865
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to modify a report, the error message "Report File
	Invalid" or "Memo File Missing/Invalid" appears.
	
	CAUSE
	=====
	
	The error message occurs because the .FRT file is not present along with the
	.FRX file, the .FRX file has become corrupted, or the .FRT file has been moved
	or deleted.
	
	RESOLUTION
	==========
	
	To resolve this problem, check the following:
	
	1. Make sure the .FRT file is in same directory as the .FRX file.
	
	2. Make sure the .FRT or .FRX file has not been deleted or become corrupted; if
	  it has, re-create the report, or try to correct the file using a third-party
	  utility designed to fix database headers or memo files.
	
	3. Make sure you are not trying to use a 2.5 file under 2.0.
	
	Additional query words: VFoxWin FoxDos FoxWin errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
