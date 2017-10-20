---
layout: page
title: "Q149599: PPT7: Internet Assistant Commands Missing, Don't Work"
permalink: /kb/149/Q149599/
---

## Q149599: PPT7: Internet Assistant Commands Missing, Don't Work

{% raw %}

	Article: Q149599
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Internet Assistant for Microsoft PowerPoint for Windows 95 version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Assistant for PowerPoint installs the following files on your
	computer:
	
	  Ppt2html.ppa
	  Ppt2html.dll
	  Pp2hintl.dll
	  Image.tpl
	  Text.tpl
	  Slidedmp.exe
	
	If any of these files is damaged, is missing, or had been renamed, Internet
	Assistant will not function properly.
	
	The "More Information" section of this article describes what happens when a
	specific file is deleted, moved, or renamed.
	
	MORE INFORMATION
	================
	
	Name of file   Behavior if file is damaged, missing, or has been renamed
	------------------------------------------------------------------------
	
	Ppt2html.ppa   When you click Export As HTML on the File menu, you
	              receive this error:
	
	                Sorry, PowerPoint could not locate or start
	                "ppt2html." You should run Setup and reinstall it.
	
	Ppt2html.dll   Export To HTML doesn't appear on the File menu.
	
	Pp2hintl.dll   No effect when running the English version of PowerPoint.
	
	Image.tpl      When you click Export As HTML on the File menu, you
	              receive an error similar to:
	
	                Unable to open file for reading.
	                <Path>\image.tpl
	
	Text.tpl       When you click Export As HTML on the File menu, you
	              receive an error similar to:
	
	                Unable to open file for reading.
	                <path>\text.tpl
	
	Slidedmp.exe   When you click Export As HTML on the File menu,
	              PowerPoint will stop responding. You can still quit
	              PowerPoint by clicking End Task in the Close Program dialog
	              box in Windows 95. This situation will not cause Windows 95
	              to stop responding.
	
	Additional query words: hangs
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbPowerPtSearch kbIAsstSearch kbIAsst700PowerPt95
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
