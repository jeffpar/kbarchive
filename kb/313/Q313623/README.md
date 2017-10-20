---
layout: page
title: "Q313623: FIX: Menus Display in English on Spanish-Language OS"
permalink: /kb/313/Q313623/
---

## Q313623: FIX: Menus Display in English on Spanish-Language OS

{% raw %}

	Article: Q313623
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Spanish version of Visual FoxPro 7.0 on a computer running a
	multi-language Windows operating system (OS), such as Microsoft Windows 2000 or
	Microsoft Windows XP, and the language settings for the OS are set to any
	language other than Spanish(Spain) (Espanol(Espana)), the Visual FoxPro 7.0
	menus appear in English instead of Spanish.
	
	CAUSE
	=====
	
	When Visual FoxPro loads, it checks with the OS to determine which resource file
	to load. If the OS returns any language setting other than "ESN"
	(Spanish(Spain)), Visual FoxPro defaults to the English resource file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	WORKAROUND
	==========
	
	Although Microsoft recommends that you apply Visual FoxPro 7.0 Service Pack 1
	(SP1), you can work around this problem by doing one of the following:
	
	- Set the regional options for the OS to Spanish(Spain).
	
	- Use the -l command-line switch to specify the Spanish resource file. Be sure
	  not to leave a space after the "l". For example, create a shortcut with a
	  command line such as the following:
	
	  "C:\Program Files\Microsoft Visual FoxPro\VFP7.exe" -lvfp7esn.dll
	
	- Delete or rename all of the Visual FoxPro 7.0 resource files (Vfp7xxx.dll)
	  except Vfp7esn.dll. This forces Visual FoxPro 7.0 to load the correct
	  resource file by default.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Spanish-language version of Windows 2000 or Windows XP.
	
	2. Install the Spanish-language version of Visual FoxPro 7.0.
	
	3. In Windows, open the Regional and Language Options control panel.
	
	4. On the Regional Options tab, set the "Standards and Formats" combo box to any
	  language other than Espanol(Espana); for example, Espanol(Mexico).
	
	5. Start Visual FoxPro 7.0.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
