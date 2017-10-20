---
layout: page
title: "Q246489: Frequent Browser Elections with Windows 95-Based Clients"
permalink: /kb/246/Q246489/
---

## Q246489: Frequent Browser Elections with Windows 95-Based Clients

{% raw %}

	Article: Q246489
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you have Microsoft Windows 95-based computers configured in a workgroup
	with Microsoft Windows NT 4.0-based computers, Event Viewer may record frequent
	browser-election events on that network segment.
	
	CAUSE
	=====
	
	This behavior can occur because each of the Windows 95-based computers is
	maintaining a browse list for the network segment, causing frequent browser
	elections.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, designate one of the Windows 95-based computers as the
	master browser for the network segment. On all the others, eliminate maintenance
	of a browse list. The Windows 95 computer maintaining the browse list for the
	network segment should remain turned on at all times.
	
	1. Edit the MaintainServerList value in two registry locations:
	
	  a. Start Registry Editor (Regedit).
	
	  b. Locate the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\Vnetsup
	
	  c. Locate the MaintainServerList value, type "0" (without the quotation
	     marks) in the Value Data box, and then click OK.
	
	  d. Locate the following registry key:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP\Ndi\Params\MaintainServerList
	
	  e. Locate the 'default' value, type 0 in the Value Data box, and then click
	     OK.
	
	  f. Quit Registry Editor, and then restart the computer.
	
	2. Modify the Lmhosts file on the master browser of the network segment by
	  adding mappings for the domain master browser. (On a Windows 95-based
	  computer, the Lmhosts file is located in the C:\Windows folder.)
	
	  For example, the master browser of the domain named Gotham has the network
	  basic input/output system (NetBIOS) name of Batman. Batman uses the Internet
	  Protocol (IP) address of 193.177.60.22. Add the following lines to the
	  Lmhosts file, substituting your correct information for the names Batman and
	  Gotham and for the sample IP address:
	
	  193.177.60.22     Batman     #PRE     #DOM:Gotham 
	  193.177.60.22     ''Gotham         \0x1b''     #PRE    
	
	  IMPORTANT: Correct spacing of these entries is imperative. There must be a
	  total of 20 characters between the quotation marks. These 20 characters are
	  the domain name, plus the appropriate number of spaces to pad up to 15
	  characters, plus the backslash (\) as the sixteenth character, plus the
	  NetBIOS hex representation of the service type (here, 0x1b).
	
	3. Add the IP address of a Windows Internet Name Service (WINS) server to the
	  TCP/IP configuration of all computers on the network segment. The following
	  procedure describes how to do this on a Windows 95-based computer.
	
	  a. In Control Panel, double-click Network, and then click Configuration.
	
	  b. Click TCP/IP-> <adapter name>, where <adapter name> is the
	     name of the network adapter, and then click Properties.
	
	  c. Click WINS Configuration.
	
	  d. To configure the WINS server address, do one of the following:
	
	     1. If your Dynamic Host Configuration Protocol (DHCP) server is configured
	        to assign the WINS server IP address to DHCP clients, click Use DHCP
	        for WINS Resolution.
	
	        The DHCP server on your network must have the following scope options
	        configured:
	
	  044 WINS/NBNS Servers
	  046 WINS/NBT Node Type
	
	     2. If the computer is using a static IP address, or if it is a DHCP client
	        but the DHCP scope is not configured to provide the WINS server
	        configuration, manually specify the IP addresses of the WINS servers:
	
	        a. Click Enable WINS Resolution.
	
	        b. Type the IP addresses of the primary and secondary WINS servers in
	           the appropriate boxes.
	
	  e. Restart the computer.
	
	MORE INFORMATION
	================
	
	For additional information about using an Lmhosts file, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q180094 How to Write an LMHOSTS File for Domain Validation
	
	  Q163409 NetBIOS Suffixes (16th Character of the NetBIOS Name)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
