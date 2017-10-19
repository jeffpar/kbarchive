---
layout: page
title: "Q158403: PRB: &quot;No Records Found&quot; Error While Converting a Report in VFP"
permalink: /kb/158/Q158403/
---

## Q158403: PRB: &quot;No Records Found&quot; Error While Converting a Report in VFP

	Article: Q158403
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following problem arises when a user attempts to convert a Visual FoxPro 3.0
	for Mactintosh report to Visual FoxPro 3.0b Windows. When the MODIFY REPORT
	<report file name> is entered in the Command window and the user is
	attempting to open a Visual FoxPro 3.0 for Mactintosh report, the user is
	prompted with the following dialog box:
	
	  Do you want to convert the report <report name> to Visual FoxPro 3.0
	  format?
	
	  Continue Cancel Help
	
	After the user clicks Continue, the conversion appears to begin. However, the
	message "No Records for current platform!" appears.
	
	CAUSE
	=====
	
	Since Visual FoxPro 3.0 for the Macintosh was developed after Visual FoxPro 3.0b
	for Windows, it contains a later version of the Convert.app file. When a report
	from another platform is opened (that is, Macintosh), the Visual FoxPro system
	memory variable _CONVERTER is invoked and it calls Convert.app.
	
	WORKAROUND
	==========
	
	To work around the problem, copy the Convert.app file from the Visual FoxPro for
	Macintosh folder to the Visual FoxPro for Windows folder.
	
	Additional query words: vfoxwin kbdse
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
