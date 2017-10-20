---
layout: page
title: "Q108802: WFWG 3.11 May Fail After Upgrading (Missing SlotNumber= Entry)"
permalink: /kb/108/Q108802/
---

## Q108802: WFWG 3.11 May Fail After Upgrading (Missing SlotNumber= Entry)

{% raw %}

	Article: Q108802
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a MicroChannel or EISA network interface card (NIC) and upgrade
	from Windows for Workgroups version 3.1 to Windows for Workgroups 3.11, your
	system may not work correctly if your PROTOCOL.INI file does not contain a
	SlotNumber entry.
	
	CAUSE
	=====
	
	Under Windows for Workgroups version 3.1 the NDIS version 2.0 driver scans the
	slots to determine the correct SlotNumber. Therefore, the SlotNumber entry in
	the PROTOCOL.INI file is optional. Under Windows for Workgroups version 3.11,
	the NDIS version 3.0 driver does not scan the slots to determine the correct
	SlotNumber.
	
	Since you upgraded from Windows for Workgroups 3.1 or 3.11, the network card
	detection code was not used during Setup. As a result, your PROTOCOL.INI file
	does not contain a SlotNumber entry. If there isn't a SlotNumber entry in the
	PROTOCOL.INI file, the NDIS version 3.0 driver defaults to slot number 1.
	
	WORKAROUND
	==========
	
	To work around this problem add the correct SlotNumber= entry to the network
	interface card section of the PROTOCOL.INI. For example:
	
	     [MS$IBMTRA]
	     SlotNumber=2
	
	Additional query words: 3.11 UBNEI1 MS$NIUPS code
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
