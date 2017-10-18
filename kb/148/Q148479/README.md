---
layout: page
title: "Q148479: Cannot Restore DoubleSpace-Compressed Backup with MS-DOS 6.22"
permalink: kb/148/Q148479/
---

## Q148479: Cannot Restore DoubleSpace-Compressed Backup with MS-DOS 6.22

	Article: Q148479
	Product(s): Microsoft Disk Operating System
	Version(s): 6.22
	Operating System(s): 
	Keyword(s): kbfile kbtool msdos kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you back up files with compression using Msbackup.exe or Mwbackup.exe using
	MS-DOS 6.0 or 6.2 and you then install MS-DOS 6.22, you may not be able to
	restore your compressed backup.
	
	CAUSE
	=====
	
	In order to restore the backup, the MS-DOS 6.0 or 6.2 Dblspace.bin file and the
	Drvspace.mr1 file must be available on your hard disk.
	
	NOTE: When you upgrade MS-DOS 6.0 or 6.2 to MS-DOS 6.22, the Dblspace.bin file
	should be left on the hard disk. However, if you install MS-DOS 6.22 to a clean
	hard disk, the version of Dblspace.bin from MS-DOS 6.0 or 6.2 is not available.
	The Drvspace.mr1 file is included with the DoubleSpace Conversion Kit. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q117806 DoubleSpace Conversion Kit: Description & How to Obtain
	
	RESOLUTION
	==========
	
	To resolve this problem, Microsoft has made the Dblspace.bin file from MS-DOS
	6.2 available for download.
	
	To restore your compressed backup, follow these steps:
	
	1. Install the DoubleSpace Conversion Kit (Dblconv.exe).
	
	2. Download the DBL622.EXE file from the Microsoft Download Center to an empty
	  folder.
	
	3. Run the DBL622.EXE file you downloaded in step 2 by typing "dbl622" (without
	  the quotation marks) at the MS-DOS prompt.
	
	4. Copy the Dblspace.bin file to the MS-DOS folder.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Dbl622.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	The following file is created when you run Dbl622.exe:
	
	  File name      Size     Date       Version
	  ------------------------------------------
	  Dblspace.bin   64,246   09/30/93   6.20
	
	Additional query words: 6.22 drvspace drvspace.exe
	
	======================================================================
	Keywords          : kbfile kbtool msdos kbgraphxlinkcritical 
	Technology        : kbMSDOSSearch kbMSDOS622
	Version           : :6.22
	Issue type        : kbprb
	
	=============================================================================
	
