---
layout: page
title: "Q97841: IF EXISTS Command Exhibits Different Behavior on HPFS"
permalink: /kb/097/Q97841/
---

## Q97841: IF EXISTS Command Exhibits Different Behavior on HPFS

{% raw %}

	Article: Q97841
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Testing for the existence of a remote drive or directory via the IF EXISTS
	drive:\nul command exhibits different behavior on an HPFS partition than it does
	on a FAT partition. On an HPFS system, the IF EXISTS command always returns
	FALSE when testing for the NUL device.
	
	SYMPTOMS
	========
	
	        exist.bat
	
	        if exist %1\NUL goto dir_ok
	        echo %1 doesn't exist
	        goto end
	        :dir_ok
	        echo %1 exists
	
	     Usage:
	
	        exist P:
	        exist P:\dirname\dir
	
	The code returns "P: doesn't exist," but if P is an HPFS partition linked to a
	sharename on a FAT partition, then the code returns "P: exists." If you
	substitute the local hard drive for P, then the command works as expected.
	
	FAT and HPFS partitions respond differently to the IF EXISTS NUL from an MS-DOS
	workstation, but not if you copy EXIST.BAT to EXIST.CMD and run it from both
	types of partitions while at the server.
	
	CAUSE
	=====
	
	This behavior exists because of design differences in the two file systems. In
	the FAT file system, the NUL device is one associated with each partition, as
	well as each directory on that partition. On an HPFS partition, however, the NUL
	device does not live as part of the file system on the disk, and as such cannot
	be tested for via the IF EXISTS from a remote client. Nevertheless, the device
	does exist, and behaves identically to the implementation on FAT.
	
	RESOLUTION
	==========
	
	The following batch file shows an alternative way to test for the existence of a
	remote drive/directory:
	
	        copy c:\config.sys %1\$$$$$.tst
	        if exists %1\$$$$$.txt goto dir_there
	        echo %1 does not exist!
	        goto done
	        :dir_there
	        echo %1 does exist!
	        :done
	
	Also, using the LAN Manager PTK, it is possible to programatically test for the
	existence of a remote drive/directory.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
