---
layout: page
title: "Q97869: Cannot Delete Stuck Print Jobs when Using HPREDIR"
permalink: kb/097/Q97869/
---

## Q97869: Cannot Delete Stuck Print Jobs when Using HPREDIR

	Article: Q97869
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Hewlett-Packard (HP) Network Printer system, which redirects OS/2 print
	queues to printers directly attached to the network, does not allow you to
	delete a stuck print job from a queue and let the other queued jobs print.
	Instead, it requires you to reboot the server to delete stuck jobs, which may
	not be possible in a production environment. Below is a workaround to this
	restriction.
	
	Note: The new PMSPL.DLL comes with the OS/2 1.3 for LAN Manager 2.1a and 2.2. If
	you are not upgrading, you can copy the new PMSPL.DLL to your OS/2 server and
	replace the old one. If you are using HPFS386, copy the .DLL by shutting down
	your server and rebooting with HPFS386 Recovery Disk 1. If you are not using
	HPFS386, boot from the Microsoft OS/2 1.3 floppy disk. When you have done this,
	copy the new PMSPL.DLL onto C:\OS2\DLL.
	
	SYMPTOMS
	========
	
	When the OS/2 print spooler attempts to delete a job it tries to close both the
	spool file and the device that it is printing to. It cannot do this and you are
	unable to delete the job.
	
	CAUSE
	=====
	
	The spooler apparently has trouble interacting with the HP print device HPREDIR.
	If you shut down HPREDIR, the print device is considered closed and you can then
	cancel the stuck print job.
	
	WORKAROUND
	==========
	
	If HPREDIR is running as a detached process, HP has provided a back door that
	lets you shut it down without taking down the server. Follow this procedure:
	
	1. Make sure SETUP.EXE in C:\HPNETPRN is not running.
	
	2. Go to your C:\HPNETPRN directory and run INSTALL.EXE.
	
	3. Go through the screens of the install process, pressing ENTER until you are
	  prompted for the directory to copy the files to.
	
	4. At this dialog box choose CANCEL to exit the Install program. This stops
	  HPREDIR.
	
	Once you've deleted the stuck print job, restart your printers by going to the
	C:\HPNETPRN directory from any OS/2 window and entering:
	
	  " DETACH HPREDIR" (without the quotation marks)
	
	After a few seconds your printers should be functioning properly again.
	
	Additional query words: 2.10 2.1 hpredir stuck delete cancel QUEUE DRIVER COMTOKR
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
