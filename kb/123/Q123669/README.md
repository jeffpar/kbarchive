---
layout: page
title: "Q123669: Err Msg: Cannot Load Extension FTPSMX.DLL"
permalink: /kb/123/Q123669/
---

## Q123669: Err Msg: Cannot Load Extension FTPSMX.DLL

{% raw %}

	Article: Q123669
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Server Manager, SRVMGR.EXE, is a utility found in the Windows NT 3.5 Server and
	Windows NT 3.5 Resource Kit CD-ROMs that allows you to manage computers and
	domains from your Windows NT Workstation client computer. When you run Server
	Manager on your Windows NT Workstation that is running the FTP Server service,
	one or both of the following error messages appear:
	
	  The procedure entry point I_FtpDisconnectUser could not be located in the
	  dynamic link library FTPSVC.DLL.
	
	  -OR-
	
	  Cannot load extension FTPSMX.DLL
	  Error 0126: The specified module cannot be found
	
	CAUSE
	=====
	
	If the FTP Server service is running on the computer, Server Manager looks for
	the files, FTPSMX.DLL and FTPSVC.DLL to load. However these files are not
	included in Windows NT Workstation or in the Windows NT 3.5 Resource Kit. They
	are available only on the Windows NT Server CD-ROM and in the download file,
	FTPSMX.EXE, mentioned below.
	
	The file, FTPSMX.DLL, is the FTP Server management extensions for Server Manager.
	
	WORKAROUND
	==========
	
	Expand the files FTPSVC.DLL, FTPSMX.DLL, and FTPSMX.HLP from the Windows NT 3.5
	Server CD-ROM to the %systemroot%\SYSTEM32 directory on your Windows NT 3.5
	Workstation computer.
	
	If you do not have the Windows NT Server CD-ROM, you can find FTPSMX.EXE, a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile FTPSMX.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get FTPSMX.EXE
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q119591
	  TITLE : How to Obtain Microsoft Support Files from Online Services
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
