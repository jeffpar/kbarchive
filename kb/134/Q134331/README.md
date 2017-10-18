---
layout: page
title: "Q134331: Incorrect DOS Version Error When Using MS-DOS 6.22 PDF"
permalink: kb/134/Q134331/
---

## Q134331: Incorrect DOS Version Error When Using MS-DOS 6.22 PDF

	Article: Q134331
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop smsgeneral kbArtTypeINF
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you upgrade a Windows for Workgroups client running on MS-DOS versions 5.0
	through 6.21 to MS-DOS 6.22 using the supplied package definition file
	DOS622.PDF, the following error appears:
	
	  Incorrect DOS version
	
	The error occurs after UPGRD622 or STPUP622 has copied the package source files
	locally and shuts down Windows for Workgroups in order to start MS-DOS Setup.
	
	CAUSE
	=====
	
	The error occurs when OUTSMART.EXE tries to spawn COMMAND.COM and finds the
	uncompressed new COMMAND.COM from the MS-DOS 6.22 installation files instead of
	the COMMAND.COM for the version of MS-DOS that is currently installed.
	
	NOTE: OUTSMART.EXE is the MS-DOS-based utility used to start the MS-DOS Setup
	program.
	
	MORE INFORMATION
	================
	
	The cause of the problem depends on which package command line is used for the
	'run command on workstation' job.
	
	1. If you are using the following command lines, the problem occurs because you
	  are using the MS-DOS 6.22 Upgrade disks as the package source instead of the
	  MS-DOS 6.22 Step-Up disk.
	
	  Batch Step-Up Win/WFW Client
	  Manual Step-Up Win/WFW Client
	
	
	2. If you are using the following command lines, the problem is occurs because
	  OUTSMART.EXE not switching away from the current directory and therefore
	  finding the wrong copy of COMMAND.COM:
	
	  Batch Upgrade Win/WFW Client
	  Manual Upgrade Win/WFW Client
	
	
	WORKAROUND
	==========
	
	To work around this problem, create the source directory for the package from
	the MS-DOS 6.22 Step-Up disks, or create the source directory for the package
	with the actual MS-DOS 6.22 installation files one subdirectory deep. For
	example, setup a directory called MSDOS.SRC with a subdirectory called 622. Put
	the MS-DOS installation files in the MSDOS.SRC\622 directory. Create the package
	with the MSDOS.SRC directory as the source. This prevents OUTSMART from finding
	the wrong version of COMMAND.COM because it is no longer in the current
	directory.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : :1.0,1.1
	
	=============================================================================
	
