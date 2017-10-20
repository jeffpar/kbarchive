---
layout: page
title: "Q71208: Running Setup Within a Window Causes UAE On Novell Network"
permalink: /kb/071/Q71208/
---

## Q71208: Running Setup Within a Window Causes UAE On Novell Network

{% raw %}

	Article: Q71208
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are in an MS-DOS window while running Windows 3.0 in enhanced mode and
	you attempt to change or check the network configuration of a user, your system
	may stop responding (hang) or the following error may appear:
	
	  UNRECOVERABLE APPLICATION ERROR TERMINATING CURRENT APPLICATION
	
	MORE INFORMATION
	================
	
	When creating a new Novell workstation installation of Windows 3.0 or checking
	an existing one, the Windows Setup program (SETUP.EXE) should be executed in one
	of the following two ways:
	
	1. If you are on a workstation and attempting to configure a new installation of
	  Windows, always run the Windows Setup program by typing "setup" (without the
	  quotation marks) or "setup /n" (without the quotation marks) at the normal
	  DOS system prompt.
	
	  -or-
	
	2. If a current network installation of Windows 3.00 is being checked or
	  modified, run the Setup program by double clicking the Setup icon located in
	  the Main Group of the Program Manager.
	
	Exercising one of the two Windows installation methods above will ensure that the
	system does not hang and that this error does not occur. For more information on
	installing Windows on a network, please refer to pages 553-554 of the "Microsoft
	Windows User's Guide" for version 3.00.
	
	Additional query words: 3.0 3.00 win30 3.00A
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
