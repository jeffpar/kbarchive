---
layout: page
title: "Q156055: Windows NT Setup Stops Responding w/HP CDR4020I on SCSI Chain"
permalink: /kb/156/Q156055/
---

## Q156055: Windows NT Setup Stops Responding w/HP CDR4020I on SCSI Chain

	Article: Q156055
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Winnt /b on a computer that has a Hewlett-Packard (HP) CDR4020I on
	a SCSI chain, Setup either stops responding at the blue screen after the first
	restart, or it stops responding on the third setup disk.
	
	CAUSE
	=====
	
	The HP CDR4020I is a Write Once Read Many (WORM) device. Windows NT does not
	support WORM devices because of how they register themselves with the SCSI host
	adapter.
	
	RESOLUTION
	==========
	
	Disconnect the power to the HP CDR4020I and restart Setup. It will bypass the
	detection of the HP CDR4020I and complete the setup process.
	
	NOTE: This problem may occur with other WORM devices. For testing purposes
	disconnect the WORM and rerun Setup.
	
	The Hewlett-Packard CDR4020I is manufactured by Hewlett-Packard Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
