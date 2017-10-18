---
layout: page
title: "Q195824: XFOR: SBS Error: Mt.exe Unable to Locate Dll"
permalink: kb/195/Q195824/
---

## Q195824: XFOR: SBS Error: Mt.exe Unable to Locate Dll

	Article: Q195824
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft BackOffice Small Business Server 4.0 customers may install the MS Mail
	Connector by running setup for Exchange Server and choosing Add/Remove
	components. When you attempt to start the MS Mail Connector Interchange service
	or when you restart, the following error message may be displayed:
	
	  The dynamic link library address.dll can not be found in the specified path
	
	  C:\Exchsrvr\connect\msmcon\bin;.;C:\winnt\system32;C:\winnt\system;C:\wi
	  nnt;C:\winntsystem32;C:\winnt;C:\mssql\binn.
	
	Clicking OK will result in the following error message being displayed:
	
	  Could not start the MS Mail Connector Exchange service on
	  \\<computername>. Error 2186 The service is not responding to the
	  control function.
	
	CAUSE
	=====
	
	When you install the MS Mail Connector, the setup program does not install a
	copy of Address.dll to the Exchsrvr\Connect\Msmcon\Bin subdirectory.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Copy the Address.dll file from one of the following locations:
	
	  Exchsrvr\Connect\Msexcimc\Bin
	
	  -or-
	
	  On the BackOffice Small Business Server disc1, go to
	  Exchange\Setup\I386\Connect\Msexcimc\Bin\Address.dll
	
	2. Place the new Address.dll file in the following location:
	
	  Exchsrvr\Connect\Msmcon\Bin
	
	Additional query words: sbs msmail exfor smallbiz
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
