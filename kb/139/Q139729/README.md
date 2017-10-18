---
layout: page
title: "Q139729: FIX: Visual SourceSafe Cannot Associate File That Has 2 Periods"
permalink: kb/139/Q139729/
---

## Q139729: FIX: Visual SourceSafe Cannot Associate File That Has 2 Periods

	Article: Q139729
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the error "No application associated with this file type" when
	trying to view a file that contains more than one period in the file name.
	
	CAUSE
	=====
	
	Visual SourceSafe parses the file name from left to right. This means that a
	file called My.file.doc is parsed so that the extension appears to be .file.doc
	and there is no association for this file.
	
	RESOLUTION
	==========
	
	Rename the file from My.file.doc to My_file.doc in the Visual SourceSafe
	Explorer (on the File menu, click Rename).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual SourceSafe 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Rename a file that is associated with an application so that the file name
	  contains more than one period.
	
	2. Add the file to Visual SourceSafe.
	
	3. Double-click the file from the Visual SourceSafe Explorer. At this point, The
	  error message "No application associated with this file type" appears.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
