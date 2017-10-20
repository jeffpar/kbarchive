---
layout: page
title: "Q60874: Print Screen Features and Workarounds for Windows"
permalink: /kb/060/Q60874/
---

## Q60874: Print Screen Features and Workarounds for Windows

{% raw %}

	Article: Q60874
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article summarizes the Print Screen capabilities in Microsoft Windows. The
	following topics are discussed:
	
	- Full Screen MS-DOS-Based Application
	
	- Windows-based and Windowed MS-DOS-Based Applications
	
	- Modifying the Image
	
	- Print Screen from MS-DOS-Based Application to Printer Using Windows
	
	- Printing a Windows Application Screen to a Printer
	
	Windows has three different Print Screen capabilities: full screen to the
	Clipboard, active windows to the Clipboard, and MS-DOS-based application (full
	screen to printer) in 386 enhanced mode.
	
	The PRINT SCREEN key combinations behave differently when you run an MS-DOS-based
	application full screen than when the application is windowed.
	
	MORE INFORMATION
	================
	
	Full-Screen MS-DOS-Based Application (Windows 3.x and Windows 95)
	-----------------------------------------------------------------
	
	Pressing the PRINT SCREEN key or ALT+PRINT SCREEN captures the entire screen and
	places the text in the Clipboard. If your MS-DOS-based application runs in text
	mode, the data is copied to the Clipboard as straight ASCII text. If the
	MS-DOS-based application runs in graphics mode, the data is copied to the
	Clipboard as a bitmap.
	
	Windows-Based and Windowed MS-DOS-Based Applications (Windows 3.x and
	Windows 95)
	---------------------------------------------------------------------------------
	
	When you are using Windows-based or windowed MS-DOS-based applications, pressing
	the PRINT SCREEN key copies the entire screen to the Clipboard. Pressing
	ALT+PRINT SCREEN copies the image of the current window to the Clipboard.
	
	Modifying the Image (Windows 3.x and Windows 95)
	------------------------------------------------
	
	If you only want a portion of the window, or you want to modify the graphic, you
	can paste the image into Paintbrush, make modifications if you choose, and then
	copy a portion or all of the image back to the Clipboard. The image can also be
	saved as a .BMP or .PCX file at this point.
	
	Print Screen from MS-DOS-Based Application to Printer Using Windows
	(Windows 3.x)
	---------------------------------------------------------------------------------
	
	When you are running Windows in 386 enhanced mode you can print an MS-DOS-based
	application's screen contents directly to a printer, by doing the following:
	
	1. Using PIF Editor, open the PIF file for the MS-DOS application from which you
	  want to print the screen.
	
	2. Choose the Advanced button.
	
	3. In the Other Options box, select the PrtSc and Alt+PrtSc check boxes.
	
	This feature is not available in real mode (Windows 3.0 only) or standard mode.
	
	If you clear the PrtSc and Alt+PrtSc check boxes, nothing happens. If you do not
	disable these shortcut keys, the screen or current application's screen is
	copied to the Clipboard.
	
	Microsoft has confirmed this to be a problem in Windows version 3.0 in real and
	standard modes, and in Windows 3.1 in standard mode. We are researching this
	problem and will post new information here as it becomes available.
	
	Printing a Windows-Based Application Screen to a Printer (Windows 3.x)
	----------------------------------------------------------------------
	
	You cannot print a screen image to a printer from a Windows-based application by
	using the PRINT SCREEN key. However, you can copy the image to Paintbrush and
	print the image. You can automate this process by creating a Recorder macro.
	
	To write a macro that captures a screen image from a Windows application to the
	Clipboard and then prints through Paintbrush, do the following:
	
	1. Minimize all applications except Program Manager.
	
	2. Run Paintbrush (do not minimize).
	
	3. From the Options menu, choose Image Attributes. In the Image Attributes
	  dialog box, choose the Default button.
	
	4. Run File Manager (do not minimize).
	
	5. Run Recorder (do not minimize).
	
	6. Minimize Program Manager.
	
	7. From the Macro menu in Recorder, choose Record.
	
	8. Enter a macro name under Record Macro Name.
	
	9. Choose a shortcut key combination under Shortcut Key.
	
	10. Under Playback To, choose Any Application.
	
	11. Under Record Mouse, choose Ignore Mouse.
	
	12. Choose Start.
	
	13. Press PRINT SCREEN.
	
	14. Press CTRL+ESC.
	
	15. Press P+ENTER.
	
	16. Press ALT+V, then the O key.
	
	17. Press ALT+E, then the P key. Repeat this command once to paste the image
	  into Paintbrush.
	
	18. Press ALT+V, then the I key.
	
	19. Press ALT+F, then the P key.
	
	20. Press ENTER.
	
	21. Press CTRL+ESC.
	
	22. Press DOWN ARROW.
	
	23. Press ENTER.
	
	24. Press CTRL+BREAK.
	
	25. Choose Save Macro.
	
	26. Choose OK.
	
	27. From the File menu in Recorder, choose Save.
	
	28. Enter the macro filename and press ENTER.
	
	Paintbrush must be open and not minimized to use this Macro. Also, there must be
	at least one non-minimized application open other than Paintbrush when the macro
	executes. To execute the macro, do the following:
	
	1. Open Recorder.
	
	2. From the File menu, choose Open.
	
	3. Enter the macro filename and press ENTER (or set the macro up as an icon in
	  Program Manager and execute it).
	
	4. Activate the Paintbrush window.
	
	5. Activate the window of another non-minimized application.
	
	6. Execute the macro by pressing the shortcut key combination you selected when
	  you recorded the macro.
	
	This should copy the image to the Clipboard, paste it into Paintbrush, and send
	it to the selected printer. Steps 1 to 3 need only be done once per session.
	
	NOTE: You cannot print another screen until Paintbrush has finished printing the
	first one to Print Manager.
	
	Additional query words: 3.00 3.00a 3.10 3.11 win95x
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11,95
	
	=============================================================================
	

{% endraw %}
