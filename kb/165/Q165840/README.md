---
layout: page
title: "Q165840: Using Stripe Set During Initialization May Result in Data Loss"
permalink: /kb/165/Q165840/
---

## Q165840: Using Stripe Set During Initialization May Result in Data Loss

	Article: Q165840
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create software RAID 5 stripe sets with parity partitions in Windows NT
	Server.
	
	RAID 5 stripe sets consist of striping data with parity information across
	multiple drives in 64KB stripes. During the initialization stage of creating the
	stripe set with parity, Windows NT Server calculates the parity information for
	each 64KB stripe.
	
	You are not inhibited by Windows NT Disk Administrator from formatting the stripe
	set and then immediately using the volume while initialization is still in
	progress. Windows NT Server also does not inhibit you from using a volume that
	is being recovered during regeneration after a drive failure. This is because
	the FTDISK driver makes sure that all changes made to the disk are mirrored in
	the parity block. The driver takes care of all synchronization problems
	including the writing of the data catching up with the initialization of the
	parity.
	
	However, while the volume is initializing or regenerating, it is "exposed"; in
	other words, if a drive failure occurs while the stripe set with parity is
	initializing, you will lose your entire set. It is only after the stripe set is
	initialized that you have any fault tolerance. The same process occurs with bad
	sectors. Sector sparing is not enabled until after initialization is complete.
	
	If you choose to use the volume during initialization or regeneration, you run
	the risk of losing any and all data on the volume if in the event the
	initialization process fails. Because of this, Microsoft recommends waiting for
	a complete initialization or regeneration of the stripe set before you use it to
	ensure the protection and integrity of your data.
	
	MORE INFORMATION
	================
	
	The Event Viewer will contain events reporting when the stripe set starts
	initialization, completes initialization, or fails initialization.
	
	  Event ID: 16
	  Source: FTDISK
	  Description: Synchronization of a stripe with parity set started.
	
	  Event ID: 20
	  Source: FTDISK
	  Description: Synchronization of a stripe with parity set is complete.
	
	  Event ID: 24
	  Source: FTDISK
	  Description: Synchronization of a stripe with parity failed.
	
	
	For additional information, please see the following articles here in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q135061
	  TITLE: Regeneration of a Stripe Set With Parity Disk Fails
	
	Additional query words: SS generate
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
