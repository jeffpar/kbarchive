---
layout: page
title: "Q115167: PC Win: Exporting Folders from Windows Doesn't Check for Space"
permalink: kb/115/Q115167/
---

## Q115167: PC Win: Exporting Folders from Windows Doesn't Check for Space

	Article: Q115167
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.0b of Microsoft Mail for Windows does not check for sufficient disk
	space when it exports folders. If there is insufficient disk space, the export
	will end without notifying the user that it ran out of disk space during the
	export. The exported folder file can be used later for importing; however, it
	will only include the folders it was able to create before running out of disk
	space. The last folder exported may not contain all of the mail messages.
	Furthermore, the last mail message written into the exported folder may be
	corrupt, which can result in the following error message while you attempt to
	import the last folder into another mail message file (MMF):
	
	  Application Error
	  MAILSPL caused a General Protection Fault in module DEMILAYR.DLL at 0013:0385
	
	You can select the Close button to end the Mail program and you then must restart
	Windows before you can run Mail again from that computer. The MMF you imported
	the folders to may now be corrupt.
	
	RESOLUTION
	==========
	
	You can use version 3.0b of the Windows client to repair the corrupted MMF by
	holding down the SHIFT key while you click the OK button (or press ENTER) after
	you type the mailbox name and password.
	
	Microsoft Mail may not be successful in repairing the corrupt MMF. You may still
	be able to repair the MMF by deleting the corrupted message from the MMF;
	however, to do so, you may have to delete all messages in the folder that was
	created last during the export.
	
	If there was not enough space on the disk to export all of the folders
	successfully, you should not attempt to import the last folder you exported.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
