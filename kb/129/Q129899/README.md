---
layout: page
title: "Q129899: PC WRmt: Err Msg: Address Is No Longer Valid..."
permalink: kb/129/Q129899/
---

## Q129899: PC WRmt: Err Msg: Address Is No Longer Valid...

	Article: Q129899
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you check the details of an user name in Microsoft Mail Remote for Windows,
	the following error message may be displayed:
	
	  Address is no longer valid. User or PO no longer exists.
	
	All mail sent to this user name will be returned with the following error in the
	body of the message:
	
	  The recipient has been deleted or has no email address.
	
	CAUSE
	=====
	
	The address list contains invalid extended information. The invalid information
	consists of default template fields associated with a postoffice other than on
	the one where the user's account resides. This condition can occur if customized
	user template *.TPL files are present on the remote user's workstation.
	
	RESOLUTION
	==========
	
	Install the latest version of MSRMTUI.DLL and manually update your address lists
	per the instructions included with the MSRMTUI.EXE self-extracting file on the
	Microsoft Software Library. The updated MSRMTUI.DLL file provided in this update
	will prevent the customized user template *.TPL files from being copied to the
	remote user's workstation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. This problem was corrected in MSRMTUI.DLL version
	3.2.0.4001. If you do not have version 3.2.0.4001 (or later), you can find
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
	
	  On the Edit menu, click Go To, and then click Other Location. Type "mssupport"
	  (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area. Locate and Download MSRMTUI.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	For more information about how to obtain this Application Note, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q103946 Mail Remote MSRMTUI.DLL Update
	
	Additional query words: 3.20 PO exists valid
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
