---
layout: page
title: "Q119555: PC Adm: Notice 56 Error Deleting User Address in POL"
permalink: kb/119/Q119555/
---

## Q119555: PC Adm: Notice 56 Error Deleting User Address in POL

	Article: Q119555
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Mail Administrator program (ADMIN.EXE) to try to delete a user
	from the postoffice address list (POL) by selecting Local-Admin, Delete, the
	following error message may be displayed:
	
	  Notice 56
	  Error deleting user address in Postoffice Address list.
	
	However, this address will be missing when you select Local-Admin, Group, Create.
	
	CAUSE
	=====
	
	This problem can occur if the record for the user is missing from the Postoffice
	Address List (POL).
	
	RESOLUTION
	==========
	
	Use the MOVEUSER utility provided with version 3.2 of Microsoft Mail for PC
	Networks to delete the user. Sign on to the postoffice, select the record, and
	delete the user by selecting File, Delete.
	
	The MOVEUSER utility is provided with MVUSR.EXE on the Microsoft Software Library
	(MSL).
	
	You can find MVUSR.EXE,
	(http://support.microsoft.com/download/support/mslfiles/MVUSR.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.comhome
	  page click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MVUSR.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MVUSR.EXE
	
	- The Microsoft Network
	  On the Edit menu, click Go To, and then click Other Location. Type "mssupport"
	  (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area. Locate and Download MVUSR.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	NOTE: For more information about this error message, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q85647PC Adm: Err Msg: Notice 56: Error Deleting User Address
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : :3.2
	
	=============================================================================
	
