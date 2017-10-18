---
layout: page
title: "Q192621: DOC: CUSTOMWZ Sample Is Actually Custom AppWizard Code"
permalink: kb/192/Q192621/
---

## Q192621: DOC: CUSTOMWZ Sample Is Actually Custom AppWizard Code

	Article: Q192621
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDocs kbVC500bug kbVC600bug kbAppWizard kbCustomWizard kbGrpDSTools kbNoUpdat
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the CUSTOMWZ sample distributed with Visual C++ contains
	the following inaccurate statement:
	
	  CUSTOMWZ is an example of a custom AppWizard, which contains features that
	  the standard AppWizard does not provide.
	
	Rather than being merely an example, CUSTOMWZ is the actual source code for the
	Custom AppWizard project wizard.
	
	MORE INFORMATION
	================
	
	Building the CUSTOMWZ sample creates an AppWizard functionally identical to the
	Custom AppWizard project wizard. This wizard appears in the New dialog box's
	Projects tab after clicking New on the File menu. The CUSTOMWZ sample from the
	Visual C++ 5 documentation samples contains a bug which will overwrite the
	standard Custom AppWizard code. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q192108 FIX: CUSTOMWZ Sample Partially Overwrites Custom AppWizard Code
	
	REFERENCES
	==========
	
	"CUSTOMWZ: A Custom AppWizard", from the online books at Visual C++
	Documentation, Samples, Custom AppWizard Samples.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDocs kbVC500bug kbVC600bug kbAppWizard kbCustomWizard kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
