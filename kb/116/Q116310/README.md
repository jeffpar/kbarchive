---
layout: page
title: "Q116310: FIX: Open Listing File in IDE Is Not Reloaded After Compile"
permalink: /kb/116/Q116310/
---

## Q116310: FIX: Open Listing File in IDE Is Not Reloaded After Compile

{% raw %}

	Article: Q116310
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the compiler option /Fc, /Fl, or /Fa to create an assembly listing
	file (either .COD or .ASM), and that listing file is open when you are building
	an application, you will be informed that the listing file has changed and you
	will be prompted to reload the file. However, if a file related to the currently
	open list file is compiled without using the /Fc, /Fl, or /Fa option, the prompt
	to reload the listing file will not be issued unless you set the focus to
	another application other than Visual C++ and then return back to Visual C++;
	the listing file shown in the Visual Workbench would then not be up to date with
	its corresponding source code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	MORE INFORMATION
	================
	
	To reproduce this problem, do the following:
	
	1. Load the file GENERIC.MAK into the Visual Workbench.
	
	2. Choose Project from the Options menu, then choose the Compiler option.
	
	3. From the Compiler Options dialog box, choose the "Listing Files" category.
	  Check the "Assembly" check box.
	
	4. Choose OK to save the options, then choose OK again to get back into the
	  Visual Workbench editor.
	
	5. Build the project.
	
	6. Open the listing file GENERIC.ASM.
	
	7. Change GENERIC.C by putting an extra space in a comment area.
	
	8. Compile GENERIC.C only. (The Visual Workbench will not notify you that the
	  listing file has changed.)
	
	Additional query words: 1.00 1.50 1.10
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
