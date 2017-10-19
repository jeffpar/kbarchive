---
layout: page
title: "Q251221: How to Select Replication of Specific WINS Databases"
permalink: /kb/251/Q251221/
---

## Q251221: How to Select Replication of Specific WINS Databases

	Article: Q251221
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	You can configure WINS to pull or push only special groups (Internet Groups) and
	domain<0x1B> names. This article describes how to configure specific
	domains to replicate WINS databases.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	A domain<0x1B> name is a unique multi-homed name registered by the Primary
	Domain Controller (PDC) of each domain.
	
	Internet Groups are user defined groups that store up to 25 members.
	By default a space character (0x20) is appended to the Internet group name as the
	16th byte.
	
	You can configure WINS servers to replicate only domain<1B> names or
	Internet group names. This can be useful if you need to replicate names relevant
	to certain DNS domains.
	Domain specific information would not need to be replicated to other WINS
	servers. Only 1B names and user defined groups would need to be replicated to
	allow a client to query its WINS server to get information(DCs and members in
	user defined Internet groups) that spans multiple DNS domains, one or more of
	which are serviced by other WINS servers.
	
	In order to configure this on the WINS server, use Registry Editor to add the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS\Partners
	
	Add the following value to the registry key listed above:
	
	  Value Name: ReplicationType
	  Data Type:  REG_DWORD
	  Value:      1
	
	The registry value in this article applies to replication with all Pull and Push
	partners of the local WINS server. In order to apply this to all its Pull
	partners only, add the above registry value under the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS\Partners\Pull
	
	In order to apply this to all its Push partners only, add the above registry
	value under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS\Partners\Push
	
	In order to apply this to a specific Pull partner only, add the above registry
	value under the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS\Partners\Pull\<IP
	  address of pull partner>
	
	In order to apply this to a specific PUSH partner only, add the above registry
	value under the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WINS\Partners\Push\<IP
	  address of push partner>
	
	If the parameter is specified in more than one place, the lower one in the key
	hierarchy supersedes the key above it. The default value of this parameter is 0
	which means "replicate all records".
	
	The replication protocol has been enhanced so that a partner can communicate its
	desire for a subset of records (replication type) to the WINS server it wants to
	pull from. The WINS that is sending records uses the replication type specified
	for that partner unless it indicates default replication (replicate all records)
	in which case it uses the replication type specified by the pulling WINS server.
	When the "pulled from" WINS server is not running Windows NT version 4.0 or
	later, it ignores the desired replication type of the partner and sends all
	records. The pulling WINS then sifts through the records and stores only those
	that are wanted in its database.
	
	CAUTION: Use this feature of WINS only if it is absolutely necessary. Databases
	can become out of synchronization when you apply this registry key value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
