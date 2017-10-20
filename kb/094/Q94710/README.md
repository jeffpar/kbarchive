---
layout: page
title: "Q94710: VidEdit: Combining .AVI Files with Different Frame Rates"
permalink: /kb/094/Q94710/
---

## Q94710: VidEdit: Combining .AVI Files with Different Frame Rates

{% raw %}

	Article: Q94710
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use VidEdit to combine .AVI files with different frame rates, the frame
	rate of the .AVI file into which the "paste" is being made will be used. For
	example, if <FILENAME1>.AVI has a frame rate of 10 frames per second and
	<FILENAME2>.AVI has a frame rate of 5 frames per second, pasting
	<FILENAME2>.AVI into <FILENAME1>.AVI results in a file with a frame
	rate of 10 frames per second.
	
	In this example, each frame in <FILENAME2>.AVI would be duplicated during
	the paste process to accommodate the higher frame rate. If <FILENAME1>.AVI
	is pasted into <FILENAME2>.AVI, an appropriate number of frames are
	dropped during the pasting process to allow for a reduced frame rate.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open an .AVI file in VidEdit (check this file's frame rate using the Convert
	  Frame Rate command from the Video menu).
	
	2. Start a second instance of VidEdit and open another .AVI file with a
	  different frame rate.
	
	3. Use the Mark In/Mark Out tools to select a portion of the first file.
	
	4. From the Edit menu, choose Copy to place the selection on the Clipboard.
	
	5. Paste the selection into the second .AVI file and note this file's frame rate
	  is unchanged.
	
	NOTE: The actual number of frames added/dropped may be seen by comparing the
	number of frames copied to the Clipboard versus the number actually pasted into
	the second file. This number may be calculated from the frame numbers indicated
	in the lower left-hand field of the VidEdit window (provided the scale is set
	for Frames in the Preferences dialog box accessed by choosing Preferences from
	the Edit menu).
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
