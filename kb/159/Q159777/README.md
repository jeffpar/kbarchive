---
layout: page
title: "Q159777: BUG: Invalid Syntax Error When Logging On to Visual SourceSafe"
permalink: /kb/159/Q159777/
---

## Q159777: BUG: Invalid Syntax Error When Logging On to Visual SourceSafe

{% raw %}

	Article: Q159777
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe500bug kbSSafe600fix kbgrpdsvc
	Last Modified: 06-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to Visual SourceSafe, the following error message might appear:
	
	  Invalid Syntax on line <line #> of the file <path to user's SS.INI
	  file>\SS.INI
	
	When you use the command line, the following error message might appear:
	
	  Invalid Syntax on line <line #> of the file <path to user's SS.INI
	  file>\SS.INI Too many SS.INI environment settings
	
	In both error messages, <line #> is some integer and <path to user's
	SS.ini file> is the MS-DOS path to the user's SS.ini file.
	
	CAUSE
	=====
	
	This error occurs in Visual SourceSafe 5.0 if your SS.ini file references
	settings for more than 10 computers.
	
	In Visual SourceSafe version 6.0 the situation has improved. The error now occurs
	only if your SS.ini file references settings for more than 24 computers.
	
	RESOLUTION
	==========
	
	Manually edit the user's SS.ini file, and reduce the number of references to
	computer names to 10 or less for version 5.0 or 24 or less for version 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	In Visual SourceSafe, user settings such as window size and window state, are
	all saved to the user's SS.ini file. This is done to preserve the appearance of
	the Visual SourceSafe Explorer from one Visual SourceSafe session to another.
	Each entry is identified with a machine name. If users log on from MachineA,
	their SS.ini might contain entries like the following:
	
	  Maximized (MachineA) = No
	  PrjWidth (MachineA) = 260
	
	If they log on from MachineB later on, then a section of the SS.INI might look
	like the following:
	
	  Maximized (MachineA) = No
	  PrjWidth (MachineA) = 260
	  Maximized (MachineB) = Yes
	  PrjWidth (MachineB) = 300
	
	Users can log on to Visual SourceSafe from 10 different machines successfully.
	However, once they attempt to log on from the 11th machine, the above error
	messages appears.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open your SS.ini file into a text editor, such as Microsoft Notepad. Your
	  SS.ini file is located in \\Vss\Users\<your SourceSafe user name>.
	
	2. Modify this file so that it contains references to 11 or more different
	  computer names in Visual SourceSafe version 5.0 or 25 or more for Visual
	  SourceSafe version 6.0. You can do this by copying one line and pasting it
	  back into the file ten times and then modifying each line to make it unique,
	  for example:
	
	  (Beginning of the file goes here)
	  Hist_Rect (RIGEL1) = 188, 225, 721, 561, 1024, 768
	  History_File_Columns (UI) = 75,85,135,100
	  Maximized (RIGEL1) = No
	  mssccprj = *.vbp, *.mak
	  OutputHeight (TIMWIN1) = 150
	  Position_Toolbar (TIMWIN1) = 222, 183, 676, 215, 1280, 1024
	  PrjWidth (RIGEL1) = 260
	  PrjWidth (RIGEL2) = 260
	  PrjWidth (RIGEL3) = 260
	  PrjWidth (RIGEL4) = 260
	  PrjWidth (RIGEL5) = 260
	  PrjWidth (RIGEL6) = 260
	  PrjWidth (RIGEL7) = 260
	  PrjWidth (RIGEL8) = 260
	  PrjWidth (RIGEL9) = 260
	  PrjWidth (RIGEL10) = 260
	  PrjWidth (RIGEL11) = 260
	  Toolbar (RIGEL2) = Yes
	  (etc. etc.)
	
	3. Start the Visual SourceSafe Explorer or use the command line. Note that the
	  above error messages appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe500bug kbSSafe600fix kbgrpdsvc 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
