---
layout: page
title: "Q246316: Information About Interix and Filenames"
permalink: /kb/246/Q246316/
---

## Q246316: Information About Interix and Filenames

	Article: Q246316
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Currently, the Interix system does not have a single-rooted file system. In
	Microsoft Windows NT, multiple volumes are available by using drive letters. To
	use Interix to obtain access to these volumes, you must use the syntax "//L"
	(where L must be an uppercase letter).
	
	This requirement directly affects your code porting process. Configure scripts,
	makefiles, and objects such as file selection boxes in X programs do not make
	allowances for the "special" volume prefix.
	
	There are two scenarios where this is an issue:
	
	- Configure scripts assume the absolute locations of certain utilities ->
	  /bin/rm or /bin/sh. On an Interix system, sh is located in $Interix_ROOT/bin
	  ($OPENNT_ROOT deprecated). In shell scripts of pathnames passed to functions
	  /bin/sh will not work.
	
	- Even if absolute locations (such as //C/Interix/bin) are defined for the
	  current installation, these will not be correct on systems where Interix is
	  installed on a different volume.
	
	MORE INFORMATION
	================
	
	For additional information, see the "Porting Applications in C" Tech Note at the
	following Interix Web site:
	
	  http://www.interix.com/newinterix/main_technotes.htm
	
	Additional query words: depricated
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
