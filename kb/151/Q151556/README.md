---
layout: page
title: "Q151556: FP: Frame Wizard Erases Existing Content of Frame Set"
permalink: /kb/151/Q151556/
---

## Q151556: FP: Frame Wizard Erases Existing Content of Frame Set

	Article: Q151556
	Product(s): Word Front Page
	Version(s): windows:1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Frames Wizard to edit a frame set master page that has existing
	content, the Frames Wizard will overwrite the file, replacing the data from the
	original page with a new Frames Wizard master page.
	
	CAUSE
	=====
	
	Each time the Frames Wizard is used to edit frames in a page, it retrieves only
	the frame set tags and (if an alternate page has been specified previously in
	the Frames Wizard) the WebBot Include component that contains the reference to
	the alternate page.
	
	These frame set tags and the WebBot Include component contain the sizes, names,
	and URL references of the frames. Any other data in the file is ignored. When
	the Frames Wizard saves the page, it creates a new file with the newly modified
	frame data and saves it over the old file, replacing any data that previously
	existed.
	
	WORKAROUND
	==========
	
	If you need a page for browsers that do not support frames, specify an alternate
	page in the Frames Wizard and edit the alternate page instead of using the frame
	set master page.
	
	MORE INFORMATION
	================
	
	If an alternate page is specified, the Frames Wizard uses a WebBot Include
	component to insert the alternate page in the appropriate .htm file in the
	/_vti_shm folder. The corresponding .htm file in the root Web directory is
	updated with the actual contents of the alternate page.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
