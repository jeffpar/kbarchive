---
layout: page
title: "Q242157: XCON: TP4 Transport Protocol Not Supported Under Windows 2000"
permalink: /kb/242/Q242157/
---

## Q242157: XCON: TP4 Transport Protocol Not Supported Under Windows 2000

	Article: Q242157
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-OCT-1999
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation included with the Beta product files, or 
	check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to upgrade an Exchange Server computer with the TP4 transport
	protocol from Windows NT 4.0 to Windows 2000, the upgrade does not work and you
	receive the following error message:
	
	  The currently installed driver for the TP4 protocol is not compatible with
	  Microsoft Windows 2000 and will be disabled during the upgrade.
	
	The upgrade, however, does not continue until the protocol is removed.
	
	CAUSE
	=====
	
	The TP4 protocol is no longer supported under Windows 2000.
	
	WORKAROUND
	==========
	
	Any Exchange Server computers using the TP4 protocol must remain at Windows NT
	4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
