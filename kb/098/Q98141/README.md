---
layout: page
title: "Q98141: Replacing a Corrupted NET.ACC with Its Backup"
permalink: /kb/098/Q98141/
---

## Q98141: Replacing a Corrupted NET.ACC with Its Backup

	Article: Q98141
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	There is no utility that can fix a corrupted NET.ACC file, but you can replace a
	corrupted one with its uncorrupted backup copy.
	
	Note: DON'T copy a NET.ACC file directly from a backup primary domain controller
	(PDC) to the primary; it can cause problems. Instead, follow this procedure:
	
	1. Change the primary PDC role to backup.
	
	2. Promote a backup PDC to primary.
	
	3. Bring the PDCs back up.
	
	The NET.ACC is copied from the new primary to the new backup, making a NET.ACC
	with all your accounts intact. You can then swap PDC roles again and be back in
	business.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
