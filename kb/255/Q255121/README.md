---
layout: page
title: "Q255121: &quot;A Fatal Exception...&quot; Error Message When You Undock Your Laptop"
permalink: /kb/255/Q255121/
---

## Q255121: &quot;A Fatal Exception...&quot; Error Message When You Undock Your Laptop

{% raw %}

	Article: Q255121
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg osr2 win95
	Last Modified: 29-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you undock your laptop, your computer may stop responding (hang), or you
	may receive the following error message:
	
	  A fatal exception 0E has occurred in vxd ndis(01)
	
	CAUSE
	=====
	
	This issue can occur if you have a network adapter installed in the docking
	station that uses device drivers that were released after the release of
	Microsoft Windows 95, and the "Exists in all hardware profiles" feature is
	enabled.
	
	RESOLUTION
	==========
	
	To work around this issue, use one of the following methods:
	
	- Click to clear the "Exists in all hardware profiles" check box to disable
	  this feature before you undock your laptop.
	
	- Use the "Search for updated drivers" method in Device Manager to update the
	  device driver instead of using the "Have Disk" method.
	
	MORE INFORMATION
	================
	
	The "Exists in all hardware profiles" feature is automatically selected if you
	update device drivers by using the "Have Disk" method in Device Manager.
	
	When you use the "Search for updated drivers" method to update device drivers,
	the "Exists in all hardware profiles" check box is not automatically selected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
