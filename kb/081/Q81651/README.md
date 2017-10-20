---
layout: page
title: "Q81651: Running Microsoft Chart 3.0 in Standard-Mode Windows"
permalink: /kb/081/Q81651/
---

## Q81651: Running Microsoft Chart 3.0 in Standard-Mode Windows

{% raw %}

	Article: Q81651
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses Windows PIF settings for running Microsoft Chart version
	3.0 in standard-mode Windows.
	
	MORE INFORMATION
	================
	
	The following are the recommended PIF file settings for Microsoft Chart version
	3.0 (be sure to include your actual path and directory for Program Name and
	Start-up Directory):
	
	  Program Name:                C:\CHART\CHART.COM
	  Program Title:               Microsoft Chart Version 3.0
	  Program Parameters:          /C
	  Start-up Directory:          C:\CHART
	  Kilobytes Required:          310
	  Kilobytes Desired:           384
	  Directly Modifies:           Screen
	  Program Switch:              Graphics/Multiple Text
	  Screen Exchange:             Graphics Text
	  Close Window On Exit:        Selected (see below)
	
	NOTE: If an MS-DOS-based application is run from a PIF file without the Close
	Window On Exit option selected, when the MS-DOS-based application is closed, an
	inactive application window remains open until it is closed. To close an
	inactive application window, press ALT+SPACEBAR and choose Close from the
	Control menu.
	
	Additional query words: 3.00 3.00a Chart PIF 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
