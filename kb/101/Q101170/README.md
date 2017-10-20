---
layout: page
title: "Q101170: Promise Technologies IDE Controller Cards and DoubleSpace"
permalink: /kb/101/Q101170/
---

## Q101170: Promise Technologies IDE Controller Cards and DoubleSpace

{% raw %}

	Article: Q101170
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SUMMARY
	=======
	
	The Promise Technologies model 4030VL VESA local-bus-cached IDE controller card
	and the model DC200 ISA-cached IDE controller card both need a firmware update
	to run properly with the MS-DOS 6.0 DoubleSpace disk- compression program.
	
	
	MORE INFORMATION
	================
	
	There are three EPROMs for the model 4030VL controller card. Check the last four
	digits of the EPROM number. If the last four digits are 203E, 203O, or 203X, the
	card is compatible with DoubleSpace. The latest revisions as of 6/20/93 are as
	follows:
	
	  P43204-E
	  P43204-O
	  P43204-X
	
	The model DC200 controller card also has three EPROMs. If the number on the
	EPROMs is P20103E, P20103O, or P20103X, the card is compatible with
	DoubleSpace.
	
	For more information, contact Promise Technologies.
	
	The products included here are manufactured by Promise Technologies, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 6.00 6.20 hang hung lock 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
