---
layout: page
title: "Q199236: INFO: Extended Hercules Checking and Accelerated Mode"
permalink: /kb/199/Q199236/
---

## Q199236: INFO: Extended Hercules Checking and Accelerated Mode

{% raw %}

	Article: Q199236
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbRemote kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Extended Hercules and Accelerated mode are the two options available during a
	remote control troubleshooting session. Both of these options are for MS-DOS
	client support only and are provided for backward compatibility when performing
	remote troubleshooting on Systems Management Server version 1.2 sites.
	
	MORE INFORMATION
	================
	
	You can set various parameters during a remote control session that determine
	how the Systems Management Server Administrator computer controls a remote
	computer. For example, you can specify whether the system key sequences CTRL+
	and ALT+ on the Systems Management Server Administrator computer are processed
	locally at the Systems Management Server Administrator computer or passed
	through to the remote client.
	
	- Select Extended Hercules Checking to monitor a Hercules-based client for
	  graphics mode or text mode. Hercules checking slows down program execution
	  but is required for controlling a client with a Hercules graphics card.
	
	If you select Accelerated Mode, then the selected client sends screen refreshes
	to the Systems Management Server Administrator computer as fast as the network
	allows. Accelerated mode dramatically improves the refresh rate on the Systems
	Management Server Administrator computer but slows down program execution on the
	remote client.
	
	Additional query words: video slow msdos herc herculese prodsms rc16
	
	======================================================================
	Keywords          : kbRemote kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
