---
layout: page
title: "Q193419: IIS Registry Setting ReplyWithHTTP1.1 May Cause Problems"
permalink: kb/193/Q193419/
---

## Q193419: IIS Registry Setting ReplyWithHTTP1.1 May Cause Problems

	Article: Q193419
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set the following registry setting:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3SVC\Parameters
	  \ReplyWithHTTP1.1 REG_DWORD to 0 (zero)
	
	Internet Information Server (IIS) 4.0 will still use HTTP 1.1 features (such as
	chunked transfer encoding). This may cause problems on the client such as TCP
	connections remaining open that the client assumes will be closed, and the
	client displaying the chunk lengths as part of the HTML (because it is not
	expecting chunked content from a 1.0 server).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
