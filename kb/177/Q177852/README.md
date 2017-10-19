---
layout: page
title: "Q177852: FIX: VFP5.0a under Japanese OS Causes DBC Characters Problems"
permalink: /kb/177/Q177852/
---

## Q177852: FIX: VFP5.0a under Japanese OS Causes DBC Characters Problems

	Article: Q177852
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500a kbvfp600fix
	Last Modified: 17-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Visual FoxPro version 5.0a under a Japanese Operating System (OS),
	and you enter Double-Byte Japanese Characters in a text box or the Visual FoxPro
	Command window, the text is unreadable after the Enter or Return key is pressed.
	
	RESOLUTION
	==========
	
	Install Visual Studio Service Pack 2 from:
	
	  http://www.msdn.microsoft.com/vstudio/
	
	and follow the SP2 link.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the United States (US) version of Visual FoxPro version 5.0a (there
	  is no Japanese localized version of Visual FoxPro 5.0a) under Japanese
	  Windows 95.
	
	2. Type in some Japanese Characters in the Visual FoxPro Command window. NOTE:
	  Instead of Japanese characters, unreadable characters appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500a kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : WINDOWS:5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
