---
layout: page
title: "Q241212: Japanese WV: Cannot Open File w/Name That Includes 0x5c in DBCS"
permalink: kb/241/Q241212/
---

## Q241212: Japanese WV: Cannot Open File w/Name That Includes 0x5c in DBCS

	Article: Q241212
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a file name includes 0x??5c in DBCS after space, the Word Viewer cannot
	open the file, and the following error message appears:
	
	  "The file name or path are not correct."
	  Do the next operation:
	  *Confirm that pass name is input correctly.
	  *Clicked [file] - [open] and please search file.
	  (' File pass' \a ?\.doc')
	
	NOTE: This problem occurs only in the Japanese Word Viewer.
	
	CAUSE
	=====
	
	The Word Viewer mishandles 0x5c in DBCS as '\'.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The Japanese version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size       File name     Platform
	  ----------------------------------------------------
	  8/27/99    7:40 AM  3,733,348  WordView.exe  x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
