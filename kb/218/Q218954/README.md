---
layout: page
title: "Q218954: Expedia Err Msg: No Matching Places Were Found"
permalink: /kb/218/Q218954/
---

## Q218954: Expedia Err Msg: No Matching Places Were Found

	Article: Q218954
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbui kbimu
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets 98 
	- Microsoft Expedia Trip Planner 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you search for hotels or restaurants in Microsoft Expedia Streets 98 or
	Microsoft Expedia Trip Planner 98, you may receive the following error message:
	
	  No matching places were found.
	
	If you click OK, you continue to receive this error message in any region in
	which you search.
	
	CAUSE
	=====
	
	This behavior can occur if the Mvbk20n.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Quit all programs running on your computer.
	
	2. Insert the Expedia CD-ROM into your CD-ROM drive. Press and hold down the
	  SHIFT key when you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	3. Click Start, point to Find, and then click Files Or Folders.
	
	4. In the Named box, type "mvbk20n.dll" (without the quotation marks).
	
	5. In the Look In box, click My Computer, and then click Find Now.
	
	  NOTE: Make sure the Include Subfolders check box is selected.
	
	6. In the list of found files, right-click the Mvbk20n.dll file located in the
	  <drive>:\Windows\System folder, where <drive> is the drive letter
	  of the hard disk on which Microsoft Windows is installed, and then click
	  Rename.
	
	7. Type "mvbk20n.old" (without the quotation marks), and then press ENTER.
	
	8. Close the Find: Files Named Mvbk20n.dll window.
	
	9. Double-click the My Computer icon on the desktop.
	
	10. Right-click the CD-ROM drive containing the Expedia CD-ROM, and then click
	  Explore.
	
	11. Double-click the Acmsetup folder.
	
	12. Double-click the Automap folder.
	
	13. Double-click the System folder.
	
	14. In the right pane of the window, right-click the Mvbk20n.dll file, and then
	  click Copy.
	
	15. Close the Exploring - System window.
	
	16. Double-click the hard disk on which Windows is installed.
	
	17. Double-click the folder in which Windows is installed, and then double-click
	  the System folder.
	
	18. On the Edit menu, click Paste.
	
	19. If you are prompted to overwrite an existing file, click Yes.
	
	20. Close all open windows on the desktop.
	
	Additional query words: multi multi-media media mm auto-map amap
	
	======================================================================
	Keywords          : kbenv kberrmsg kbui kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
