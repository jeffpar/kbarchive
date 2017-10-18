---
layout: page
title: "Q96936: LABEL Truncates Multiple Spaces in Disk Label"
permalink: kb/096/Q96936/
---

## Q96936: LABEL Truncates Multiple Spaces in Disk Label

	Article: Q96936
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The LABEL command converts multiple spaces to a single space when you specify
	the label on the command line. If you do not specify a label on the command
	line, but instead wait until prompted, multiple spaces are preserved. The
	following examples list the commands and resulting labels:
	
	  Command                     Resulting Label
	  -------------------------------------------
	  label a: disk     1         DISK 1
	  label a: <ENTER>
	  disk     1                  DISK     1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, and
	6.21. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
