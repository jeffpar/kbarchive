---
layout: page
title: "Q78061: Problems with LAN Manager Updates and OS/2 1.3"
permalink: /kb/078/Q78061/
---

## Q78061: Problems with LAN Manager Updates and OS/2 1.3

{% raw %}

	Article: Q78061
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	PROBLEM ID: 1562
	
	SYMPTOMS
	========
	
	When running UPDATE.EXE, LAN Manager overrides the default IBM OS/2 1.3 spooler
	with its own spooler files located in the LAN Manager tree. These spooler files
	are from the OS/2 version 1.21 spooler, and are not totally compatible with OS/2
	version 1.3. The following problems have been verified to be the result of this
	mismatch of spooler files:
	
	- Missing printer installer in the print manager. This problem occurs because
	  the OS/2 1.21 spooler does not have the built-in print installer menu option
	  that is part of the OS/2 1.3 print manager.
	
	- Detach failing when trying to apply a patch or run LAN Manager 2.0c on a
	  server running IBM OS/2 1.3 because LMPRINT seems to be in use even though
	  there are no printers or queues using LMPRINT.
	
	- The SYS2070 error, which states that the application code segment for PMSPL
	  is in error and cannot be loaded, occurs with OS/2 1.30.1. For additional
	  information, the SYS2070 error says to see SYS0182. (This error occurs when
	  the OS/2 1.21 PMSPL.DLL is used with the OS/2 1.3 spooler.)
	
	CAUSE
	=====
	
	UPDATE.EXE installs PMSPL.DLL and PMSPOOL.EXE in the LANMAN tree on all versions
	of OS/2. These files should be installed only on systems with OS/2 versions 1.2
	and earlier (SETUP.EXE has special case code to handle this; therefore, clean
	installations of LAN Manager 2.0 should not experience this problem, only those
	that used UPDATE.EXE).
	
	RESOLUTION
	==========
	
	The best workaround is to remove or delete these two files (PMSPL.DLL and
	PMSPOOL.EXE) from the LAN Manager NETPROG and NETLIB directories immediately
	after running the update and before rebooting, because they are NOT needed with
	OS/2 1.3.
	
	If you have already rebooted your system after upgrading and now have the OS/2
	1.21 spooler files in use by the OS/2 1.3 operating system, use one of the
	following two workarounds:
	
	(Note: These workarounds assume LAN Manager is installed in the default C:\LANMAN
	directory. If not, replace C:\LANMAN with the correct path.)
	
	1. Boot from a floppy disk and remove the following files:
	
	  a. Log on as a local admin and remove any ACLs on
	     C:\LANMAN\NETPROG\PMSPOOL.EXE and C:\LANMAN\NETLIB\PSMPL.DLL.
	
	  b. Boot with the OS/2 install floppy disk, press ESC to get a shell, and
	     delete C:\LANMAN\NETPROG\PMSPOOL.EXE and C:\LANMAN\NETLIB\PMSPL.DLL.
	
	  Reboot; your print manager should now be the version 1.3 print manager.
	
	2. Edit CONFIG.SYS to load the OS/2 1.3 spooler before the LAN Manager spooler.
	
	  Note: Be careful when attempting this workaround. If the CONFIG.SYS file is
	  edited incorrectly, the server software may not load at all, leaving no
	  access to the hard drive. The only option will then be to reformat your hard
	  drive.
	
	  a. Carefully edit the CONFIG.SYS file:
	
	     1. Move C:\OS2\DLL before C:\LANMAN\NETLIB in the LIBPATH entry.
	
	     2. Move C:\OS2 before C:\LANMAN\NETPROG in the PATH entry.
	
	  b. Reboot; everything should come up fine. If you are running local security,
	     however, the message "local security could not be started, the system is
	     booting in privileged mode" will appear. This is because you are using the
	     OS/2 CACHE.EXE and not the LAN Manager CACHE.EXE. This message can be
	     ignored temporarily; complete the following steps immediately to complete
	     this workaround and restore local security.
	
	  c. Remove or rename the C:\LANMAN\NETLIB\PMSPL.DLL and
	     C:\LANMAN\NETPROG\PMSPOOL.EXE files.
	
	  d. Edit CONFIG.SYS and place the LAN Manager references before the OS/2
	     references (see step 1 above).
	
	  Reboot; your print manager should now be the version 1.3 print manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LAN Manager version 2.0. This
	problem was corrected in LAN Manager version 2.1.
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
