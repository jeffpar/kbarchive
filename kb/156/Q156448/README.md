---
layout: page
title: "Q156448: INFO: Some Files and Projects are Upper Case after Upgrade"
permalink: /kb/156/Q156448/
---

## Q156448: INFO: Some Files and Projects are Upper Case after Upgrade

	Article: Q156448
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbSSafe400
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade from SourceSafe 3.x to Visual SourceSafe 4.0, all of the 8.3
	files that were in mixed case are now in upper case. The case of long file names
	are preserved.
	
	MORE INFORMATION
	================
	
	If you noticed this change right after the upgrade, then running the 32-bit
	Ddconv.exe utility dated 1/9/96 or later may resolve the problem. The Ddconv.exe
	utility is available from most Microsoft download sites. It is included with the
	Analyze.exe utility.
	
	If you noticed this change some time after the upgrade, the newer Ddconv.exe may
	or may not work. If it does not work, the only option is to rename the files in
	Visual SourceSafe. To do this, access the File Menu and choose the Rename...
	option.
	
	REFERENCES
	==========
	
	The analyze utility can be obtained with directions in the following Microsoft
	Knowledge Base article:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a
	Issue type        : kbinfo
	
	=============================================================================
	
