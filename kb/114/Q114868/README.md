---
layout: page
title: "Q114868: Error 0126 When You Start the Net2Com Service"
permalink: /kb/114/Q114868/
---

## Q114868: Error 0126 When You Start the Net2Com Service

{% raw %}

	Article: Q114868
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Net2Com utility included with the Windows NT Resource Kit
	from the Services applet of Control Panel, error 0126 is generated.
	
	CAUSE
	=====
	
	The error is caused by missing null characters on some of the Net2Com entries in
	the Windows NT Registry. The cause of the error is not Net2Com but Net2Set, the
	installation program for Net2Com. Net2Set fails to write the additional
	terminator byte to the Registry. This causes the service loader to receive
	invalid information and thus generate the error. The problem occurs only if you
	install the Windows NT Resource Kit from floppy disks.
	
	RESOLUTION
	==========
	
	A corrected version of Net2Set is included on the Windows NT Resource Kit on
	CD-ROM.
	
	If you are unable to install the Windows NT Resource Kit from CD-ROM, you can
	work around this problem by doing the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and choose the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Net2com
	
	2. Choose the SERVICEDLL value.
	
	3. Make sure the NUM LOCK key is not selected.
	
	4. Press END, SPACEBAR, BACKSPACE.
	
	5. Choose the OK button.
	
	  This causes Registry Editor to rewrite the value with the correct number of
	  terminator characters.
	
	6. Repeat steps 3-5 for the SERVICEINIT and SERVICEMAIN values.
	
	7. Quit Registry Editor and start the Net2Com service.
	
	The products included here are manufactured by ESDL Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: prodnt esdl winntrk ntas reskit err msg
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
