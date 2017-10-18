---
layout: page
title: "Q164379: XADM: Run Edbutil Across the Network When Priv.edb Gets Too Big"
permalink: kb/164/Q164379/
---

## Q164379: XADM: Run Edbutil Across the Network When Priv.edb Gets Too Big

	Article: Q164379
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage exc4 exc5
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Priv.edb file can become larger than 50 percent of the hard disk space. In
	this situation, you cannot run the edbutil /d command on the computer. You may
	need to find a computer that has hard disk drive space greater than twice the
	size of the Priv.edb file. However, there are situations in which the Priv.edb
	file becomes so big that you do not have a computer with enough hard disk drive
	space to run edbutil. In this situation, the workaround is to run edbutil across
	the network.
	
	MORE INFORMATION
	================
	
	To run edbutil and output the resulting file on a remote computer:
	
	1. Back up the Priv.edb file to tape.
	
	2. Find a Windows NT computer with free hard disk drive space equal to the size
	  of the Priv.edb file.
	
	3. Map a drive (in the example below, drive F) to a computer on the network that
	  has the necessary free space.
	
	4. Do one of the following:
	
	   - From the Exchsrvr\Bin subfolder, carry out the following command:
	
	  edbutil /d /ispriv /tf:\tempdfrg.edb
	
	- or -
	
	  a. Change to the newly mapped network drive.
	
	  b. Set the path to the Exchsrvr\Bin subfolder:
	
	  path c:\exchsrvr\bin
	
	  c. Carry out the following command:
	
	  edbutil /d /ispriv
	
	When the above command is carried out, a Tempdfrg.edb file is created on the
	remote drive.
	
	NOTE: Because the Priv.edb file is being written to as the defragmentation
	occurs, any network problems can lead to corruption in the Priv.edb file, and
	the corruption leads to the need to restore the backup created in step 1. You
	can also use the /p switch to avoid problems with corruption of the original
	Priv.edb file in case of a problem with the network or either computer during
	defragmentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
