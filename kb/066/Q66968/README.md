---
layout: page
title: "Q66968: Quick Troubleshooter Cannot Open Tools Group"
permalink: /kb/066/Q66968/
---

## Q66968: Quick Troubleshooter Cannot Open Tools Group

{% raw %}

	Article: Q66968
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Quick Troubleshooter included with Microsoft Productivity
	Pack for Windows, you may receive the following error message:
	
	  Error: Troubleshooter is unable to show your Troubleshooter Tools group.
	  Switch to Program Manager and open the Troubleshooter Tools group.
	
	CAUSE
	=====
	
	You receive this error message if you have deleted or renamed the Troubleshooter
	Tools group.
	
	RESOLUTION
	==========
	
	If the Troubleshooter Tools group has been deleted, reinstall the Productivity
	Pack for Windows.
	
	If you have changed the name of the Troubleshooter Tools group, change it back to
	its original name if you want the Quick Troubleshooter to open the group
	automatically. If you want the Troubleshooter Tools group to have a custom name,
	you must open it yourself after starting the Quick Troubleshooter.
	
	MORE INFORMATION
	================
	
	Because the Quick Troubleshooter is separate from the Program Manager, the only
	way it can locate the Troubleshooter Tools group is by looking at the names of
	the existing group windows or icons. It does not have access to information
	internal to Program Manager, such as the group properties or the information
	contained in the group file itself. For this reason, if you rename the
	Troubleshooter Tools group, it cannot be automatically opened by the Quick
	Troubleshooter.
	
	Additional query words: 3.00 3.0 3.0a 3.00a tshoot win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
