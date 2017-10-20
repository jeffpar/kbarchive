---
layout: page
title: "Q306113: PRB: Temp Folder with System Attribute Causes Errors in VFP"
permalink: /kb/306/Q306113/
---

## Q306113: PRB: Temp Folder with System Attribute Causes Errors in VFP

{% raw %}

	Article: Q306113
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbwizard kbvfp kbvfp500 kbvfp500a kbvfp600 kbvfp600bug kbvfp600fix kbGrpDSFox kbDSuppor
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to save a form in step 4 of the Form Wizard, the following error
	may appear:
	
	  File C:\foxtest\<filename>.tmp does not exist. Error: 1
	  File C:\foxtest\<filename>.tmp does not exist.
	  Method: Formwizengine1.form1.SaveAs
	  Error: 0
	
	CAUSE
	=====
	
	The folder that Visual FoxPro uses to store its temporary files has the System
	attribute applied to it.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following workarounds:
	
	- From an MS-DOS command prompt, use the ATTRIB command to remove the System
	  attribute for the folder:
	
	  " ATTRIB -S c:\temp " (without the quotation marks)
	
	  Substitute the name of your Visual FoxPro temporary files folder for "temp" in
	  the example. Note that Windows Explorer does not offer the option to change
	  the System attribute from its interface.
	
	- Direct the Visual FoxPro temporary files to another folder that does not have
	  the System attribute set.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the MS-DOS ATTRIB command, set the System attribute for the Visual
	  FoxPro temporary files folder. For example, the syntax for a folder called
	  "temp" on drive C would be as follows:
	
	  " ATTRIB +S c:\temp " (without the quotation marks)
	
	  NOTE: To determine the location of the Visual FoxPro temporary files folder,
	  use the SYS(2023) function.
	
	2. If Visual FoxPro is running, close it and then restart it.
	
	3. Start the Form Wizard, choose a table, and accept all the defaults in each
	  step.
	
	4. When you reach step 4, click Finish.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbvfp kbvfp500 kbvfp500a kbvfp600 kbvfp600bug kbvfp600fix kbGrpDSFox kbDSupport kbvfp500xSearch kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
