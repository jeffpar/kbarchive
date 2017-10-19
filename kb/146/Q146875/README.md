---
layout: page
title: "Q146875: PRB: Setup Wizard Fails on Files with no Name"
permalink: /kb/146/Q146875/
---

## Q146875: PRB: Setup Wizard Fails on Files with no Name

	Article: Q146875
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup Wizard in Visual FoxPro, the Setup Wizard may display the
	following error message:
	
	  An invalid output handle error occurred in LcbCompressFile().
	
	After you click OK, the Setup Wizard terminates.
	
	CAUSE
	=====
	
	This error message occurs when a file included in the distribution tree has no
	name. A file with just an extension and no name (for example, .txt) is
	considered to be a valid file under all the supported operating systems.
	However, the Setup Wizard is not designed to handle files of this type.
	
	NOTE: This has also been reported to occur when a file in the distribution tree
	has a long file name.
	
	WORKAROUND
	==========
	
	Make certain that all the files in the distribution tree have a name.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a file named .txt
	
	2. Run the Setup Wizard, and specify the distribution tree to be the directory
	  that contains the .txt file.
	
	3. Continue through the rest of the steps in the Setup Wizard, and click Finish.
	  The error message will occur. After you click the OK button, the Setup Wizard
	  terminates.
	
	Additional query words: VFoxWin LCB
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
