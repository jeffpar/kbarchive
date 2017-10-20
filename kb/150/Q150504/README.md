---
layout: page
title: "Q150504: INVDOS Will Not Detect Software On Compressed Drives"
permalink: /kb/150/Q150504/
---

## Q150504: INVDOS Will Not Detect Software On Compressed Drives

{% raw %}

	Article: Q150504
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The SMS Inventory Agent will not inventory packages or collect files that are on
	compressed drives.
	
	If you create an inventory package for a file that exists on the compressed drive
	of a client computer, the inventory agent indicates that it is searching all
	drives when it runs. However, the package is not found and is not added to the
	Software group in Personal Computer properties.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	
	Additional query words: prodsms invdos win95 win31 drivespace doublespace stac stacker compression
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	

{% endraw %}
