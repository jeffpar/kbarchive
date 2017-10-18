---
layout: page
title: "Q172191: Desktop Themes Crashes When JPEG Filter is Used"
permalink: kb/172/Q172191/
---

## Q172191: Desktop Themes Crashes When JPEG Filter is Used

	Article: Q172191
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When using Desktop Themes from the Microsoft Windows NT Server or Workstation
	4.0 Resource Kit, Desktop Themes may crash and generate a Dr. Watson log with
	any of the following symptoms:
	
	  
	
	  Exception number: c0000005 (access violation)
	
	  Exception: access violation (Oxc0000005)
	
	  Error in themes.exe
	
	  Desktop Themes closes without warning
	
	CAUSE
	=====
	
	Microsoft Office 97 installs a JPEG filter that is incompatible with the initial
	release of Desktop Themes included in the Windows NT 4.0 Resource Kit. This
	incompatibility does not occur with Microsoft Office 97 on machines that do not
	have the Desktop Themes included in the resource kit installed.
	
	The only complete resolution is to obtain the Desktop Themes patch file.
	
	RESOLUTION
	==========
	
	The Microsoft Windows NT Resource Kit team has developed a patch to address this
	problem for all Windows NT platforms. This patch is available for free download
	at the following ftp site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/
	
	NOTE: You must have the original Windows NT 4.0 Desktop Themes program installed
	in order for the patch to work properly.
	
	
	WORKAROUND
	==========
	
	To work around this issue without the patch, use the following steps:
	
	1. Open Desktop Themes.
	
	2. Click Save As, then "Original Settings.Theme"(without quotation marks) to
	  save your current settings as a theme and then click OK
	
	  When you save or change the current theme settings, the Settings check boxes
	  become available. You now also have a desktop theme with a bitmap (.BMP)
	  wallpaper.
	
	3. click to clear the desktop theme wallpaper option before changing desktop
	  themes, and then set your theme as normal and click OK.
	
	4. To change the desktop theme again, open the Desktop Themes program in the
	  Control Panel and then select the "Original Settings" theme. This theme has a
	  .BMP wallpaper and should not cause Desktop Themes to crash. After changing
	  the theme selection, you can once again disable the Wallpaper check box
	  before choosing a theme that has a JPEG wallpaper.
	
	If you wish to use the wallpapers without the patch, use another program to
	convert the appropriate .JPG file into a .BMP file, and then change the display
	background setting to the new .BMP file.
	
	MORE INFORMATION
	================
	
	Please e-mail RKINPUT@MICROSOFT.COM if you find additional information regarding
	this issue such as:
	
	- Other applications known to conflict with Desktop Themes
	
	- Other symptoms resolved by installing the Desktop Themes patch
	
	Additional query words: mspress ms_press press bookbug ResKit FAQ REQUEST NT4.00 ntrk
	
	======================================================================
	Keywords          :  
	Issue type        : kbbug
	
	=============================================================================
	
