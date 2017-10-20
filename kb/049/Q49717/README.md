---
layout: page
title: "Q49717: Using MS-DOS Shell to Format Low-Density Disks"
permalink: /kb/049/Q49717/
---

## Q49717: Using MS-DOS Shell to Format Low-Density Disks

{% raw %}

	Article: Q49717
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MS-DOS Shell's "DOS Utilities" title list contains a FORMAT command. If you
	select this utility, the MS-DOS Shell displays a dialog box and a default
	parameter, of "a:". This is documented on Page 33 of the "Microsoft MS-DOS Shell
	User's Guide" manual for version 4.0.
	
	If you have a high-density drive (that is, 5.25-inch 1.2 MB or 3.5-inch 1.44 MB)
	and high-density floppies, you should just press the ENTER key. If you have a
	low-density drive, this is not a concern because only low- density disks can be
	used. You just need to be careful within the MS-DOS Shell or at the command line
	when using low-density disks in a high-density drive. You usually won't need to
	change the default of "a:".
	
	In the above situation, you must add to the "a:" default an extra parameter to
	format low-density disks in a high-density drive. For 5.25-inch 360K disks, the
	parameter is /F:360K. For 3.5-inch 720K disks, the parameter is /F:720K. This
	makes the dialog box display either "a: /F:360K" or "a: /F:720K", depending on
	disk size.
	
	Changing parameters in a dialog box is often forgotten while using the MS-DOS
	Shell, since the MS-DOS Shell allows you to point and click without typing, and
	in many cases without any need for documentation.
	
	MORE INFORMATION
	================
	
	If you have a high-density disk drive and format both low-density and high-
	density disks in the drive, you can avoid this problem by adding a program with
	a title similar to "Format low density" that would format a disk with the "/4"
	option.
	
	The default MS-DOS Shell command definition for the FORMAT command is as
	follows:
	
	  format [/t"Format Utility"/i"Enter drive to Format."/p
	         "Parameters . .  "/d"a: "/r]||pause||
	
	The line above has been split immediately following the "/p" parameter, but
	should fit on one line. The ||'s above are generated with the F4 key.
	
	To make a "Format low density" program entry, just copy the entry to a new entry,
	change the program name, then change the program's command options. The string
	in quotation marks following "/t" can be changed to "Format low density
	Utility", and the string following "/d" can be changed to "a: /F:360K" or "a:
	/F:720K", depending on disk size.
	
	Additional query words: 4.00 4.01 5.00 5.00a 6.00 6.20 6.21 6.22 Dosshell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
