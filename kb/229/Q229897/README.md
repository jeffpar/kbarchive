---
layout: page
title: "Q229897: Preventing WINS Static Record Replication"
permalink: kb/229/Q229897/
---

## Q229897: Preventing WINS Static Record Replication

	Article: Q229897
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to use the OnlyDynRecs registry value to prevent
	Windows Internet Name Service (WINS) static records from replicating to
	replication partners.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can use WINS to add static records in the WINS database. Typically, static
	records are difficult to remove from a network of WINS servers and are useful
	only on the server to which a static record is added.
	
	To prevent static record replication:
	
	1. On the server you are configuring to not replicate static records, choose the
	  "Replicate Only with Partners" option on the Advanced tab of the WINS server
	  Configuration tool. This prevents unintended replication of static records
	  from a server that is not configured as a replication partner.
	
	2. Start Registry Editor.
	
	3. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Wins\Partners\Push\<partner
	  IP address>\OnlyDynRecs
	
	  Data Type : REG_DWORD
	  Range : 0 or 1
	  Default : 0
	
	4. Set the range to 1. This specifies that only dynamically registered records
	  are replicated to WINS pulling replicas. The default setting of 0 specifies
	  that all records (dynamic and static) are replicated.
	
	5. Configure this for every push partner.
	
	NOTE: If "replicate only with partners" was not checked in step one then it would
	be possible for a server to pull records without being configured as a push
	partner. This is not a desirable situation since we can only control static
	record replication if the server is configured in the push partner list. Instead
	you need to configure these servers as push partners, even if they are currently
	only pulling.
	
	6. Quit Registry Editor.
	
	When a WINS server pulls from another server (either on its own or after being
	triggered by a push notification from another server), the WINS server checks
	the remote server's push partner registry key for the OnlyDynRecs value. If the
	OnlyDynRecs value is set to 1, the pulling partner does not process static
	records. If the OnlyDynRecs value is set to 0 or if it is not found, static
	records are processed.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q135922 Windows NT Registry Parameters for WINS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
