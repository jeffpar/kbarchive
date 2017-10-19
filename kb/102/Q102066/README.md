---
layout: page
title: "Q102066: Using CHKSTOR for Disk Quota Reporting in LAN Manager"
permalink: /kb/102/Q102066/
---

## Q102066: Using CHKSTOR for Disk Quota Reporting in LAN Manager

	Article: Q102066
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	In LAN Manager, you can use the CHKSTOR utility to gather
	information on disk quotas.
	
	Before running CHKSTOR for quota information, you must first specify a
	directory (in the user account "Home directory" field). If you
	indicate it with a uniform naming convention name, it can be a
	directory that exists on another server. You can then specify a disk
	space amount (in kilobytes) in the user account "User storage limit"
	field.
	
	To determine when "Home directory" exceeds the "User storage
	limit," run the CHKSTOR utility.
	
	CHKSTOR compares the "User storage limit" to the actual number of
	bytes currently stored in the "Home directory" and all of its
	subdirectories. If this number exceeds "User storage limit,"
	CHKSTOR reports (to the screen unless redirected to a filename) the
	username, disk space allowed, disk space used, and home directory
	path. CHKSTOR also sends an alert message (unless you suppress this
	feature) to the names on the ALERTNAMES line of LANMAN.INI each
	time it finds the disk-space-use limit being exceeded.
	
	REFERENCES
	==========
	
	LAN Manager Administrator's Reference, version 2.2, pp. 59-60 (CHEKSTOR).
	
	On-line help text (in the NIF) for "Home directory" and "User storage limit."
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
