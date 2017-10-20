---
layout: page
title: "Q177016: Err Msg: Cannot Find the File Signup.exe..."
permalink: /kb/177/Q177016/
---

## Q177016: Err Msg: Cannot Find the File Signup.exe...

{% raw %}

	Article: Q177016
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to sign in to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Cannot find the file 'signup.exe' (or one of its components). Make sure the
	  path and filename are correct and that all required libraries are available.
	
	CAUSE
	=====
	
	This behavior can occur if the Signup.exe file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the Signup.exe file from your
	original Windows 95 CD-ROM or disks to the Program Files\The Microsoft Network
	folder.
	
	The Signup.exe file is located in the Win95_07.cab cabinet file on the Windows 95
	CD-ROM, in the Win95_10.cab cabinet file on the Windows 95 OEM Service Release 2
	CD-ROM, in the Win95_08.cab cabinet file on disk 8 of the Windows 95 DMF format
	disks, and in the Win95_12.cab cabinet file on disk 12 of the Windows 95 non-DMF
	format disks.
	
	NOTE: If you are prompted to overwrite an existing file, press Y, and then press
	ENTER.
	
	For information about using the Extract tool, type "extract" (without quotation
	marks) at a command prompt, or see the following article in the Microsoft
	Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	If you remove MSN and then delete the Program Files\The Microsoft Network folder
	or its contents, all of the original MSN files are not restored when you
	reinstall MSN.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3,2.0
	
	=============================================================================
	

{% endraw %}
