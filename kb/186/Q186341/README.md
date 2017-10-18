---
layout: page
title: "Q186341: Superscoping vs. Supernetting"
permalink: kb/186/Q186341/
---

## Q186341: Superscoping vs. Supernetting

	Article: Q186341
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article briefly explains the differences between superscopes and
	supernetting and gives examples of when to use each.
	
	MORE INFORMATION
	================
	
	DHCP Superscoping is used when you need to assign non-supernetted or non-
	consecutive IP address subnets to the same physical segment. For example, if you
	needed to assign 199.1.1.x and 201.2.2.x addresses to the same physical network,
	you could use superscopes or if you needed to assign 199.1.0.x and 199.1.1.x and
	did not want to change the subnet mask to support supernetting.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q161571
	  TITLE : Using DHCP "Superscopes" to Serve Multiple Logical Subnets
	
	Supernetting is used when multiple, consecutive network addresses of the same
	Class are combined into blocks. For example, if you need to assign 199.1.1.x and
	199.1.2.x to the same physical network and want to change subnet mask. You would
	use the subnet mask of 255.255.254.0 and NOT use DHCP superscopes to assign
	addresses from DHCP server.
	
	Additional query words: supernet superscope
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
