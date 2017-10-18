---
layout: page
title: "Q285320: MechWarrior 4 Err Msg: STOP: Cannot Create 'Resource&#92;Variants..."
permalink: kb/285/Q285320/
---

## Q285320: MechWarrior 4 Err Msg: STOP: Cannot Create 'Resource&#92;Variants...

	Article: Q285320
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save a Variant in the Mech Lab, you may receive the
	following error message:
	
	  STOP: Cannot create 'Resource\Variants\<filename>.mw4'
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- The <filename>.mw4 file has the read-only attribute set.
	
	- The <filename>.mw4 file is damaged.
	
	The <filename> is the name of the variant file that you are attempting to
	save.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. In Microsoft Windows 95 or Microsoft Windows 98, click Start, point to Find,
	  and then click "Files or Folders".
	
	  In Microsoft Windows Millennium Edition (Me) or Microsoft Windows 2000, click
	  Start, point to Search, and then click "For Files or Folders".
	
	2. In the Named or "Search for files and folders named" box, type
	  "<filename>.mw4" (without the quotation marks), where <filename>
	  is the name of the variant file that you want to save.
	
	3. In the "Look in" box, click My Computer.
	
	4. Click Find Now or Search Now.
	
	5. Right-click the file in the found files list, and then click Properties.
	
	6. Click to clear the Read Only check box.
	
	7. Click OK.
	
	Test to see if the issue continues to occur.
	
	If the issue continues to occur:
	
	1. Right-click the file in the found files list, and then click Delete.
	
	2. Click OK.
	
	3. Close all of the windows on the desktop.
	
	NOTE: If you received the file from a third-party, download the file again, and
	then install the file.
	
	Additional query words: msgame mech4 mech warrior mw4
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
