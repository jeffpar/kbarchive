---
layout: page
title: "Q112210: PC Win: Check MMF Utility Repeatedly Asks to Check MMF"
permalink: /kb/112/Q112210/
---

## Q112210: PC Win: Check MMF Utility Repeatedly Asks to Check MMF

	Article: Q112210
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 3.0b and later of Microsoft Mail for Windows includes a built-in
	utility to check and rebuild Mail message files (MMFs). To start the utility,
	you hold down the SHIFT key when you start Mail. After a few seconds a dialog
	box appears that asks you to confirm your desire to check the integrity of your
	MMF file.
	
	If you continue to hold down the SHIFT key while you request the utility to check
	the MMF file (by selecting the Check File button), you are repeatedly asked if
	you want to check your MMF file. After the tenth dialog box is cleared, you
	receive the following error:
	
	  Application Error
	  Stack overflow
	
	RESOLUTION
	==========
	
	After the dialog box appears that asks whether you want to rebuild the MMF file,
	release the SHIFT key before you select the Check File button. The Check MMF
	utility will launch normally.
	
	Additional query words: 3.00b 3.20 rebuild
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
