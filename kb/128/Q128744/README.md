---
layout: page
title: "Q128744: PC Win: No Message If Password Change Fails"
permalink: kb/128/Q128744/
---

## Q128744: PC Win: No Message If Password Change Fails

	Article: Q128744
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change a password in Mail for Windows, you will normally receive a
	message indicating that the password was successfully changed. If the password
	change fails, no message will be displayed.
	
	CAUSE
	=====
	
	If the ACCESS.GLB file is locked open when you attempt to change your password,
	you will not be notified that the password change was unsuccessful.
	
	If your attempt to change your password in Microsoft Mail for PC Networks, MS-DOS
	workstation fails, you will receive the following error:
	
	  Notice 5: Error in password change
	
	When the change is successful in the MS-DOS client, you get the following
	message:
	
	  Password Registered
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2a of Microsoft Mail
	for Windows. This problem was corrected in MSMAIL.EXE version 3.2.4085. If you
	do not have version 3.2.4085 (or later), You can find MAILUPD.EXE, a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  1. On the www.microsoft.com home page, click the Support icon.
	
	  2. Click Knowledge Base, and select the product.
	
	  3. Enter kbfile MAILUPD.EXE, and click GO!
	
	  4. Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com
	
	  1. Change to the Softlib/Mslfiles folder.
	
	  2. Get MAILUPD.EXE
	
	- The Microsoft Network
	
	  1. On the Edit menu, click Go To, and then click Other Location. Type
	     "mssupport" (without the quotation marks).
	
	  2. Double-click the MS Software Library icon.
	
	  3. Find the appropriate product area. Locate and Download MAILUPD.EXE.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320a
	Version           : WINDOWS:3.2a
	
	=============================================================================
	
