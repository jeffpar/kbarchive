---
layout: page
title: "Q142092: BUG: Report to File &quot;Access to File Denied&quot; Error Message"
permalink: /kb/142/Q142092/
---

## Q142092: BUG: Report to File &quot;Access to File Denied&quot; Error Message

{% raw %}

	Article: Q142092
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbenv kbSSafe kbSSafe400bug kbDSupport kbBug kbISSkbbuglist
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "Access to File {path\filename} Denied" error message occurs when an
	historical report is sent to a to a file under Windows 3.x. This occurs only on
	a 16-bit operating system with the 16-bit version of SourceSafe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the \Win\Ssexp.exe program under Windows 3.x. This is 16-bit Source Safe
	  and a 16-bit operation system.
	
	2. Show History of a file.
	
	3. Click the Report button, and send the report to File.
	
	4. Verify that the report name does not exist in the directory to which the file
	  is being sent.
	
	5. Click OK. The error message will appear.
	
	If a file needs to be created, send the results of the report to the clipboard,
	open an editor, and paste the contents of the clipboard into the editor.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbenv kbSSafe kbSSafe400bug kbDSupport kbBug kbISS kbbuglist
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
