---
layout: page
title: "Q113166: PC Adm: Err Msg: Moving User 'UserName' Failed"
permalink: /kb/113/Q113166/
---

## Q113166: PC Adm: Err Msg: Moving User 'UserName' Failed

{% raw %}

	Article: Q113166
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.2 of Microsoft Mail for PC Networks, the following error message
	may appear when you try to run the MOVEUSER.EXE utility to move a user from one
	postoffice to another.
	
	  Moving user '<UserName>' failed.
	
	CAUSE
	=====
	
	One possible cause of this error is a missing or renamed Mail message file
	(MMF). The MOVEUSER utility extracts the location information for the placement
	of the MMF (either local or server). To successfully run MOVEUSER, the MMF must
	be defined with the location of "server."
	
	RESOLUTION
	==========
	
	To resolve this problem, copy or restore the user's MMF to the MMF subdirectory
	of the Mail database.
	
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
	
	Additional query words: 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
