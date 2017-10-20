---
layout: page
title: "Q163545: FIX: Setup /F Causes Error When Created by Setup Wizard"
permalink: /kb/163/Q163545/
---

## Q163545: FIX: Setup /F Causes Error When Created by Setup Wizard

{% raw %}

	Article: Q163545
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup /F from distribution disks, you may receive the following
	error:
	
	  Setup error 997, Object ##: Your setup files may be damaged. Try restarting
	  the setup program.
	
	where ## may be different numbers.
	
	CAUSE
	=====
	
	The Setup /F is for disk volumes that do not support long file names. If the
	Program Item Description in step 6 of Setup Wizard or Program Group name in step
	5 of Setup Wizard is greater then 8 characters or it has spaces, you receive the
	error.
	
	
	RESOLUTION
	==========
	
	Make sure that there are no files or directories with long file names. Also,
	ensure that the Program Item Description and Program Group Name are no longer
	than 8 characters and that the names do not contain spaces.
	
	This has been corrected in an updated version of the Setup Wizard. For more
	information about how to obtain the new Setup Wizard, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q162004 PATCH: Setwiz5.exe the Updated VFP 5.0 for Windows Setup Wizard
	
	STATUS
	======
	
	The Visual FoxPro 5.0x setup wizard no longer supports the /F switch.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Setup Wizard.
	
	2. In step 5 of the Setup Wizard, make the Program group name greater than 8
	  characters.
	
	3. In step 6 of the Setup Wizard, select "PM" and make the Icon description
	  greater than 8 characters.
	
	4. Finish the Setup Wizard.
	
	5. Run the Setup /F from the distribution disk files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
