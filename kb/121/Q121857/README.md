---
layout: page
title: "Q121857: MS-DOS Setup Displays Error: Setup Error Detected"
permalink: /kb/121/Q121857/
---

## Q121857: MS-DOS Setup Displays Error: Setup Error Detected

{% raw %}

	Article: Q121857
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing MS-DOS Upgrade or MS-DOS StepUp, the following error
	message is displayed:
	
	  SETUP ERROR DETECTED
	
	  The following disk error was detected. The listed file was not copied.
	
	  Error reading --> COMMAND.DAT
	
	  To exit Setup, press ENTER.
	
	CAUSE
	=====
	
	The Uninstall process of Setup displays the above error message when it is
	trying to copy C:\COMMAND.COM to A:\COMMAND.DAT on the Uninstall disk.
	
	This error occurs when COMMAND.COM is cross-linked with another file, has
	allocation unit errors, or there is a bad sector on the disk.
	
	RESOLUTION
	==========
	
	You can correct this problem by replacing the COMMAND.COM file. Copy the
	COMMAND.COM file from your DOS directory over the existing COMMAND.COM file in
	the root directory using the following commands:
	
	  attrib -r command.com
	
	  ren command.com command.old
	
	  copy c:\dos\command.com c:\command.com
	
	NOTE: If the Uninstall portion of setup is bypassed by using the SETUP /G switch,
	the error does not occur. Also, using CHKDSK /F or SCANDISK may allow you to
	work around this problem.
	
	
	Additional query words: 6.00 6.20 6.21 6.22 setup error err msg command.dat step-up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
