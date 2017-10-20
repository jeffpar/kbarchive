---
layout: page
title: "Q127755: Some Composer Titles Do Not Play CD Audio When Minimized"
permalink: /kb/127/Q127755/
---

## Q127755: Some Composer Titles Do Not Play CD Audio When Minimized

{% raw %}

	Article: Q127755
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start one of the applications listed at the top of this article, the
	application's music will not play if the application is minimized.
	
	RESOLUTION
	==========
	
	Use the following steps to play music from the above applications using the
	Windows Media Player:
	
	1. In the Accessories program group in Program Manager, double-click the Media
	  Player icon.
	
	2. From the Device menu, choose CD Audio.
	
	3. Choose Scale and select Track. Move the scroll bar indicator to the number 2
	  position.
	
	  NOTE: Track 1 is data. No audio will play while on Track 1.
	
	4. Choose the Play button. The Play button is a triangle pointing to the right
	  with a vertical line on the left side. The Play button is located in
	  lower-left corner of the Media Player dialog box.
	
	5. Minimize Media Player by clicking the Minimize button located in the
	  upper-right corner of the Media Player dialog box, or click the Control menu
	  (-) located in the upper-left corner and choose Minimize.
	
	6. The audio portion of the application listed at the top of this article will
	  now continue to play with Media Player minimized.
	
	MORE INFORMATION
	================
	
	The loss of audio is due to a limitation of the Visual Basic MCI CD Audio
	functionality. Visual Basic was used in the creation of MCI CD Audio
	functionality.
	
	Multimedia Beethoven will continue to play when minimized because it is using
	Asymetrix ToolBook for MCI CD Audio playback.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 1.0multi media multimedia multi-media mmtitles kbmm cd audio cdaudio, composer, minimized sound background
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
