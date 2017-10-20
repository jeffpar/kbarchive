---
layout: page
title: "Q165449: MSB: ErrMsg: This Program Has Performed an Illegal Operation ..."
permalink: /kb/165/Q165449/
---

## Q165449: MSB: ErrMsg: This Program Has Performed an Illegal Operation ...

{% raw %}

	Article: Q165449
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores in the Age of Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install one of the programs listed at the top of this article, and
	then attempt to start the program, you receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click the Details button in the error message dialog box, you receive the
	following message:
	
	  MSBXXXX caused an invalid page fault in module msbXXXX.exe at 0137:00...
	
	Where "XXXX" refers to the specific program, you are using, such as Magic School
	Bus (MSB) Explores the Earth.
	
	Magic School Bus then switches your desktop resolution to 640x480. If your
	desktop settings were set to a setting greater than 640x480, the desktop will
	not return to your previous settings when you close the Details window.
	
	CAUSE
	=====
	
	This problem occurs if your computer's system date is set for the year 2038 or
	later.
	
	
	WORKAROUND
	==========
	
	Set your computer's system date to any year before 2038 to resolve this
	problem.
	
	To change your system date, do the following:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Date/Time icon.
	
	3. From the Date & Time tab, enter the present date (any date before the
	  year 2038 will work), and then click OK.
	
	Additional query words: 1.00 kids mskids msb msbearth msbdinos dino frizz kbmm ipf LITERAL ERROR MESSAGE: caused an invalid page fault in module MSBEARTH.EXE at 0137:00403c65 MSBDINOS.EXE 0137:00407cd3
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticDinosaurs kbScholasticEarth kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
