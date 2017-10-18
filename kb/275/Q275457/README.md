---
layout: page
title: "Q275457: IIS 5.0 Loops Infinitely When A User Must Change Their Password"
permalink: kb/275/Q275457/
---

## Q275457: IIS 5.0 Loops Infinitely When A User Must Change Their Password

	Article: Q275457
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user makes a request to a Web server, Internet Information Services (IIS)
	5.0 may go into an infinite loop. This problem can occur if the IISADMPWD
	virtual directory is configured to require authentication that is not Anonymous
	and the user's password has either expired or has been configured so that the
	user must change their password at the next logon. The PasswordChangeFlags in
	the metabase must also be set to enable password change notifications.
	
	CAUSE
	=====
	
	When you have IIS configured to support password change notifications, IIS
	notifies a user whose password is about to expire, has expired, or has been
	configured to force the user to change their password at the next logon. IIS
	does this by redirecting the user to either a page that informs them that the
	password is about to expire, or to a page that states that their password has
	expired. In Internet Information Server (IIS) 4.0, this redirect occurs
	internally. IIS 5.0 uses a 302 redirect, which forces a brand new request from
	the client, and subsequently, if authentication is required on the IISADMPWD
	virtual directory, a new logon attempt occurs. For a password that has expired,
	or must be changed at the next logon, the logon fails and IIS redirects again,
	which causes an infinite loop.
	
	WORKAROUND
	==========
	
	Allow Anonymous access on the IISADMPWD virtual directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version        Size      File name    
	  ---------------------------------------------------------
	  5/31/2001  03:32p  5.0.2195.3096  353,040   W3svc.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
