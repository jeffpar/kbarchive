---
layout: page
title: "Q150025: Encarta: MPEG Video Errors and Problems"
permalink: /kb/150/Q150025/
---

## Q150025: Encarta: MPEG Video Errors and Problems

{% raw %}

	Article: Q150025
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play video clips in Encarta, you experience one or more of the
	following symptoms:
	
	- You receive the following error message:
	
	  Encarta cannot play this video. Either your computer does not support MPEG
	  video, or your MPEG hardware or software is not working properly.
	
	- You receive an invalid page fault in Mmpeg.dll. This occurs when you attempt
	  to play certain videos using a screen resolution higher than 640 x 480 with a
	  color palette of more than 256 colors.
	
	- You receive an MMSYSTEM 262 error message when you attempt to play videos
	  using a screen resolution higher than 640x480 with a High Color (16-bit)
	  color palette.
	
	CAUSE
	=====
	
	Encarta MPEG editions require an MPEG-compatible computer system. The problems
	are occurring because your computer does not support MPEG video, or your MPEG
	hardware or software is not working properly.
	
	RESOLUTION
	==========
	
	Use the following resolution steps for the symptoms you are experiencing with
	Encarta:
	
	Mmpeg.dll and Mmsystem 262 or 266 Errors
	----------------------------------------
	
	If your system is using video resolutions greater than 640x480 and/or color
	depths greater than 256 colors, change to 640x480 with 256 colors. Try the
	Encarta videos again.
	
	Other Problems
	--------------
	
	Try reinstalling your MPEG video software or hardware drivers.
	
	Encarta MPEG editions are sold only with MPEG-compatible computer systems or
	video cards. Encarta does not configure or supply any MPEG system files. For
	this reason, you must contact your hardware vendor for troubleshooting the MPEG
	video playback subsystem.
	
	MORE INFORMATION
	================
	
	To test for proper installation of MPEG hardware and software, go to the Mpeg
	folder and double-click any of the .mpg files. The folders are named:
	
	   Encarta 95                         Encarta 96
	   ----------                         ----------
	
	   D:\Encyc95\Mm\Mpeg                 D:\Encyc96\Mm\Mpeg
	
	The videos should automatically play when they are double-clicked. If this fails,
	contact your MPEG hardware vendor for troubleshooting.
	
	Additional query words: 1995 '96 96 multi media multimedia multi-media mmtitles kbmm OEM compaq
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncarta1995 kbEncartaEnCyc1996 kbEncartaEnCyc1997
	Version           : :
	
	=============================================================================
	

{% endraw %}
