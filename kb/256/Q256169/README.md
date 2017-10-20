---
layout: page
title: "Q256169: GLINT-Based Display Adapters Disabled in Windows 2000 on Upgrade"
permalink: /kb/256/Q256169/
---

## Q256169: GLINT-Based Display Adapters Disabled in Windows 2000 on Upgrade

{% raw %}

	Article: Q256169
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbOSWin2000 kbDSupport kbGrpDSNTDDK
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Microsoft Windows NT 4.0 to Windows 2000 on a computer
	that contains a display adapter based on the GLINT accelerator chipset, the
	Setup program may display the following error message and disable the display
	driver:
	
	  The currently installed driver for the Glint based display adapter is not
	  compatible with Microsoft Windows 2000 and will be disabled during the
	  upgrade.
	
	CAUSE
	=====
	
	This problem is due to incompatibilities that exist between early versions of
	the driver and Windows 2000. Current drivers are compatible with Windows 2000,
	but are incorrectly disabled as well.
	
	RESOLUTION
	==========
	
	Download and install the latest drivers for the display adapter after upgrading
	to Windows 2000.
	
	The latest drivers for the Oxygen VX1 can be found at the following Web site:
	
	  http://www.3dlabs.com/support/w2k.html
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The GLINT accelerator chipset is produced by 3Dlabs, and is available on display
	adapters from several manufacturers.
	
	On upgrade, the Windows 2000 Setup program disables the driver for all display
	adapters that use a service key of "glint" in the Windows 2000/Windows NT 4.0
	registry.
	
	Additional adapters that are affected include the 3Dlabs Oxygen VX1 adapter,
	which is also Windows 2000-compatible. More information is available on the
	Oxygen VX1 adapter at the following Web site:
	
	  http://www.3dlabs.com/press/releases/w2krel.html
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbOSWin2000 kbDSupport kbGrpDSNTDDK 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
