---
layout: page
title: "Q192101: DOC: Incorrect Documentation for PCMCIA Ethernet Debugging"
permalink: /kb/192/Q192101/
---

## Q192101: DOC: Incorrect Documentation for PCMCIA Ethernet Debugging

{% raw %}

	Article: Q192101
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOAK kbDocs kbVC500 kbOSWinCE210
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE 2.10 Enhancement Pack for Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The release notes for the product listed above state:
	
	  You must create the following registry key on your development workstation to
	  allow the debugging component, Cemon, to work with PCMCIA Ethernet debugging:
	
	This statement should read:
	
	  You must create the following registry key on your target platform to allow
	  the debugging component, Cemon, to work with PCMCIA Ethernet debugging:
	
	MORE INFORMATION
	================
	
	CEMON is a module that the IDE debugger transfers to the target platform and
	then executes. The HKEY_CURRENT_USER\Software\Microsoft\Cemon registry key must
	reside on the target platform, which CEMON will read in order to determine the
	host to communicate with.
	
	REFERENCES
	==========
	
	Microsoft Windows CE 2.10 Enhancement Pack for Windows CE Embedded Toolkit for
	Visual C++ 5.0 - Release Notes
	
	======================================================================
	Keywords          : kbOAK kbDocs kbVC500 kbOSWinCE210 
	Technology        : kbAudDeveloper kbWinCESearch kbWinCEEnh210ETKVC500
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
