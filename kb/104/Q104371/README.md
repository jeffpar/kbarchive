---
layout: page
title: "Q104371: PC DOS: Err Msg: Notice 98 No Log Folder Has Been Defined"
permalink: kb/104/Q104371/
---

## Q104371: PC DOS: Err Msg: Notice 98 No Log Folder Has Been Defined

	Article: Q104371
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While composing a message in version 3.0, 3.0a, or 3.2 of Microsoft Mail for PC
	Networks, MS-DOS workstation, you may receive the following message:
	
	  Notice 98 No log folder has been defined
	
	CAUSE
	=====
	
	When you create a folder and set Autologging to Yes by selecting Options,
	Configure, Log, Folder, Compose-Messages, the ACCESS3.GLB is updated with this
	information.
	
	If you delete this folder with Autologging still set to Yes, then Options,
	Configure, Log, Folder, and Compose-Messages are blank and Autologging appears
	to be set to No. However, the information is not actually reset; the program
	still looks for a log folder and ACCESS3.GLB is not updated when you delete a
	folder.
	
	This error occurs with Compose_Messages and Read_Messages log folders, regardless
	of whether the folder is private or shared.
	
	RESOLUTION
	==========
	
	Create a new folder by selecting Options, Configure, Log, Folder,
	Compose-Messages. Choose the folder and set Autologging to No. Then delete the
	folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.20 errmsg notice98
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	
