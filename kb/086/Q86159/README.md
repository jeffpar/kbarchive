---
layout: page
title: "Q86159: PROFS: How to De-Install the Gateway"
permalink: /kb/086/Q86159/
---

## Q86159: PROFS: How to De-Install the Gateway

{% raw %}

	Article: Q86159
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The only way to de-install the VM side of the gateway is to erase all the files
	from the Gateway VM ID's disks.
	
	Normally, the Microsoft Mail Host Access component would be on the 191 A disk and
	the 193 F disk. If installed, the Distribution Manager (DM) files would normally
	reside on the 194 E disk. Under CMS, these files could be deleted using the
	ERASE command, or the disks could be reformatted.
	
	
	Additional query words: 3.20 pcmail profsvm de-install deinstall uninstall
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
