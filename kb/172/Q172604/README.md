---
layout: page
title: "Q172604: Error Message: The Set of Folders Could Not Be Opened"
permalink: /kb/172/Q172604/
---

## Q172604: Error Message: The Set of Folders Could Not Be Opened

{% raw %}

	Article: Q172604
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open the Microsoft Exchange Inbox, you may receive either of the
	following error messages:
	
	   - The set of folders could not be opened. An unexpected error occurred. Could
	  not initialize the provider (MSPST.DLL) MAPI 1.0 - 1026 (8004010F)
	
	   - Unable to display the folder. An unexpected error has occured. Mapi was
	  unable to load the information service mspst.dll. Be sure the service is
	  correctly installed and configured.
	
	CAUSE
	=====
	
	The Mspst32.dll file may be missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the Mspst32.dll file from your
	original Windows 95 disks or CD-ROM to the Windows\System folder.
	
	The Mspst32.dll file is located in the Win95_06.cab cabinet file on the Windows
	95 CD-ROM, the Win95_06.cab cabinet file on disk 6 of the original Windows 95
	DMF floppy disks, or from the Win95_10.cab cabinet file on disk 10 of the
	original Windows 95 non-DMF floppy disks.
	
	For information about using the Extract tool, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
