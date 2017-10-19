---
layout: page
title: "Q83907: Error in NETWORKS.WRI Concerning Printing Across LANtastic"
permalink: /kb/083/Q83907/
---

## Q83907: Error in NETWORKS.WRI Concerning Printing Across LANtastic

	Article: Q83907
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NETWORKS.WRI file that ships with Windows 3.1 contains a documentation error
	concerning printing across LANtastic networks. Section 2.2.1 says it applies to
	LANtastic versions 3.x; however, it actually applies to LANtastic versions 3.x
	and 4.x.
	
	The following includes the documentation error in section 2.2.1 of the
	NETWORKS.WRI file and the corrected section.
	
	MORE INFORMATION
	================
	
	The following text appears in section 2.2.1 of NETWORKS.WRI:
	
	NETWORKS.WRI Section 2.21
	-------------------------
	
	To print from any mode of Windows across LANtastic 3.x, it is necessary to do one
	of the following:
	
	Corrected Section 2.21
	----------------------
	
	To print from any mode of Windows across LANtastic 3.x or 4.x, it is necessary to
	do one of the following:
	
	Turn off the Fast Printing Direct To Port option in Control Panel. To do this,
	choose the Printers option in Control Panel, and then choose the Connect button.
	Clear the Fast Printing Direct To Port check box. When you turn off this option,
	it affects all of your ports.
	
	If you want to turn this option off for one port only, follow these steps:
	
	1. If you are printing using LPT3, add the following entry to the [ports]
	  section of the WIN.INI file:
	
	        LPT3.DOS=
	
	  If you are using LPT1 or LPT2, you can use the LPT1.DOS or LPT2.DOS entries
	  already in your WIN.INI file.
	
	2. Quit Windows, and then redirect the LPTx.DOS port (where x is the port you
	  are using) by using the LANtastic net use command.
	
	3. Restart Windows.
	
	4. Using Control Panel, change your printer port to LPTx.DOS.
	
	If you are running LANtastic version 3.x, you cannot run Windows in 386 enhanced
	mode on a non-dedicated server.
	
	If you have a network connection on LPT1, it will not be displayed in Print
	Manager or Control Panel.
	
	Additional query words: 3.10 3.11 3rdparty doc err
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
