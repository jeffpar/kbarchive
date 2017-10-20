---
layout: page
title: "Q246314: Configure Scripts and Porting: Configuration Scripts in Interix"
permalink: /kb/246/Q246314/
---

## Q246314: Configure Scripts and Porting: Configuration Scripts in Interix

{% raw %}

	Article: Q246314
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains configuration scripts in Interix.
	
	MORE INFORMATION
	================
	
	The following is a list of configuration script properties:
	
	- Interix does not have a single root file system. The file system on Interix
	  exists on multiple drives, each of which has its own root.
	
	- Interix does not have a standard file hierarchy. The predefined file
	  hierarchy is offset from the root of a drive by some directory sub tree. The
	  value of this offset is available in the Interix environment from the value
	  of the shell variable Interix_ROOT or with the "getconf CS_INSTALLEDDIR"
	  (without the quotation marks) command. As a side effect, the pathname
	  "/bin/sh" (without the quotation marks) does not find the sh interpreter
	  unless the Interix_ROOT is the root of the current drive.
	
	- The structure of Interix header files is unique.
	
	- The traditional cc interface prints output only when an error occurs. The
	  Microsoft C compiler and the Interix cc driver writes the name of every file
	  compiled to standard output. This is fixed in the most recent version of cc
	  for Interix.
	
	- Not all of the system calls have entry points in libc.a. Many calls have
	  entry points in the dynamic library psxdll.a which is loaded for all Interix
	  processes.
	
	For additional information about configuring scripts with Interix, see the
	following Interix Web site:
	
	  http://www.interix.com/NewInterix/technotes/note0007.html
	
	Additional query words: 2.2.10 2.2.20 2.2.30 2.2.40
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
