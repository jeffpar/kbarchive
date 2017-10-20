---
layout: page
title: "Q131094: Gray State Check Boxes in SourceSafe"
permalink: /kb/131/Q131094/
---

## Q131094: Gray State Check Boxes in SourceSafe

{% raw %}

	Article: Q131094
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:3.04,3.1; winnt:3.04,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some SourceSafe check boxes display a gray state; that is, the check box is
	neither selected (checked) nor cleared (empty). This state indicates that the
	default should be taken from the .INI file.
	
	For example, if the 'Keep Checked Out' check box in the Update dialog box appears
	gray, the .INI file setting determines the behavior. If the .INI file setting is
	"Keep_Checkedout = Yes," it behaves as if the 'Keep Checked Out' check box is
	selected. If the setting is "Keep_Checkedout = No," the files are not kept
	checked out after the update.
	
	Additional query words: 3.10 grey
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe310 kbSSafe304NT kbSSafe310NT
	Version           : WINDOWS:3.04,3.1; winnt:3.04,3.1
	
	=============================================================================
	

{% endraw %}
