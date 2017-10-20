---
layout: page
title: "Q96707: Installing MS-DOS from Drive B"
permalink: /kb/096/Q96707/
---

## Q96707: Installing MS-DOS from Drive B

{% raw %}

	Article: Q96707
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use drive B instead of drive A to install MS-DOS
	Upgrade.
	
	For this setup procedure, you need your MS-DOS Upgrade disks and one or two blank
	disks. The blank disk(s) you supply should be unformatted or newly formatted.
	
	NOTE: If you are upgrading a version of MS-DOS earlier than version 3.0, you must
	use drive A to run Setup.
	
	MORE INFORMATION
	================
	
	To install MS-DOS Upgrade from drive B, proceed as follows:
	
	1. Start your computer with your current version of MS-DOS.
	
	2. Insert Disk 1 from your Upgrade package in drive B.
	
	3. Type "b:setup" (without the quotation marks) and follow the instructions on
	  your screen.
	
	4. Setup asks you to insert the Uninstall disk(s), which is the blank
	  unformatted or newly formatted disk you supply. Insert this disk in drive A.
	
	  Setup cannot continue unless you insert a blank or newly formatted disk in
	  drive A. You must use drive A because Setup copies files onto the Uninstall
	  disk(s) that MS-DOS needs to start your computer if you ever decide to
	  restore your earlier version of MS-DOS.
	
	REFERENCES
	==========
	
	Version 5.0
	-----------
	
	For more information about the MS-DOS Setup program or Uninstall disk, see
	Chapter 2 of the "Getting Started" guide for version 5.0.
	
	Version 6.0 or 6.2
	------------------
	
	For more information about the MS-DOS Setup program or Uninstall disk, see the
	"User's Guide" for version 6.0 or 6.2, or see MS-DOS Help (type "help" (without
	the quotation marks) at the MS-DOS command prompt and press ENTER).
	
	Additional query words: 6.22 6.00 5.00 6.20 dos setup instal
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
