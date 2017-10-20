---
layout: page
title: "Q94638: Leftover IBM System Files Cause Hangs and Keyboard Problems"
permalink: /kb/094/Q94638/
---

## Q94638: Leftover IBM System Files Cause Hangs and Keyboard Problems

{% raw %}

	Article: Q94638
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During installation of MS-DOS Upgrade Setup does not delete IBM PC-DOS, Digital
	DR DOS, or Novell DOS system files; instead, it leaves them in the root of the
	startup drive (usually drive C). Their existence can cause a variety of
	unexpected behavior including the following:
	
	- The system stops responding (hangs)
	
	- Keyboard problems
	
	- File Manager problems
	
	RESOLUTION
	==========
	
	To avoid these and other problems, delete the IBM, DR DOS, or Novell DOS system
	files. To do this, you need to first remove the files' hidden, system, and
	read-only file attributes by typing the following at the root directory MS-DOS
	command prompt:
	
	  " attrib -r -s -h ibm*.com " (without the quotation marks)
	
	After you remove these attributes, you can delete the files with the MS-DOS
	DELETE command by typing the following at the root directory MS-DOS command
	prompt:
	
	  " del ibm*.com " (without the quotation marks)
	
	If you are using MS-DOS 6.0 or later, you can delete the IBM, DR DOS, or Novell
	DOS system files using the DELTREE program without having to use the ATTRIB
	program. For example, type "deltree /y c:\ibm*.com" (without the quotation
	marks) at the MS-DOS command prompt and then press ENTER.
	
	WARNING: Do not remove the IBM, DR DOS, or Novell DOS system files if you think
	you might remove your current version of MS-DOS. After you delete the IBM, DR
	DOS, or Novell DOS system files, you cannot remove your current version of
	MS-DOS using the Uninstall disk.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 boot pcdos pc dos ibmbio.com ibmdos.com dr-dos drdos novell-dos 5.0 6.0 7.0
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
