---
layout: page
title: "Q190061: BUG: SCC Error Occurs When Opening a VSS5 Project Under VSS"
permalink: /kb/190/Q190061/
---

## Q190061: BUG: SCC Error Occurs When Opening a VSS5 Project Under VSS

	Article: Q190061
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Visual SourceSafe (VSS) 5.0 project in Visual FoxPro 6.0 using
	Visual SourceSafe 6.0 as the current source code control provider, a Source Code
	Control (SCC) error occurs. The project is added to Visual SourceSafe 6.0, but
	the following error message appears:
	
	  SCC API error 'Project created' occurred. The project will be opened without
	  source control.
	
	The next time you open the project, the error does not occur. The project is
	under source control without explicitly adding it to source control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project in Visual FoxPro 5.0 and place it under Visual SourceSafe
	  5.0 source control.
	
	2. Modify the project in Visual FoxPro 6.0 using Visual SourceSafe 6.0 source
	  control.
	
	RESULT: When you initially open the project in Visual FoxPro 6.0, the error
	occurs. When you modify the project in Visual FoxPro 6.0 with Visual SourceSafe
	6.0 as the source code control provider, the error will not occur.
	
	Additional query words: vss kbVFp600 kbInterOp
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
