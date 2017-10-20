---
layout: page
title: "Q234833: MOD2000: UNDONE in Title After Showing Differences in VSS Add-in"
permalink: /kb/234/Q234833/
---

## Q234833: MOD2000: UNDONE in Title After Showing Differences in VSS Add-in

{% raw %}

	Article: Q234833
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
	
	When you show the differences between two file versions that are identical, the
	message window has the word "UNDONE" in the title even though nothing is being
	undone.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and save a new workbook in Excel.
	
	2. Press ALT+F11 to open the Visual Basic Editor.
	
	3. Use the Add-in Manager to load the VBA Source Code Control add-in if it is
	  not already loaded.
	
	4. On the Add-ins menu, point to VBA Source Code Control, and then click Add
	  Project to SourceSafe.
	
	5. If prompted, provide a valid user name and password. Add all the files to
	  Visual SourceSafe control.
	
	6. Select Sheet1. On the Add-ins menu, point to VBA Source Code Control, and
	  then click Show Differences.
	
	Note that the message window has the word "UNDONE" in the title even though
	nothing is being undone.
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kbdta modSSafe 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbOffice2000DevSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
