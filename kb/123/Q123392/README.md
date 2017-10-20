---
layout: page
title: "Q123392: Input Method Editor (IME) in Japanese Windows 3.1"
permalink: /kb/123/Q123392/
---

## Q123392: Input Method Editor (IME) in Japanese Windows 3.1

{% raw %}

	Article: Q123392
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Input Method Editor (IME) for Windows is a Japanese Front-end
	input processor for entering Japanese text into Microsoft Windows. To activate
	IME under Japanese Windows version 3.1, press the KANJI key on a Japanese
	keyboard, or ALT+` on a U.S. keyboard.
	
	MORE INFORMATION
	================
	
	The KANJI key on a Japanese keyboard (ALT+` on a U.S. keyboard) can terminate
	the Japanese IME if the IME is activated at the time.
	
	Once IME is activated, the IME Status Window, normally in the form of four
	connected buttons, is displayed in the lower-right corner of the screen. The IME
	Status Window is a topmost window. You can use the mouse to drag it around the
	screen. By clicking each of the four IME buttons separately, you can set
	different IME conversion modes:
	
	- The left-most button controls the current Hiragana-Kanji conversion mode.
	  There are four options available:
	
	   - One-time conversion: all text entered is displayed in Hiragana until you
	     press the KANJI key or the SPACEBAR. Then the whole string is converted at
	     one time.
	
	   - Automatic conversion: the Hiragana string is converted to Kanji as soon as
	     it is recognized by Microsoft IME as a legitimate phrase.
	
	   - Compound-word-first conversion: the Hiragana string is first tested for
	     compound words. This method is suitable for documents that contain a high
	     percentage of compound-nouns.
	
	   - No conversion: the Hiragana strings are not converted to Kanji strings.
	
	- The second button from the left controls whether the input characters are in
	  single-byte or double-byte mode.
	
	- The third button from the left controls the input mode. The input character
	  is alphanumeric, Hiragana, or Katakana. There are five input modes:
	
	   - Double-byte Hiragana.
	
	   - Double-byte Katakana.
	
	   - Double-byte alphanumeric.
	
	   - Single-byte Katakana.
	
	   - Single-byte alphanumeric.
	
	  Only text entered in the double-byte Hiragana mode can be converted to Kanji.
	
	- The right-most button brings up MS IME HELP.
	
	The IME status can also be displayed in the form of a status bar at the bottom of
	the screen. You can't move the status bar around the screen, but you can use it
	to change the punctuation marks, code system, and training function -- which
	can't be done using the four-button status window.
	
	You can switch between the four-button status window and the status bar by
	selecting the appropriate option from the second listbox on the upper-right side
	of the IME setup window. To open the IME setup window, open the Windows Control
	Panel, double click the "Japanese Input System" icon (the icon title is in
	Japanese, "Japanese Input system" is the English translation). Then select MS
	IME from the listbox, and click the second button (T).
	
	Additional query words: FESDK IMM codepage charaacter set
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
