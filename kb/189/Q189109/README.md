---
layout: page
title: "Q189109: BUG: Printing 'Find in Files' Adds alt-0176 After File Name"
permalink: /kb/189/Q189109/
---

## Q189109: BUG: Printing 'Find in Files' Adds alt-0176 After File Name

{% raw %}

	Article: Q189109
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The printed report produced from a 'Find in Files' operation has the alt- 0176
	character (checker board) mistakenly printed after the file name on the report.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Launch Microsoft Visual SourceSafe.
	
	2. Select a file.
	
	3. From the Tools menu, choose Find in Files.
	
	4. Enter the search string.
	
	  This opens the Find in Files Results dialog box.
	
	5. Click the Report button.
	
	6. Select the Printer option button under "Report to:".
	
	7. Click OK.
	
	RESULT: Alt-0176 is added after the file name in the print out.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
