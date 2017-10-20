---
layout: page
title: "Q127200: HOWTO: Use Other Registry Keys with Visual C++ 2.0 and Above"
permalink: /kb/127/Q127200/
---

## Q127200: HOWTO: Use Other Registry Keys with Visual C++ 2.0 and Above

{% raw %}

	Article: Q127200
	Product(s): Microsoft C Compiler
	Version(s): 2000,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kbDebug kbide kbOSWin2000 kbVC kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSToo
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.2, 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to instruct Microsoft Visual C++ to use a Registry key other than
	the default by specifying the /I<key_suffix> option as shown in the MORE
	INFORMATION section below. This allows you to specify different environments
	with invocations of Visual C++. By making multiple copies of the Visual C++
	icon, you can specify different environments or customization options and start
	Visual C++ using these settings.
	
	NOTE: Use of the /I switch is not supported. The /I switch is usually used to
	have different environments or it can be used as to help debug problems with
	Visual C++ where the default registry is suspected of being corrupted. It is not
	recommended to use the /I switch in order to run different point releases of
	Visual C++.
	
	MORE INFORMATION
	================
	
	The default Registry key used by Visual C++ version 2.0 is "Visual C++ 2.0" and
	the default Registry key used by Visual C++ version 4.0 is "Developer." Visual
	C++ version 5.0 uses the "DevStudio\5.0" key, while Visual C++ version 6.0 uses
	the "DevStudio\6.0" key.
	
	All keys are found in the HKEY_CURRENT_USER on Local Machine window under
	HKEY_CURRENT_USER\Software\Microsoft.
	
	In the properties for the Visual C++ icon, you can add the /I switch to the
	Command Line field. The /I switch must be followed immediately by the extension
	to the registry entry that will be used.
	
	For example, the following switch starts Visual C++ using the "Visual C++
	2.0_Test" key:
	
	     /I_Test
	
	The first time Visual C++ is started with this switch it will create the "Visual
	C++ 2.0_Test" key using the default settings. At this point, you will have two
	keys, the original "Visual C++ 2.0" key and the "Visual C++ 2.0_Test" key.
	Future invocations of Visual C++ using the /I_Test switch will use the existing
	"Visual C++ 2.0_Test" key, taking advantage of customizations that are specific
	to that key.
	
	CAUTION: Don't make modifications to the Registry by hand. The Registry is
	intended to be edited only by the application that uses it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbDebug kbide kbOSWin2000 kbVC kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
