---
layout: page
title: "Q66148: Setup Reports Error Copying Files in Entertainment Pack"
permalink: /kb/066/Q66148/
---

## Q66148: Setup Reports Error Copying Files in Entertainment Pack

	Article: Q66148
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	During setup of the Microsoft Windows Entertainment Pack, you may receive the
	following error message:
	
	  There was an error copying files to your hard drive. Please correct the
	  problem, and rerun setup.
	
	This error is caused by a copy failure to the hard drive, and is the result of
	one of the following situations:
	
	1. The hard disk is write-protected or the network subdirectory is set for
	  Read-Only.
	
	  Solution: Remove the write-protect feature on the hard disk or change network
	  privileges.
	
	2. The Windows Entertainment Pack files already exist on the hard drive and have
	  a Read-Only attribute.
	
	  Solution: Type the following command at the DOS prompt (in the appropriate
	  subdirectory) and re-run the setup program:
	
	  ATTRIB -R filename
	
	3. There is not enough hard-disk space to continue with setup of the Windows
	  Entertainment Pack.
	
	  The setup program checks for disk space immediately after the installation
	  directory is indicated (that is, C:\WINGAMES).
	
	  If another Windows program is running in the background and is taking up
	  additional hard-disk space (that is, communication software is downloading a
	  file) during installation of the Microsoft Entertainment Pack, this error may
	  arise.
	
	  Solution: Free hard-disk space for the Entertainment Pack installation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
