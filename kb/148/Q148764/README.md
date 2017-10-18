---
layout: page
title: "Q148764: SNA Server 2.11 Refresh Does Not Install From Floppy Disk"
permalink: kb/148/Q148764/
---

## Q148764: SNA Server 2.11 Refresh Does Not Install From Floppy Disk

	Article: Q148764
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 2.11 Refresh does not install from a floppy disk that contains
	the image files from the \I386\Disks directory on the SNA Server 2.11 compact
	disc.
	
	CAUSE
	=====
	
	This problem occurs due to the following:
	
	- The file size of CHK.SUM increases. Therefore, CHK.SUM and the other image
	  files exceed the capacity limit of the 1.44 MB floppy disk during the
	  installation.
	
	- Other floppy disks from the disk set exceed the capacity limit of 1.44 MB if
	  you also include SNASP1.HLP and SNASP1.RTF.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Use Xcopy to copy the contents of the \I396\Disks directory to a temporary
	  directory on the hard disk drive. For example, type the following at the
	  MS-DOS Command Prompt:
	
	  "xcopy <Compact Disc>:\I386\Disks\*.* <Drive>:\<Temp Dir>
	  /s" (without the quotation marks)
	
	2. Delete SNASP1.HLP and SNASP1.RTF from the temporary directory.
	
	3. Delete CHK.SUM from the \I386\Disks\Disk1 directory.
	
	4. Create a SNASP1.HLP dummy file (file with zero bytes).
	
	5. Create a CHK.SUM dummy file.
	
	6. Run SNADISK.CMD to create new floppy disks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 Service
	Pack 1. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsna 2.11 sp1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
