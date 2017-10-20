---
layout: page
title: "Q112885: PC Adm: Err Msg: Notice 71 Failure to Compress Folder"
permalink: /kb/112/Q112885/
---

## Q112885: PC Adm: Err Msg: Notice 71 Failure to Compress Folder

{% raw %}

	Article: Q112885
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 2.1, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, when you
	compress the folders from within the Administrators program (ADMIN.EXE), the
	following error may occur:
	
	  Notice 71
	  Failure to Compress Folder
	
	CAUSE
	=====
	
	The error can be caused by corruption of folders and semaphore locking of
	folders.
	
	RESOLUTION
	==========
	
	If the folder is corrupt, it can be repaired using the following utilities:
	
	  dumpidx -n xxxxxxxx.idx
	
	This will dump out the folders English names and their associated hexadecimal
	names.
	
	Once the hexadecimal name of the folder is known, you can run FIXFLD.EXE:
	
	  Rename xxxxxxxx.fld xxxxxxxx.bad
	
	where xxxxxxxx.fld is the damaged folder.
	
	Run the following command from the directory containing the damaged folder:
	
	  fixfld xxxxxxxx.bad xxxxxxxx.fld
	
	This will run against the .BAD file and create the .FLD file. From ADMIN.EXE, run
	Admin, Local Admin, Folders, Compress.
	
	If the folder is semaphore locked, you can run the following to remove the
	locks:
	
	  foldcomp.exe -s
	
	This should be run from the directory containing the locked folders.
	
	MORE INFORMATION
	================
	
	For additional information on the DUMPIDX.EXE and FIXFLD.EXE utilities, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC:DB Database Maintenance Utilities (Complete)
	
	Additional query words: 3.00 3.00a 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
