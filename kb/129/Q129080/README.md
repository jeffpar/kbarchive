---
layout: page
title: "Q129080: HOWTO: Have Accelerator Keys Support Japanese and US Keyboards"
permalink: /kb/129/Q129080/
---

## Q129080: HOWTO: Have Accelerator Keys Support Japanese and US Keyboards

	Article: Q129080
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbIntlDev
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Japanese characters (Hiragana and Katakana characters) can be used as
	accelerators under Japanese Windows when a Japanese keyboard is present.
	
	To support a Hiragana or Katakana accelerator as well as the usual English
	character accelerator in an Windows application, use the flags \36 and \37 in
	the RC file. Place the \36 flag in front of the English character, and place the
	\37 flag in front of the Hiragana or Katakana character.
	
	For example, say you want the accelerator key for "File(&F)" to be 'F' on the
	101 keyboard and to be the Katakana 'FU' ( 0x8374), which is the first Katakana
	character of "file" in Japanese, on the Japanese keyboard. To do this, include
	the following in the RC file:
	
	     POPUP "File(\36F\37FU)"
	     BEGIN
	     ...
	     END
	
	Please note that 'FU' is one Katakana character.
	
	Additional query words: shortcut Kanji 106
	
	======================================================================
	Keywords          : kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
