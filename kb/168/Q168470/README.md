---
layout: page
title: "Q168470: SCopy Copies Local Domain Group to Other Domains"
permalink: kb/168/Q168470/
---

## Q168470: SCopy Copies Local Domain Group to Other Domains

	Article: Q168470
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A local group from a trusted domain appears to have permissions to a file on a
	trusting domain when the file's permissions are examined with CACLS, File
	Manager, or Windows NT Explorer. But the local group permissions have no effect
	on the file in the trusting domain. If a user's only permissions to the file in
	the trusting domain come from his or her membership in the trusted domain's
	local group, he or she does not have access to the file in the trusting domain.
	
	CAUSE
	=====
	
	The Windows NT Resource Kit utility SCopy was used to copy the file from the
	trusted domain to the trusting domain.
	
	
	RESOLUTION
	==========
	
	Remove local groups from file permissions before using SCopy /o to copy files
	from one domain to another.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
