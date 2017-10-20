---
layout: page
title: "Q104530: Step-Up or Uninstall Err Msg: Error Reading File DOSSETUP.INI"
permalink: /kb/104/Q104530/
---

## Q104530: Step-Up or Uninstall Err Msg: Error Reading File DOSSETUP.INI

{% raw %}

	Article: Q104530
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS 6.2 Step-Up and MS-DOS Uninstall may exit with the following error
	message:
	
	  Error reading file DOSSETUP.INI
	
	CAUSE
	=====
	
	This error occurs when MS-DOS Step-Up or Uninstall cannot find DOSSETUP.INI or
	UPDATE.INI. This problem can occur if the files are missing, corrupted, or not
	located on the same drive as SETUP.EXE (or UNINSTAL.EXE).
	
	RESOLUTION
	==========
	
	To work around this problem, check the following:
	
	- Ensure all the MS-DOS 6.2 Step-Up files are on the same disk.
	
	- If you are uninstalling MS-DOS, ensure the Uninstall disk is in drive A.
	
	- Ensure MS-DOS can read the disk. For example, type "copy /b a:*.* nul"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER.
	
	- If you downloaded MS-DOS Step-Up from one of the electronic services, try
	  downloading it again.
	
	Additional query words: 6.22 6.20 fatal_text fatal text
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
