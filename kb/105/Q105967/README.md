---
layout: page
title: "Q105967: PC Adm: Removed User Still Has Access to Group Folder"
permalink: /kb/105/Q105967/
---

## Q105967: PC Adm: Removed User Still Has Access to Group Folder

	Article: Q105967
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 2.1e, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, when a
	Microsoft Mail for PC Networks, MS-DOS workstation user is removed from a global
	group, the MS-DOS workstation user may still have access to any group folders
	associated with that global group.
	
	A global group is defined as a group created from the Mail Administrator program
	(ADMIN.EXE) and is available in the postoffice address list (POL).
	
	CAUSE
	=====
	
	This problem occurs because the Administrator program does not modify the record
	for the MS-DOS workstation user in the GRPMEM.GLB file to reflect that the user
	is no longer part of the group(s).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 2.1e, 3.0, 3.0a, and
	3.2 of Microsoft Mail for PC Networks. This problem was corrected in version
	3.2a (which includes ADMIN.EXE version 3.2.9).
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  mailupd
	
	There is also a newer version of ADMIN.EXE, which is available from the Microsoft
	Software Library (MSL).
	
	You can find ADMUPD.EXE,
	(http://support.microsoft.com/download/support/mslfiles/ADMUPD.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile ADMUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get ADMUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download ADMUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 2.10e 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.0b,3.2
	
	=============================================================================
	
