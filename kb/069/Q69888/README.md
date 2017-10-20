---
layout: page
title: "Q69888: INFO: Fatal Exit Code 0x0506 Definition"
permalink: /kb/069/Q69888/
---

## Q69888: INFO: Fatal Exit Code 0x0506 Definition

{% raw %}

	Article: Q69888
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform kbSysSettings
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Fatal Exit code 0x0506 is not documented in Appendix C of the "Microsoft Windows
	Software Development Kit Reference Volume 2" version 3.0.
	
	This Fatal Exit will occur if the GetProfileString() or GetPrivateProfileString()
	function is called with the lpDefault parameter set to NULL. lpDefault specifies
	a string to return in the lpReturnedString buffer if no match for lpKeyName is
	found.
	
	To correct this Fatal Exit, always provide a valid string pointer for the
	lpDefault parameter.
	
	GetProfileString() and GetPrivateProfileString() are documented in the Windows
	SDK "Reference, Volume 1" for version 3.0 and in the "Programmer's Reference,
	Volume 2: Functions" for version 3.1.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform kbSysSettings 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
