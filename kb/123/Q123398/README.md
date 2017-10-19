---
layout: page
title: "Q123398: PC DirSync: Groups with 10 Characters Group Address Remain"
permalink: /kb/123/Q123398/
---

## Q123398: PC DirSync: Groups with 10 Characters Group Address Remain

	Article: Q123398
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete a group from the originating postoffice, the groups containing a
	group address of 10 characters (the maximum number of characters allowed is 10)
	will remain undeleted from all other postoffices participating in directory
	synchronization (Dir-Sync) for version 3.2 of Microsoft Mail for PC Networks.
	
	During the Dir-Sync processing of this group's delete transaction, at time T2
	(SRVMAIN -t) on the Dir-Sync server, the following error message will appear in
	the DIRSYNC.LOG file:
	
	  10/24/94 14:32:18 | Error [ 20] Address element is too long: <Group
	  Address Name>
	
	CAUSE
	=====
	
	The Dir-Sync process appears to append an additional character to the group
	address name within the MSTTRANS.GLB file on the Dir-Sync server. This
	additional character generates the error described above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks.This problem was corrected in version 3.2.12 of ADMIN.EXE. If
	you do not have version 3.2.12 (or later), you can download ADMUPD.EXE, a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.Microsoft.com home page, click the support icon.
	  Click Knowledge Base, and select product.
	  Enter kbfile AMDUPD.EXE, click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  FTP FTP.Microsoft.Com
	  Change to the Softlib\Mslfiles folder.
	  Get AMDUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and download AMDUPD.EXE.
	
	
	MORE INFORMATION
	================
	
	When Dir-Sync propagates user and group names from externally defined
	postoffices, these names are stored in a .USR file on the postoffice database.
	To delete these invalid group names, run the ADMIN.EXE program against the
	postoffices that still have the deleted groups showing in the global address
	list (GAL), and select External-Admin, List. Provide the correct Network and
	Postoffice name and simply delete the invalid group name from each postoffice
	exhibiting this problem. Run REBUILD.EXE to recreate the GAL without this
	group.
	
	If the mail administrator also added this invalid group to the local postoffices
	postoffice address list (POL or ADMIN.NME file), then run ADMIN.EXE and select
	Address, Delete to delete this group name from the POL.
	
	Again, REBUILD.EXE must be run to update the GAL.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
