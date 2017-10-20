---
layout: page
title: "Q127752: PC DirSync: Err Msg: Warning 8 Error Deleting File..."
permalink: /kb/127/Q127752/
---

## Q127752: PC DirSync: Err Msg: Warning 8 Error Deleting File...

{% raw %}

	Article: Q127752
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the T2 phase of directory synchronization (Dir-Sync) (when SRVMAIN -r
	runs), the following errors may be displayed:
	
	  Error [115] Failure to read mail from <NULL>
	
	  Warning[8] Error deleting file: Network/postoffice/$SYSTEM
	
	  Server processing failure
	
	NOTE: There may be several 115 errors, but only one Warning 8.
	
	CAUSE
	=====
	
	SRVMAIN.EXE fails with the above error messages because of duplicate headers in
	the SYSTEM.MBG file. During automatic directory synchronization, a failure code
	is returned to NSDA, and the second phase of T2, which is SRVMAIN -t, is never
	spawned.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.2 and 3.2a of
	Microsoft Mail for PC Networks. This problem was corrected in SRVMAIN.EXE
	version 3.2.10. If you do not have version 3.2.10 (or later), You can find
	SRVUPD.EXE, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile SRVUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get SRVUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download SRVUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	MORE INFORMATION
	================
	
	Version 3.2.10 SRVMAIN.EXE ignores the duplicate headers and will complete the
	processing. The actual cause of duplicate headers in the SYSTEM.MBG is still
	being investigated.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
