---
layout: page
title: "Q90930: Shared CD-ROM or Floppy Drives Must Contain a Disk At Startup"
permalink: /kb/090/Q90930/
---

## Q90930: Shared CD-ROM or Floppy Drives Must Contain a Disk At Startup

	Article: Q90930
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select the Re-share At Startup option when sharing a floppy or CD-ROM
	drive, and you start Windows for Workgroups without a disk in the shared drive,
	the following error may be displayed.
	
	  System Error Cannot Read from Drive X.
	
	(where X: is the driver letter representing the shared drive)
	
	If you choose the Cancel button, the following error message will be displayed:
	
	  An error occurred while trying to share X. Error 5291. The path X:\ does not
	  exist. Do you want to continue to share X each time you start Windows for
	  Workgroups?
	
	  -or-
	
	  An error occurred while trying to share X. Error 5341. The path X:\ does not
	  exist.
	
	CAUSE
	=====
	
	The Windows for Workgroups File Manager allows the sharing of local disk
	resources including fixed disks, floppy drives, and CD-ROM drives. You can make
	these shares persistent by selecting the Re-share At Startup option. If you
	select this option and the shared CD-ROM or floppy drive does not contain a disk
	when Windows for Workgroups is restarted, the above errors may occur.
	
	WORKAROUND
	==========
	
	To eliminate these error messages, make sure that the shared drive contains a
	disk before starting Windows for Workgroups.
	
	There are several ways to recover from the error condition, depending on the
	intended result.
	
	- To immediately reestablish the share, insert a disk in the shared drive and
	  choose Retry in the System Error Cannot Read From Drive X dialog box.
	
	- To not reestablish the share for the current session, but attempt to
	  reestablish the share in future sessions, choose Cancel at the System Error
	  Cannot Read From Drive X dialog box and choose Yes at the Do You Want To
	  Continue To Share X Each Time You Start Windows for Workgroups? dialog box.
	
	- To not reestablish the share for the current or future sessions, choose
	  Cancel in the System Error Cannot Read From Drive X dialog box and choose No
	  at the Do You Want To Continue To Share X Each Time You Start Windows For
	  Workgroups? dialog box.
	
	Additional query words: 3.10 3.1 re-establish 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
