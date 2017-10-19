---
layout: page
title: "Q138874: FIX: Visual FoxPro Apps Branded w/ &quot;Engineering Prototype&quot;"
permalink: /kb/138/Q138874/
---

## Q138874: FIX: Visual FoxPro Apps Branded w/ &quot;Engineering Prototype&quot;

	Article: Q138874
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Visual FoxPro executable program (.exe file) and click About
	Visual FoxPro on the Help menu, the box displays "Engineering Prototype" under
	the organization name. It should display "Runtime Support Library." This does
	not occur in the Visual FoxPro development environment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new project, and add a program that contains this code:
	
	     @ 1,1 GET mvar1 DEFA 1
	     READ CYCLE
	
	2. Save the Project, and build an executable file.
	
	3. Once the .exe file is built, quit Visual FoxPro.
	
	4. Run the .exe file.
	
	5. On the Help menu, click About Microsoft Visual FoxPro. The About box
	  displays:
	
	  <Your Organzation> (Engineering Prototype) Product ID: XXXXXXXXXXXXXXXX
	
	Additional query words: fixlist3.00b buglist3.00 VFoxWin
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
