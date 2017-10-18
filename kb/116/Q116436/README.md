---
layout: page
title: "Q116436: PC DOS: MS-DOS Mail Client Can Misdirect Mail"
permalink: kb/116/Q116436/
---

## Q116436: PC DOS: MS-DOS Mail Client Can Misdirect Mail

	Article: Q116436
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail sent from the MS-DOS client may be misdirected mail if a mail message is
	composed but is not sent until after a rebuild of the global address list (GAL)
	is completed.
	
	CAUSE
	=====
	
	The global address list (GAL) contains unique tuple identifiers (TIDs) for local
	users as well as users external to the postoffice. When the GAL is rebuilt, new
	users are added whose names may occur alphabetically before the user to whom the
	message was addressed in the MS-DOS client. When this happens, the addressee
	essentially is "moved down" in the list and is assigned a new TID.
	
	However, this TID value is used to retrieve the name from the GALNETPO.GLB file.
	The GALNETPO.GLB contains the name and external mailbag reference of the
	addressee. If the name associated with the TID value is different from that in
	the message composed in the MS-DOS client, mail will be delivered to the user
	associated with that TID value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks, MS-DOS workstation. This problem was corrected
	in version 3.2.4 of REBUILD.EXE. If you do not have version 3.2.4 (or later),
	you can download REBUPD.EXE, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile REBUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get REBUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download REBUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	MORE INFORMATION
	================
	
	You should replace all 3.2 versions of the Rebuild program with version 3.2.4
	(or later).
	
	If you have Mail 3.0 or 3.0b, you cannot run Rebuild 3.2.4 with directory
	synchronization (Dir-Sync); you should upgrade to Mail 3.2 or follow the
	suggestions given on page 193 of the Mail 3.2 "Administrator's Guide":
	
	  IMPORTANT: Perform manual synchronization only when users are not actively
	  using the mail system.
	
	You should ensure that all users all logged off the mail system before you
	performing Dir-Sync.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
