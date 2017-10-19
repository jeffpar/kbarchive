---
layout: page
title: "Q95941: Err Msg: &quot;Cannot Find File LMRSETUP.EXE&quot; with RAS Setup"
permalink: /kb/095/Q95941/
---

## Q95941: Err Msg: &quot;Cannot Find File LMRSETUP.EXE&quot; with RAS Setup

	Article: Q95941
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	In certain situations, you may need to create a set of 360K floppies in order to
	install RAS (Remote Access Services) on an MS-DOS workstation. The instructions
	on page 32 of the "Remote Access Service Administrators Guide" explain the steps
	necessary to create a 360K disk set for installing RAS on an MS-DOS
	workstation.
	
	RAS 1.1 differs from the previous version by creating a disk set for both a LAN
	MANAGER client and a Windows for Workgroups client. You will be prompted for
	four 360K disks during the MK360RAS disk creation. After following the steps
	outlined on page 32, you are then prompted to run the Setup program on the
	MS-DOS workstation. When you use these disks to run the Setup program, you may
	receive the following error:
	
	  Cannot find file LMRSETUP.EXE
	
	At this point you will be returned to the MS-DOS prompt. After review of the
	MK360RAS.CMD file, the LMRSETUP.EXE is in fact not copied to the Setup disk as
	it should be. This file is 276416 bytes in size and will not fit on the 360K
	Setup disk created by MK360RAS.CMD.
	
	MORE INFORMATION
	================
	
	In this situation you will need to follow the steps outlined below in order to
	successfully install the RAS 1.1 client on a MS-DOS workstation:
	
	1. Create a directory on the hard drive of the workstation (for example,
	  C:\RAS).
	
	2. Copy the contents of the Setup disk created in step 3 on page 32 of the RAS
	  Administrators Guide. You can use the following command to copy all files on
	  this disk:
	
	  " copy a:*.* c:\RAS " (without the quotation marks)
	
	  Note: the example above assumes that you are copying from drive A to the RAS
	  directory on drive C.
	
	3. Once the files have been copied, you will need to retrieve the LMRSETUP.EXE
	  file from the directory on the server where the 360K disks were created.
	  Place the file on a disk and copy this file into the directory created in
	  step 1 above.
	
	Once all the files have been copied into the RAS directory, you can successfully
	run SETUP.EXE and install the RAS client software. When you are prompted for
	disk #2, enter the location for the disk (for example, A: or B: ) and Setup will
	continue normally.
	
	Microsoft has confirmed this to be a problem in RAS version 1.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: wfw wfwg 1.10 2.20 ras1.1
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
