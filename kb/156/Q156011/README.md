---
layout: page
title: "Q156011: INFO: Use of the ADMIN Clause with Offline Views"
permalink: kb/156/Q156011/
---

## Q156011: INFO: Use of the ADMIN Clause with Offline Views

	Article: Q156011
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using an offline view with the ADMIN clause on the USE command allows users who
	are unable to reestablish a connection back to the server to revert to or
	identify added, deleted, or modified rows.
	
	MORE INFORMATION
	================
	
	The ADMIN clause on the USE command for offline views is a subset of the ONLINE
	clause. When you are using the ADMIN clause, you have all the same capabilities
	as the ONLINE clause, except that you cannot issue a TABLEUPDATE command. In the
	ADMIN mode, the user does not reestablish a link back to the server. In the
	ADMIN and ONLINE modes, the user knows which rows have been added, deleted, or
	modified in the offline view when using the GETNEXTMODIFIED or GETFLDSTATE
	commands. The ADMIN mode is needed for users who may be unable to reconnect back
	to the server, but want to identify added, deleted, or modified rows. Using only
	the USE command with a offline view does not allow a user to do this.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
