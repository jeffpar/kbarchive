---
layout: page
title: "Q66728: Windows Err Msg: System Error Network Error Reading Drive &lt;x&gt;"
permalink: /kb/066/Q66728/
---

## Q66728: Windows Err Msg: System Error Network Error Reading Drive &lt;x&gt;

	Article: Q66728
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message occurs on 3Com 3+Share networks and Microsoft Networks
	(MS-Net) when you open and close Microsoft Windows version 3.0 File Manager
	(WINFILE.EXE):
	
	  System Error
	  Network Error Reading Drive <x>
	
	where "<x>" is the name of the drive.
	
	The message dialog box has OK and Cancel buttons that work only after repeated
	attempts to use them. This error occurs only if Windows is installed to run
	completely off the network server.
	
	CAUSE
	=====
	
	This error occurs only if both the shared network directory and your directory
	appear to be root directories, they are both in the path, and Windows is started
	from your directory.
	
	WORKAROUND
	==========
	
	Change one of the directories so it is not the root directory of the drive
	letter being used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows version 3.0.
	This problem was corrected and does not occur in later versions of Windows.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3 com
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
