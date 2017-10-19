---
layout: page
title: "Q154321: MSB Dinosaurs: Hangs at a Black Screen on Startup"
permalink: /kb/154/Q154321/
---

## Q154321: MSB Dinosaurs: Hangs at a Black Screen on Startup

	Article: Q154321
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,95
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbmm kbtlckbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Magic School Bus Explores in the Age of Dinosaurs (MSB
	Dinosaurs), the program may suddenly quit or stop responding (hang) while
	displaying a black screen.
	
	CAUSE
	=====
	
	This issue can occur if the following entries in the Windows system files are
	missing, incomplete, or incorrect:
	
	Win.ini
	-------
	
	  [mci extensions]
	  avi=avivideo
	
	System.ini
	----------
	
	  [MCI]
	  avivideo=mciavi.drv
	
	RESOLUTION
	==========
	
	To resolve this issue, verify whether or not these entries exist in the Win.in
	and System.ini files. To do this, use the following steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK. This opens the System Configuration Editor.
	
	3. Click the Win.ini file to bring it to the front.
	
	4. On the Search menu, click Find.
	
	5. Type "[mci extensions]" (without the quotation marks), and then click Next.
	
	6. When [mci extensions] is located, scroll down to view the contents of the
	  [mci extensions] section and verify that the following line exists:
	
	  avi=avivideo
	
	  NOTE: If the avi=avivideo line is missing from the [mci extensions] section,
	  add it as it appears above. Note that capitalization is not important.
	
	7. On the File menu, click Save.
	
	8. On the Windows menu, click the System.ini file to bring it to the front.
	
	9. On the Search menu, click Find.
	
	10. Type "[mci]" (without the quotation marks), and then click Next.
	
	11. When [mci] is located, scroll down to view the contents of the [mci] section
	  and verify that the following line exists:
	
	  avivideo=mciavi.drv
	
	  NOTE: If the avivideo=mciavi.drv line is missing from the [mci] section, add
	  it as it appears above. Note that capitalization is not important.
	
	12. On the File menu, click Save.
	
	13. On the File menu, click Exit.
	
	14. Click Start, click Shut Down, click Restart The Computer, and then click
	  Yes.
	
	After following these steps, MSB Dinosaurs should run successfully.
	
	MORE INFORMATION
	================
	
	If you continue to experience this problem, please see the following article(s)
	in the Microsoft Knowledge Base:
	
	  Q156674 MSB Dinos: Black Screen Before Microsoft Logo with SB 16
	
	
	Additional query words: kbmm hangs lockup locks hanging froze hanged locked homekid hang crash crashes freezes freeze frozen up dinosaurs msbdinos schoolbus
	
	======================================================================
	Keywords          : kbdisplay kbenv kbmm kbtlc kbfaq
	Technology        : kbHomeProdSearch kbWin95search kbZNotKeyword kbKidsSearch kbZNotKeyword3 kbScholasticDinosaurs kbMSBSearch
	Version           : WINDOWS:1.0,95
	Issue type        : kbprb
	
	=============================================================================
	
