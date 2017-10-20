---
layout: page
title: "Q95423: Installing LAN Manager on IBM DOS 5.02 Workstations"
permalink: /kb/095/Q95423/
---

## Q95423: Installing LAN Manager on IBM DOS 5.02 Workstations

{% raw %}

	Article: Q95423
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article describes how to install Microsoft LAN Manager on a workstation
	running IBM DOS version 5.02.
	
	MORE INFORMATION
	================
	
	The Setup program for Microsoft LAN Manager checks the operating system (OS)
	version so that it can install the correct NETWKSTA.EXE, which is operating
	system dependent. IBM DOS version 5.02 reports a version number not supported by
	the LAN Manager Setup program.
	
	When run on IBM DOS 5.02, LAN Manager Setup correctly copies files from floppy to
	the user's hard disk (including all versions of NETWKSTA), and then reports an
	error:
	
	  Unable to read file: NETWKSTA. Error Code: 2
	
	There are several ways to work around this error:
	
	- Run LAN Manager Setup, and ignore the error. After Setup completes, manually
	  copy
	
	  C:\LANMAN.DOS\NETWKSTA\NETWKSTA.500
	
	  as
	
	  C:\LANMAN.DOS\NETPROG\NETWKSTA.EXE
	
	  Note: If LAN Manager is installed to a location other than C:\LANMAN.DOS,
	  adjust the copy as appropriate. This method is simple, but one may copy the
	  file incorrectly.
	
	- Use the SETVER command to set the OS version for SETUP.EXE to 5.0, then
	  install LAN Manager. After LAN Manager is installed, the version for
	  SETUP.EXE should be deleted, so that other setup programs will know the
	  correct OS version.
	
	  This method is also simple to perform, but it requires two extra boots to set
	  and remove the version for SETUP.EXE.
	
	- Edit the LAN Manager SETUP.INF file on the LAN Manager MS-DOS Setup disk.
	  Copy the line
	
	  1:NETWKSTA\NETWKSTA.50$,"NETWKSTA\NETWKSTA.500",8,2
	
	  as
	
	  1:NETWKSTA\NETWKSTA.50$,"NETWKSTA\NETWKSTA.",8,2
	
	  leaving the original line intact.
	
	  Note: Make a copy of the disk, and edit that copy. Do not make changes to the
	  original disk.
	
	  This method is fairly simple, and it needs to be performed only once for any
	  number of users. However, it will install NETWKSTA.500 on any unknown version
	  of DOS.
	
	- Install a previous version of MS-DOS, such as MS-DOS 5.0, then install LAN
	  Manager. Finally, re-install IBM DOS 5.02.
	
	  This is a straightforward method, but it is tedious and time consuming.
	
	Note: A bootable over-the-network (OTN) installation disk for MS-DOS 5.0
	workstations needs to be made with DOS version 5.0 (either IBM or Microsoft).
	The workstation portion of OTN installation will not operate under IBM DOS
	version 5.02.
	
	Additional query words: 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
