---
layout: page
title: "Q158336: XADM: Modifying Version Values for Proxy Address Generator"
permalink: kb/158/Q158336/
---

## Q158336: XADM: Modifying Version Values for Proxy Address Generator

	Article: Q158336
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create a new mailbox in Microsoft Exchange Server, the following error
	messages may be displayed if the file version for the proxy address generators
	are not correctly specified in the directory:
	
	  E-mail addresses for address type "address type" were not generated because
	  an error occurred. To view details of the error, see the application event
	  log in the Windows NT Event Viewer on the Microsoft Exchange Server computer.
	
	  An error occurred while processing an e-mail address. To view details of the
	  error, see the application event log in the Windows NT Event Viewer on the
	  Microsoft Exchange server Computer. Microsoft Exchange Administrator ID no:
	  c1030b37
	
	  An error occurred while processing an e-mail address. To view details of the
	  error, see the application event log in the Windows NT Event Viewer on the
	  Microsoft Exchange server Computer. Microsoft Exchange Administrator ID no:
	  c1030b35
	
	The following events are logged in the Windows NT application event log:
	
	  MSExchangeSA Event ID: 2036 The file version of
	  "C:\exchsrvr\address\SMTP\i386\<file name>.dll" installed on the local
	  server is not current. Looking at servers in the site for a current version.
	
	  MSExchangeSA Event ID: 2037 The file version of "\address\SMTP\i386\<file
	  name>.dll" installed on the local server is not current. Unable to locate
	  a correct version on any server in the site.
	
	MORE INFORMATION
	================
	
	These error messages are displayed when the directory version of the proxy
	generators does not match the actual dynamic link library (DLL) file version.
	
	To verify that the appropriate proxy DLL is used:
	
	1. Verify the build version that you use. To do this, look at the properties on:
	
	  organization\site\Configuration\Server \server name
	
	2. Verify the file version for the proxy DLL. To do this, look at the properties
	  on:
	
	  organization\site\Configuration\Addressing\"E- mail address generators"\proxy
	  address generator object
	
	  The information there must match the information in the table at the end of
	  this article. If this information does not match, either obtain the correct
	  file from the source compact disc, or modify the directory version to match
	  the file versions.
	
	You can use the following information when you restore different versions of the
	Inproxy.dll, Pcproxy.dll, and X400prox.dll files.
	
	You must verify that the actual file versions on the hard disk drive are the ones
	that were supplied with the respective build number. For example, if you have
	Microsoft Exchange Server version 4.0 Service Pack 2 installed, the proxy DLL
	files supplied with Service Pack 2 must be in place. You can obtain these files
	from the original compact discs; copy them to the computer running Microsoft
	Exchange Server. The default location on the hard disk drive is:
	
	  drive:\Exchsrvr\Address\address type\processor type\proxy generator file.dll
	
	To change the current version, you must run the Microsoft Exchange Server
	Administrator program in raw mode as follows:
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at an MS-DOS command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Go to the following location:
	
	  Organization\Site\Configuration\Addressing\"E-mail address generators"
	
	  Look for the existing address generator objects in the right pane of the
	  window.
	
	3. Select "Internet E-mail Address Generator for i386".
	
	4. On the File menu, click Raw Properties. (Repeat this step for all proxy
	  generators.)
	
	5. In the left pane of the window a list of existing object attributes is
	  displayed. Find File-Version, and compare the existing value with the values
	  in the following table.
	
	  NOTE: If you cannot find File-Version you may have to change "List attributes
	  of type:" to All.
	
	Server Build      File Name and Admin Version   Raw File-Version
	
	     Exchange 837.10   Inproxy.dll   - 4.0.837.3   0300450300000400
	     (RTM)             Pcproxy.dll   - 4.0.837.10  0A00450300000400
	                       X400prox.dll  - 4.0.837.10  0A00450300000400
	
	     Exchange 838.15   Inproxy.dll   - 4.0.838.15  0300450300000400
	     (SP1)             Pcproxy.dll   - 4.0.838.15  0A00450300000400
	                       X400prox.dll  - 4.0.838.15  0A00450300000400
	
	     Exchange 993.4    Inproxy.dll   - 4.0.993.5   0500E10300000400
	     (SP2)             Pcproxy.dll   - 4.0.993.4   0400E10300000400
	                       X400prox.dll  - 4.0.993.4   0400E10300000400
	
	     Exchange 994.64   Inproxy.dll   - 4.0.994.63  3F00E20300000400
	     (SP3)             Pcproxy.dll   - 4.0.993.4   0400E10300000400
	                       X400prox.dll  - 4.0.993.4   0400E10300000400
	
	     Exchange 995.54   Inproxy.dll   - 4.0.995.52  3400E30300000400
	     (SP4)             Pcproxy.dll   - 4.0.993.4   0400E10300000400
	                       X400prox.dll  - 4.0.993.4   0400E10300000400
	
	     Exchange 996.72   Inproxy.dll   - 4.0.996.62  3E00E40300000400
	                       Pcproxy.dll   - 4.0.996.72  4800E40300000400
	                       X400prox.dll  - 4.0.996.62  4800E40300000400
	
	     Exchange 1457.11  Inproxy.dll   - 5.0.1457.3  0300B10500000500
	     (RTM)             Pcproxy.dll   - 5.0.1457.3  0300B10500000500
	                       X400prox.dll  - 5.0.1457.3  0300B10500000500
	
	     Exchange 1458.48  Inproxy.dll   - 5.0.1457.3  0300B10500000500
	     (SP1)             Pcproxy.dll   - 5.0.1457.3  0300B10500000500
	                       X400prox.dll  - 5.0.1457.3  0300B10500000500
	
	     Exchange 1460.8   Inproxy.dll   - 5.0.1460.8  0800B40500000500
	     (SP2)             Pcproxy.dll   - 5.0.1460.8  0800B40500000500
	                       X400prox.dll  - 5.0.1460.8  0800B40500000500
	
	     Exchange 1960.5   Inproxy.dll   - 5.5.1960.5  0500A80705000500
	     (RTM)             Pcproxy.dll   - 5.5.1960.5  0500A80705000500
	                       X400prox.dll  - 5.5.1960.5  0500A80705000500
	
	     Exchange 2232.18  Inproxy.dll   - 5.5.1960.5  0500A80705000500
	     (SP1)             Pcproxy.dll   - 5.5.1960.5  0500A80705000500
	                       X400prox.dll  - 5.5.1960.5  0500A80705000500
	
	     Exchange 2448.8   Inproxy.dll   - 5.5.2448.8  0800900905000500
	     (SP2)             Pcproxy.dll   - 5.5.2448.8  0800900905000500
	                       X400prox.dll  - 5.5.2448.8  0800900905000500
	
	     Exchange 2650.24  Inproxy.dll   - 5.5.2650.24 18005A0A05000500
	     (SP3)             Pcproxy.dll   - 5.5.2650.24 18005A0A05000500
	                       X400prox.dll  - 5.5.2650.24 18005A0A05000500
	
	     Exchange 2653.23  Inproxy.dll   - 5.5.2653.23 17005D0A05000500
	     (SP4)             Pcproxy.dll   - 5.5.2653.23 17005D0A05000500
	                       X400prox.dll  - 5.5.2653.23 17005D0A05000500
	
	     NOTE: No changes were made in Exchange Server Service Pack 1
	
	6. Change the current File-Version value if the Raw File-Version value does not
	  correspond to the Exchange Server build number as indicated in the table.
	  There is no need to restart either the services or the Exchange Server
	  Administrator program.
	
	7. Verify that the File-Version value has changed.
	
	NOTE: Any special fixes or updates that you have obtained from Microsoft change
	the file and build version numbers and may not match the table above. Always
	follow the instructions included with the fix.
	
	
	Additional query words: 4.00 IMCADMIN.DLL 5.00 extension SMTP Internet mail connector inproxy dll pcproxy x400prox conadmin
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
