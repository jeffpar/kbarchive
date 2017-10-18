---
layout: page
title: "Q142990: Cannot Connect to MSN After Installing Canon BubbleJet"
permalink: kb/142/Q142990/
---

## Q142990: Cannot Connect to MSN After Installing Canon BubbleJet

	Article: Q142990
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbmsn
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Canon BubbleJet 4000 color printer, the following behavior
	may occur when you attempt to connect to MSN, The Microsoft Network:
	
	- The Canon On-line Guide may open.
	
	- You may receive a "Select Visual Guide File" error message, prompting you to
	  select a program to associate with this file type.
	
	- A Select File dialog box may open on the screen, prompting you to select a
	  Visual Guide (.olg) file.
	
	This behavior may also occur the first time you install or attempt to connect to
	MSN if you have previously installed a Canon BubbleJet 4000 printer on your
	system.
	
	
	CAUSE
	=====
	
	The Canon Setup program places a file named Guide.exe in the Windows\ System
	folder. This file interferes with MSN's Guide.exe file located in the Program
	Files\The Microsoft Network folder.
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps:
	
	1. Use Windows Explorer or My Computer to move the Guide.exe and Guide.msg files
	  from the Windows\System folder to the BJC-4000 folder. After you move the
	  files, they should no longer exist in the Windows\System folder.
	
	2. Use the right mouse button to click the Start button, and then click Explore
	  on the menu that appears.
	
	3. Double-click the Programs folder, and then double-click the BJC-4000 folder.
	
	4. Use the right mouse button to click the BJC-4000 On-line Guide shortcut, and
	  then click Properties on the menu that appears.
	
	5. On the Shortcut tab, change the entry in the Target box to refer to the
	  BJC-4000 folder instead of the Windows\System folder.
	
	6. Change the entry in the Start In box to refer to the BJC-4000 folder instead
	  of the Windows\System folder.
	
	7. Click Apply, and then click OK.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
