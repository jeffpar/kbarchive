---
layout: page
title: "Q162115: FIX: &quot;Setup Error 280 Object &lt;n&gt;&quot; with Long File Names"
permalink: /kb/162/Q162115/
---

## Q162115: FIX: &quot;Setup Error 280 Object &lt;n&gt;&quot; with Long File Names

{% raw %}

	Article: Q162115
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS: 5.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run a Setup.exe created by the Visual FoxPro 5.0 Setup
	Wizard, the following error occurs:
	
	  Setup error 280 Object <n>
	  Your Setup files may be damaged.
	  Try restarting the Setup program.
	
	CAUSE
	=====
	
	The error is due to a file with a long file name that is large enough to require
	splitting. This may occur on a file size of 725 K or larger. However, smaller
	files may also cause problems.
	
	RESOLUTION
	==========
	
	You can rename the file to a conventional 8 character name or obtain an updated
	Setup Wizard.
	
	There is an updated version of the Setup Wizard that corrects this problem.
	
	To obtain the updated version of the Setup Wizard, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q162004 PATCH: Setwiz5.exe the Updated VFP 5.0 for Windows Setup Wizard
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Place a 1 MB file with a long file name in a distribution directory.
	
	2. Run the Setup Wizard against that directory, and select none of the check
	  boxes in Step 2. Select the Netsetup option.
	
	3. Go to the Netsetup directory and run Setup.exe. The error may occur
	  immediately or later in the Setup process.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS: 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
