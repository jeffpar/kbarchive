---
layout: page
title: "Q128219: PC Win: Importing PROFS Nicknames Displays Incorrect Templates"
permalink: kb/128/Q128219/
---

## Q128219: PC Win: Importing PROFS Nicknames Displays Incorrect Templates

	Article: Q128219
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If more than one nickname is present for a PROFS user, the user's details from
	the global address list (GAL) in Microsoft Mail for Windows may display
	incorrect information. If you check the PROFS gateway list or the external
	postoffice list in the Administrator's program (ADMIN.EXE), the details are
	displayed correctly. Also, if you check the Microsoft Mail for PC Networks,
	MS-DOS workstation, the details are displayed correctly from the network list,
	the PROFS list, and the GAL. The problem only occurs with the Windows client.
	
	CAUSE
	=====
	
	The problem occurs after you import a PROFS text file containing multiple
	nicknames pointing to the same userid. For example, a nickname would be an
	individual employee, and the userid would be an assistant. This import file
	contains "A" type of records pointing to one 10/10/10 address, and all of these
	contain the same mailbox name.
	
	After you run Rebuild to build the GAL, launch the Windows client. Select a
	nickname from the GAL in the Windows client, and get details. The alias
	information is correct, but the userid of another user in the import text file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2a of Microsoft Mail
	for PC Networks. This problem was corrected in MSSFS.DLL version 3.2.4083. If
	you do not have version 3.2.4083 (or later), you can find MSSFS.EXE, a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MSSFS.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MSSFS.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MSSFS.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320a
	Version           : WINDOWS:3.2a
	
	=============================================================================
	
