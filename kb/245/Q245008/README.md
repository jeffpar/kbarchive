---
layout: page
title: "Q245008: Ipconfig Generates Inconsistent Registry Contents Error Message."
permalink: /kb/245/Q245008/
---

## Q245008: Ipconfig Generates Inconsistent Registry Contents Error Message.

{% raw %}

	Article: Q245008
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Ipconfig command on a multihomed Microsoft Windows NT Server
	4.0-based computer and the computer is running Checkpoint Firewall, you may
	receive the following error message:
	
	  Fatal error: Inconsistent Registry contents
	
	CAUSE
	=====
	
	This behavior can occur when you use Checkpoint Firewall and you delete the
	registry key for a network interface card or make substantial changes to the
	network.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. At the Windows NT Server 4.0-based computer, remove Checkpoint Firewall.
	
	2. Copy the Tcpip.sys or Tcpip.sy_ file from the latest Windows NT 4.0 Service
	  Pack to the \%SystemRoot%\System32 folder.
	
	3. If it is necessary to expand the copied file, type the following command at a
	  command prompt, and then press ENTER
	
	  expand sourcepath destinationpath
	
	  where sourcepath is the drive and folder where the file is located and the
	  name of the file, and destinationpath is the drive and folder where you want
	  to copy the file.
	
	  For example, type the following command to expand the Tcpip.sy_ file to the
	  C:\Winnt\System32 folder:
	
	  expand c:\winnt\system32\tcpip.sy_ c:\winnt\system32
	
	4. Restart the computer.
	
	5. Reinstall Checkpoint Firewall.
	
	MORE INFORMATION
	================
	
	For more information about how to use the Expand utility, type "expand /?"
	(without the quotation marks) at a command prompt, and then press ENTER.
	
	Additional query words: tcp/ip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
