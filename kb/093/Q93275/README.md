---
layout: page
title: "Q93275: VWF: Setup - How to Install Run-Time From Hard Disk"
permalink: /kb/093/Q93275/
---

## Q93275: VWF: Setup - How to Install Run-Time From Hard Disk

{% raw %}

	Article: Q93275
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Video for Windows 1.0 includes a royalty-free run time that can be distributed
	according the the Video for Windows license agreement.
	
	Video for Windows run time installation was not designed to run from a hard disk.
	However, it can be installed from a hard disk by either modifying the SETUP.INF
	file or installing from a directory called DISK1.
	
	The run time installs correctly if you install it from a floppy disk, following
	the instructions in the release notes (VFW1.WRI) document that is provided with
	Video.
	
	NOTE: The same problem occurs if installing from a CD-ROM.
	
	SYMPTOMS
	========
	
	When run from a hard disk, the Video run time setup gives an error:
	
	  Can't open file c:\disk1\mplayer.ex_.
	
	CAUSE
	=====
	
	The setup program is looking to verify that the complete setup structure is
	available. It does this by looking for a specific file, in this case,
	mplayer.ex_. However, it is looking in a specific directory for this file.
	
	NOTE: This does not cause a problem when running setup from a floppy.
	
	Resolution 1 - Install from directory named DISK1:
	
	1. Create a directory on the hard disk called DISK1.
	
	2. Copy the run-time files from the RUNTIME directory on the Video Drivers disk
	  into the DISK1 directory.
	
	3. Run the SETUP program in the DISK1 directory.
	
	Resolution 2 - Modify the SETUP.INF file:
	
	1. Open the SETUP.INF file in the hard disk directory that contains the runtime
	  installation files. Use a text editor such as the Windows 3.1 Notepad
	  accessory.
	
	2. Locate the following line in the SETUP.INF file:
	
	     "1", "Runtime", "mplayer.ex_", "..\disk1"
	
	3. Modify the line to read as follows:
	
	     "1", "Runtime", "mplayer.ex_", "."
	
	4. Save the changes to the SETUP.INF file and then run the SETUP program in the
	  hard disk directory.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
