---
layout: page
title: "Q106651: Font Assistant Tips and Information"
permalink: /kb/106/Q106651/
---

## Q106651: Font Assistant Tips and Information

{% raw %}

	Article: Q106651
	Product(s): Microsoft Windows Printing Issues
	Version(s): 1.0,2.0; WINDOWS:1.0,3.1,6.0,6.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Assistant, version 1.0 
	- Microsoft TrueType Font Pack for Windows, version 2.0 
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article was taken from the README.TXT file from TrueType
	Font Pack version 2.0
	
	CONTENTS
	
	Font Assistant
	A. Limitations on groups and group names
	B. Font Assistant and the Control Panel
	C. Predefined font groups in Font Assistant
	D. Restoring predefined groups
	E. Rebuilding the FAST.INI file
	F. Display and Printing of Fonts
	
	MORE INFORMATION
	================
	
	FONT ASSISTANT
	--------------
	
	A. Limitations on groups and group names
	----------------------------------------
	
	  Font Assistant will allow you to create up to 63 groups. Group names must not
	  exceed 32 characters or contain a double-quote character ("). If you use the
	  FAST.BIN file shipped with Word Assistant, the permanent groups count as part
	  of the 63 groups. You can delete some or all of the permanent groups to allow
	  for the creation of the 63 groups.
	
	B. Font Assistant and the Control Panel
	---------------------------------------
	
	  While the Fonts dialog box from the Control Panel is open, do not activate or
	  deactivate font groups in Font Assistant. Close the Fonts dialog box from
	  Control Panel before changing the active font groups on your system in Font
	  Assistant. Failing to follow this advice can cause the two applications to
	  get differing views of the active fonts on your system.
	
	C. Predefined font groups in Font Assistant
	
	-------------------------------------------
	
	  Font Assistant includes predefined font groups that include all the font
	  products previously released by Microsoft. Grouping fonts reflects personal
	  choices, so consider the predefined groups as suggestions only. You can
	  always add or delete fonts from any predefined group except the <all
	  fonts> group.
	
	  To review the fonts in any group, highlight the group in the Fonts Group(s)
	  list. The Samples area to the right of the list will display a one-line
	  sample of each font in the highlighted group.
	
	D. Restoring predefined groups
	------------------------------
	
	  If you modify the predefined groups, you can always restore the original
	  groups.
	
	  To restore the predefined font groups, choose Restore Default Group from the
	  file menu.
	
	  Be aware that restoring the defaults will erase any font groups you created.
	  If you want any of those groups, you'll have to recreate them.
	
	E. Rebuilding the FAST.INI file
	
	-------------------------------
	
	  The FAST.INI file is Font Assistant's database of information about the fonts
	  installed on your system. This database can become inconsistent with the
	  installed fonts, especially if you use the Control Panel to add, delete, or
	  otherwise change the fonts on your system while Font Assistant is running.
	  For example, installed fonts may fail to appear in the <all fonts>
	  group, and deleted fonts may still appear in font groups.
	
	  In the unlikely event that this happens, delete your FAST.BIN file from the
	  Windows directory. Choose to install Font Assistant from Word Assistant
	  setup. You will have to recreate any font groups you created from scratch.
	
	F. Display and Printing of Fonts
	
	--------------------------------
	
	  If you use many fonts on your system, Windows might run out of system
	  resources required to display those characters. When this occurs, you might
	  see a rectangular box or blank in place of the character.
	
	  To correct this problem, close some of your open applications to free
	  resources for Windows. If this doesn't work, you may have to restart Windows.
	
	
	Additional query words: w4wother 6.00a 5.00 1.00 w4wfont fontasst offasst w4woffice
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWin3xSearch _IKkbbogus kbZNotKeyword3 kbWordAsst kbWin310 kbTTFontSearch kbTTFont200
	Version           : :1.0,2.0; WINDOWS:1.0,3.1,6.0,6.0a
	
	=============================================================================
	

{% endraw %}
