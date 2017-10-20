---
layout: page
title: "Q123146: BUG: GetOutlineTextMetrics() Returns Bad Data in Japanese Win"
permalink: /kb/123/Q123146/
---

## Q123146: BUG: GetOutlineTextMetrics() Returns Bad Data in Japanese Win

{% raw %}

	Article: Q123146
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,Japanese
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.1, Japanese 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Japanese Windows version 3.1, the fields otmpFamilyName, otmpFaceName,
	otmpStyleName, and otmpFullName of the OUTLINETEXTMETRIC structure (obtained by
	calling the GetOutlineTextMetrics() function) contain garbled data.
	
	For example, when True Type Arial Bold is selected, GetOutlineTextMetrics()
	returns:
	
	  otmpFamilyName: Ailal
	  otmpFaceName: AilBl
	  otmpStyleName: Bl
	  otmpFullName: Wntp:ra odVrin1(irsf)ersion 1 (Microsoft)
	
	CAUSE
	=====
	
	This problem is caused by a bug in the modules translating the True Type font
	descriptions from UNICODE to ANSI.
	
	STATUS
	======
	
	Microsoft Japan has confirmed this to be a bug in Japanese Windows version 3.1.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available. This problem does not exist in
	U.S. Windows version 3.1.
	
	
	Additional query words: Win3.1J WIFE FESDK
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,Japanese
	
	=============================================================================
	

{% endraw %}
