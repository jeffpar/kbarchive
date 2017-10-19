---
layout: page
title: "Q172171: How to Create Write Only Mac Volumes"
permalink: /kb/172/Q172171/
---

## Q172171: How to Create Write Only Mac Volumes

	Article: Q172171
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Administrator may wish to create Macintosh volumes in which Macintosh clients
	only have the Write permission. This proposes a problem because the Macintosh
	clients must be able to see the folder in order to write to it. Therefore, a
	volume cannot be created where the Everyone group only has the Make Changes
	permission. The volume must also have the See Folders permission. To accomplish
	this task, you can create a volume that Macintosh users can see, then create a
	folder in that volume that users can drag and drop files into without ever being
	able to see the contents of the folder.
	
	MORE INFORMATION
	================
	
	To create folders in which Macintosh clients only have the Write Permission,
	follow these steps on the Windows NT Server with Services for Macintosh
	installed:
	
	1. Create a default Macintosh Volume using the MacFile menu in File Manager
	  (Winfile.exe). For example, create a directory called C:\MacFolder.
	
	  If the Volume is already created, proceed to Step #2.
	
	2. From the Macfile Menu, click Permissions. Check the following boxes for the
	  Everyone group:
	
	  X See Folders
	  X See Files
	  X Make Changes
	
	3. Create a subdirectory in the Macintosh Volume. For example,
	  C:\MacFolder\Files. Select this new Files folder.
	
	4. From the MacFile menu, click Permissions. Check the following box for the
	  Everyone group:
	
	  X Make Changes
	
	When Macintosh clients log into this Windows NT Server, they are able to select
	the Macintosh volume with See Files and See Folders permission. After they have
	selected this volume, the folder will appear on their desktop. When they
	double-click on the folder (volume), the subdirectory Files will appear as a
	normal folder but it will have a Belt around it. This prevents users from being
	able to open the folder and viewing its contents, but will still be able to drag
	and drop files into that folder.
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
