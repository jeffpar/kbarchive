---
layout: page
title: "Q111649: BUG: Left Part of Character Is Clipped with ExtTextOut/TextOut"
permalink: /kb/111/Q111649/
---

## Q111649: BUG: Left Part of Character Is Clipped with ExtTextOut/TextOut

	Article: Q111649
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The left part of a TrueType character such as an italic "f" is clipped.
	
	CAUSE
	=====
	
	There is a bug in the TextOut() and ExtTextOut() functions that occurs with
	complex clipping regions. In this case, GDI considers the left edge of the
	string to be the X coordinate used in the TextOut() or ExtTextOut() call. This
	works for bitmap fonts, but not TrueType fonts because the "A" part of a
	TrueType font's ABC width may be negative (as it normally is with an italic
	"f").
	
	Because this problem only occurs with complex clipping regions, the character may
	appear to be randomly clipped as the clipping region changes. For example,
	clipping may be tied to the presence of a dialog box or other window over the
	client area, because that may create a complex clipping region.
	
	
	RESOLUTION
	==========
	
	An application can correct this problem by calling ExtTextOut() and passing in a
	clipping rectangle that accounts for the portion of the text going to the left
	of the starting point.
	
	For example, in the following call, the string origin is offset within the
	clipping rectangle so the string will not be clipped:
	
	     ExtTextOut(hdc, rc.left+10, // text origin (offset by 10 into cliprect)
	                rc.top, ETO_CLIPPED,
	                &rc, "ffff", 4, NULL);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	This problem does not occur in Windows 95.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	This problem can be reproduced in Windows Write as follows:
	
	1. Start Write.
	
	2. Switch to the Times New Roman Italic font in a 72 point size and type an "f".
	
	3. Display Write's About box and move it off of the "f". When the window is
	  repainted, the left serif of the "f" will be clipped.
	
	Additional query words: no32bit buglist3.10 3.10 sporadic
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
