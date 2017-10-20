---
layout: page
title: "Q138916: HOWTO: Backing Up Visual FoxPro Setup Disks"
permalink: /kb/138/Q138916/
---

## Q138916: HOWTO: Backing Up Visual FoxPro Setup Disks

{% raw %}

	Article: Q138916
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to make a backup copy of a set of installation disks
	prior to installing Visual FoxPro. With the exception of Disk 1, Visual FoxPro
	disks use a format called DMF (Distribution Media Format). DMF increases the
	capacity of a 3.5-inch disk to approximately 1.7MB, thus reducing the number of
	disks needed to install Visual FoxPro. Because of this new format, DMF-formatted
	disks cannot be copied using the MS-DOS DISKCOPY command, or any other
	conventional method of copying floppy disks. However, the contents of the disks
	can be transferred to another storage device, such as a local hard disk, and
	then backed-up using tape backup or similar software.
	
	MORE INFORMATION
	================
	
	Instructions for transferring files from the DMF formatted floppy disks to a
	local hard drive are included in the Readme.hlp file located on Visual FoxPro
	Disk 1. The section titled "Installing Visual FoxPro from 3.5-inch Disks"
	discusses how to transfer the files from floppy disk to hard disk.
	
	NOTE: There is an error in the syntax of the FOR command in the Readme.hlp file.
	This is how the FOR command appears in the README.HLP file:
	
	     FOR %I IN (*.*) DO C:\DISKS\EXTRACT /C A:\%I C:\DISKS\%I
	
	The correct syntax for the command is:
	
	     FOR %I IN (A:\*.*) DO C:\DISKS\EXTRACT /C %I C:\DISKS
	
	Once the files have been transferred, they can be backed up by using any standard
	backup utility.
	
	REFERENCES
	==========
	
	For additional information, please refer to the Readme.hlp file on Visual FoxPro
	Disk 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
