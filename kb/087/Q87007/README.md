---
layout: page
title: "Q87007: BUG: Help Compiler Hangs When .HPJ File &#91;MAP&#93; Section Too Big"
permalink: /kb/087/Q87007/
---

## Q87007: BUG: Help Compiler Hangs When .HPJ File &#91;MAP&#93; Section Too Big

{% raw %}

	Article: Q87007
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin32
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a help project (HPJ) file with the Microsoft Windows Help Compiler
	causes the system to hang, reboot, or cause a system integrity violation.
	
	CAUSE
	=====
	
	The [MAP] section of the HPJ file contains more than approximately 4096 entries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in version 3.1 of the Windows Help
	Compiler provided with the Microsoft Windows SDK version 3.1. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: buglist3.10 3.10 HC31 HC31.EXE HCP HCP.EXE
	
	======================================================================
	Keywords          : kbSDKWin32 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
