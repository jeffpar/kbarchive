---
layout: page
title: "Q156643: PRB: Company Name Does Not Appear in Version Dialog"
permalink: kb/156/Q156643/
---

## Q156643: PRB: Company Name Does Not Appear in Version Dialog

	Article: Q156643
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The company name typed in the Project Information dialog does not appear after
	choosing Company Name from the list box in the EXE Version dialog box.
	
	CAUSE
	=====
	
	These are two independent pieces of information. Visual FoxPro does not tie them
	together. The Project Information window provides a way to enter information
	about a project (.PJX) file and its contents. The EXE version dialog relates to
	the executable file. A developer may want to place different information in
	these two dialogs.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called Test that contains a Wait Window command.
	
	2. Create a project called Test and add the program Test to it.
	
	3. Click the Project menu pad and choose Project Info.
	
	4. In the Company field, type "Microsoft" (without the quotation marks) and
	  click the OK button.
	
	5. Choose Build from the Project Manager and click Version. In the Version
	  Information section, click Company Name in the list box. No company name
	  appears in the Value box.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
