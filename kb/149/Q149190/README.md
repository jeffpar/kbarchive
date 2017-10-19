---
layout: page
title: "Q149190: Err Msg: Access to the Specified Device, Path, or File..."
permalink: /kb/149/Q149190/
---

## Q149190: Err Msg: Access to the Specified Device, Path, or File...

	Article: Q149190
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you connect to a server that has extended characters in its name using a
	Universal Naming Convention (UNC) network connection, you may receive the
	following error message when you attempt to copy files from that server:
	
	  Access to the specified device, path, or file is denied.
	
	CAUSE
	=====
	
	This problem occurs with server names that contain certain extended characters.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Map a drive letter to the network resource, then copy the files.
	
	- Change the name of the server so that it does not contain extended
	  characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information about extended characters, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q83275 Using Extended ASCII Characters (Not Found on Keyboard)
	
	
	======================================================================
	Keywords          : kberrmsg kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
