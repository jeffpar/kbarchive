---
layout: page
title: "Q271867: Err Msg: Event ID: 2140 An Internal Windows NT Error Occurred"
permalink: kb/271/Q271867/
---

## Q271867: Err Msg: Event ID: 2140 An Internal Windows NT Error Occurred

	Article: Q271867
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the WWW, FTP, SMTP, or NNTP service, the system
	returns the following error message, and the services cannot be started:
	
	  Event ID: 2140
	  Description: An internal Windows NT error occurred.
	
	There are no Event Viewer events that indicate a problem with Internet
	Information Server 4.0.
	
	CAUSE
	=====
	
	The Metabase.bin file that stores all configuration information for the Internet
	Information Server 4.0 has become corrupted. This can occur for the following
	reasons:
	
	- The system was abruptly shut down while the identify process was running.
	
	- While using the Internet Services Manager, the system was abruptly shut down
	  without the configuration information being stored.
	
	RESOLUTION
	==========
	
	Find and restore a good copy of the metabase. There are three possible locations
	for these backup copies:
	
	1. Use the Find feature to do a search for the Metabase.bin.bak file in the
	  Winnt\System32\Inetsrv folder.
	
	2. If the Metabase.bin.bak file is not found, search for a Metabase.bak in the
	  Winnt\System32\Inetsrv.
	
	3. If Metabase.bin.bak is still not found, locate an offline copy.
	
	When you locate a good backup copy of Metabase.bin, proceed to the following
	steps to restore the metabase:
	
	1. At the command prompt, type the following command to stop the Web services:
	
	  "Net Stop IISADMIN /Y" (without the quotation marks)
	
	2. In the Winnt\System32\Inetsrv folder, find and rename the Metabase.bin file
	  to Metabase.old.
	
	3. Rename Metabase.bin.bak or Metabase.bin (whichever was detected) to
	  Metabase.bin
	
	4. At the command prompt, attempt to start the World Wide Services by using the
	  following commands:
	
	  "Net Start W3SVC
	
	  Net Start MSFTPSVC
	
	  Net Start MSSMTPSVC
	
	  Net Start MSNNTPSVC" (without the quotation marks)
	
	If these steps do not resolve the problem, you can restore Metabase.bin from an
	offline tape backup.
	
	NOTE: When you restore from a backup file, configuration information can be lost
	depending on the age of the backup copy. You can verify how old the copy is by
	using the Time/Date Stamp on the Metabase.bin.bak file.
	
	MORE INFORMATION
	================
	
	The list of possible causes is not an exhaustive list of possible reasons the
	metabase may have become corrupted. However, if the service is unable to start
	with the same error message, then using this resolution may be a possible fix.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
