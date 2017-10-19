---
layout: page
title: "Q110483: Directories Listed Many Times or Not at All on Mac. Volume"
permalink: /kb/110/Q110483/
---

## Q110483: Directories Listed Many Times or Not at All on Mac. Volume

	Article: Q110483
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a Macintosh volume on a Windows NT Advanced Server computer from
	a Macintosh computer, sometimes you see multiple copies of your directory or you
	do not see your directory at all. This problem occurs when under the following
	conditions:
	
	- A main user directory is created with full control permissions granted to
	  Everyone.
	
	- Each individual user is given a separate sub-directory with full control
	  granted only to the Administrators group and the user.
	
	- More than 13 (roughly) users have similarly created directories.
	
	
	WORKAROUND
	==========
	
	Use Macintosh file permissions to control file and directory access in similar
	situations.
	
	NOTE: You must use all Macintosh file permissions to resolve the problem. The
	problem still occurs if you mix Windows NT and Macintosh file permissions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.10. This problem was corrected in Windows NT Server version 3.5.
	
	Additional query words: prodnt Macintosh directories absent sfm
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
