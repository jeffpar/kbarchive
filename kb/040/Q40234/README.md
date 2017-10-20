---
layout: page
title: "Q40234: INFO: EndPage(), NEXTBAND, and NEWFRAME Reset DC Attributes"
permalink: /kb/040/Q40234/
---

## Q40234: INFO: EndPage(), NEXTBAND, and NEWFRAME Reset DC Attributes

{% raw %}

	Article: Q40234
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 02-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the end of a page is reached during printing, the contents of the device
	context are reset to the default attributes for the device. This is true whether
	you are banding [using Escape(NEXTBAND)] or not [using Escape(NEWFRAME)].
	
	This information also applies to the EndPage() function, which was introduced in
	Windows 3.1.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
