---
layout: page
title: "Q156325: STOP: 0x0000001E with HP DeskScan Version 2.3"
permalink: /kb/156/Q156325/
---

## Q156325: STOP: 0x0000001E with HP DeskScan Version 2.3

{% raw %}

	Article: Q156325
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Hewlett-Packard (HP) DeskScan software version 2.3
	in Windows NT version 4.0, you may receive the following error message:
	
	  STOP: 0x0000001E - aspi32.sys
	  Unhandled kernel exception
	
	CAUSE
	=====
	
	HP DeskScan version 2.3.x does not function properly in Windows NT version 4.0.
	This is because DeskScan 2.3.x uses an ASPI driver to control an HP ScanJet
	scanner. DeskScan 2.2 does not rely on an ASPI driver and functions properly
	under both Windows NT 3.5x and Windows NT 4.0.
	
	NOTE: The Aspi32.sys driver included with DeskScan 2.3.x will work properly only
	under Windows NT 3.51.
	
	RESOLUTION
	==========
	
	Using DeskScan 2.2 - does not require an ASPI driver
	----------------------------------------------------
	
	To use HP DeskScan software on Windows NT version 4.0, obtain version 2.2 of the
	software from HP's web site. DeskScan 2.2 requires that a directory called
	"Disk1" be created first and then the self-extracting file should be executed
	from within this directory. Then follow the installation instructions in both
	the Readme.nt and Readme.wri files that appear in the Disk1 directory.
	
	-OR-
	
	Using DeskScan 2.3.x - requires an ASPI driver
	----------------------------------------------
	
	To use HP DeskScan software on Windows NT version 4.0, obtain version 2.3.x of
	the software from HP's web site and follow the installation instructions in both
	the Readme.nt and Readme.wri files that appear in the Disk1 directory when the
	self- extracting file is run. Also, it is important that an updated Aspi32.sys
	driver be obtained for the SCSI controller used with your system if this
	software is intended to be used with Windows NT version 4.0. The Aspi32.sys
	included with DeskScan 2.3.x will only work with Windows NT 3.51.
	
	MORE INFORMATION
	================
	
	If you have an Adaptec SCSI controller, you can contact Adaptec for an updated
	Aspi32.sys driver. For all other SCSI controllers, including the HP supplied
	SCSI controllers, contact your SCSI controller manufacturer or Adaptec for
	information on obtaining an updated Aspi32.sys driver. For information about how
	to contact the manufacturers listed above, query in the Knowledge Base for one
	of the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt blue screen dump scanner scsi
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
