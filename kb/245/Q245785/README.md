---
layout: page
title: "Q245785: XADM: Installing Exchange Server from Select CD on Windows 2000"
permalink: kb/245/Q245785/
---

## Q245785: XADM: Installing Exchange Server from Select CD on Windows 2000

	Article: Q245785
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 28-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Exchange Server 5.5 from a Select CD onto a computer
	running Microsoft Windows 2000, you may receive one of the following error
	messages:
	
	  Setup has detected that you are not running a set of Windows NT related fixes
	  required for clustering to work with Microsoft Exchange Server. Please see
	  the 'Clustering with Exchange Server Document' for further instructions.
	
	  Microsoft Exchange Server Setup ID no: c1037996
	
	-or-
	
	  Setup has detected that you are not running a set of Windows NT related fixes
	  required for Outlook Web Access. Please see the Release Notes for further
	  instructions.
	
	  Microsoft Exchange Server Setup ID no: c1037997
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	1. Make a local copy of the Setup folder.
	
	2. Rename the Srvmax.exe file or the Srvmin.exe file to Setup.exe.
	
	The following information tells why this has to be done:
	
	There is a fix in Windows 2000 that recognizes Exchange Server setup specifically
	and makes some special versioning allowances. Changing the file name gives
	Windows 2000 the ability to determine what is being installed and to allow for
	installation.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
