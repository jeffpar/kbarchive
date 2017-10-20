---
layout: page
title: "Q108151: IBM ValuePoint with BIOS Date 4/29/93 Hangs at Logo Screen"
permalink: /kb/108/Q108151/
---

## Q108151: IBM ValuePoint with BIOS Date 4/29/93 Hangs at Logo Screen

{% raw %}

	Article: Q108151
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Windows for Workgroups stops responding (hangs) at the logo screen
	during startup on an IBM ValuePoint personal computer.
	
	
	CAUSE
	=====
	
	The Windows keyboard driver (VKD) times out on IBM ValuePoint computers with a
	BIOS date of 4/29/93 or earlier, or with an EPROM Flash Revision Level of 5.1 to
	5.3. This behavior also occurs on IBM ValuePoint SI computers that are Type
	6381.
	
	To determine the EPROM Flash Revision level, press the F1 key when a box appears
	in the upper-left portion of the screen as the computer is booting. This takes
	you into the Configuration Utilities Screen. The EPROM Revision Level is listed
	at the bottom of this screen.
	
	To determine if you have a Type 6381 ValuePoint, look at a label on the back of
	the computer.
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Contact IBM Technical Support at (800) 772-2227 to receive a patch to the
	  VKD.
	
	  -or-
	
	- Contact the IBM bulletin board service at (919) 517-0001 and download the
	  necessary files for your computer:
	
	  IBMKBFIX.EXE (the VKD replacement for the ValuePoint PC)
	  VP2FLxxx.DSK (Flash ROM, where xxx is the latest version number)
	
	  6381WG31.ZIP (the VKD replacement for the ValuePoint SI PC)
	  VPSIFL31.DSK (Flash ROM for the ValuePoint SI PCs)
	
	  LDF.COM (used to uncompress the above files)
	
	MORE INFORMATION
	================
	
	The IBM products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3rdparty 3.11 incompatible version lock locks hang value point 4/5/94 flash l6et61aus type 6384x00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
