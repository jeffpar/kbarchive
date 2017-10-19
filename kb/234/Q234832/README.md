---
layout: page
title: "Q234832: MOD2000: Inconsistent Menu Behavior Using Check Out from VBA"
permalink: /kb/234/Q234832/
---

## Q234832: MOD2000: Inconsistent Menu Behavior Using Check Out from VBA

	Article: Q234832
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta modSSafe
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to check out an object that is under source code control, you
	receive the "Check Out Files from SourceSafe" dialog box. When you try to check
	out an object that is not under source code control, nothing happens.
	
	CAUSE
	=====
	
	To receive a dialog box when you try to check out an object, the object must be
	under source code control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Excel, and create a new workbook that contains three sheets.
	
	2. Press ALT+F11 to open the Visual Basic Editor, and add Sheet1 and Sheet2 to
	  Visual SourceSafe (VSS). Do not add Sheet3.
	
	3. Select Sheet1, point to VBA Source Code Control on the Add-ins menu, and then
	  click Check Out. Note that you receive a dialog box that prompts you to check
	  out sheets 1 and 2.
	
	4. Click Cancel.
	
	5. Select Sheet3, point to VBA Source Code Control on the Add-ins menu, and then
	  click Check Out. Note that nothing happens.
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kbdta modSSafe 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbOffice2000DevSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
