---
layout: page
title: "Q244488: FDIRSYNC: GroupWise Gateway to MS Mail From Novell Won't Dirsync"
permalink: kb/244/Q244488/
---

## Q244488: FDIRSYNC: GroupWise Gateway to MS Mail From Novell Won't Dirsync

	Article: Q244488
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Novell's GroupWise Gateway for Microsoft Mail (MS Mail) imports GroupWise
	addresses to the MS Mail gateway postoffice only. The user sees GroupWise
	addresses on the postoffice that hosts the FFAPI gateway that is created by the
	Novell GroupWise Gateway for MS Mail. These addresses do not appear on other
	postoffices. GroupWise addresses are not inserted in the directory
	synchronization (dirsync) stream for propagation to downstream postoffices.
	
	CAUSE
	=====
	
	The Novell software does not use the -e switch when it imports the addresses to
	the host postoffice.
	
	This switch imports the addresses to the dirsync stream, and the addresses appear
	in the global address list on all of the postoffices that participate in
	dirsync.
	
	WORKAROUND
	==========
	
	From the postoffice that hosts the FFAPI gateway, run the following command:
	
	  import admin -p<password> -x<network>/<postoffice>
	  -fgwise.txt
	
	Where <password> is the password for the administrator, <network> is
	the network name assigned to the GroupWise addresses, and <postoffice> is
	the postoffice name assigned to the GroupWise addresses.
	
	This produces a text file that contains the GroupWise addresses. You can import
	them again with the -e switch to put them in the dirsync stream by running the
	following command:
	
	  import admin -p<password> -fgwise.txt -e
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.2
	Issue type        : kbprb
	
	=============================================================================
	
