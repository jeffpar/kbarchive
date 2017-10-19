---
layout: page
title: "Q246308: Win32 Back Ups on Interix"
permalink: /kb/246/Q246308/
---

## Q246308: Win32 Back Ups on Interix

	Article: Q246308
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
	
	This article explains how to perform Win32 back ups on Interix.
	
	MORE INFORMATION
	================
	
	It is possible to start a command-line Win32 backup program through Interix by
	using Cron.
	
	IMPORTANT: This method is not recommended because Win32 files can have many
	different levels of security. Interix recognizes all levels of security but may
	not be able to properly back them up. This is because the Interix utilities are
	built in UNIX and can only store the three sets of permissions that would be
	displayed using the "ls -l" (without the quotation marks) command. Win32 backup
	programs are able to store the complete set of permissions on a file and operate
	correctly on Interix files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbhowto
	
	=============================================================================
	
