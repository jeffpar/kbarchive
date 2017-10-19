---
layout: page
title: "Q168040: BUG: Insert Object from File Dialog Box Shows Hidden Files"
permalink: /kb/168/Q168040/
---

## Q168040: BUG: Insert Object from File Dialog Box Shows Hidden Files

	Article: Q168040
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp kbvfp300bBUGkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hidden files appear in the Insert Object dialog box when you attempt to insert
	an OLE object from a file into a general field or OLE Container Control. When
	viewing files to insert on the hard drive of the Macintosh, hidden files such as
	Desktop, Desktop DB, Desktop DF, and Move&Rename appear in the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open or create a table with a general field.
	
	2. Double-click on the general field to open it.
	
	3. Select Insert Object from the Edit menu.
	
	4. Choose From File in the dialog box.
	
	5. Move to the hard drive folder of the Macintosh.
	
	6. Hidden Macintosh files such as Desktop, Desktop DB, and Desktop DF show in
	  the list of files available to insert.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp kbvfp300bBUG kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbbug
	
	=============================================================================
	
