---
layout: page
title: "Q192108: FIX: CUSTOMWZ Sample Partially Overwrites Custom AppWizard Code"
permalink: /kb/192/Q192108/
---

## Q192108: FIX: CUSTOMWZ Sample Partially Overwrites Custom AppWizard Code

{% raw %}

	Article: Q192108
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbwizard kbDocs kbVC500bug kbVC600fix kbAppWizard kbCustomWizard kbGrpDSTools
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building the CUSTOMWZ sample distributed with Visual C++ version 5.0 overwrites
	the Custom AppWizard project wizard. If you modify the CUSTOMWZ sample and build
	it, you lose the standard Custom AppWizard functionality.
	
	CAUSE
	=====
	
	Custom AppWizards normally contain a project build step that copies the new
	wizard file to the <DevStudio path>\Template directory.
	
	The CUSTOMWZ sample is the actual source code for the Custom AppWizard project
	wizard. The CUSTOMWZ project's custom build step copies the resulting output
	file to <DevStudio path>\SharedIDE\bin\ide rather than to the Template
	directory. However, the Help file, which has its own custom build rule, is
	copied to the Template directory where a wizard project would normally go.
	
	RESOLUTION
	==========
	
	In the downloaded CUSTOMWZ project, change the project custom build rule to
	point to the Template directory:
	
	1. On the Project menu, click Settings.
	
	2. In the Settings For list box, select "All Configurations".
	
	3. Click on the Custom Build tab.
	
	4. Replace the three occurrences of $(MSDEVDIR)\bin\ide to $(MSDEVDIR)\Template.
	  Two occurrences appear in Build command(s) and one in Output file(s).
	
	5. Click OK to save the settings.
	
	6. On the File menu, click Save All to save the changed settings.
	
	Additionally, you may wish to change the project's version resource ProductName
	and FileDescription fields to "Custom AppWizard Sample," to avoid confusing it
	with the standard Custom AppWizard. Otherwise, both have the same name and can
	be difficult to distinguish in the New Projects list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in the CUSTOMWZ sample
	released with Visual C++ version 6.0.
	
	MORE INFORMATION
	================
	
	Creating a Custom AppWizard is supported only in Visual C++ Professional and
	Enterprise Editions. The CUSTOMWZ sample illustrates how to construct a generic
	AppWizard that you can modify to suit your specific needs.
	
	Restoring the Standard Custom AppWizard
	---------------------------------------
	
	If you successfully build the CUSTOMWZ sample supplied with Visual C++ version
	5.0 before applying the resolution above, the sample file replaces the standard
	Custom AppWizard file in <DevStudio path>\SharedIde\bin\ide and named
	Customwz.awx. Additionally, the sample's Help file appears in <DevStudio
	path>\Template. Follow these steps to restore the original file:
	
	1. Copy Customwz.awx from DevStudio\SharedIde\bin\ide on the install disc to
	  <DevStudio path>\SharedIde\bin\ide on your computer.
	
	2. Delete Customwz.hlp from <DevStudio path>\Template on your computer.
	
	REFERENCES
	==========
	
	Visual C++ Documentation: Samples; Custom AppWizard Samples; CUSTOMWZ: A Custom
	AppWizard
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDocs kbVC500bug kbVC600fix kbAppWizard kbCustomWizard kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
