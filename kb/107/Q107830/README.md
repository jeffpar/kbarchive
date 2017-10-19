---
layout: page
title: "Q107830: Description of FOXPRO.INI Settings"
permalink: /kb/107/Q107830/
---

## Q107830: Description of FOXPRO.INI Settings

	Article: Q107830
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FOXPRO.INI file stores three sets of data: the last position of the main
	FoxPro screen when FoxPro is exited, the current screen font, and the current
	printer font for the output of files that are currently being edited.
	
	MORE INFORMATION
	================
	
	The settings are configured in the following format:
	
	  [Section name]
	  SettingName=value
	
	The following SettingNames are available in the FOXPRO.INI file below the
	[FOXPRO] section name:
	
	  Zoomed=<Boolean>
	
	  This SettingName is use to determine if the user had the screen maximized
	  when he or she last quit FoxPro. The Boolean value can be a 1 (maximized) or
	  a 0 (not maximized). If Zoomed=1, the SettingNames Row, Column, Height, and
	  Width should all be set to 0.
	
	  Row=<numeric in pixels>
	
	  This is the vertical starting position of the main FoxPro window if it is not
	  maximized. The value is in pixels.
	
	  Column=<numeric in pixels>
	
	  This is the horizontal starting position of the main FoxPro window if it is
	  not maximized. The value is in pixels.
	
	  Height=<numeric in pixels>
	
	  This is the height of the main FoxPro window in pixels.
	
	  Width=<numeric in pixels>
	
	  This is the width of the main FoxPro window in pixels.
	
	  FontName=<font name>
	
	  The is the default screen font used by FoxPro for all screen definitions.
	  Each individual screen font definition can be changed under screen layout in
	  the screen generator. The font name should appear in the same format as seen
	  in the Windows Control Panel Fonts icon.
	
	  FontStyle=<numeric>
	
	  This is the default font style used by FoxPro for all screen definitions.
	  Font styles are regular, bold, italic, and bold italic. The FontStyle
	  SettingName requires a numeric value: regular=0, bold=1, italic=2, bold
	  italic=3.
	
	  FontSize=<numeric>
	
	  This is the point size of the default font. For example, if you want the
	  default screen font to be Arial bold 10-point size, you would enter the
	  following information in the FOXPRO.INI file:
	
	  FontName=Arial FontStyle=1 FontSize=10
	
	  You can also change the default font directly through FoxPro; this is the
	  preferred method. To change the default screen font, hold down the SHIFT key
	  and choose Screen Font from the Text menu. Any changes made will be reflected
	  in the FOXPRO.INI file when you quit FoxPro.
	
	  PrtFontName=<font name>
	
	  Same as FontName except this is the font used to print out .PRG files or text
	  files currently being edited.
	
	  PrtFontStyle=<numeric>
	
	  Same as FontStyle. See above.
	
	  PrtFontSize=<numeric>
	
	  Same as FontSize. See above.
	
	  You can manually change PrtFontName, PrtFontStyle, and PrtFontSize by editing
	  the FOXPRO.INI file. You can also change PrtFontName and PrtFontSize in
	  FoxPro by using the following command:
	
	  SET PRINT FONT "Arial",12
	
	  NOTE: SET PRINT FONT is an undocumented command. For more information, query
	  on the following words:
	
	  "FoxPro" (without the quotation marks) and "set" (without the quotation
	  marks) and "print" (without the quotation marks) and "font" (without the
	  quotation marks)
	
	  SET PRINT FONT does not affect PrtFontStyle. PrtFontStyle must be changed
	  manually in the FOXPRO.INI file.
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
