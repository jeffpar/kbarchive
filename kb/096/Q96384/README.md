---
layout: page
title: "Q96384: DoubleSpace Err Msg: Unrecognized Error #109"
permalink: kb/096/Q96384/
---

## Q96384: DoubleSpace Err Msg: Unrecognized Error #109

	Article: Q96384
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message when you attempt to mount a compressed
	volume file (CVF):
	
	  Unrecognized Error #109
	
	CAUSE
	=====
	
	Your CVF is probably too fragmented.
	
	WORKAROUND
	==========
	
	To work around this problem, either increase the MaxFileFragments setting in the
	DBLSPACE.INI file or defragment the CVF. These procedures are outlined below.
	
	1. Edit the DBLSPACE.INI file and increase the MaxFileFragments setting by using
	  the following steps:
	
	  WARNING: If you use the incorrect drive letters when you edit the DBLSPACE.INI
	  file, the system may stop responding (hang) when you restart it.
	
	  a. Remove the Read-Only, System, and Hidden file attributes on the
	     DBLSPACE.INI file. For example, if drive H is your host drive, type the
	     following at the MS-DOS command prompt and press ENTER:
	
	  " attrib c:\dblspace.ini -r -s -h" (without the quotation marks)
	
	  b. Using MS-DOS Editor, edit the DBLSPACE.INI file and increase the value for
	     MaxFileFragments (2600 is a good value to try).
	
	  c. Save the DBLSPACE.INI file and quit MS-DOS Editor.
	
	  d. Use the ATTRIB command to reset the file attributes on DBLSPACE.INI. For
	     example, if your host drive is drive H, type the following command and
	     press ENTER:
	
	  " attrib h:\dblspace.ini +r +s +h" (without the quotation marks)
	
	2. Restart your computer and try to mount the drive again. If you still cannot
	  mount the CVF, proceed to step 3.
	
	3. Run a surface scan utility, such as Symantec's Norton Utilities Norton Disk
	  Doctor (NDD.EXE) version 7.0 or later. If you still cannot mount the CVF,
	  proceed to step 4.
	
	4. Clear the file attributes from the DoubleSpace CVF and defragment the drive
	  using the procedure below.
	
	  WARNING: If the DoubleSpace CVF is mounted when you perform this procedure,
	  you will corrupt your DoubleSpace drive.
	
	  a. Unmount your DoubleSpace drive or start your computer from an MS-DOS 6.0
	     system disk in drive A that does not have a DBLSPACE.BIN file.
	
	  b. Remove the Read-Only, System, and Hidden file attributes on the
	     DBLSPACE.<XXX> file. For example, if the file is H:\DBLSPACE.000,
	     type the following at the MS-DOS command prompt and press ENTER:
	
	  " attrib h:\dblspace.000 -r -s -h" (without the quotation marks)
	
	  c. Run Microsoft Defragmenter (Defrag) by typing "defrag" (without the
	     quotation marks) at the MS-DOS command prompt and pressing ENTER.
	
	  d. Use the ATTRIB command to reset the file attribute on
	     DBLSPACE.<XXX>. For example, if the file is H:\DBLSPACE.000, type
	     the following at the MS-DOS command prompt and press ENTER:
	
	  " attrib h:\dblspace.000 +r +s +h" (without the quotation marks)
	
	  e. You should now be able to mount the CVF if you unmounted it. If you
	     restarted your computer from drive A in step a, restart your computer from
	     drive C.
	
	Norton Utilities is manufactured by Symantec, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.00 err msg double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
