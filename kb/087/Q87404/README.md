---
layout: page
title: "Q87404: PC DB: What the TID.GLB File Is Used For"
permalink: kb/087/Q87404/
---

## Q87404: PC DB: What the TID.GLB File Is Used For

	Article: Q87404
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail system maintains unique tuple identifiers (tids) in several
	file record structures. These tuple identifiers are used to guarantee the
	authenticity of each user's name.
	
	For example, if John Smith has the mailbox name JohnS and eventually gets
	replaced with a new user named JohnS, the tuple identifier gets changed with the
	deletion and re-creation of the mailbox name. Any users who had the old JohnS in
	their Personal Address List would no longer have a valid address definition
	because the tuple identifiers (or "tids") would not match.
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
