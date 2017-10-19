---
layout: page
title: "Q107661: Writer: HP LaserJet 4si MX Prints Banners Incorrectly"
permalink: /kb/107/Q107661/
---

## Q107661: Writer: HP LaserJet 4si MX Prints Banners Incorrectly

	Article: Q107661
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print a banner to a Hewlett-Packard (HP) LaserJet 4Si MX printer, using
	version 1.18 or version 3.78 of the printer driver, the banner prints
	incorrectly.
	
	For example, if you print the Get Well Soon banner, the printer may produce only
	three half-pages instead of three whole pages.
	
	This problem may also occur with the HP LaserJet 4L printer running on a system
	with Windows 95.
	
	CAUSE
	=====
	
	This problem occurs if the printer is not correctly configured to print banners.
	
	RESOLUTION
	==========
	
	To correctly configure the printer, follow the steps below.
	
	NOTE: Use the set of steps appropriate for your version of Microsoft Windows.
	
	Windows 3.x
	-----------
	
	1. Quit Creative Writer.
	
	2. Open the Windows Control Panel, usually located in the Main program group.
	  Double-click Printers.
	
	3. Click the HP LaserJet 4Si/4Si MX printer. Click Setup.
	
	4. Set Page Protection to Letter. The following message appears:
	
	  Changing the printer's page protection will reset the printer. All downloaded
	  fonts and macros will be deleted.
	
	  Click OK.
	
	5. Set Printer Memory to 10 MB.
	
	6. Set Printer Resolution to 600 dpi. The following message appears:
	
	  Changing the printer's resolution will reset the printer. All downloaded
	  fonts and macros will be deleted.
	
	  Click OK.
	
	7. Click OK to close the Setup dialog box. Click Close.
	
	The banner should print correctly.
	
	Windows 95
	----------
	
	1. Quit Creative Writer.
	
	2. Click Start, point to Settings, and then click Printers.
	
	3. With the right mouse button, click on the HP LaserJet 4Si MX icon. Click
	  properties.
	
	4. Click the Device Options tab. Make sure the Page Protection box is checked.
	
	5. Make sure Printer Memory is set to at least 10 MB.
	
	6. Click OK.
	
	7. Close the Printers window.
	
	The banner should print correctly.
	
	Additional query words: 1.00 poster cut off omitted blank hp kids win mskids 1.10 mczee 1.10a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbCreativeWriter100 kbCreativeWriter200 kbCreativeWriter110 kbCreativeWriter110a
	Version           : WINDOWS:1.0,1.1,1.1a,2.0
	
	=============================================================================
	
