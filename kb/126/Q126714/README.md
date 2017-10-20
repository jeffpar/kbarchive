---
layout: page
title: "Q126714: Err Msg: SERVERNT.BMP Is Not A Valid Bitmap Texture..."
permalink: /kb/126/Q126714/
---

## Q126714: Err Msg: SERVERNT.BMP Is Not A Valid Bitmap Texture...

{% raw %}

	Article: Q126714
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT Server version 3.5 as a server and use the default
	texture bitmap for any of the 3-dimensional (3D) OpenGL screen savers, the
	following error message appears when the screen saver executes:
	
	  Please run the Control Panel Desktop Applet and select another bitmap.
	  SERVERNT.BMP is not a valid bitmap texture for this screen saver.
	
	CAUSE
	=====
	
	SERVERNT.BMP does not exist. If you install Windows NT Server as a domain
	controller, LANMANNT.BMP is assigned as the default texture bitmap for the 3D
	screen savers, which does exist in the <%SYSTEMROOT%> directory.
	
	
	WORKAROUND
	==========
	
	To work around this problem, assign a bitmap or modify the registry for the
	screen savers.
	
	Assign A Bitmap
	---------------
	
	1. Run Control Panel and choose Desktop.
	
	2. Select one of the 3D OpenGL screen savers and choose Setup.
	
	3. For 3D Pipes screen saver, make sure Bitmap texture is selected for the
	  Surface Style, and choose Texture. For the 3D Flying Objects screen saver,
	  make sure Textured Flag is selected for Object Style, and choose Texture.
	
	4. Select one of default Windows NT bitmaps or a custom bitmap and choose OK.
	
	5. Quit Control Panel.
	
	Modify The Registry
	-------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and go to the following subkeys:
	
	  HKEY_CURRENT_USER\Control Panel\Screen Saver.3DFlyingObj
	
	  -and-
	
	  HKEY_CURRENT_USER\Control Panel\Screen Saver.3DPipes
	
	2. Highlight the following entry: Texture
	
	3. From the Edit menu, select String.
	
	4. Replace ServerNT.BMP with LanManNT.BMP (or specify the location of a custom
	  bitmap). Select OK.
	
	5. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt ctrl scr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
