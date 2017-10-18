---
layout: page
title: "Q58336: Windows 3.0 WIN.INI [colors] Section"
permalink: kb/058/Q58336/
---

## Q58336: Windows 3.0 WIN.INI [colors] Section

	Article: Q58336
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	WININI.TXT readme file. The Windows Setup program copies this file to the
	Windows 3.0 directory.
	
	MORE INFORMATION
	================
	
	[COLORS] SECTION
	----------------
	
	The [colors] section defines the colors for components of the Windows
	display and the optional pattern or bitmap to be displayed in the
	background.
	
	The colors section can contain settings of the following type:
	
	<component>=<red-value green-value blue-value>
	
	Purpose: The <red-value>, <green-value>, and <blue-value> values are
	        integers that specify the relative intensities of red, blue,
	        and green, respectively. These settings can range from 0
	        (minimum intensity) to 255 (maximum intensity).
	
	        The <component> keyname can any one of the following:
	
	            Keyname               Refers to
	            -------               ---------
	
	            ActiveBorder          Active window's border
	
	            ActiveTitle           Active title bar
	
	            AppWorkspace          Background workspace for
	                                  multiple document interface
	                                  (MDI) applications
	
	            Background            Screen background (desktop)
	
	            ButtonFace            Button face
	
	            ButtonShadow          Button shadow
	
	            ButtonText            Button text
	
	            GrayText              Text that is dimmed (as in
	                                  an unavailable command name)
	
	            Hilight               Background of highlighted text
	
	            HilightText           Highlighted text
	
	            InactiveBorder        Inactive window's border
	
	            InactiveTitle         Inactive title bar
	
	            Menu                  Menu background
	
	            MenuText              Menu text
	
	            Scrollbar             Scroll bar
	
	            TitleText             Title-bar text
	
	            Window                Window workspace
	
	            WindowFrame           Title-bar background and
	                                  frame color
	
	            WindowText            Window text
	
	To change: For most of these settings, choose the Color icon from the
	          Control Panel window. For ButtonFace, ButtonShadow,
	          ButtonText, GrayText, Hilight, and HilightText, choose
	          Notepad to edit the WIN.INI file.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
