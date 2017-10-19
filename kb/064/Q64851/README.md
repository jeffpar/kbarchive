---
layout: page
title: "Q64851: Calendar Err Msg: Cannot Find Calendar Change File..."
permalink: /kb/064/Q64851/
---

## Q64851: Calendar Err Msg: Cannot Find Calendar Change File...

	Article: Q64851
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you delete Microsoft Windows Calendar's temporary file while Calendar is
	still running, and then you exit Calendar, you will get the following error
	message:
	
	  Cannot Find Calendar Change file: Please Insert in Drive A
	
	This information applies to Microsoft Windows versions 3.0 and 3.0a; it does not
	apply to later versions of Windows.
	
	MORE INFORMATION
	================
	
	Windows creates a temporary file for Calendar in the directory to which you have
	your SET TEMP statement set. The name of the temporary file is CAL*.TMP where
	the "*" is one to four numbers. Many of the Windows desktop applications such as
	Windows Write and Windows Calendar create and use temporary files.
	
	For more information on temporary files, query on the following words in the
	Microsoft Knowledge Base:
	
	  temporary and files and windows
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
