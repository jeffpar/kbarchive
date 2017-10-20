---
layout: page
title: "Q163669: FIX: Setup Wizard Does Not Use Default Directory Specified"
permalink: /kb/163/Q163669/
---

## Q163669: FIX: Setup Wizard Does Not Use Default Directory Specified

{% raw %}

	Article: Q163669
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Setup.exe, which was created with the Visual FoxPro 3.0b Setup
	Wizard, the default destination drive letter is ignored.
	
	RESOLUTION
	==========
	
	This problem is fixed in the Visual FoxPro 5.0 Setup Wizard.
	
	Additionally, an updated version of the Visual FoxPro 5.0 Setup Wizard is
	available. While the updated Setup Wizard offers no additional functionality
	regarding this issue, it does correct other potential problems. For more
	information about this topic, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162004 PATCH: Setwiz5.exe the Updated VFP 5.0 for Windows Setup Wizard
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro version
	5.0.
	
	MORE INFORMATION
	================
	
	The Setup Wizard that ships with Visual FoxPro 5.0 does not allow you to choose
	a different drive letter in step 5.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an .exe file in Visual FoxPro 5.0 and place it in a distribution
	  directory.
	
	2. Run the Setup Wizard selecting defaults until step 5.
	
	3. Place a different drive letter for default destination directory; that is, if
	  the distribution directory was "C:\Test," enter "D:\Test."
	
	4. Run the resulting Setup.exe and note that the default destination still
	  points to C:.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
