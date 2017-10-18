---
layout: page
title: "Q112257: PC Adm: MOVEUSER: Mail Clients Erratic and Workstations Hang"
permalink: kb/112/Q112257/
---

## Q112257: PC Adm: MOVEUSER: Mail Clients Erratic and Workstations Hang

	Article: Q112257
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail clients may behave erratically for no apparent reason after you use the
	MOVEUSER utility. The workstation may stop responding (hang).
	
	CAUSE
	=====
	
	When the MOVEUSER utility calculates the total disk space needed to move a user
	or set of users, it fails to detect the logon status of the user or users. Even
	if the user is logged on using Mail at the time, an administrator who has just
	moved the account of that user can delete it and not receive a warning about the
	current logon status.
	
	WORKAROUND
	==========
	
	Before you use the MOVEUSER utility , make sure all users you want to move are
	not logged into Mail or using their postoffice. There are various ways to do
	this, depending on the type of Mail client being used. Under extreme conditions,
	failing to ensure the all users are logged off before you delete mailbox
	accounts can result in the loss of data.
	
	MORE INFORMATION
	================
	
	The MOVEUSER utility is provided with MVUSR.EXE on the Microsoft Download
	Center.
	
	You can find MVUSR.EXE,
	(http://support.microsoft.com/download/support/mslfiles/MVUSR.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MVUSR.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MVUSR.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MVUSR.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 2.10 3.00 3.00b 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.0b,3.2
	
	=============================================================================
	
