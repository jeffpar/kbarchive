---
layout: page
title: "Q86875: BUG: Dsklayt2 /W Option Without Disk Number Fails"
permalink: kb/086/Q86875/
---

## Q86875: BUG: Dsklayt2 /W Option Without Disk Number Fails

	Article: Q86875
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying the /W option switch to the Dsklayt2 program displays the program's
	usage screen.
	
	CAUSE
	=====
	
	Unless a number immediately follows the /W option switch, the /W option switch
	is not allowed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Dsklayt2 program in the
	Microsoft Windows Software Development Kit (SDK) version 3.1. We are researching
	this problem and will post new information here as it becomes available.
	
	MORE INFORMATION
	================
	
	Beginning on page 42 of the "Microsoft Windows Software Development Kit: Setup
	Toolkit for Windows," the /W option switch is documented as follows:
	
	  Specifies the writable disk. For n, specify a disk number. This field
	  overrides the specification in the layout file. If you omit this option,
	  Dsklayt2 makes the last disk in the installation the writable disk. If you
	  specify the option without a disk number, Dsklayt2 assumes that all disks are
	  read-only.
	
	The /W option is not required to build a set of installation disks. If you do not
	specify the /W option, Dsklayt2 creates a setup information (INF) file that
	labels the last disk in the layout as a writable disk. If the setup script does
	not specify a label for the final disk, when the user runs the setup script,
	Setup will request the final disk as the "writable" disk. To avoid this
	situation, specify a label for each disk.
	
	The Dsklayt2 program works in conjunction with the Dsklayt program. The /W option
	switch invokes the Writable Label feature in the Dsklayt program. Chapter 4 of
	the "Setup Toolkit" manual documents both programs as part of the Disk Layout
	Utilities.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
