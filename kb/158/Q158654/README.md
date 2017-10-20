---
layout: page
title: "Q158654: Mac Encarta 97: Home Screen Blank with Low Memory on 68K"
permalink: /kb/158/Q158654/
---

## Q158654: Mac Encarta 97: Home Screen Blank with Low Memory on 68K

{% raw %}

	Article: Q158654
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1997 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a home screen, for example, InterActivities, there is nothing to
	click or the page is blank.
	
	This occurs if you have a Macintosh with a 68K (680x0) processor.
	
	CAUSE
	=====
	
	This can occur if you have a low memory situation on your 68K Macintosh.
	
	RESOLUTION
	==========
	
	Increase the amount of memory available to Encarta. To increase the memory, do
	the following:
	
	1. Quit Encarta and any other programs that may be running.
	
	2. Click the Encarta 97 icon one time.
	
	3. On the File menu, click Get Info.
	
	4. In Memory Requirements section, make sure the Minimum Size setting is 4352 or
	  greater, and the Preferred Size setting is 6144 or greater.
	
	5. Close the Get Info window.
	
	6. On the Apple menu, click About This Macintosh...
	
	7. Make sure the value to the right of "Largest Unused Block" is greater or
	  equal to 6,144K. If it is not, you may need to turn on Virtual Memory. For
	  information about Virtual Memory, see the "How to Turn On Virtual Memory"
	  section below.
	
	8. Close the About This Macintosh Window and then start Encarta.
	
	If you still have problems after using these steps, you may need to turn on
	Virtual Memory.
	
	For more information on how to increase the memory allocated to a Macintosh
	program, please see the following article(s) in the Microsoft Knowledge Base.
	
	  Q141682 How to Change Memory Allocations for Macintosh Programs
	
	
	How To Turn On Virtual Memory
	-----------------------------
	
	1. On the Apple menu, point to Control Panels, and open the Memory Control
	  Panel.
	
	2. In the Virtual Memory section, click "On."
	
	3. Set the size of the Virtual Memory setting to an amount that is 1.5 times the
	  amount of RAM which you have installed on your computer. For example, if you
	  have 16 megabytes of RAM, set the Virtual Memory value to 24 MB.
	
	4. Close the Memory Control Panel and restart your computer.
	
	5. Start Encarta 97 again.
	
	MORE INFORMATION
	================
	
	The computer will use as much memory as it can (any amount between the amount
	specified in the Minimum and Preferred Size boxes of the Get Info window) when
	it starts. If Encarta detects that there is less memory than the Preferred Size
	box states, it displays a message warning you that some features may not work
	properly.
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles kbmm 6800 68000 VM macmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbEncartaEnCyc1997Mac
	Version           : :1997 edition
	
	=============================================================================
	

{% endraw %}
