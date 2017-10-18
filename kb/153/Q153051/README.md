---
layout: page
title: "Q153051: Jetpack.exe May Complete and Not Compress DHCP or WINS Database"
permalink: kb/153/Q153051/
---

## Q153051: Jetpack.exe May Complete and Not Compress DHCP or WINS Database

	Article: Q153051
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Jetpack.exe (Jetpack) is used to compact Wins.mdb or Dhcp.mdb, it may
	complete without an error and still be using the original Wins.mdb or Dhcp.mdb.
	This happens when Jetpack is run and a temporary file is specified on a
	partition other than the one where the original .mdb file is located. Jetpack
	will display a message that it is moving the temp file to the original location
	and then respond that Jetpack completed successfully.
	
	CAUSE
	=====
	
	After Jetpack writes the new .mdb files to the location specified on the command
	line, it removes the original and moves the Temp.mdb while renaming it Wins.mdb
	or Dhcp.mdb. Jetpack can only move files that are located on the same partition.
	When Jetpack moves a file to a different partition, it actually copies the file
	then renames it if necessary. When Jetpack can not move the file successfully it
	does not report an error and gives a message that Jetpack was successful.
	
	RESOLUTION
	==========
	
	It may be necessary to run Jetpack with the temp file located on a different
	partition than the original WINS or DHCP database due to disk resources. If this
	is necessary, copy the temp file back to the Wins or Dhcp directory and rename
	it to Wins.mdb or Dhcp.mdb prior to restarting the WINS or DHCP service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT version 4.0.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
