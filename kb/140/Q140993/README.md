---
layout: page
title: "Q140993: PPT7: Invalid Data Error Clicking &quot;Send to Genigraphics&quot;"
permalink: /kb/140/Q140993/
---

## Q140993: PPT7: Invalid Data Error Clicking &quot;Send to Genigraphics&quot;

{% raw %}

	Article: Q140993
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbdta kbwizard
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	In PowerPoint, when you click Send To Genigraphics on the File menu, you may
	receive the following error message:
	
	  The file, <file name>.gna contains invalid data and will not be sent to
	  Genigraphics.
	
	CAUSE
	=====
	
	The following Windows 95 registry key is corrupted:
	
	  HKEY_CURRENT_USER\Software\Genigraphics\Wizard\7.0\Order
	
	RESOLUTION
	==========
	
	To work around this problem, delete the Order key from the registry and run the
	Genigraphics wizard again.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To delete the order key from the registry:
	
	1. On the Start menu, click Run.
	
	2. In the Open box, type "Regedit" (without the quotation marks).
	
	3. Expand the HKEY_CURRENT_USER key until you see this folder:
	
	    HKEY_CURRENT_USER\Software\Genigraphics\Wizard\7.0\Order.
	
	4. Delete the Order folder only.
	
	5. Run the Genigraphics wizard again.
	
	MORE INFORMATION
	================
	
	The first time you run the Send To Genigraphics wizard and fill out all of the
	order information such as name, address, and billing, a new Windows 95 registry
	key called "Order" is created. This registry key retains the order information
	so that you do not have to retype it every time you run the wizard.
	
	Additional query words: 7.00 slides service bureau office
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbdta kbwizard 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
