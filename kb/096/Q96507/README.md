---
layout: page
title: "Q96507: Installing OS/2 on a Compaq Prosignia"
permalink: /kb/096/Q96507/
---

## Q96507: Installing OS/2 on a Compaq Prosignia

	Article: Q96507
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The new Compaq Prosignia line of computers uses a "Fast SCSI-II" interface for
	their drive systems. A special .BID file is needed to install OS/2 1.3.1 on
	these machines.
	
	If this file is not present during installation, the following error message is
	displayed:
	
	  Cannot locate fixed disk drive
	
	MORE INFORMATION
	================
	
	Compaq supplies the proper .BID file (CPQC710.BID) on the Software Support Disk
	#1 (1.01 or later) supplied with their machines. CPQC710.BID can also be
	retrieved from CompuServe in the Compaq forum or from Compaq's BBS
	(713-378-1418: 9600,n,8,1). Once the correct .BID has been retrieved, make a
	copy of your Install A disk, delete all the *.BID files from the copy, copy the
	CPQC710.BID file to the disk as BOOTBID.BID, and the use the disk to install
	OS/2 onto the Prosignia.
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
