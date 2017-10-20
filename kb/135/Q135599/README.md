---
layout: page
title: "Q135599: How To Reposition a Centered Wallpaper Bitmap on The Desktop"
permalink: /kb/135/Q135599/
---

## Q135599: How To Reposition a Centered Wallpaper Bitmap on The Desktop

{% raw %}

	Article: Q135599
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows and Windows for Workgroups you can change the position of the
	centered wallpaper bitmap using a WIN.INI setting. You can change the position
	of the centered wallpaper bitmap in Windows NT by modifying the registry.
	
	MORE INFORMATION
	================
	
	Windows and Windows for Workgroups
	----------------------------------
	
	To change the position of the centered wallpaper bitmap under Windows or Windows
	for Workgroups, edit the [Desktop] section of the WIN.INI file to reposition the
	centered wallpaper bitmap. For example, the following entries will place a
	single bitmap image in the upper left hand corner of the screen:
	
	     WallPaperOriginX=1
	     WallPaperOriginY=2
	
	Windows NT
	----------
	
	To change the position of the centered wallpaper bitmap under Windows NT:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Control Panel\Desktop
	
	3. From the Edit menu, choose Add Value.
	
	4. Add the following and then choose OK:
	
	        Value Name: WallPaperOriginX
	        Data Type:  REG_SZ
	
	5. Enter the desired starting value for the X axis in the sting field and then
	  choose OK.
	
	6. From the Edit menu, choose Add Value.
	
	7. Add the following and then choose OK:
	
	        Value Name: WallPaperOriginY
	        Data Type:  REG_SZ
	
	8. Enter the desired starting value for the Y axis in the sting field and then
	  choose OK.
	
	9. Shutdown and restart Windows NT.
	
	Additional query words: 3.10 3.11 prodnt wallpaperorigin
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW311
	Version           : WINDOWS:3.1,3.11; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
