---
layout: page
title: "Q230754: Zone Error Message: Failed to Extract File..."
permalink: kb/230/Q230754/
---

## Q230754: Zone Error Message: Failed to Extract File...

	Article: Q230754
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup igz kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Zone.com is downloading new software, you may receive the following error
	message:
	
	  Failed to extract file C:\PROGRA~1\MICROS~9\TEMP\<filename>
	
	where <filename> is the name of an Zone.com file.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- The Zone.zat or Zextract.exe files are damaged or outdated.
	
	- The file referred to in the error message is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented. If the issue continues to occur, proceed to the next method.
	
	Remove and Reinstall the Zone.zat and Zextract.exe Files
	--------------------------------------------------------
	
	To remove and reinstall the Zone.zat and Zextract.exe files, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "zone.za? zextract.exe" (without the quotation marks).
	
	3. In the Look In box, click My Computer, and then click Find Now.
	
	4. On the Edit menu, click Select All.
	
	5. On the File menu, click Delete. When you are prompted to confirm the multiple
	  file deletion, click Yes.
	
	  NOTE: By default, these files are located in the following folder:
	
	  C:\Program Files\Zone.com
	
	6. Close the Find: Files Named Zone.za? Zextract.exe window.
	
	7. To reinstall the Zone.zat and Zextract.exe files, connect to the following
	  Zone Web site:
	
	  http://zone.msn.com
	
	The missing files are installed automatically the next time you connect to a game
	room.
	
	Remove and Reinstall the File Named in the Error Message
	--------------------------------------------------------
	
	To remove and reinstall the file named in the error message, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type the file named in the error message, replacing the
	  last letter of the three character file extension with a QUESTION MARK (?).
	
	  For example, if "Zone.ex_" is the file named in the error message, type
	  "zone.ex?" (without the quotation marks) in the Named box.
	
	3. In the Look In box, click My Computer, and then click Find Now.
	
	4. On the Edit menu, click Select All.
	
	5. On the File menu, click Delete. When you are prompted to confirm the file
	  deletion, click Yes.
	
	6. Close the Find: Files Named... window.
	
	7. To reinstall the file, connect to the following Zone Web site:
	
	  http://zone.msn.com
	
	The missing files are installed automatically the next time you connect to a game
	room.
	
	Additional query words: msgame igz msngz downloads decompress expand
	
	======================================================================
	Keywords          : kberrmsg kbsetup igz kbimu msgame kbfaq
	Technology        : kbGamesSearch kbMSNSearch kbZone
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
