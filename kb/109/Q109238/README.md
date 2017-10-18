---
layout: page
title: "Q109238: PRB: In Filer, Can't Move to Higher Folder in Hierarchy"
permalink: kb/109/Q109238/
---

## Q109238: PRB: In Filer, Can't Move to Higher Folder in Hierarchy

	Article: Q109238
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Filer will not allow you to move to a higher level in the folder hierarchy.
	
	CAUSE
	=====
	
	A VOLUME command is set to the default folder, the contents of which are
	displayed in the Filer window.
	
	RESOLUTION
	==========
	
	1. Switch to the Command window by pressing COMMAND+F2, and issue the following
	  command:
	
	  " SET VOLUME <drive letter> TO" (without the quotation marks)
	
	2. Switch back to Filer. Attempt to move up to the folder in which FoxPro is
	  contained. Note that you can still can't move to a folder above the current
	  folder since Filer still thinks the volume label representing the current
	  folder still exists.
	
	3. Move down to a subfolder, such as Wizards. This forces Filer to update the
	  Directories popup. Open the Directories popup. You can now view all the
	  folders above the current folder up to and including the root of the folder
	  structure.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue the following commands in the Command window. Replace the path to the
	  Microsoft FoxPro for Macintosh folder if necessary.
	
	  SET VOLUME f TO fox:\foxpro
	  SET DEFAULT TO fox:\foxpro
	
	2. Open Filer. The contents of the fox:\foxpro folder are displayed. Note that
	  the volume displayed is "f:".
	
	3. Try to move to the root folder by clicking the Directory popup, or Folder
	  popup in Visual FoxPro for Macintosh, in this case "fox:\". Note that you are
	  unable to change folder levels.
	
	Additional query words: vFoxMac FoxMac ascend pop-up
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
