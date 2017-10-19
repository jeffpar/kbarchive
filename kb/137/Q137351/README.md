---
layout: page
title: "Q137351: PC Forms: MEFROUTE.XLA Will Not Route Excel 5 Workbooks"
permalink: /kb/137/Q137351/
---

## Q137351: PC Forms: MEFROUTE.XLA Will Not Route Excel 5 Workbooks

	Article: Q137351
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Excel macro, MEFROUTE.XLA, included with Microsoft Electronic
	Forms Designer, will not allow you to route workbooks from Microsoft Excel
	version 5.0 or later. The workbook is sent successfully, but the recipient
	receives the following error when he or she tries to open the attachment:
	
	  The attached file [BOOK1.XLS]Sheet1 could not be opened because a temporary
	  file could not be created."
	
	CAUSE
	=====
	
	The MEFROUTE.XLA shipped with Microsoft Electronic Forms Designer was written
	for Microsoft Excel versions 3.0 and 4.0. Because of changes in the way
	Microsoft Excel version 5.0 and later use workbooks with sheet tabs, the routing
	macro needs to be edited to route workbooks successfully.
	
	RESOLUTION
	==========
	
	You can find MEFROUTE.EXE,
	(http://support.microsoft.com/download/support/mslfiles/MEFROUTE.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MEFROUTE.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles
	  folder.
	  Get MEFROUTE.EXE
	
	- The Microsoft Network
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MEFROUTE.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.20 mefroute.xla eforms
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	
