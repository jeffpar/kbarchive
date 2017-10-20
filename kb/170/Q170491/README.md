---
layout: page
title: "Q170491: XADM: How to Complete Edbutil Terminated with Error -1808"
permalink: /kb/170/Q170491/
---

## Q170491: XADM: How to Complete Edbutil Terminated with Error -1808

{% raw %}

	Article: Q170491
	Product(s): Microsoft Exchange
	Version(s): Windows:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	CAUTION: This article contains information about the Microsoft Exchange
	database utility (edbutil /d /r). Using it incorrectly can cause problems.
	Before you run this utility, you should first make a backup copy of the
	database files. Microsoft cannot guarantee that problems resulting from the
	use of the utility can be solved. Use this tool at your own risk.
	
	SYMPTOMS
	========
	
	When you run the command line utility Edbutil with the defragmentation option
	(/d) and the repair option (/r) on the private information store, it might fail
	to complete and you receive one of the following errors:
	
	  Edbutil terminated with error -1808
	
	  -or-
	
	  Error -1808 (0xfffff8f0) JET_errDiskFull 4294965488
	
	The following event is written in the event viewer:
	
	  Event ID: 1005
	  Source: MSExchangeSA
	  Category: Monitoring
	  Description: Unexpected error <<0xc0040000 - The Microsoft Exchange
	  Server computer is not available. Either there are network problems or
	  the Microsoft Exchange Server computer is down for maintenance.
	  Microsoft Exchange Server Information Store ID no:
	  8004011d-0524-00000000>> occurred.
	
	When you check the amount of free disk space on the drive that hosts the Exchange
	Bin directory (on drive C, for example), you may find only a few megabytes of
	disk space available. The drive that hosts the Exchange databases (drive D, for
	example) may have plenty of free disk space.
	
	WORKAROUND
	==========
	
	The following steps explain how to complete Edbutil /d /r in this case:
	
	1. Check the size of the C:\Exchsrvr\Bin\Tempdfrag.edb file. You will find that
	  its size is smaller than the size of the Priv.edb file. Delete the
	  C:\Exchsrvr\Bin\Tempdfrag.edb file.
	
	2. If the free disk space on drive D is only slightly greater than 1.2 times the
	  size of the Priv.edb file, create a new directory D:\Exchsrvr\Bin and copy
	  the Edbutil.exe and Edb.dll files from C:\Exchsrvr\Bin to the new directory.
	
	  -or-
	
	  If the free disk space on drive D is greater than 1.2 times the size of
	  Priv.edb file by more than 38 MB, copy the C:\Exchsrvr\Bin directory to
	  D:\Exchsrvr\.
	
	  -or-
	
	  If the free disk space on drive D is less than 1.2 times the size of the
	  Priv.edb file, refer to the MORE INFORMATION section of this article.
	
	3. Run the following command:
	
	  d:\exchsrvr\bin\edbutil /d /r /ispriv
	
	  It should start creating the temp file Tempdfrag.edb on D:\Exchsrvr\Bin, and
	  should complete successfully if the only problem was insufficient disk space.
	
	4. After Edbutil completes successfully you can delete the D:\Exchsrvr\Bin
	  directory to free the 37.4 MB of disk space.
	
	MORE INFORMATION
	================
	
	
	Information about the options that you can use with the Edbutil command line
	utility is available. For additional information about this utility, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q143233 XADM: Command-Line Parameters for Edbutil.exe
	
	If the information store fails to start because there is insufficient disk space
	(which might produce the same error ID -1808), you can attempt to reclaim disk
	space. For additional information about using Windows NT Performance Monitor to
	track disk space and reclaim it, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q128325 XADM: Reclaiming Disk Space for the Information Store
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : Windows:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
