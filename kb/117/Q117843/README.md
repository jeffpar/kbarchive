---
layout: page
title: "Q117843: PC WRmt: Not Designed to Support Extended Information"
permalink: /kb/117/Q117843/
---

## Q117843: PC WRmt: Not Designed to Support Extended Information

	Article: Q117843
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2 of Microsoft Mail Remote for Windows was not designed to support
	extended information (custom template information). When RNETWORK.GLB file is
	created, it packages all the TPL files. INF files do not get packaged in
	RNETWORK.GLB; therefore, extended information is not available for remote users.
	However, there is a problem with the way the remote client handles the extended
	information when it is present on the postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. This problem was corrected in MSRMTUI.DLL version
	3.2.0.4008. If you do not have version 3.2.0.4008 (or later), you can find
	MSRMTUI.EXE, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MSRMTUI.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MSRMTUI.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MSRMTUI.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	For more information about how to obtain this Application Note, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q103946 Mail Remote MSRMTUI.DLL Update
	
	MORE INFORMATION
	================
	
	If there is an 8DIGIT.TPL file associated with an external postoffice in the
	WINDOWS\MSMAIL\MSRMT\TPL subdirectory, when you get details by picking a user
	from the external PO list, the standard fields are displayed. But if you get
	details by picking a user from the GAL, in addition to the standard fields, the
	default template information is displayed (default information from 8DIGIT
	.TPL). Getting details on every user on that postoffice, results in the same
	template information because the information is being read from the 8DIGIT.TPL.
	
	The remote client does not read the INFs and so the template information should
	NOT be displayed when getting details.
	
	When RNETWORK.GLB is generated, all *.TPLs, (including 8DIGIT.TPLs for other
	postoffices) are included in the file. When the remote client is installed with
	this data disk, the TPLs are placed in the TPL subdirectory in
	WINDOWS\MSMAIL\MSRMT\TPL. On the remote client, the external postoffices have a
	hexid that do not correspond with the hexid on the postoffice.
	
	For example, if you have EXTNET/EXTPO defined on your PO, you may have
	00000002.USR and 00000002.TPL and 00000002.INF on the PO whereas on the remote
	client, you may have 00000001.USR but the TPL is still is in 00000002.TPL. When
	you get details, you end up getting the information from the wrong TPL file.
	
	For example, on the postoffice, if you have 10 8DIGIT.TPL files associated with
	10 different external POs. RNETWORK.GLB contains all these 10 8DIGIT.TPL files.
	The WINDOWS\MSMAIL\MSRMT\TPL directory contains these 10DIGIT.TPL files. When
	the information in the data disk is parsed out at the remote client, the
	external POs are associated with different hexids. When you get details on the
	user from the GAL, it looks at the wrong 8DIGIT.TPL file as the new hexid
	associations have not affected the TPLs.
	
	A similar problem existed with ADMIN.TPL and the problem was resolved by deleting
	the ADMIN.TPL file when you parse out RNETWORK.GLB. A similar mechanism is
	required to delete all the 8DIGIT.TPL files at the remote client.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
