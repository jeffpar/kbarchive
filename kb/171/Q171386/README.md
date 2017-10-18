---
layout: page
title: "Q171386: Connectivity Delay with Multiple Redirectors Installed"
permalink: kb/171/Q171386/
---

## Q171386: Connectivity Delay with Multiple Redirectors Installed

	Article: Q171386
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You may experience a delay when you attempt to connect to network resources from
	a system with multiple redirectors installed. This delay only happens the first
	time that you attempt the connection.
	
	CAUSE
	=====
	
	When a non-WNET API initial UNC connection attempt is made to a network resource
	from a system with multiple redirectors, the Windows NT system sends the request
	to the multiple UNC provider (MUP) to identify which redirector should handle
	the request.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	A modification to the MUP has been made such that, if the redirector with the
	highest priority is attempted first with a successful response, those
	redirectors with lower priorities are then bypassed and the connection is made
	through the redirector with the highest priority.
	
	Enabling this capability requires an updated Mup.sys. The speed improvement can
	be increased by modifying the registry entry DisableDFS.
	
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedit.exe).
	
	2. Go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Mup
	
	3. Create a new value using the following information:
	
	     DisableDFS  REG_DWORD
	     Range:  0 or 1
	     Default:  0 (Enabled)
	
	  Set this key to 1.
	
	NOTE: If you are using the IntranetWare client from Novell, you will need to
	follow these steps in addition to the procedures listed above:
	
	1. Run the registry editor (Regedt32.exe).
	
	2. Go to the following key:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \NetwareWorkstation\NetworkProvider
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click DeviceName, click Edit, and then click String.
	
	4. Change \Device\NetwareWorkstation to \Device\NetwareRedirector.
	
	5. Click OK, exit Registry Editor, and restart the computer.
	
	MORE INFORMATION
	================
	
	The MUP first establishes whether Distributed File System (Dfs) is in use and
	passes the request to Dfs.
	
	The MUP then checks its internal cache to see whether the connection had been
	made previously (entries in the MUP cache are held for 15 minutes). The MUP then
	sends the request to each redirector that handles each request synchronously and
	attempts to identify a resource on the network that matches the request. After
	all redirectors return, the MUP chooses (based on response and priority) which
	redirector the application will use.
	
	The delays come from two locations: first, the attempt to access the resource
	through Dfs and, second, the MUP must wait and accept all responses from all
	redirectors before completing the request. Therefore, even if a resource is
	readily available and accessible over one redirector, the request must still be
	made over the other installed redirectors before the request completes.
	
	Depending on the number of redirectors, protocols, and timer configurations for
	connectivity, these delays can exceed 13 seconds for each initial connection.
	
	The NetWare Redirector will be used as an example.
	
	The following illustrates an initial UNC connection attempt:
	
	1. Application makes UNC request.
	
	2. Dfs is checked and the request is processed if Dfs is enabled.
	
	3. The MUP then checks the MUP cache for a recent connection.
	
	4. The MUP then makes a query to the first redirector, NetWare in this example,
	  and the redirector responds.
	
	  NOTE: The return is immediate as NetWare uses only IPX and the calls are fast.
	
	5. The MUP sends the request to the second redirector, Microsoft in this
	  example, and the second redirector responds.
	
	  NOTE: The delay for the Microsoft redirector depends on the protocols
	  installed. With TCP/IP, delays exists as the resource name is queried through
	  WINS, broadcasts, LMHOSTS file, DNS, and so on. For example, the default
	  delay for an h-node client is 13 seconds.
	
	6. A priority is assigned to each redirector queried so if both redirectors
	  return successfully, the priority is used to designate which redirector takes
	  the request.
	
	7. The handle to the resource is returned to the application based on the MUP's
	  decision.
	
	If the application's request was made for a NetWare resource, the application
	would have to wait for the Microsoft redirector to timeout before returning the
	handle to the resource.
	
	The priority for the redirectors can be configured using the following steps:
	
	1. Run the Network tool in Control Panel.
	
	2. Click Services and click Network Access Order.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: redir provider
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
