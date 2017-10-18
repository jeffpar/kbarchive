---
layout: page
title: "Q155783: FIX: Share Dialog Box Appears Unexpectedly"
permalink: kb/155/Q155783/
---

## Q155783: FIX: Share Dialog Box Appears Unexpectedly

	Article: Q155783
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to expand a project tree in Visual SourceSafe's Explorer window,
	the Share dialog box may unexpectedly appear. This problem occurs under the
	following circumstances:
	
	- You are using Microsoft Windows 95 Operating System.
	
	- The Project you are trying to expand contains one or more subprojects and at
	  least 209 files.
	
	- The Visual SourceSafe Explorer was last closed with one of the 209 files
	  mentioned above having the focus.
	
	- The Visual SourceSafe Explorer was last closed with the project containing
	  the 209 files mentioned above in its open but unexpanded view. For example,
	  its glyph is an open folder with a '+' sign to its left.
	
	WORKAROUND
	==========
	
	Click the Cancel Command button to close the unwanted Share dialog box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual SourceSafe
	5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to Microsoft Visual SourceSafe versions 4.0 or 4.0a running on
	  Windows 95.
	
	2. Using the Explorer window, create a project under the root project ($/)
	  called "SOURCESAFEROCKS." Add 209 files and one additional subproject to the
	  project.
	
	3. Open the project in its unexpanded view by clicking its glyph so that the
	  glyph is an open folder with a plus sign next to it. The right partition
	  should now display the 209 files and subproject. Highlight any file in the
	  right partition by clicking it once.
	
	4. Close and then restart Visual SourceSafe. When the Explorer window reopens,
	  click the glyph described in step 3. Note that the Share dialog box appears.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
