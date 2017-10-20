---
layout: page
title: "Q234826: MOD2000: Source Code Control Check Out Status Tab Is Blank"
permalink: /kb/234/Q234826/
---

## Q234826: MOD2000: Source Code Control Check Out Status Tab Is Blank

{% raw %}

	Article: Q234826
	Product(s): Microsoft SourceSafe
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbdta modSSafe
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you check out an object from Source Code Control and view the Check Out
	Status tab in the VBAProject Project Properties dialog box, the window is blank.
	
	RESOLUTION
	==========
	
	You can use the SCC Status window to see if an item is or is not checked out. If
	the SCC Status window is not visible, on the Add-ins menu, point to VBA Source
	Code Control, and then click Refresh File Status.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new workbook in Microsoft Excel and open the Visual Basic Editor
	  (press ALT+F11).
	
	2. Save the project.
	
	3. On the Add-ins menu, point to VBA Source Code Control, and then click Add
	  Project to SourceSafe.
	
	4. On the Add-ins menu, point to VBA Source Code Control, and then click Check
	  Out.
	
	5. On the Add-ins menu, point to VBA Source Code Control, and then click
	  SourceSafe Properties.
	
	6. Click the Check Out Status tab in the VBAProject Project Properties dialog
	  box. Note that the Check Out Status tab is blank.
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kbdta modSSafe 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbOffice2000DevSearch
	Version           : :2000
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
