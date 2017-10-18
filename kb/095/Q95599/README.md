---
layout: page
title: "Q95599: DblSpace Err Msg: DoubleSpace Cannot Convert Your..."
permalink: kb/095/Q95599/
---

## Q95599: DblSpace Err Msg: DoubleSpace Cannot Convert Your...

	Article: Q95599
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to convert a Stacker
	volume to a DoubleSpace volume:
	
	  DoubleSpace cannot convert your Stacker drives because they have a cluster
	  size other than 8K. To convert your Stacker drives to DoubleSpace format,
	  follow the instructions in the DoubleSpace section of the README.TXT file.
	
	CAUSE
	=====
	
	When you convert a Stacker volume to a DoubleSpace volume, your Stacker
	compressed volume file (CVF) must have 8K clusters. If it does not, you receive
	the error message.
	
	When you install Stacker version 2.0 or 3.0, you have the option of using cluster
	sizes other than the 8K default.
	
	- Stacker 2.0 supports 4K and 8K clusters
	
	- Stacker 3.0 supports 4K, 8K, 16K, and 32K clusters
	
	Since the conversion of a Stacker volume is done cluster by cluster, and
	DoubleSpace uses 8K clusters, DoubleSpace cannot convert Stacker volumes if they
	don't have 8K clusters.
	
	NOTE: This error occurs regardless of the Stacker volume file cluster size if the
	Stacker volume file has never been mounted.
	
	Additional query words: 6.00 6.20 err msg errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
