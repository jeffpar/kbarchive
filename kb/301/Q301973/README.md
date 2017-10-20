---
layout: page
title: "Q301973: Encarta World Atlas 2001: &quot;Msworld6 Caused IPF&quot; Err Msg"
permalink: /kb/301/Q301973/
---

## Q301973: Encarta World Atlas 2001: &quot;Msworld6 Caused IPF&quot; Err Msg

{% raw %}

	Article: Q301973
	Product(s): Microsoft Home Miscellaneous Products
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Interactive World Atlas 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Microsoft Encarta Interactive World Atlas 2001, you
	may receive the following error message:
	
	  Error: "msworld6 caused ipf in refmenu.dll @ 0177:2a40f3d1"
	
	CAUSE
	=====
	
	This behavior occurs if the Refmenu.dll file is not registered.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually register Refmenu.dll. To do this, follow these
	steps:
	
	1. Click Start, and then click Run.
	
	2. In the Run dialog box, type "regsvr32" (without the quotation marks), but do
	  not click OK or press ENTER.
	
	3. Click Start, point to Search, and then click "For Files or Folders".
	
	4. Search for "Refmenu.dll" (without the quotation marks).
	
	5. In the Search Results list, click and drag Refmenu.dll to the Run dialog
	  box.
	
	  Notice that the complete path to Refmenu.dll now appears in the command line.
	  The command line now appears similar to the following:
	
	  regsvr32 "C:\Program Files\Common Files\Microsoft Shared\Reference
	  2001\RefMenu.dll"
	
	  Click OK.
	
	6. You should receive a message similar to the following:
	
	  DllRegisterServer in C:\Program Files\Common Files\Microsoft Shared\Reference
	  2001\REFMENU.DLL succeeded.
	
	7. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaWorldAtlas2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
