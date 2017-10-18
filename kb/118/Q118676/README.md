---
layout: page
title: "Q118676: PC Ext: External Won't Dial Out Unless There Is Outbound Mail"
permalink: kb/118/Q118676/
---

## Q118676: PC Ext: External Won't Dial Out Unless There Is Outbound Mail

	Article: Q118676
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the External Mail program (EXTERNAL.EXE) to transfer mail between
	postoffices that are connected via modem, the External Mail program may not dial
	out to pick up mail from the other postoffice even though it is configured for
	twoway transfer and there is mail waiting to be picked up.
	
	CAUSE
	=====
	
	There is no outbound mail. The External Mail program only dials out if there is
	outbound mail.
	
	RESOLUTION
	==========
	
	This is a limitation of the External Mail program. The messages waiting at the
	other postoffice will be transferred to the destination if the External Mail
	program at the other postoffice is permitted to transmit messages. However, when
	there are dial-up restrictions, you can create outbound mail messages so
	External will dial out and pick up waiting messages. You can do this by using
	the AUTOSEND MAPI application that is provided in the SAMPLE.EXE file included
	with the MAPI.DLL update, MAPIUPD.EXE.
	
	You can find MAPIUPD.EXE,
	(http://support.microsoft.com/download/support/mslfiles/MAPIUPD.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MAPIUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MAPIUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon. Find the appropriate product area.
	  Locate and Download MAPIUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	The AUTOSEND application is a Microsoft Visual Basic program that sends mail at
	specific times or intervals. The source code is included with the MAPI.DLL
	update.
	
	Additional query words: 3.20 3.50 two way transfer
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : :3.2,3.5
	
	=============================================================================
	
