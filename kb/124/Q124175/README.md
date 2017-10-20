---
layout: page
title: "Q124175: Microsoft Network Client and LAN Manager 2.2c Comparison"
permalink: /kb/124/Q124175/
---

## Q124175: Microsoft Network Client and LAN Manager 2.2c Comparison

{% raw %}

	Article: Q124175
	Product(s): Microsoft Windows NT
	Version(s): 2.2c,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Two MS-DOS-based network clients ship with Windows NT Server versions 3.5 and
	3.51: LAN Manager for MS-DOS and Microsoft Network Client for MS-DOS. Microsoft
	recommends you use Network Client for MS-DOS unless you are using a remote boot
	workstation.
	
	MORE INFORMATION
	================
	
	Microsoft Network Client for MS-DOS was derived from Workgroup Add-on for
	MS-DOS. Microsoft Network Client for MS-DOS differs from Workgroup Add-on for
	MS-DOS in the following ways:
	
	- Microsoft Network Client for MS-DOS does not include the Microsoft Mail
	  client or MS-DOS server functionality included in Workgroup Add-on for
	  MS-DOS.
	
	- Unlike Workgroup Add-on for MS-DOS, Microsoft Network Client for MS-DOS
	  includes the TCP/IP, MS-DLC, and IPX protocols.
	
	Microsoft Network Client for MS-DOS differs from Microsoft LAN Manager for MS-DOS
	in the following ways:
	
	- Because Microsoft LAN Manager for MS-DOS does not have any upgrade support,
	  it is easier to upgrade from Microsoft LAN Manager for MS-DOS to Microsoft
	  Network Client for MS-DOS than it is to upgrade to Microsoft LAN Manager for
	  MS-DOS.
	
	- Microsoft Network Client for MS-DOS does not support remote boot. LAN Manager
	  for MS-DOS is the only Microsoft client that supports remote boot.
	
	- The Microsoft Network Client for MS-DOS redirectors (both Basic and Full)
	  have been optimized to work efficiently with Windows NT 3.5 and 3.51. As a
	  result, Microsoft Network Client for MS-DOS is faster than Microsoft LAN
	  Manager for MS-DOS at connecting to a computer running Microsoft Windows NT.
	
	Both Microsoft Network Client for MS-DOS and Microsoft LAN Manager for MS-DOS:
	
	- Ship with identical MS-DOS TCP/IP protocols.
	
	- Support and include the TCP/IP, NetBEUI, and IPX protocols.
	
	- Support identical DHCP and Windows Internet Name Service (WINS) capabilities.
	
	- Do not include the Microsoft Mail client.
	
	
	Additional query words: 2.20c 3.00 wgao work group RPL remoteboot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : :2.2c,3.0
	
	=============================================================================
	

{% endraw %}
