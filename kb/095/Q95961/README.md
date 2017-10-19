---
layout: page
title: "Q95961: PC Win: Corrupted Address List Caused by Corrupted NETWORK.GLB"
permalink: /kb/095/Q95961/
---

## Q95961: PC Win: Corrupted Address List Caused by Corrupted NETWORK.GLB

	Article: Q95961
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0 of Microsoft Mail for Windows, the Address List can appear to be
	corrupted. When this occurs, no Global Address List (GAL) or Network List is
	visible (only a Personal Address List is available), or only some of the Network
	List is visible. The Microsoft Mail MS-DOS and Macintosh client applications are
	not affected.
	
	CAUSE
	=====
	
	The NETWORK.GLB file can cause this problem when a record lists the network name
	and mailbag in incorrect locations.
	
	RESOLUTION
	==========
	
	To verify this corruption, confirm that the size of the NETWORK.GLB file is a
	multiple of 122 bytes. If it is not, use the Debug utility to repair the file
	and test the address list.
	
	If the NETWORK.GLB file is in good condition, check for possible lock on
	NETWORK.GLB, GAL.NME, GALINDEX.GLB, and GALNETPO.GLB. As a last option, reboot
	the server to release all locks on these files.
	
	Additional query words: 3.00 PAL
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail350 kbMail320
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	
