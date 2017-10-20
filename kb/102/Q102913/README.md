---
layout: page
title: "Q102913: Scenes 1.0: Adding Pictures to Default PICSETS"
permalink: /kb/102/Q102913/
---

## Q102913: Scenes 1.0: Adding Pictures to Default PICSETS

{% raw %}

	Article: Q102913
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can add a picture from one set of Microsoft Scenes pictures (picset) to
	another.
	
	MORE INFORMATION
	================
	
	To add a picture, do the following:
	
	1. Copy the picture to the appropriate directory (for example, from
	  C:\Scenes\Space to C:\Scenes\Impress).
	
	2. Edit the Picset.ini file in the directory in which you just copied the
	  picture(s). For more information about how to perform this task in Windows,
	  see your Windows printed documentation or online Help.
	
	3. Change the PICTURECOUNT line to read 48 plus the number of pictures you are
	  adding to the PICSET. For example, if you are adding one picture, change the
	  PICTURECOUNT line to 49.
	
	4. Add the name of the picture(s) that you are adding to the end of the
	  Picset.ini file. The lines should be similar to the following:
	
	        [49]
	        Action=1
	        1.Input=<picset>\*.jpg
	
	  The <picset> is set to the default picset directory.
	
	5. Continue adding the other pictures following the lines above, but
	  incrementing the number in brackets.
	
	6. Edit the Enu.ini file in the original PICSET directory. Look for the number
	  that corresponds to the first two numbers of the file(s) you copied over.
	  Write this information down, then delete the lines that correspond to the
	  pictures you copied.
	
	7. Go to the new directory and edit the Enu.ini file. Locate the
	  "48=<description>" line, then add the following information for each
	  picture you copied:
	
	  "49=<description>
	  50=<description> " (without the quotation marks)
	
	  where <description> is the same description used in step 6.
	
	8. Save all files and then exit Scenes.
	
	9. Restart Scenes to enable the changes.
	
	NOTE: When you change the wallpaper in Scenes, the new picture(s) do not appear.
	These pictures are stored in .cat files and cannot be changed.
	
	Additional query words: msscenes screen saver screensaver wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
