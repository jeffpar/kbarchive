---
layout: page
title: "Q124039: PC Win: Setup Err Msg: Could Not Create Directory F:&#92;TMP.INI"
permalink: /kb/124/Q124039/
---

## Q124039: PC Win: Setup Err Msg: Could Not Create Directory F:&#92;TMP.INI

{% raw %}

	Article: Q124039
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, Setup creates a
	TMP.INI directory in the root directory of the installation drive. Setup may
	fail with the following error message,
	
	  Could not create directory F:\TMP.INI
	
	when run on a Novell NetWare network if the Windows Mail client files are located
	on a shared drive that is mapped as a logical drive.
	
	Typically, each user under NetWare has a home directory from which to execute
	Setup. If your NetWare account has restrictions on the root directory of the
	network drive (for example, create restrictions), then Setup will fail because
	it cannot create the TMP.INI directory.
	
	Setup does not make use of a temporary directory environment variable like TEMP.
	In order to complete, Setup needs to create the TMP.INI directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. This problem was corrected in the SETUP.EXE and
	SETUP.INF files included in SETUPD.EXE.
	
	You can find SETUPD.EXE,
	(http://support.microsoft.com/download/support/mslfiles/SETUPD.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile SETUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get SETUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download SETUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	The following are some temporary workarounds for this problem:
	
	1. MAP ROOT your home directory. For example: MAP ROOT G:=
	  SYS:/APPS\USERS\USERNAME
	
	2. Run Setup from your local drive. Copy your installation to the MAILEXE
	  directory on the network share.
	
	3. Obtain sufficient rights to the root directory of network share.
	
	Additional query words: 3.00b 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
