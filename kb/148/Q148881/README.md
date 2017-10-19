---
layout: page
title: "Q148881: Cannot Start MSN with MSN Icon"
permalink: /kb/148/Q148881/
---

## Q148881: Cannot Start MSN with MSN Icon

	Article: Q148881
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the MSN icon on the desktop to start MSN, The Microsoft
	Network, nothing may happen.
	
	CAUSE
	=====
	
	This issue can occur when you upgrade to a new version of MSN, or if you remove
	MSN before you remove the Internet Jumpstart Kit.
	
	An incomplete installation of MSN 2.0 can also cause this issue to occur.
	
	RESOLUTION
	==========
	
	MSN 1.0
	-------
	
	To create a new shortcut icon for MSN, use the following steps:
	
	1. Right-click the CCDialer.exe file in The Microsoft Network folder, and then
	  click Create Shortcut.
	
	2. Drag the new CCDialer shortcut to the desktop.
	
	3. Right-click the CCDialer shortcut, and then click Properties.
	
	4. On the Shortcut tab, type "CCDialer /H" (without quotation marks) in the
	  Target box, and then click OK.
	
	5. Rename the CCDialer shortcut to The Microsoft Network.
	
	Note that although you can use the new shortcut icon to start MSN, MSN properties
	such as Connection Settings are not available from the icon's shortcut menu.
	
	MSN 2.0
	-------
	
	To resolve this issue, verify that MSN is completely installed on your computer.
	To do so, use the first method listed below. If this method does not work (for
	example, MSN does not start when you double-click the MSN icon on the desktop),
	use the second method listed below. If MSN still does not start, use the third
	method.
	
	Method 1
	--------
	
	1. Insert the MSN 2.0 CD-ROM into the CD-ROM drive. If the Auto Insert
	  Notification option is turned on, close the Welcome To MSN window that opens
	  on the desktop.
	
	2. Double-click My Computer.
	
	3. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	4. Double-click the Msnsetup folder.
	
	5. Double-click the Msnsetup.exe file. Follow the instructions on the screen,
	  and make sure you perform the Restart/Download portion of the installation.
	
	Method 2
	--------
	
	1. Insert the MSN 2.0 CD-ROM into the CD-ROM drive. If the Auto Insert
	  Notification option is turned on, close the Welcome To MSN window that opens
	  on the desktop.
	
	2. Double-click My Computer.
	
	3. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	4. Double-click the Msnsetup folder.
	
	5. Double-click the Compnts folder.
	
	6. Double-click the Msn13.exe file. Follow the instructions on the screen, and
	  accept all default settings.
	
	7. When you are prompted to restart the computer, click Yes.
	
	8. Double-click the Msie301.exe file. Follow the instructions on the screen, and
	  accept all default settings.
	
	9. When you are prompted to restart the computer, click Yes.
	
	10. Double-click the Msnsetup folder.
	
	11. Double-click the Msnsetup.exe file. Follow the instructions on the screen,
	  and make sure you perform the Restart/Download portion of the installation.
	
	Method 3
	--------
	
	Copy all files from the MSN 2.0 CD-ROM to a temporary folder on the hard drive
	and run Msnsetup.exe from there. This requires 431 MB of available hard drive
	space.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0
	
	=============================================================================
	
