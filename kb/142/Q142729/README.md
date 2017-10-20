---
layout: page
title: "Q142729: Distorted Sound with Media Vision 3D or Pro 3D Sound Card"
permalink: /kb/142/Q142729/
---

## Q142729: Distorted Sound with Media Vision 3D or Pro 3D Sound Card

{% raw %}

	Article: Q142729
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sounds played on a Media Vision Premium 3D or Pro 3D sound card may be
	distorted.
	
	CAUSE
	=====
	
	The Sound Retrieval System (SRS) 3D sound support circuitry has been enabled on
	the sound card, but the right and left audio channels are not balanced in Volume
	Control.
	
	When the right and left audio channels are not balanced, the SRS 3D sound support
	circuitry cannot compensate for the imbalanced audio signal sent to the two
	channels, causing distortion.
	
	RESOLUTION
	==========
	
	Balance the right and left audio channels for all sound files and sound sources
	in Volume Control. To do so, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  Multimedia, and then click Volume Control.
	
	2. Move all the Balance sliders to the center.
	
	3. On the Options menu, click Exit.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
