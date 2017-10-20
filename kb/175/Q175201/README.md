---
layout: page
title: "Q175201: UNCONF: MSB ErrMsg: Error 99 Starting Magic School Bus Programs"
permalink: /kb/175/Q175201/
---

## Q175201: UNCONF: MSB ErrMsg: Error 99 Starting Magic School Bus Programs

{% raw %}

	Article: Q175201
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbSysSettings
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Rainforest for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED, EDITED, OR TESTED BY MICROSOFT. USE ONLY         **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	When attempt to start a Magic School Bus program, you receive the following
	error message:
	
	  ERROR 99: The program has detected that the video driver does not support all
	  the operations by this program (399), if you choose to ignore this message
	  the program may not be able to display correctly.
	
	CAUSE
	=====
	
	This can be caused by incorrect or missing entries in your Win.ini and
	System.ini system files.
	
	RESOLUTION
	==========
	
	To check your Win.ini and System.ini entries, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following, and then click OK:
	
	  "sysedit" (without the quotation marks)
	
	  This opens the System Configuration Editor.
	
	3. On the Window menu in System Configuration Editor, click
	  C:\Windows\System.ini (where C:\Windows is the drive and directory where
	  Windows 95 is installed). This brings the text in the System.ini file to the
	  front.
	
	4. On the Search menu, click Find.
	
	5. In the Find box, type "386enh" (without the quotation marks).
	
	6. In the [386enh] section, look for lines that begin with DEVICE=, and end in
	  .386. For example:
	
	  DEVICE=c:\windows\powerman.386
	
	7. Place a semicolon (;) in front of all lines that end in .386. For example:
	
	  ;DEVICE=c:\windows\powerman.386
	
	8. When you have completed Step 5, click Save on the File menu.
	
	9. On the Window menu in System Configuration Editor, click C:\Windows\Win.ini
	  (where C:\Windows is the drive and directory where Windows 95 is installed).
	  This brings the text in the Win.ini file to the front.
	
	10. On the Search menu, click Find.
	
	11. In the Find box, type "mci extensions" (without the quotation marks).
	
	12. In the [mci extensions] section, look for the following line:
	
	  avi=AVIVideo
	
	13. If this line is not present, add it to the [mci extensions] section.
	
	14. On the File menu, click Save.
	
	15. On the File menu, click Exit.
	
	16. Shut down Windows 95, and restart your computer.
	
	Try to start your Magic School Bus program again.
	
	
	Additional query words: msb display err
	
	======================================================================
	Keywords          : kbenv kbSysSettings 
	Technology        : kbHomeProdSearch _IKkbbogus kbZNotKeyword kbKidsSearch kbScholasticDinosaurs kbScholasticEarth kbScholasticRainForest kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
