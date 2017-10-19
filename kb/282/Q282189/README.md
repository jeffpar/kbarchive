---
layout: page
title: "Q282189: ASP Error When Calling OOP Component with Delegation Security"
permalink: /kb/282/Q282189/
---

## Q282189: ASP Error When Calling OOP Component with Delegation Security

	Article: Q282189
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Web site application has been configured for Delegation security in the
	Component Services management tool, and the Web site is configured for Basic
	authentication, you may receive the following error message when you try to call
	or create an out-of-process component that is on the same computer as Internet
	Information Server (IIS):
	
	  Error Type: Server object, ASP 0177 (0x800706D5) 800706d5
	  /page.asp, line 3
	
	NOTE: Error 0x800706D5 is "The security context is invalid".
	
	CAUSE
	=====
	
	The user token that is generated from Basic authentication has the
	SecurityImpersonation impersonation level instead of the SecurityDelegation
	impersonation level.
	
	WORKAROUND
	==========
	
	Use Integrated Security (using Kerberos).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time        Version        Size     File name     
	-----------------------------------------------------------------
	  5/31/2001  03:31p   5.0.2195.3649   332,560     Asp.dll
	  5/31/2001  03:31p   5.0.2195.3649    13,584     Infoadmn.dll
	  5/31/2001  03:31p   5.0.2195.3649   245,520     Infocomm.dll
	  5/31/2001  03:31p   5.0.2195.3649    62,736     Isatq.dll
	  5/31/2001  03:32p   5.0.2195.3649     7,440     W3ctrs.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This fix corrects this problem by using the DuplicateTokenEx function to modify
	the token's impersonation level to SecurityDelegation.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
