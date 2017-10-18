---
layout: page
title: "Q92365: Using Harvard Graphics with Windows 3.0, 3.0a"
permalink: kb/092/Q92365/
---

## Q92365: Using Harvard Graphics with Windows 3.0, 3.0a

	Article: Q92365
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers two known issues running the MS-DOS-based version of Harvard
	Graphics for Windows:
	
	- Harvard Graphics runs very slowly in 386 enhanced mode
	
	- Harvard Graphics cannot run in a window
	
	MORE INFORMATION
	================
	
	Harvard Graphics Runs Very Slowly in 386 Enhanced Mode
	------------------------------------------------------
	
	If Harvard Graphics runs very slowly in 386 enhanced mode, change the Monitor
	Ports option in the HG.PIF file to Text. Harvard Graphics will run correctly in
	both the standard and real modes of Windows.
	
	When High Graphics is chosen under the Monitor Ports section, Windows monitors
	the video operation of the application when it is in high-resolution graphics
	mode. When Text is chosen under the Monitor Ports section, Windows will not
	monitor the high-resolution mode of the application, but only the text mode.
	
	To change the Monitor Ports option in the PIF (in enhanced mode):
	
	1. Open the Accessories group, and choose the PIF Editor icon.
	
	2. From the File menu, choose Open and select the HG.PIF file.
	
	3. Choose the Advanced button.
	
	4. Choose the Text option under Monitor Ports. (The Monitor Ports options are
	  listed under Display Options.)
	
	5. Click the High Graphics option under Monitor Ports to turn off the selection.
	
	6. Choose OK.
	
	7. From the File menu, choose Save to save the changes to the HG.PIF file.
	
	8. Close the PIF Editor.
	
	You may also apply these steps to any MS-DOS-based application if it is running
	slow and has the High Graphics check box selected.
	
	Harvard Graphics Cannot Run in a Window
	---------------------------------------
	
	If you try to start the MS-DOS-based version of Harvard Graphics in a window, you
	receive the following error:
	
	  Application Cannot Be Run in a Window. Close other Applications and Retry
	
	Because Harvard Graphics runs in Graphics mode, it cannot be run in a window.
	Check the Full-Screen option in the Harvard Graphics PIF file to prevent the
	error message.
	
	For more information on PIF creation and usage, refer to pages 442-448 of the
	"Microsoft Windows User's Guide" for version 3.0.
	
	REFERENCES
	==========
	
	Software Publishing Corporation (SPC) Technical Support.
	
	Additional query words: 3.00 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
