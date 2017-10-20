---
layout: page
title: "Q159515: Encarta 97: Black screen or Flydown Menus Don't Drop"
permalink: /kb/159/Q159515/
---

## Q159515: Encarta 97: Black screen or Flydown Menus Don't Drop

{% raw %}

	Article: Q159515
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Encarta Encyclopedia for Windows 1997 on computer using Windows
	3.x, you may observe the following behavior:
	
	  When you try to start Encarta, you receive a black screen.
	
	  -or-
	
	  The Encarta flydown menus fail to drop (fly) down.
	
	CAUSE
	=====
	
	You have a program called Hurricane by Helix installed on your computer. A
	conflict exists between the Hurricane software and Win32S.
	
	You must install Win32S to run Encarta Encyclopedia for Windows 1997 edition on
	Windows 3.x. Win32S allows 32-bit executable files to run on a 16-bit operating
	system such as Windows 3.1.
	
	RESOLUTION
	==========
	
	Edit the System.ini file located in your Windows folder, and either remove or
	comment out the section labeled:
	
	  [HURRICANE]
	
	You can comment out the section by placing a semi-colon (;) in front of each
	entry listed underneath the section labeled [HURRICANE].
	
	For more information about how to accomplish this tasks in Windows, see your
	Windows printed documentation or online Help.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the 1997 edition of Encarta
	Encyclopedia for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Hurricane product mentioned here is manufactured by Helix software, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	For more information regarding Hurricane, contact Helix Corporation Technical
	Support at (718) 392-3735 or on the World Wide Web at
	
	  http://www.helixsoftware.com.
	
	
	Additional query words: 1997 menu flydown black screen multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin310 kbOSWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
