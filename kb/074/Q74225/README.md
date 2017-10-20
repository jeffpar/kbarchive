---
layout: page
title: "Q74225: INFO: Size Limits for a Multiline Edit Control"
permalink: /kb/074/Q74225/
---

## Q74225: INFO: Size Limits for a Multiline Edit Control

{% raw %}

	Article: Q74225
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, the amount of text that a user
	can enter into a multiline edit control is limited by the number of characters
	the user can type into the edit control (set using the EM_LIMITTEXT message) and
	by the size of the buffer the edit control uses to hold the text.
	
	In general, Windows edit controls were designed as vehicles into which the user
	can enter and edit small amounts of text. They cannot be used as large-scale
	text editors.
	
	MORE INFORMATION
	================
	
	Initially, the user can enter a maximum of 30,000 bytes into a multiline edit
	control. If the user attempts to enter more text, the edit control beeps and
	does not accept the characters. An application can set this limit to any value
	between 1 and 65,535 (0xFFFF) characters by sending the edit control an
	EM_LIMITTEXT message.
	
	A multiline edit control is also subject to the following limitations:
	
	- The maximum number of characters in a single line is 1024.
	
	- The maximum width of a line is 30,000 pixels.
	
	- The maximum number of lines is approximately 16,350.
	
	By default, the edit control's text buffer is allocated from the application's
	local heap. Windows can dynamically grow and shrink the text buffer as the user
	enters text into and deletes text from the edit control. The amount of text that
	can be edited is determined by how large a buffer Windows can allocate from the
	local heap. Because the heap shares the application's default data segment with
	many other objects, the maximum size of the text buffer is likely to be
	substantially smaller than 64K.
	
	An application can specify a global text buffer for an edit control. By using a
	global buffer, an edit control can store almost 64K of data. The actual size
	limit of an edit control depends on the number of lines stored in the edit
	control. Edit controls contain a dynamically allocated buffer, which contains
	offsets into the text buffer for each line. Because each line requires 2 bytes
	of storage, the buffer grows as the number of lines in the edit control grows.
	In addition to the buffer, there are slightly less than 100 bytes of fixed
	overhead associated with an edit control. Windows does not provide any built-in
	method to process a single block of more than 64K of text.
	
	One major drawback of using a global memory buffer is that the EM_GETHANDLE and
	EM_SETHANDLE messages cannot be used to change the memory used by the edit
	control.
	
	Editing features such as Cut and Paste do not affect the amount of text that can
	be edited because Windows uses global memory to implement these features.
	
	REFERENCES
	==========
	
	For more information on using a global memory buffer, query the Microsoft
	Knowledge Base on the following words:
	
	  prod(winsdk) and GLBEDIT
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbEditCtrl kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
