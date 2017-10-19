---
layout: page
title: "Q71543: MS-DOS Err Msg: &quot;Bad Sectors Being Bypassed&quot; with UNFORMAT"
permalink: /kb/071/Q71543/
---

## Q71543: MS-DOS Err Msg: &quot;Bad Sectors Being Bypassed&quot; with UNFORMAT

	Article: Q71543
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Problem:
	
	When I attempt an UNFORMAT command on a low density disk by typing
	
	  " unformat <drive_letter>:" (without the quotation marks)
	
	then I get the error message:
	
	  Bad sector being bypassed.
	
	This message is displayed continuously and system seems to be hung.
	
	Response:
	
	This problem can occur in two situations:
	
	1. A low density disk is already formatted as low density and is then
	  reformatted for high density in a high density drive. When an UNFORMAT
	  command is attempted on this newly formatted disk, the screen will display
	  the error message "Bad sectors being bypassed." This message is displayed
	  continuously for more than 15 minutes, and then it returns the error
	  message:
	
	  Unable to find the MIRROR control file. If you want to search for the MIRROR
	  image file through the entire hard drive, press Y, or press N to cancel the
	  UNFORMAT command.
	
	  During these 15 minutes, the system seems to be hung.
	
	To Reproduce the Problem
	------------------------
	
	a. Use the FORMAT command to format a low density disk as a low density. For
	  example:
	
	  C:\&gt;format a:/f:360
	
	  -or-
	
	  C:\&gt;format a:/f:720
	
	b. Reformat the disk as a high density disk. This requires a high density drive
	  and no extra parameters with the FORMAT command. For example:
	
	  C:\&gt;format a:
	
	  Format will display the error message:
	
	  Existing format differs from that specified.
	  This disk cannot be unformatted.
	  Proceed with Format? (y/n)
	
	c. Press Y and press ENTER to continue formatting.
	
	d. Unformat the newly formatted disk using the UNFORMAT command. For example:
	
	  C:\&gt;unformat a:
	
	e. A low density disk is formatted as high density in a high density drive, and
	  an UNFORMAT command is attempted on this newly formatted disk.
	
	To Reproduce the Problem
	------------------------
	
	a. Use the FORMAT command to format a low density disk as a high density. This
	  requires a high density drive and no extra parameters with the FORMAT
	  command. For example:
	
	  C:\>format a:
	
	b. Unformat the newly formatted disk using UNFORMAT command. For example:
	
	  C:\>unformat a:
	
	In most cases, the low density disk can be formatted successfully to high
	density. But the format may not be reliable, and it will mark many sectors as
	bad. For this reason, only high density disks be formatted as high density. When
	an UNFORMAT command is attempted on this disk, it has to make an attempt to read
	the sectors and bypass the bad sectors.
	
	The FORMAT command in MS-DOS version 5.0 examines if the disk is already
	formatted. If the new format specified is different from the existing format, it
	warns you that the disk cannot be unformatted. If you decide to continue with
	formatting, the disk will be formatted for the specified media type and the disk
	cannot be unformatted.
	
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
