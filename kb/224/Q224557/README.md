---
layout: page
title: "Q224557: XADM: MIMEsweeper for Exchange Server Hides New E-Mail"
permalink: /kb/224/Q224557/
---

## Q224557: XADM: MIMEsweeper for Exchange Server Hides New E-Mail

	Article: Q224557
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After the installation of MIMEsweeper for Exchange Server, you may encounter the
	following problem if the Mail Sweeper service is stopped or disabled.
	
	Users on an Exchange Server will not be able to receive or view new mail if the
	Mail Sweeper service is stopped or disabled. This happens after you install and
	evaluate the MIMEsweeper software for Exchange Server.
	
	The end user will not be able to view or read e-mail, even though the user hears
	a new mail notification sound and the new mail icon is displayed in the
	taskbar.
	
	MIMEsweeper for Exchange Server is not a Microsoft product.
	
	MORE INFORMATION
	================
	
	To resolve this issue, you can either start the Mail Sweeper service, or you can
	use the Untarget.exe utility provided by MIMEsweeper.
	
	The correct syntax is "UNTARGET.EXE mailsweeper (password) all" (without the
	quotation marks).
	
	The Exchange Service account password may be used for the Mail Sweeper password.
	
	Please contact MIMEsweeper for information on how to obtain this utility.
	
	MIMEsweeper support can be reached by e-mail at support@us.mimesweeper.com or by
	calling (425) 460-6000.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: missing mail
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
