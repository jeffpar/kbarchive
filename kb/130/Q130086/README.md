---
layout: page
title: "Q130086: Encarta 1995: Fine Artist Loads Instead of Word Processor"
permalink: /kb/130/Q130086/
---

## Q130086: Encarta 1995: Fine Artist Loads Instead of Word Processor

{% raw %}

	Article: Q130086
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :1995 edition
	Operating System(s): 
	Keyword(s): win31kbbuglist
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 1.0 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Fine Artist for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select the word processor feature from Encarta and your computer has Fine
	Artist installed, Fine Artist starts instead of the Encarta word processor,
	Microsoft Write.
	
	
	CAUSE
	=====
	
	Microsoft Write (WRITE.EXE) is the default word processor used by Encarta.
	However, if you install Fine Artist after you've installed Encarta, the Encarta
	default word processor becomes Fine Artist.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	Method 1
	--------
	
	1. From Encarta, choose the Information (i) button.
	
	2. Choose Settings. Select the Choose Word Processor option.
	
	3. From the Choose Word Processor dialog box, select WRITE.EXE or another
	  available word processor.
	
	-or-
	
	Method 2
	--------
	
	The following steps involve editing .INI files. For more information about how to
	perform this task in Windows, see your Windows printed documentation or online
	Help.
	
	1. In a text editor, such as Windows Notepad, open the ENCARTA.INI file (this
	  file is located in the Windows directory).
	
	2. In the ENCARTA.INI file, locate the [95Options] section and change the
	  Wordprocessor= line to reflect the default word processor. For example, to
	  select Microsoft Write, edit the line to look like the following:
	
	        [95Options]
	        Wordprocessor=write.exe
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Microsoft Fine Artist version
	1.0 for Windows. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kids homekids mskids wm_artist mswrite 95
	
	======================================================================
	Keywords          : win31 kbbuglist
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbEncartaSearch kbZNotKeyword2 kbCreativeWriter100 kbFineArtist100 kbEncartaEnCyc1995Mac
	Version           : WINDOWS:1.0; :1995 edition
	
	=============================================================================
	

{% endraw %}
