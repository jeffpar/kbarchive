---
layout: page
title: "Q186316: ODE97: ODE License Information Missing in ODE About Box"
permalink: /kb/186/Q186316/
---

## Q186316: ODE97: ODE License Information Missing in ODE About Box

	Article: Q186316
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you open the About Microsoft ODE Tools dialog box, information that
	includes the Product ID number as well as the name and organization to which the
	product is licensed has disappeared.
	
	CAUSE
	=====
	
	You have installed the Microsoft Office 97 Developer Edition Service Pack 2
	(ODESP2).
	
	RESOLUTION
	==========
	
	Follow these steps to reset the information that appears under "This product is
	licensed to" in the About box:
	
	1. Insert the Microsoft Office 97 Developer Edition compact disk into your
	  CD-ROM drive.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type
	
	  "<CD-ROM Drive>:\odetools\setup /y" (without the quotation marks)
	
	  where <CD-ROM Drive> is the drive letter for your CD-ROM drive. For
	  example, if your CD-ROM drive letter is D, type:
	
	  "D:\odetools\setup /y" (without the quotation marks)
	
	  Click OK.
	
	4. In the Installation Maintenance dialog box, click Reinstall.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 Developer
	Edition Tools.
	
	Additional query words: missing gone not there
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
