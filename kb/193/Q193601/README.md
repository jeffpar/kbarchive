---
layout: page
title: "Q193601: Registry Parameters for Windows NT Load Balancing Service"
permalink: kb/193/Q193601/
---

## Q193601: Registry Parameters for Windows NT Load Balancing Service

	Article: Q193601
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The following registry parameters can be modified to change the behavior of
	Windows NT Load Balancing Service (WLBS).
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The registry parameters for WLBS are specified under the following key:
	
	  
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WLBS\Parameters
	
	  AliveMsgPeriod
	  Data type = REG_DWORD
	  Range = 100 - 10000
	  Default = 1000
	  Specifies the period in milliseconds between "I am alive" status messages
	  broadcast by each host.
	
	  AliveMsgTolerance
	  Data type = REG_DWORD
	  Range = 5 - 100
	  Default = 5
	  Specifies the number of periods to wait after the last message from a host
	  before it is declared dead.
	
	  ClusterIPAddress
	  Data type = REG_SZ
	  Specifies the IP address of the WLBS cluster (also configurable through the
	  GUI).
	
	  ClusterName
	  Data type = REG_SZ
	  Specifies the name used of the WLBS cluster (also configurable through the
	  GUI).
	
	  ClusterNetworkAddress
	  Data type = REG_SZ
	  Specifies the media access control address used by the WLBS cluster (also
	  configurable through the GUI).
	
	  ClusterNetworkMask
	  Data type = REG_SZ
	  Specifies the network mask used by the WLBS cluster (also configurable through
	  the GUI).
	
	  ClusterModeOnStart
	  Data type = REG_DWORD
	  Range = 0 or 1
	  Default = 0
	  Specifies whether WLBS should start on boot up (also configurable through the
	  GUI).
	
	  ConnectionCleanupDelay
	  Data type = REG_DWORD
	  Range = 0 - 3600000
	  Default = 300000
	  Specifies TCP connection cleanup delay between cluster mode restarts in
	  milliseconds.
	
	  DedicatedIPAddress
	  Data type = REG_SZ
	  Specifies the dedicated IP address of the WLBS host's NIC (also configurable
	  through the GUI).
	
	  DedicatedNetworkMask
	  Data type = REG_SZ
	  Specifies the dedicated network mask of the WLBS host's NIC (also configurable
	  through the GUI).
	
	  DescriptorsPerAlloc
	  Data type = REG_DWORD
	  Range = 16 - 1024
	  Default = 512 Specifies the number of connection descriptors allocated at a
	  time.
	
	  HostPriority
	  Data type = REG_DWORD
	  Range = 1 - 32
	  Default = 1
	  Specifies the value for the Host Priority (also configurable through the GUI).
	
	  IPToMACEnable
	  Data type = REG_DWORD
	  Range = 0 or 1
	  Default = 0
	  Enables automatic network address derivation from primary cluster IP address.
	
	  LicenseKey
	  Data type = REG_SZ
	  Specifies the license key used by the WLBS cluster (also configurable through
	  the GUI).
	
	  MaxDescriptorsAlloc
	  Data type = REG_DWORD
	  Range = 1 - 512
	  Default = 512
	  Specifies the maximum number of times connection descriptors can be allocated.
	
	  MaskSourceMAC
	  Data type = REG_DWORD
	  Range = 0 or 1
	  Default = 1
	  Set to 1 masks source media access control address in outbound packets,
	  preventing switches from learning and forcing them to broadcast packets for
	  unknown addresses to all ports. Set to 0 disables masking of the media access
	  control address.
	
	  MulticastSupportEnable
	  Data type = REG_DWORD
	  Range = 0 or 1
	  Default = 0
	  Enables multicast mode.
	
	  MulticastARPEnable
	  Data type = REG_DWORD
	  Range = 0 or 1
	  Default = 0
	  Enables ARPing from cluster IP to multicast media access control in multicast
	  mode.
	
	  NBTSupportEnable
	  Data type = REG_DWORD
	  Range = 0 or 1
	  Default = 1
	  Enables NBT cluster computer name support.
	
	  RemoteControlEnabled
	  Data type = REG_DWORD
	  Range = 0 or 1
	  Default = 1
	  Enables remote control.
	
	  RemoteControlUDPPort
	  Data type = REG_DWORD
	  Range = 1 - 65535
	  Default = 2504
	  Specifies remote control UDP port for WLBS to use.
	
	Additional query words: Convoy WLBS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
