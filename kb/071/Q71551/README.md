---
layout: page
title: "Q71551: Image Attributes Changes Don't Take Effect Immediately"
permalink: /kb/071/Q71551/
---

## Q71551: Image Attributes Changes Don't Take Effect Immediately

{% raw %}

	Article: Q71551
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The changes you make in the Image Attributes dialog box of Paintbrush for
	Windows 3.0 do not take effect until you:
	
	1. Exit and restart Paintbrush.
	
	2. Create a new Paintbrush file.
	
	Under Windows 3.1, if you do not choose to start a new Paintbrush file after
	changing settings, none of the changes you made are saved.
	
	MORE INFORMATION
	================
	
	You cannot change certain image attributes of a picture while you are working on
	that picture. Paintbrush reads parameters from the WIN.INI file on startup or
	when you choose New from the File menu. When you change the Image Attributes in
	Paintbrush, those changes are recorded in the [Paintbrush] section of the
	WIN.INI. The [Paintbrush] section will not exist if you have never changed image
	attributes. Parameters of the section are:
	
	  width=x
	
	  where x is the width of the image in pixels (Paintbrush terminology
	  "pels")
	
	  height=y
	
	  where y is the height of the image in pixels (Paintbrush
	  terminology "pels")
	
	  clear=type
	
	  where type is B/W or COLOR, determining the palette used.
	
	Paintbrush does not remember changes to image attributes immediately; instead, it
	reads the parameters from the WIN.INI file when you:
	
	1. Start Paintbrush
	
	2. Choose New from the File menu.
	
	3. Change the settings in the Image Attributes dialog box. (Windows 3.1 only)
	
	No other changes you make in the Options menu, including Brush Shape, Units, and
	Palette, are saved to WIN.INI. Starting Paintbrush will always give you inches
	under Unit, and the default palette and square brush shape.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
