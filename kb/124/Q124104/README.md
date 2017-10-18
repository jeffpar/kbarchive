---
layout: page
title: "Q124104: Primary Mouse Button+DEL Creates Drag Mode in Program Manager"
permalink: kb/124/Q124104/
---

## Q124104: Primary Mouse Button+DEL Creates Drag Mode in Program Manager

	Article: Q124104
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete a program item icon from a Program Manager group, if you hold
	down the left (primary) mouse button while you press the DEL key, the following
	message is displayed:
	
	  Are you sure you want to delete the group <groupname>?
	
	If you choose Yes, the icon is deleted. However, the moment you move the mouse
	pointer into the group window, the next program item icon attaches to the
	pointer as if a drag function is being performed, even if the mouse button is
	not being held down. Program Manager continues in this drag mode until you click
	or release the mouse button. At that point, it drops the icon at the current
	location, as long as it is valid; otherwise, it is dropped into its original
	group.
	
	If you choose No, the screen returns to normal; however, the moment you move the
	pointer into the group window, the item icon that had been selected attaches to
	the pointer as if a drag function is being performed, even if the mouse button
	is not held down. Program Manager continues in this drag mode until you click or
	release the mouse button. At that point, it drops the icon at the current
	location, as long as it is valid; otherwise, it is dropped into its original
	group.
	
	If the group is empty, the deletion works correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups versions
	3.10 and 3.11. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available. At this time, no
	workaround is available.
	
	Additional query words: 3.10 3.11 3.x delete
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
