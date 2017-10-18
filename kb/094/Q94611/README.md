---
layout: page
title: "Q94611: Jumping to a Keyword in the Middle of a Help Topic"
permalink: kb/094/Q94611/
---

## Q94611: Jumping to a Keyword in the Middle of a Help Topic

	Article: Q94611
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1; WINDOWS:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows version 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was extracted from the Windows Help Authoring Guide
	available on the Microsoft Developer's Network CD-ROM:
	
	Placing Keywords in the Topic
	
	When the user goes to a topic by choosing a keyword from the Search dialog box,
	Help displays the selected topic in the main window, starting from the beginning
	of the topic. If the information related to the keyword is located in the middle
	or toward the end of the topic, the user may not be able to see the relevant
	information without scrolling the topic. This result may not be what you want.
	
	If you want users to be able to go directly to relevant information within a
	topic (and see it without scrolling), you can place additional keywords with the
	information you want users to find. Keywords placed within a topic function as
	spot references (similar to context-string spot references) because they index
	specific locations, or "spots," within the topic. To access the spot-referenced
	material, users choose the keyword from the Search dialog box.
	
	In the Search dialog box, all keywords appear the same. The user cannot tell the
	difference between keywords placed at the beginning of the topic and those
	placed elsewhere in the topic. However, when the user goes to the topic, Windows
	Help uses the location of the keyword footnote as a reference point. If the
	keyword footnote is located in the middle of the topic, Help displays the topic
	as if the middle location were the "top" of the topic.
	
	NOTE:
	
	Because you cannot insert a title footnote in the middle of a topic, any keywords
	that you place in the middle of the topic use the main topic title in the Search
	dialog box.
	
	To define a keyword in the middle of the topic:
	
	1. Place the insertion point where you want to define the keyword. A keyword
	  inserted anywhere except the beginning of the topic is treated as a spot
	  reference.
	
	2. From the Insert menu, choose Footnote. The Footnote dialog box appears.
	
	3. Type an uppercase K as the custom footnote mark, and then choose OK. A
	  superscript K appears in the text window, and the insertion point moves to
	  the footnote window.
	
	4. Type the keyword(s) to the right of the K in the footnote window. Use only a
	  single space between the K and the first keyword. Separate multiple keywords
	  with a semicolon (;).
	
	Additional query words: 3.10 3.50 4.00 95 winhelp hc win16sdk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK350 kbWin32SDK351 kbWinSDKSearch kbWinSDK310
	Version           : :3.1; WINDOWS:3.5,3.51,4.0
	
	=============================================================================
	
