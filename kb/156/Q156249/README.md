---
layout: page
title: "Q156249: MSB Dinosaurs: Program May Not Start Without CD Audio Device"
permalink: kb/156/Q156249/
---

## Q156249: MSB Dinosaurs: Program May Not Start Without CD Audio Device

	Article: Q156249
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbtlckbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Magic School Bus Explores in the Age of Dinosaurs may not start if a CD Audio
	Device (Media Control) driver is not installed, is not in use, or is damaged.
	
	Magic School Bus Explores in the Age of Dinosaurs does not require or use CD
	Audio; however, the Magic School Bus Setup program checks for CD Audio by
	default.
	
	
	MORE INFORMATION
	================
	
	Follow these steps to check if a CD Audio Device (Media Control) is installed:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Multimedia.
	
	2. Click the Advanced or Devices tab.
	
	3. Double-click Media Control Devices.
	
	4. The CD Audio Device (Media Control) should be listed here.
	
	If, after following the steps in the section above, you don't see the CD Audio
	driver on the list, use the following steps to install the CD Audio driver:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add New Hardware.
	
	3. In the Add New Hardware dialog box, click Next.
	
	  NOTE: If you are using Windows 98, click Next and then click Next.
	
	4. When the Add New Hardware Wizard asks if you want Windows to search for new
	  hardware, click No, and then click Next.
	
	5. Click Sound, Video And Game Controllers, and then click Next.
	
	6. In the Manufacturers box, click Microsoft MCI. In the Models box, click CD
	  Audio Device (Media Control), and then click Next.
	
	7. Click Finish to install the driver.
	
	8. Restart Windows.
	
	If you found (by following the steps in the section above) that the [MCI] CD
	Audio driver is already installed on your system, the problem may be caused by a
	damaged driver. To replace a damaged driver, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced or Devices tab.
	
	4. Double-click Media Control Devices.
	
	5. Click CD Audio Device (Media Control) line. Click Properties.
	
	6. Click Remove.
	
	7. Delete the Mcicda.drv file from the Windows\System folder.
	
	8. Use the instructions provided above to install the CD Audio Device driver in
	  Windows.
	
	9. Restart Windows.
	
	Additional query words: frizz kbmm multimedia multi- media multi msbdinos msbdino dino dinos cd audio mci
	
	======================================================================
	Keywords          : kbtlc kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticDinosaurs kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
