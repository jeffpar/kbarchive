---
layout: page
title: "Q154081: HOWTO: Use a Template for Comments When Checking In Files"
permalink: /kb/154/Q154081/
---

## Q154081: HOWTO: Use a Template for Comments When Checking In Files

{% raw %}

	Article: Q154081
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Each time a developer checks in a file, some SourceSafe administrators would
	like a template for comments to appear. They can then prompt for information
	that Keyword Expansion can't handle, such as what bug number does this change
	fix? This article describes how to use a template for comments. It should be
	noted that the template used appears anytime Visual SourceSafe prompts for a
	comment, not just on Check Ins.
	
	MORE INFORMATION
	================
	
	The Comment template functionality acts slightly different on the Command line
	versus the interface, as explained below:
	
	In the Interface
	----------------
	
	The Comment template will appear in the Comment box of dialogs. To implement this
	behavior, follow the steps below:
	
	1. Create and save a text file with the information that will be used as the
	  template. This is the file that will be displayed for developers to fill out
	  when they check in the file.
	
	2. Add "Comment_Template= <Path and Filename >" to the Srcsafe.ini file.
	  This lets Visual SourceSafe know which file is the template for comments.
	
	On the Command Line
	-------------------
	
	The template appears in an editor that the user specifies. To implement this
	behavior, follow the steps below:
	
	1. Create and save a text file with the information to be used as the template.
	  This is the file that will be displayed to the developers for them to fill
	  out when they check in the file.
	
	2. Add "Comment_Template= <Path and Filename>" to the Srcsafe.ini file.
	  This lets Visual SourceSafe know which file is the template for comments.
	  Make sure this file can be opened by the Comment_Editor executable.
	
	3. Add Comment_Editor= <Path and Executable Name> to the Srcsafe.ini file.
	  This lets Visual SourceSafe know what editor to use to open the file
	  indicated by the Comment_Template= INI setting. If users would like to use a
	  different editor, they can set it in their Tools menu, Options... option,
	  Command Line Options tab, Use editor to prompt for comments, and the Editor
	  field.
	
	4. Add Comment_Editor_Prompt= <Yes|No> to the Srcsafe.ini file. If this is
	  not set, it is assumed to be Yes. This indicates whether the following text
	  should be displayed as the first line of the template:
	
	  "Enter a comment for <File Name>; then save and exit."
	
	  For example:
	
	        Comment_Template= f:\vss\prompt.txt
	        Comment_Editor=f:\windows\notepad.exe
	        Comment_Editor_Prompt=Yes
	
	General Notes for Either Configuration
	--------------------------------------
	
	1. The string 'Enter a comment for <File Name>; then save and exit.' will
	  not be saved along with the comment. Any text in the Comment Template will be
	  saved.
	
	2. If you want it to apply to all developers, these settings can be in the
	  SrcSafe.ini. If you want it to apply to a specific developer, they should be
	  in the SS.ini file. In addition, these settings can apply to all projects by
	  putting them in the INI file before all section headers, [ ], or apply to
	  just one project by putting them after a section header.
	
	     [$/MyProject]
	     Comment_Template= f:\vss\prompt.txt
	     Comment_Editor=f:\windows\notepad.exe
	     Comment_Editor_Prompt=Yes
	
	3. If there has been no change to the file and the Update_No_Change INI setting
	  is set to 'Uncheckout', it will not prompt you for a comment.
	
	4. Adding, 'Checkout_Comment= -' to the INI file can be used to prevent
	  SourceSafe from prompting for a comment when a user checks out a file. See
	  the help file for more information on this setting.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
