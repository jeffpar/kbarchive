---
layout: page
title: "Q170643: Maximizing Routing Performance with Netflex-3 Network Adapter"
permalink: /kb/170/Q170643/
---

## Q170643: Maximizing Routing Performance with Netflex-3 Network Adapter

{% raw %}

	Article: Q170643
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to maximize the throughput of a Windows NT server
	that is running the Routing and Remote Access Service.
	
	Windows NT 4.0 Service Pack 3 includes an updated driver for the Compaq Netflex-3
	Ethernet network card. Using a combination of this updated driver and some new
	registry entries that are supported by this driver, you can increase the
	performance of your Routing and Remote Access Service server.
	
	MORE INFORMATION
	================
	
	The updated driver is Netflex3.sys and must be manually installed. To install
	this driver, perform the following steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click the Adapters tab, click Add, and then click Have Disk.
	
	4. The updated Netflex-3 driver is located in the following folder:
	
	  D:\drvlib\netcard\x86\netflex3
	
	  where D: is the letter of your CD-ROM drive.
	
	5. Select the appropriate adapter, and then click OK.
	
	6. Click Close, and then restart the computer when prompted.
	
	The following registry settings only apply to the Compaq Netflex-3 card. Other
	network adapter cards may have similar settings but the value names will vary.
	Please consult with your network adapter manufacturer for more information.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following subkey:
	
	  HKEY_Local_Machine\System\CurrentControlSet\Services\ 
	     Netflex3X\Parameters
	
	  where X is each instance of the network adapter.
	
	2. With Parameters selected, click Edit, click Add Value, and then type the
	  following information:
	
	  Value Name:  MaxReceives
	  Value Type:  REG_DWORD
	  Data:        500 (decimal)
	
	3. With Parameters selected, click Edit, click Add Value, and then type the
	  following information:
	
	  Value Name:  FixedIntMod
	  Value Type:  REG_DWORD
	  Data:        5000 (decimal)
	
	4. Quit Registry Editor and restart the Routing and Remote Access Service
	  server.
	
	MaxReceives increases the size of non-paged pool memory used to buffer packets.
	
	FixedIntMod (fixed interrupt moderation) sets the amount of interrupts per second
	to a fixed number. By default, Windows NT uses dynamic interrupt moderation that
	may interrupt the CPU for every packet received. Choosing the best number of
	interrupts per second for fixed interrupt moderation will depend on your router
	load. The number you choose may queue interrupts (more efficient) for servicing
	or service interrupts too often (less efficient). Testing should be done when
	using these registry settings to ensure that performance is improved in your
	environment.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
