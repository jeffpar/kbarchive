---
layout: page
title: "Q82739: SUN PC-NFS Version 3.5C and Windows 3.1"
permalink: /kb/082/Q82739/
---

## Q82739: SUN PC-NFS Version 3.5C and Windows 3.1

{% raw %}

	Article: Q82739
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SUN PC-NFS is not directly supported by Windows 3.1. The Windows Setup program
	detects it as NO NETWORK INSTALLED. SUN PC-NFS may work correctly with Windows
	3.1 if you modify the SYSTEM.INI file as described in this article.
	
	NOTE: Version 3.5C should be used for the modification. However, please note that
	even with the modifications, PC-NFS is still not directly supported by Windows
	3.1.
	
	SYSTEM.INI
	----------
	
	Using a text editor, add the following line to the [386Enh] section of the
	SYSTEM.INI file:
	
	     UniqueDosPSP=True
	
	MORE INFORMATION
	================
	
	Viewing and Connecting to Network Shares
	----------------------------------------
	
	With version 3.5C of PC-NFS, you cannot view a network printer queue from within
	Print Manager. Also, you cannot connect or disconnect network drives from within
	File Manager. You can still make the connection to a PC-NFS host server either
	from MS-DOS before going into Windows or from an MS-DOS command prompt in
	Windows.
	
	Network connections made from an MS-DOS command prompt before entering Windows
	appear as local drives in File Manager. The connections are accessible from File
	Manager or any MS-DOS command prompt. You can disconnect the network drive from
	an MS-DOS command prompt.
	
	Network connections made from an MS-DOS command prompt in Windows are only
	visible to that MS-DOS session. This network connection is not visible from File
	Manager or from MS-DOS after you exit Windows.
	
	3COM Interrupt Conflict
	-----------------------
	
	If you run Windows in 386 enhanced mode and have a 3COM board installed and
	configured for IRQ3, the machine may hang or lock up when you try to access a
	remote drive or printer. If a problem occurs, either use a different interrupt
	setting on the network card, or run Windows in standard mode.
	
	Swap and Temporary Files
	------------------------
	
	Any 386-enhanced mode swap files or standard mode temporary files should be
	created on a local drive. The SYSTEM.INI settings and MS-DOS environment
	variables listed below should NOT refer to a remote drive:
	
	  Section of SYSTEM.INI         Setting
	  -------------------------------------
	
	  [386Enh]                      PagingFile=(path to a local drive)
	  [NonWindowsApp]               SwapDisk=(path to a local drive)
	
	  MS-DOS Environment Variable
	  ---------------------------
	
	  SET TEMP=(any directory that exists on a local drive)
	
	PIFs for PC-NFS 3.5C Utilities
	------------------------------
	
	When creating a .PIF file for PC-NFS utilities in 386 enhanced mode, be sure to
	use the Lock Application Memory In Advance option in the PIF editor. Failure to
	do so may result in system crashes or data loss.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	
	=============================================================================
	

{% endraw %}
