---
layout: page
title: "Q149299: PRB: &quot;RUN Command Failed&quot; (1405) Under Windows 95 &amp; Windows NT"
permalink: /kb/149/Q149299/
---

## Q149299: PRB: &quot;RUN Command Failed&quot; (1405) Under Windows 95 &amp; Windows NT

	Article: Q149299
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "RUN|! command failed" (Error 1405) appears when you issue a RUN
	command if Visual FoxPro for Windows is installed in a folder (subdirectory)
	that has a name containing a space.
	
	This error occurs under both the Windows 95 and Windows NT operating systems.
	
	WORKAROUND
	==========
	
	Do not install Visual FoxPro for Windows in a folder if the name of that folder
	contains a space.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. If Visual FoxPro for Windows is installed in the VFP folder (the default),
	  change the folder name to VFP Test. Ignore the warning about changes to
	  registered programs on Windows 95.
	
	2. Start Visual FoxPro for Windows, and type the following in the Command
	  window:
	
	  " RUN dir " (without the quotation marks)
	
	Renaming the folder to its original name (or any name that does not contain a
	space) resolves the problem.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
