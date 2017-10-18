---
layout: page
title: "Q96185: Norton Speed Disk May Cause Lost Clusters with DBLSPACE"
permalink: kb/096/Q96185/
---

## Q96185: Norton Speed Disk May Cause Lost Clusters with DBLSPACE

	Article: Q96185
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use any version of Symantec Norton Speed Disk prior to version 7.0 on
	a compressed DoubleSpace drive, the DBLSPACE /CHKDSK command may report a very
	large number of lost allocation units.
	
	This occurs when you have set the option to Clear Unused Disk Space and then
	perform a full optimization.
	
	RESOLUTION
	==========
	
	To correct this problem, type the following at the MS-DOS command prompt and
	then press ENTER:
	
	  " dblspace /chkdsk /f " (without the quotation marks)
	
	NOTE: The Compress program from PCTools versions 5.5 and 6.0 may also cause the
	above problem if the Clear Unused Disk Space option is set when you perform a
	full optimization.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.00 PCTools Compress Speedisk Norton dblspace DoubleSpace double space 3rdparty 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
