---
layout: page
title: "Q197975: XADM: Error When Removing SBS Version of Exchange"
permalink: /kb/197/Q197975/
---

## Q197975: XADM: Error When Removing SBS Version of Exchange

{% raw %}

	Article: Q197975
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There may be times when it is necessary to remove Exchange Server from the
	Microsoft BackOffice Small Business Server (SBS). When you remove Exchange
	Server, you may encounter the following error during the removal phase of
	setup:
	
	  The file _ie4ad.css on Disc 1 is needed.
	
	CAUSE
	=====
	
	Even though you have Disc 1 inserted, this error will still appear. This error
	is caused because you are using the BackOffice SBS 4.0 CD to remove version 4.0a
	of SBS.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Insert the SBS 4.0a CD in the drive when prompted.
	
	  -or-
	
	- Browse the hard disk drive for the following files when prompted:
	
	     File           Location
	     ---------------------------------------------------------
	     _ie4ad.css     x:\Smallbusiness\Html
	     Cliie.inf      x:\Smallbusiness\Template
	     Useview.asp    x:\Inetpub\Wwwroot\Intranet\Sbsclienthelp
	
	
	For more information on how to remove Exchange Server from the Small Business
	Server, please see the following article in the Microsoft Knowledge Base:
	
	  Q194810 SBS:Exchange:How to Remove/Reinstall Exchange in SBS
	
	
	Additional query words: sbs smallbiz
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
