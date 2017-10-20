---
layout: page
title: "Q103928: SFM: Confirm Volume Removal Dialog Box Requires a Mouse"
permalink: /kb/103/Q103928/
---

## Q103928: SFM: Confirm Volume Removal Dialog Box Requires a Mouse

{% raw %}

	Article: Q103928
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under Windows NT Advanced Server Services for Macintosh (SFM), a mouse or other
	pointing device is required to browse through connected users in the Confirm
	Volume Removal dialog box.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From File Manager, create a MacFile volume named Test.
	
	2. From a Macintosh computer, connect a user to the volume named Test.
	
	3. In File Manager, choose Remove Volumes from the MacFile menu.
	
	4. Select Test and choose OK.
	
	5. Choose Yes when asked, "Are you sure you want to remove the selected
	  Macintosh-Accessible volume(s)?"
	
	6. When the Confirm Volume Removal dialog box appears, there is no way to change
	  focus to the section that lists all the connected users without a mouse.
	  Thus, if more Users are connected than can be shown in the window, there is
	  no way to scroll through the list of Users.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Server version 3.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. This problem was corrected in Windows NT Server version 3.5.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
