---
layout: page
title: "Q310970: PRB: Some Intellisense Settings Do Not Persist Between Sessions"
permalink: kb/310/Q310970/
---

## Q310970: PRB: Some Intellisense Settings Do Not Persist Between Sessions

	Article: Q310970
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700
	Last Modified: 13-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the _VFP.EditorOptions property, either in code or through the
	Intellisense Manager, and then quit Visual FoxPro 7, the value is not saved when
	you start Visual FoxPro again.
	
	RESOLUTION
	==========
	
	Use a configuration file (usually Config.fpw) to persist the setting.
	
	  MODIFY FILE HOME() + "config.fpw"
	
	Add the following line, modifying as appropriate:
	
	  COMMAND=_VFP.EditorOptions = "lqkT"
	
	See the "EditorOptions" Help topic for the options you can set here.
	
	You can only have one COMMAND line in your Config.fpw file. If you need more than
	one, create a .prg file in the home directory and call that in the COMMAND line
	instead.
	
	  COMMAND=DO vfpStart.prg
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type the following:
	
	  " _VFP.EditorOptions = "" " (without the quotation marks)
	
	2. Quit and then restart Visual FoxPro 7.
	
	3. In the Command window, type the following:
	
	  " ? _VFP.EditorOptions " (without the quotation marks)
	
	Note that EditorOptions has been restored to the default.
	
	REFERENCES
	==========
	
	Visual FoxPro 7.0 Help; search on "EditorOptions"
	
	Additional query words: turn off disable Intellisense
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbprb
	
	=============================================================================
	
