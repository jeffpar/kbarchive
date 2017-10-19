---
layout: page
title: "Q112902: PC Gen: Err Msg: Notice 34 Could Not Access Log...File"
permalink: /kb/112/Q112902/
---

## Q112902: PC Gen: Err Msg: Notice 34 Could Not Access Log...File

	Article: Q112902
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under versions 2.1x, 3.0, 3.0a and 3.2 of Microsoft Mail for PC Networks, when
	you log into the MS-DOS client, the following error message appears:
	
	  Notice 34
	  Could Not Access Log Information File
	
	CAUSE
	=====
	
	This error may have been caused by corruption in any of the following files:
	
	  ACCESS.GLB
	  ACCESS2.GLB
	  ACCESS3.GLB
	
	ACCESS.GLB, ACCESS2.GLB, and ACCESS3.GLB can be checked for corruption by
	dividing them by the following figures:
	
	  ACCESS.GLB divide by 586
	  ACCESS2.GLB divide by 69
	  ACCESS3.GLB divide by 512
	
	If these files do not divide evenly, there is a good chance they are corrupted.
	
	RESOLUTION
	==========
	
	If a backup exists restore the following files:
	
	  ACCESS.GLB
	  ACCESS2.GLB
	  ACCESS3.GLB
	  ADMIN.NME
	  ADMINSHD.NME
	  ADMIN.GRP
	  ADMINSHD.GRP
	
	These files should all be restored from the most recent, valid backup. Should
	users have been added to the mail system since the time of this backup, these
	users will have to be redefined after the restoration. MS-DOS client users
	should make an archive of their mail folders and Inbox, prior to the
	restoration, which can be restored upon recreation of the mailbox. Windows
	client users should make a backup of their Mail message file which can be
	re-imported using the Import Folders function upon recreation of their mailbox.
	
	
	Additional query words: 2.1x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0b,3.2
	
	=============================================================================
	
