---
layout: page
title: "Q226386: XWEB: WLBS Failover Causes Accumulation of MMP Files in Webtemp"
permalink: kb/226/Q226386/
---

## Q226386: XWEB: WLBS Failover Causes Accumulation of MMP Files in Webtemp

	Article: Q226386
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using the Outlook Web Access (OWA) component on a server that is
	configured with Windows Load Balancing Service (WLBS), you may see a number of
	files accumulated in the Webtemp directory on the server that are never
	deleted.
	
	The files may have to be deleted manually.
	
	MORE INFORMATION
	================
	
	When you use OWA to access information on a computer running Microsoft Exchange
	Server, files with an .mmp extension are created in your Exchsrvr\Webtemp
	directory by default.
	
	The .mmp file is a temporary file used by the OWA component to store certain
	profile information during the active session. This file should be deleted after
	the user logs off and the session is closed.
	
	These files accumulate in the Webtemp directory if the OWA server is stopped
	unexpectedly, or if users close their browsers without logging out of the Web
	client first.
	
	With Exchange Server 5.5 Service Pack 2, these files are automatically cleaned up
	from the Webtemp directory without manual intervention.
	
	However, in the situation where the WLBS service fails on a server and the
	requests for the Web server are directed to the backup WLBS server, the .mmp
	files are not cleaned up because of the unexpected stop of the sessions on the
	WLBS server. These temporary .mmp files are very small and do not take up much
	space, 2 to 4 KB for each .mmp file. If you want to reclaim this hard drive
	space after WLBS fails, then you may have to manually delete these .mmp files
	when the WLBS and World Wide Web Publishing services are stopped.
	For more information on .mmp files, see the following articles in the Microsoft
	Knowledge Base:
	
	  Q226470 Using Outlook Web Access with Windows Load Balancing Service (WLBS)
	
	  Q214712 XWEB: MMP Files are Locked and Cannot be Deleted
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
