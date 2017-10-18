---
layout: page
title: "Q140361: FIX: Comment_Template Setting Does Not Work in Srcsafe.ini File"
permalink: kb/140/Q140361/
---

## Q140361: FIX: Comment_Template Setting Does Not Work in Srcsafe.ini File

	Article: Q140361
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
	
	Visual SourceSafe ignores any Comment_Template setting that is placed under any
	section header in the Srcsafe.ini file. This functionality was available in
	SourceSafe 3.1.
	
	RESOLUTION
	==========
	
	Place any Comment_Template setting above section headers. Only one comment
	template can be used in the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual SourceSafe 5.0.
	
	REFERENCES
	==========
	
	Microsoft Visual SourceSafe Help file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
