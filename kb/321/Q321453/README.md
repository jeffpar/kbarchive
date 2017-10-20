---
layout: page
title: "Q321453: DHCP Transaction Log Files (J500xxx.log) Fill the Hard Disk"
permalink: /kb/321/Q321453/
---

## Q321453: DHCP Transaction Log Files (J500xxx.log) Fill the Hard Disk

{% raw %}

	Article: Q321453
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice that the free hard disk space is decreasing on your Microsoft
	Windows NT Server 4.0-based computer running the Dynamic Host Configuration
	Protocol (DHCP) service.
	
	When you view the contents of the Winnt\System32\DHCP folder, you may notice
	numerous files similar to the following:
	
	06/01/01  07:44p        <DIR>          .
	
	06/01/01  07:44p        <DIR>          ..
	
	06/01/01  07:38p        <DIR>          backup
	
	04/13/01  10:03a             1,056,768 dhcp.mdb
	
	04/13/01  10:03a             1,056,768 Dhcp.tmp
	
	06/01/01  11:06a               707,317 dhcpsrv.log
	
	05/28/01  07:36p                12,775 DhcpSrvLog.Fri
	
	05/31/01  12:03a                   666 DhcpSrvLog.Mon
	
	05/29/01  12:02a                   666 DhcpSrvLog.Sat
	
	05/30/01  12:02a                   666 DhcpSrvLog.Sun
	
	05/27/01  10:26p                13,165 DhcpSrvLog.Thu
	
	06/01/01  04:11p                 5,484 DhcpSrvLog.Tue
	
	05/26/01  07:54p                17,266 DhcpSrvLog.Wed
	
	05/27/01  05:04p                 8,192 j50.chk
	
	06/01/01  07:38p             1,024,000 j50.log
	
	05/27/01  05:19p             1,024,000 j5004610.log
	
	05/27/01  06:19p             1,024,000 j5004611.log
	
	05/27/01  07:19p             1,024,000 j5004612.log
	
	05/27/01  08:19p             1,024,000 j5004613.log
	
	05/27/01  09:19p             1,024,000 j5004614.log
	
	05/27/01  10:20p             1,024,000 j5004615.log
	
	05/27/01  11:20p             1,024,000 j5004616.log
	
	05/28/01  12:08a             1,024,000 j5004617.log
	
	05/28/01  12:20a             1,024,000 j5004618.log
	
	CAUSE
	=====
	
	This behavior may occur if the DHCP-related transaction log files have not been
	automatically removed and are filling the hard disk instead.
	
	RESOLUTION
	==========
	
	To resolve this issue, compact the DHCP database. To do this, follow these
	steps:
	
	1. Stop the DHCP service. To do this, follow these steps:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Services.
	
	  b. In the Service list, click Microsoft DHCP Server, and then click Stop.
	
	  c. Click Yes to confirm the stopping of the DHCP service.
	
	2. Use the Jetpack.exe utility to compact the DHCP database.
	
	For additional information about how to compact the DHCP database, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q145881 How to Use Jetpack.exe to Compact a WINS or DHCP Database
	
	3. Restart the DHCP service.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q172570 Jetpack Error Codes for Windows 2000 and Windows NT 4.0
	
	  Q165915 Explanation of Jet Database for Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
