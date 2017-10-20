---
layout: page
title: "Q48768: Mac Srv: Unable to Determine Server from Chooser Window"
permalink: /kb/048/Q48768/
---

## Q48768: Mac Srv: Unable to Determine Server from Chooser Window

{% raw %}

	Article: Q48768
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When more than one Microsoft Mail server is installed on a single network zone,
	it is not easy to determine which server is on which Macintosh by looking at the
	names in the Chooser window, unless the servers were named as they were
	installed.
	
	MORE INFORMATION
	================
	
	If the servers were installed without being named, do the following to determine
	which server is on which Macintosh:
	
	1. Shut down all the Mail servers.
	
	2. Remove every Mail server from the network (that is, unplug the network
	  cable).
	
	3. Boot the Mail servers.
	
	4. On each server, select the Chooser and click the MS Mail driver. Note that
	  the Mail 3.0 driver is named "MS Mail" and the Mail 2.0 driver is named "MS
	  Mail 2.0". On the right side of the Chooser window, only one server should be
	  seen. This is the Mail server installed on that specific Macintosh.
	
	The name of the server is not located anywhere on the Installer disk. Once you
	have determined which server is on which Macintosh, write the name on the label
	of the Installer disk (the disk used on that Macintosh). If the server is to be
	renamed, the new name should also be written on the label of the Installer disk.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
