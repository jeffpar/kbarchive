---
layout: page
title: "Q172431: How to Re-create a Macintosh Volume"
permalink: /kb/172/Q172431/
---

## Q172431: How to Re-create a Macintosh Volume

{% raw %}

	Article: Q172431
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to re-create a Macintosh volume on a computer running
	Windows NT Server version 3.51 or 4.0. You may want to recreate a Macintosh
	share if you need to change the name of the share or if you are experiencing
	problems with the volume.
	
	MORE INFORMATION
	================
	
	To re-create a Macintosh volume, you need to first remove the volume:
	
	NOTE: Removing the Macintosh volume will not remove any previously established
	permissions, however, if different permissions are chosen during the creation of
	the volume, the existing permissions may be replaced.
	
	1. In Windows NT 3.51, start File Manager.
	
	  In Windows NT 4.0, on the Start menu, click Run. Type "WINFILE" (without the
	  quotation marks), and then click OK.
	
	2. Click Remove Volumes from the MacFile menu.
	
	3. Select the volume you want to remove, and then click OK.
	
	The next step is to re-create the Macintosh volume:
	
	1. In File Manager, select Create Volume from the MacFile menu.
	
	2. Type the new or old volume name, depending on which you prefer to use.
	
	3. Assign permissions as needed and select the appropriate Volume Security and
	  User Limit.
	
	4. Click OK.
	
	The Macintosh volume has been re-created and Macintosh clients should now have
	access to it.
	
	For information on trouble-shooting Macintosh volume creation problems, please
	see the following Microsoft Knowledge Base article:
	
	  Q147909 Troubleshooting MacVolume Creation Errors
	
	Additional query words: SFM
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
