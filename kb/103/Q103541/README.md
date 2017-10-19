---
layout: page
title: "Q103541: MS-DOS 6.2 Setup Err Msg: You Deleted Files from the..."
permalink: /kb/103/Q103541/
---

## Q103541: MS-DOS 6.2 Setup Err Msg: You Deleted Files from the...

	Article: Q103541
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	You may receive the following error message if you try to run MS-DOS 6.2 Upgrade
	SETUP /E:
	
	  You deleted files from the directory that setup needs to install the optional
	  programs.
	
	CAUSE
	=====
	
	This error message occurs when the PATH statement does not contain the directory
	that contains your MS-DOS files (typically C:\DOS).
	
	WORKAROUND
	==========
	
	To work around this problem, make sure the directory that contains your MS-DOS
	files is in your PATH statement. For example:
	
	  path=c:\dos
	
	Additional query words: 6.22 6.20 switch
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
