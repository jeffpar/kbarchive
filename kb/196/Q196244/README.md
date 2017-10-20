---
layout: page
title: "Q196244: FIX: Developer Studio Settings for User Platforms Not Saved"
permalink: /kb/196/Q196244/
---

## Q196244: FIX: Developer Studio Settings for User Platforms Not Saved

{% raw %}

	Article: Q196244
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOAK kbRegistry kbVC500 kbOSWinCE200bug kbDevStudio kbfix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you modify the tools paths for a Windows CE platform in Developer Studio by
	selecting Tools--Options--Directories from the menu, the information is not
	saved when you exit Developer Studio.
	
	CAUSE
	=====
	
	Some Windows CE Toolkit registry values are incorrectly reset when Developer
	Studio is started.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Close Developer Studio.
	
	2. Create the following two empty registry keys:
	
	     [HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0\Build System\ 
	        Components\CE Configurations\H/PC Ver. 1.00\Win32 (WCE x86em)]
	
	     [HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0\Build System\ 
	        Components\CE Configurations\H/PC Ver. 1.01\Win32 (WCE x86em)]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the Microsoft Windows CE
	Toolkit for Visual C++ 6.0 and the Microsoft Windows CE Platform Builder,
	version 2.11.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOAK kbRegistry kbVC500 kbOSWinCE200bug kbDevStudio kbfix 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCEETKSearch kbWinCESearch kbWinCEETKVC500
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	

{% endraw %}
