---
layout: page
title: "Q127885: Kids: Distorted AVIs and Transitions"
permalink: /kb/127/Q127885/
---

## Q127885: Kids: Distorted AVIs and Transitions

{% raw %}

	Article: Q127885
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Magic School Bus Explores the Solar System or Explorapedia World of
	Nature on a computer with an ATI Mach 64 video driver installed, you may observe
	one or more of the following behaviors:
	
	1. AVIs are poor quality and colors blend so that there is no distinction
	  between separate objects or shadows.
	
	2. In certain video transitions, the animations look like different colored
	  transparencies being overlaid.
	
	3. When the bus is picking up kids in the introduction, the video becomes
	  somewhat separated, with horizontal lines going through it.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the steps below for the version of Windows installed
	on your computer.
	
	Windows 95
	----------
	
	Use the display drivers for the ATI card which are included with Windows 95. For
	more information on changing video drivers, refer to the following article:
	
	  Q131806 Windows 95/98: How to Install or Change a Display Driver
	
	
	Windows 3.x
	-----------
	
	Turn off the WinSwitch feature of the ATI video driver.
	
	1. In Program Manager, double-click the ATI DeskTop program group.
	
	2. Run ATI DeskTop, then select ATI FlexDesk.
	
	3. Make sure that the WinSwitch box is not checked. This will turn off the
	  WinSwitch feature of the ATI video driver.
	
	4. Choose OK to close WinSwitch.
	
	5. Restart Windows when prompted to do so.
	
	After following these steps, video transitions, animations, and AVIs should
	behave normally.
	
	MORE INFORMATION
	================
	
	WinSwitch is an ATI utility that allows you to use keyboard commands to
	dynamically change the number of colors available on-screen in Windows. To do
	this, however, it loads all 64,000 colors so they can be made available as
	needed.
	
	When the 256-color option is selected in combination with WinSwitch, the color
	palette is not in use.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 1.00 kids mskids msb msbhb msbss frizz kbmm magic_bus schoolbus magicbus fuzzy blurry videos display screen tad xplora people distorted winmsbhuman msbhuman winmsbsolar msbsolar homekids homekid
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbZNotKeyword2 kbKidsSearch kbExplorapediaNature100 kbScholasticSolar kbMSBSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
