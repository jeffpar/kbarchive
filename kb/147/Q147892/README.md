---
layout: page
title: "Q147892: FIX: Custom AppWizard Doesn't Support Multiple Languages"
permalink: /kb/147/Q147892/
---

## Q147892: FIX: Custom AppWizard Doesn't Support Multiple Languages

{% raw %}

	Article: Q147892
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By default, when you create a custom AppWizard using the Standard AppWizard
	Steps in the Custom AppWizard, the German, English, Spanish, French, Italian
	language support is selected. If you leave the default, five .rc files will be
	generated (loc_XXX.rc) for each language along with several sets of RTF files.
	However, all of these files will be in Italian instead of their respective
	languages.
	
	As a result of selecting more than one language in the list box in Custom
	AppWizard, all resource files will be created in the bottom-most selected
	language.
	
	RESOLUTION
	==========
	
	Select only one language in the list box in Step 2 of the Custom AppWizard. If
	more than one language is needed, run AppWizard multiple times, once for each
	language.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Error
	------------------------
	
	1. On the "File" (without the quotation marks) menu, click "New" (without the
	  quotation marks), and then click "Project Workspace" (without the quotation
	  marks).
	
	2. Click "Custom AppWizard" (without the quotation marks), and select "Standard
	  AppWizard Steps" (without the quotation marks). Leave all other defaults as
	  is.
	
	3. Click "Finish" (without the quotation marks), and then click "OK" (without
	  the quotation marks).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500fix kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
