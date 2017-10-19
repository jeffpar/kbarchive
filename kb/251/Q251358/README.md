---
layout: page
title: "Q251358: Encarta 2000: Cannot Run the Exercise and Calories Interactivity"
permalink: /kb/251/Q251358/
---

## Q251358: Encarta 2000: Cannot Run the Exercise and Calories Interactivity

	Article: Q251358
	Product(s): Microsoft Home Multimedia Titles
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbui kbimu
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Reference Suite 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Exercise and Calories Interactivity in Microsoft
	Encarta Encyclopedia 2000 to calculate the time it takes for a person of a
	certain weight in kilograms (kg) to expend the calories consumed in certain
	foods, you may receive one of the following error messages appropriate for your
	version of Microsoft Windows.
	
	In Microsoft Windows NT 4.0, you may receive the following error message:
	
	  Property not found
	  #exCommMgr
	
	In Microsoft Windows 98 or Microsoft Windows 95, you may receive the following
	error message
	
	  General Protection Fault in Module Gdi.exe.
	
	or you may receive an error message that states that an illegal operation has
	occurred. When you click Details on the preceding error message, you receive the
	following error message:
	
	  Enc2000 has caused an invalid page fault in module Krnl386.exe.
	
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You select one of the following regional settings in the Regional Settings
	  tool in Control Panel.
	
	   - German
	   - French
	   - Italian
	   - Czech
	   - Russian
	
	- You are running the U.S. version of Encarta Encyclopedia 2000 or the U.S.
	  version of Microsoft Encarta Reference Suite 2000.
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods.
	
	Method 1
	--------
	
	Select any other regional setting than the five listed in the "Cause" section of
	this article. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Regional Settings.
	
	3. On the Regional Settings tab, click the down arrow to select the regional
	  setting that you want.
	
	4. Click Apply, and then click Yes to restart your computer.
	
	5. When your computer has restarted, close Control Panel.
	
	Method 2
	--------
	
	Use the pound (lb) instead of the kilograms option.
	
	To convert kilograms to pounds use the following formula:
	
	  (Weight in kg) x 2.2 = Lbs
	
	Additional query words: multi multi-media media mm ee2k ers2k
	
	======================================================================
	Keywords          : kberrmsg kbtool kbui kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaReference2000
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
