---
layout: page
title: "Q105960: PC DOS: Err Msg: Notice 64 Failure to Modify Folder Rights"
permalink: /kb/105/Q105960/
---

## Q105960: PC DOS: Err Msg: Notice 64 Failure to Modify Folder Rights

	Article: Q105960
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to modify a folder (private or shared) in versions 3.0, 3.0b, or
	3.2 of Microsoft Mail for PC Networks, MS-DOS workstation, an error message may
	be displayed:
	
	  Notice 64 Failure to modify folder rights
	
	CAUSE
	=====
	
	This error is caused by the corresponding folder file missing or having
	read-only attributes.
	
	RESOLUTION
	==========
	
	The folder file for that folder can be determined by doing a debug on
	FOLDROOT.IDX if it is a public folder, or on the user's eight digit IDX file if
	it is a private folder.
	
	If the .FLD file exists, check the attributes and remove the read-only attribute
	if it has been set. If the .FLD is missing, the file can be restored from the
	backup.
	
	However, if a backup is not available, then in order to delete the folder, the
	user should create a new folder and copy the new .FLD file to the
	<8digit>.FLD that is missing.
	
	For example, if the missing folder file is 00000010.FLD and the new folder
	created is 00000011.FLD, then copy 00000011.FLD to 00000010.FLD. The file size
	for the new folder should be 129 bytes. Now you will be able to delete the
	folder.
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
