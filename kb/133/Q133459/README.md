---
layout: page
title: "Q133459: Art Gallery: Animations Fail with QVision 2000 Video Driver"
permalink: /kb/133/Q133459/
---

## Q133459: Art Gallery: Animations Fail with QVision 2000 Video Driver

	Article: Q133459
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Art Gallery for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play an animation, you receive the error message
	
	  Animations are not available when running in this screen mode
	
	or the computer stops responding (hangs).
	
	The error occurs when using the QVision 2000 video display driver in Microsoft
	Windows version 3.x.
	
	
	CAUSE
	=====
	
	The QVision 2000 Control Panel lists separate settings for Display, Virtual
	Desktop, and Colors. The following Color settings can cause one of the above
	symptoms:
	
	  8-bit QCDP
	  16-bit 65K colors
	  24-bit 16.7M colors
	
	NOTE: Microsoft Windows 95 includes a QVision 2000 video driver that plays
	animations in Art Gallery correctly when configured for 256 colors.
	
	RESOLUTION
	==========
	
	Use the 8-bit 256 Colors to play animations. For more information about changing
	you QVision 2000 settings, see your Compaq product documentation.
	
	NOTE: The QVision 2000 video card will not work with the Microsoft SuperVGA video
	driver.
	
	MORE INFORMATION
	================
	
	The QVision 2000 Control Panel provides a ModeSWITCH feature which assigns hot
	keys to different video display configurations. ModeSWITCH does not include the
	8-bit 256 colors configuration and should not be used.
	
	To turn off the ModeSWITCH option, clear the Use ModeSWITCH option.
	
	The Compaq QVision video display adapter is based on the Matrox chipset. The
	video display drivers that support the QVision video display adapter are:
	
	  Mga8.drv
	  Mga16.drv
	  Mga24.drv
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: multi media multimedia multi-media Q VISION Q-Vision VISION2000 QVISION2000 Prolinea Compaq mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbArtGallery
	Version           : WINDOWS:1.0
	
	=============================================================================
	
