---
layout: page
title: "Q244019: HOWTO: How to Retrieve Deleted Files in Visual SourceSafe"
permalink: /kb/244/Q244019/
---

## Q244019: HOWTO: How to Retrieve Deleted Files in Visual SourceSafe

{% raw %}

	Article: Q244019
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ kbSsafe500FAQkb
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to retrieve files in Visual SourceSafe that have been
	deleted but not destroyed.
	
	MORE INFORMATION
	================
	
	When you delete a file from a project in Visual SourceSafe, a dialog box appears
	that gives you the option of either deleting the file or destroying it
	permanently.
	
	If you choose to merely delete the file, the file will be removed from the view
	in the SourceSafe explorer, but the file and all of its history will still exist
	in the SourceSafe database. This gives you the option of recovering the file at
	a later time.
	
	If you elect to destroy a file, the file will not only be removed from the
	SourceSafe explorer view, but it will be gone from the SourceSafe database as
	well. A file that has been destroyed cannot be recovered.
	
	Steps to Retrieve Deleted (Not Destroyed) Files in the Visual SourceSafe Explorer
	---------------------------------------------------------------------------------
	
	1. In the Visual SourceSafe Explorer, select the project folder that contained
	  the deleted file.
	
	2. Click Show Properties, and then select the Deleted Items tab.
	
	3. Select the deleted files and click Recover.
	
	To Retrieve Deleted (Not Destroyed) Files from the Command Line
	---------------------------------------------------------------
	
	- Use the SS RECOVER command on the parent project of the deleted file.
	
	  For example, this command will recover files that were deleted from the
	  $/MyProj project:
	
	  "SS RECOVER $/MyProj/*.*" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSsafe600FAQ kbSsafe500FAQ kbfaq
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
