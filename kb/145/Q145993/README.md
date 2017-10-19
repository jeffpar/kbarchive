---
layout: page
title: "Q145993: BUG: Crystal Reports AppWizard Disables Multi-Language Support"
permalink: /kb/145/Q145993/
---

## Q145993: BUG: Crystal Reports AppWizard Disables Multi-Language Support

	Article: Q145993
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC400bug kbVC410bug kbVC420bug kbGrpDSTools
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Step One of the MFC AppWizard, it is possible to select the language of the
	resources (English, French, German, Italian, Spanish). However, if you select
	the Crystal Reports AppWizard and then select MFC AppWizard, it disables
	multi-language resource options for MFC AppWizard in Step One.
	
	
	RESOLUTION
	==========
	
	Exit MSDEV, and run it again. If you create a new workspace using MFC AppWizard,
	you will see English as well as the other language choice resources in Step One.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install Crystal Reports from Visual C++ 4.0 or 4.1 CD-ROM compact disc.
	
	2. Load MSDEV.
	
	3. On the File menu, click New, and select the Project Workspace.
	
	4. Click Crystal Reports AppWizard in the Type box. (For this step, you do not
	  need to run the wizard.)
	
	5. Select MFC AppWizard (exe), and click Create. Notice that the language box
	  shows only a single choice, English. The other four lnguage choices are not
	  present.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 Crystal Reports AppWizard
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC400bug kbVC410bug kbVC420bug kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	
	=============================================================================
	
