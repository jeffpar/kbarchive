---
layout: page
title: "Q11044: EXEMOD Cannot Be Used with Windows Files"
permalink: /kb/011/Q11044/
---

## Q11044: EXEMOD Cannot Be Used with Windows Files

{% raw %}

	Article: Q11044
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EXEMOD is an MS-DOS-based application used to inspect or modify information in
	the EXE file header used by applications in the MS-DOS environment. However,
	because Windows uses a modified MS-DOS header format for its EXE files, EXEMOD
	cannot be used with Windows files. Use EXEHDR instead.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
