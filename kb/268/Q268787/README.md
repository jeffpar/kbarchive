---
layout: page
title: "Q268787: NFS Server Does Not Use Mapped Group for Access Token"
permalink: /kb/268/Q268787/
---

## Q268787: NFS Server Does Not Use Mapped Group for Access Token

{% raw %}

	Article: Q268787
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you configure the user and group mappings for Microsoft Windows NT Services
	for UNIX, you can configure a group mapping for a group that the Microsoft
	Windows NT user is not a member. This group mapping is not considered when the
	system checks the access rights in the network file system (NFS) server for this
	user.
	
	MORE INFORMATION
	================
	
	In Windows NT, an access token contains the security identifiers (SIDs) for the
	user in addition to the SIDs of the groups to which the user belongs. In
	Services for UNIX, you can configure the user and group mappings. When a group
	mapping is configured and the user is not part of that group in Windows NT, this
	group mapping is not considered when the system checks for file access in the
	NFS server.
	
	When a mapping of the user's UNIX group to a Windows NT group exists and there is
	no user mapping, the user is, by default, mapped to the anonymous account. The
	access token for this user can only contain the anonymous user's SID and the
	SIDs for the groups to which the anonymous user belongs; it cannot contain the
	SID for the mapped group if the user is not a member of this group.
	
	Configuring Default User Mappings
	---------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The default user mapping can be configured using the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NfsSvr\Parameters
	
	3. Select the registry key added in step 2. On the Edit menu, click Add Value,
	  and then add the following value:
	
	  Value Name: UnmappedUnixUserUsername
	  Data Type: REG_SZ
	  Value: NtDomain\NtUsername
	
	NOTE: The preceding key must contain the name in the following format:
	NtDomain\NtUsername or \\<Machinename>\<NtUsername>. If the
	separating backslash is missing, the value is rejected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTServicesUnix
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
