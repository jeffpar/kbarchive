---
layout: page
title: "Q78048: Keyboard Commands More Reliable With Recorder"
permalink: /kb/078/Q78048/
---

## Q78048: Keyboard Commands More Reliable With Recorder

{% raw %}

	Article: Q78048
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Macros recorded with the Microsoft Windows Recorder program are more reliable
	when created using keystrokes, than macros created using equivalent mouse
	operations.
	
	MORE INFORMATION
	================
	
	Macros based on mouse operations are dependent upon the locations and sizes of
	objects on the desktop. The sizes and location of objects tend to change for
	each Windows session and user. Therefore using these as reference points may
	result in Recorder macro errors, such as the following:
	
	  Playback window does not exist
	
	Keystroke-based macros do not depend on the locations or sizes of objects; thus,
	they are not sensitive to changes in these reference points.
	
	Example of Keystroke Macro
	--------------------------
	
	1. Execute the Recorder program.
	
	2. Minimize Program Manager.
	
	3. From the Recorder menu, choose Macro Record.
	
	4. Begin recording the macro, using the following settings:
	
	        Playback (Group Box)
	
	        To:                 Same Application
	        Speed:              Fast
	        Record Mouse:       Everything
	        Relative to:        Screen
	
	5. While holding down the ALT key, press the TAB key repeatedly until Program
	  Manager is highlighted. Release both ALT and TAB to restore Program Manager.
	
	6. Press ALT+F, R to choose Run from Program Manager's File menu.
	
	7. Type
	
	  clock.exe
	
	  and press ENTER to run the Clock program.
	
	8. Type CTRL+BREAK to stop recording.
	
	9. Save the macro.
	
	Steps 1-4 must be performed because the Program Manager may be minimized at the
	start of the macro. If so, it will not respond to the File Run command given in
	step 5. These steps ensure the Program Manager is open.
	
	Additional query words: 3.00 3.0 3.10 3.00a 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
