---
layout: page
title: "Q109697: Multimedia Err Msg: Failed to Open CD-Audio Device..."
permalink: /kb/109/Q109697/
---

## Q109697: Multimedia Err Msg: Failed to Open CD-Audio Device...

{% raw %}

	Article: Q109697
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Beethoven for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the MCI CD-Audio driver is not installed in Windows or the installed driver
	is corrupted, the following error message occurs:
	
	  Failed to open CD-Audio device driver. Please check that CD-Audio is
	  installed. For more information, see Read Me.
	
	MORE INFORMATION
	================
	
	Installing a MCI CD-Audio Driver
	--------------------------------
	
	To install the MCI CD-Audio driver in Windows 3.x use the following steps:
	
	1. From Program Manager, open the Windows Control Panel, usually located in the
	  Main program group. Double-click the Drivers icon.
	
	2. In the Drivers box, choose Add.
	
	3. Select MCI CD-Audio from List Of Drivers and choose OK.
	
	4. Follow the instructions on the screen to add the driver.
	
	5. Restart Windows.
	
	To install the MCI CD-Audio driver under Windows 95:
	
	1. Click Start, point to Settings and click Control Panel. Double-click Add New
	  Hardware.
	
	2. In the Add New Hardware dialog box, choose Next.
	
	3. When the Add New Hardware Wizard asks if you want Windows to search for your
	  new hardware, Choose No. Choose Next.
	
	4. Select Sound, Video And Game Controllers. Choose Next button.
	
	5. From the Manufacturers list, choose Microsoft MCI. From the Models list,
	  click CD Audio Device (Media Control). Click Next.
	
	6. Click Finish to install the driver.
	
	Repairing a Corrupt Driver
	--------------------------
	
	If the driver is corrupt and you are using Windows 3.x, use the following steps:
	
	1. In Control Panel, double-click the Drivers icon.
	
	2. Select MCI CD-Audio. Choose Remove.
	
	3. Exit Windows and delete MCICDA.DRV from the WINDOWS\SYSTEM directory.
	
	4. Restart Windows.
	
	5. In Control Panel, double-click the Drivers icon.
	
	6. Choose Add.
	
	7. Select MCI CD-Audio from the List of Drivers. Choose OK.
	
	8. Follow the screen instructions to complete the installation.
	
	If the driver is corrupt and you are using Windows 95, do the following:
	
	1. In the Control Panel, double-click the Multimedia icon.
	
	2. Click the Advanced tab.
	
	3. Click the plus (+) symbol next to Media Control Devices.
	
	4. Click the CD Audio Device (Media Control) line. Click Properties.
	
	5. Click Remove.
	
	6. Delete the MCICDA.DRV file from the WINDOWS\SYSTEM directory.
	
	7. Reinstall the CD Audio Device driver as described in the first Windows 95
	  section in this article.
	
	Additional query words: kbhowto cd audio VB usage 1.10 1.1
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMBeethoven100
	Version           : 1.00
	
	=============================================================================
	

{% endraw %}
