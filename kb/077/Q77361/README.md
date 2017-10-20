---
layout: page
title: "Q77361: DOS &quot;IF EXIST Z:&#92;NUL&quot; Fails on HPFS Servers"
permalink: /kb/077/Q77361/
---

## Q77361: DOS &quot;IF EXIST Z:&#92;NUL&quot; Fails on HPFS Servers

{% raw %}

	Article: Q77361
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Using the MS-DOS COMMAND.COM batch language IF EXIST <filespec> construct,
	using a <filespec> of Z:\NUL (where Z: is a remote drive that is not using
	the FAT file system), the IF EXIST will fail. Variations of this IF EXIST are
	often used (incorrectly) as presence checks for remote drive letters or remote
	subdirectories.
	
	Using Z:\NUL will fail on LAN Manager HPFS servers. It will also probably fail on
	any remote drive that neither is DOS-based nor emulates the MS-DOS-centric
	behavior of making all character devices available at all portions in the file
	system (that is, ignoring the drive letter and optional path when the base
	filename is an MS-DOS device name).
	
	Using Z:\*.* (that is, using "*.*" instead of "NUL") works on all tested servers,
	as long as there is at least one file in that subdirectory (the special
	directory files "." and ".." do not count in this case).
	
	Using Z:\NUL on local MS-DOS drives or remote drives on MS-DOS MS-Net servers
	(both of which are running MS-DOS, and thus, FAT file systems) will work.
	
	Using Z:\NUL on LAN Manager servers that have FAT file system shares will also
	work.
	
	Using Z:\NUL on LAN Manager servers that have HPFS file system shares WILL work
	if a FILE (not a device) called NUL exists that allows the check to work.
	
	Using IF EXIST under OS/2's CMD.EXE command interpreter will work; however, this
	is due to differences of behavior in CMD.EXE.
	
	This problem occurs on all versions of MS-DOS.
	
	CAUSE
	=====
	
	The use of Z:\NUL tells MS-DOS to look for a local character device on a remote
	block device. Thus, DOS tells the LAN Manager redirector to ask the remote
	server to find this file (using DosFindFirst() under OS/2 LAN Manager servers).
	Because there is no device (or probably no file) on HPFS drives, this fails, and
	the error is propagated back from the server to MS-DOS, via the redirector.
	
	RESOLUTION
	==========
	
	To work around this problem, write a program that uses the MS-DOS Get Current
	Drive (interrupt 21h ah=19h) and Set Current Drive (interrupt 21h ah=0Eh)
	functions to check a drive letter for validity, and return an ERRORLEVEL, which
	can be tested in DOS's batch language.
	
	Additional query words: 1.x 2.00 2.10 dos51.1722 lanman21.1328 lanman21.3096
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
