---
layout: page
title: "Q120809: How to Turn .MVB or .HLP File Back into .RTF File"
permalink: /kb/120/Q120809/
---

## Q120809: How to Turn .MVB or .HLP File Back into .RTF File

{% raw %}

	Article: Q120809
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 2.0,2.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no Viewer decompiler program to extract Multimedia Viewer Book (.MVB)
	source files for the purpose of extracting rich text format (.RTF) files, bitmap
	files, audio files, or video files. A tool with these capabilities could
	encourage pirating.
	
	You should always keep backup copies of your source files. There is no decompiler
	to extract the source files from a Help (.HLP) file.
	
	MORE INFORMATION
	================
	
	Extracting Text from .MVB and .HLP Files
	----------------------------------------
	
	To extract the text from .MVB and .HLP files, choose the Copy command from the
	Edit menu. After selecting sections of the text in the dialog box, one topic at
	a time, copy the highlighted text to the clipboard. Then you can place the
	copied text in another document in Microsoft Word and save it in the .RTF
	format.
	
	NOTE: the copy command will not copy any rich text, hotspot text, or formatting
	to the clipboard. You will need to type all of the hypertext yourself.
	
	Extracting Graphics from .MVB and .HLP Files
	--------------------------------------------
	
	To extract graphics from .MVB and .HLP file, capture one screen image at a time
	by using a screen capture program or by pressing the ALT+PRINTSCREEN key
	combination on the keyboard. Then paste the image from the clipboard into a
	graphics editing program such as Paint Brush. Then crop your screen capture to
	include just the graphic, and save the image to a bitmap format.
	
	Extracting Audio or Video Files from .MVB and .HLP Files
	--------------------------------------------------------
	
	If the audio and video files are stored in the baggage of an MVB file, there is
	no way to extract them.
	
	
	Additional query words: 3.10 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbHomeProdSearch kbWin3xSearch kbHomeMMsearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a,3.1
	
	=============================================================================
	

{% endraw %}
