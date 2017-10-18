---
layout: page
title: "Q323730: XCCC: Err Msg: &quot;System Cannot Find File Specified&quot; (0xc0020002)"
permalink: kb/323/Q323730/
---

## Q323730: XCCC: Err Msg: &quot;System Cannot Find File Specified&quot; (0xc0020002)

	Article: Q323730
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Exchange Server 5.5 Service Pack 4, you may receive the
	following error message:
	
	  System cannot find the file specified
	
	  Microsoft Windows NT ID No: 0xc0020002
	
	You receive the error message when you update the Microsoft Outlook Web Access
	(OWA) component.
	
	NOTE: You may also receive this error message if you manually remove OWA, and
	then try to reinstall it.
	
	CAUSE
	=====
	
	This issue can occur if you remove the Cmd.exe file from the
	%Systemroot%\System32 folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, move the Cmd.exe file to the %Systemroot%\System32
	folder, and then reapply Exchange Server 5.5 Service Pack 4.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
