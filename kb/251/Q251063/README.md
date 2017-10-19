---
layout: page
title: "Q251063: Password Change Notification Incorrectly Notifies Accounts"
permalink: /kb/251/Q251063/
---

## Q251063: Password Change Notification Incorrectly Notifies Accounts

	Article: Q251063
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000SP2Fix
	Last Modified: 24-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients may be redirected to the Password change .htr page, stating that their
	password is about to expire in (x) # of days, even though these accounts have
	the Password does not expire option set. This includes the local or domain
	administrator accounts. This problem only happens when BASIC authentication is
	used.
	
	This issue has also occurred with accounts that do not have the Password does not
	expire option set, and the password is not about to expire.
	
	CAUSE
	=====
	
	A pointer containing the last users expiration information is not always cleared
	for the next request. All other account information is correctly updated.
	
	WORKAROUND
	==========
	
	To workaround this issue, use NTLM instead of Basic authentication.
	
	RESOLUTION
	==========
	
	IIS 4.0
	-------
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time      Version      Size    File name    Platform
	  -------------------------------------------------------------
	  12/16/1999 4:40:51   4.2.735.1    185,248 Infocomm.dll (x86)
	  12/16/1999 4:41:48   4.2.735.1     38,256 Ssinc.dll    (x86)
	  12/16/1999 4:41:57   4.2.735.1     25,360 Sspifilt.dll (x86)
	  12/16/1999 4:41:32   4.2.735.1    228,464 W3svc.dll    (x86)
	
	  12/16/1999 4:40:33   4.2.735.1    303,888 Infocomm.dll (alpha)
	  12/16/1999 4:41:29   4.2.735.1     60,176 Ssinc.dll    (alpha)
	  12/16/1999 4:41:35   4.2.735.1     39,696 Sspifilt.dll (alpha)
	  12/16/1999 4:41:16   4.2.735.1    384,272 W3svc.dll    (alpha)
	
	IIS 5.0
	-------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	Date        Time     Version        Size     File name      Platform
	---------------------------------------------------------------------
	10/24/2000  3:17:26  5.0.2195.2550  244,496  Infocomm.dll  (x86)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0
	and Internet Information Services 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
