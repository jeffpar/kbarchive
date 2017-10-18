---
layout: page
title: "Q150217: Invalid Format for Microsoft Internet Explorer"
permalink: kb/150/Q150217/
---

## Q150217: Invalid Format for Microsoft Internet Explorer

	Article: Q150217
	Product(s): The Microsoft Network
	Version(s): 1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you run the Internet Setup Wizard, you may receive the following error
	message:
	
	  Information Provided by the Registering Program has an Invalid Format
	
	CAUSE
	=====
	
	Microsoft Internet Explorer has been installed from two different sources,
	causing a conflict in the format.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	
	Follow these steps:
	
	1. Use Find to locate the Internet.inf and Rome1.cab files and rename these
	  files.
	
	2. In Control Panel, double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Plus! for Windows 95.
	
	4. Click the Add/Remove button, which starts the Plus! Setup program.
	
	5. Click Add/Remove. Click to clear the Internet Jumpstart Kit check box. Click
	  Continue and follow the instructions on the screen until you restart your
	  computer.
	
	6. Double-click My Computer, and then double-click Dial-Up Networking.
	
	7. Using the right mouse button (right-click), click the Microsoft Network
	  connectoid, and then click Delete. Close Dial-Up Networking.
	
	8. Open the following registry key:
	
	  Hkey_Local_Machine\SOFTWARE\Microsoft\Internet Explorer
	
	9. If you have Microsoft Internet Explorer 1.0 installed, set the IVer key to
	  "101" (without the quotation marks). If you have Microsoft Internet Explorer
	  2.0 installed, set the IVer key to "102" (without the quotation marks). If
	  you have Microsoft Internet Explorer 3.0 installed, set the IVer key to "103"
	  (without the quotation marks).
	
	10. Update the Msnver.txt file by following these steps:
	
	  a. Start an MS-DOS session.
	
	  b. Change to the \progra~1\themic~1 folder.
	
	  c. Type the following line, and then press ENTER:
	
	  "copy con:msnver.txt" (without the quotation marks)
	
	  d. When you are prompted "Do you want to overwrite?," press Y, and then press
	     ENTER.
	
	  e. If you have MSN 1.0 installed, type "5399" (without the quotation marks).
	     If you have MSN 1.2 installed, type "5799" (without the quotation marks).
	
	  f. Press CTRL+Z, and then press ENTER.
	
	
	11. Restart the computer.
	
	12. Reinstall the Internet Jumpstart Kit.
	
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch
	Version           : :1.0,1.05,1.2,1.3
	
	=============================================================================
	
