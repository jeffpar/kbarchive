---
layout: page
title: "Q93330: PRB: Problems with Using a Graphic Image in an .FRX File"
permalink: /kb/093/Q93330/
---

## Q93330: PRB: Problems with Using a Graphic Image in an .FRX File

	Article: Q93330
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the user pastes an image from the Clipboard into a report form,
	FoxBASE+/Mac writes the image into the FOXUSER file or into the current resource
	file for the open .FRX file. If the .FRX file is transferred to another computer
	and run, a gray box appears where the image belongs.
	
	RESOLUTION
	==========
	
	To correct this problem, distribute the resource file with the .FRX file.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy an image to the Clipboard.
	
	2. Open a new report form.
	
	3. Paste the image into the .FRX file.
	
	4. Save the .FRX file.
	
	5. Copy the file to a floppy disk.
	
	6. Open the file in FoxBASE+/Mac on another computer.
	
	7. Request a page preview.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
