---
layout: page
title: "Q147662: Err Msg: DRVSPACE130 Your Computer Does Not Have Any..."
permalink: /kb/147/Q147662/
---

## Q147662: Err Msg: DRVSPACE130 Your Computer Does Not Have Any...

	Article: Q147662
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to uncompress a drive with DriveSpace within Windows 95, you may
	receive the following error message:
	
	  Your computer does not have any compressed drives that can be uncompressed.
	
	  ID Number: DRVSPACE130
	
	CAUSE
	=====
	
	This error message can occur if you run DriveSpace with the following command:
	
	  drvspace /interactive /uncompress
	
	RESOLUTION
	==========
	
	To work around this problem, either specify a drive on the command line or start
	DriveSpace from the Start menu to perform this operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The /interactive switch causes DriveSpace to prompt you for any missing
	parameters.
	
	REFERENCES
	==========
	
	For additional information about DriveSpace command-line switches, see pages
	1124-1134 of the Microsoft Windows 95 Resource Kit.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
