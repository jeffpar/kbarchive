---
layout: page
title: "Q120576: Logon and Connection Problems using 3Com Etherlink 16 Adapters"
permalink: /kb/120/Q120576/
---

## Q120576: Logon and Connection Problems using 3Com Etherlink 16 Adapters

{% raw %}

	Article: Q120576
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 1.0, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience intermittent network problems such as logon validation errors
	and network connection failures when running Windows for Workgroups with a 3Com
	Etherlink 16 (3C507) network adapter.
	
	CAUSE
	=====
	
	These problems occur due to a problem with the 3C507 enhanced mode NDIS driver.
	
	WORKAROUND
	==========
	
	To work around the problem, do the following:
	
	1. Run 3C507.EXE from the floppy disk (EtherDisk) that comes with the network
	  adapter and set the Data Mode to Standard. The default factory setting is
	  Turbo.
	
	2. Choose the Network Setup icon in the Network group. In the Network Driver
	  dialog box, select the 3Com EtherLink 16 [NDIS2/NDIS3] driver.
	
	3. Select Real Mode NDIS Driver for the driver type. Choose OK and reboot the
	  workstation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows For Workgroups version
	3.11. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : :1.0,3.1,3.11
	
	=============================================================================
	

{% endraw %}
