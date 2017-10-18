---
layout: page
title: "Q184490: Err Msg: Microsoft VBScript Runtime Error [Line: 29]..."
permalink: kb/184/Q184490/
---

## Q184490: Err Msg: Microsoft VBScript Runtime Error [Line: 29]...

	Article: Q184490
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Web page using a shortcut icon on your desktop,
	the Web page may not be opened or you may receive the following error message:
	
	  Microsoft VBScript runtime error [Line: 29]
	
	  Object doesn't support this property or method.
	
	CAUSE
	=====
	
	This behavior can occur if the shortcut icon on your desktop was not properly
	created.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Connect to MSN, and then navigate to the Web page for which you want to
	  create a shortcut.
	
	2. Right-click the Web page, and then click Create Shortcut.
	
	3. When you are prompted that a shortcut to the current page will be placed on
	  your desktop, click OK.
	
	MORE INFORMATION
	================
	
	This behavior occurs when you create a shortcut icon by saving a Web page as an
	.htm file instead of using this method. The shortcut icon you create in this way
	links only to a local copy of the source code of the Web page and does not link
	to the Web page over the Internet.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN250
	Version           : WINDOWS:2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
