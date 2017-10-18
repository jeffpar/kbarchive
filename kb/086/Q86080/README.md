---
layout: page
title: "Q86080: Porting Windows Help Source Files from Version 3.0 to 3.1"
permalink: kb/086/Q86080/
---

## Q86080: Porting Windows Help Source Files from Version 3.0 to 3.1

	Article: Q86080
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To successfully compile source files developed for version 3.0 of the Microsoft
	Windows Help Compiler with version 3.1 of the Help Compiler, make the following
	two changes to the Help Project (HPJ) file:
	
	- In the [OPTIONS] section, replace the INDEX statement with the CONTENTS
	  statement. The CONTENTS statement provides the same functionality; it
	  specifies the context string of the highest-level topic. This topic is
	  usually a table of contents or an index of the help file. The Windows Help
	  application displays the contents topic whenever the user chooses the
	  Contents button. The syntax of the CONTENTS statement is as follows:
	
	        [OPTIONS]
	        CONTENTS=context-string
	
	- If the Help file contains any browse sequences, add the browse buttons to the
	  button bar with the following statement in the [CONFIG] section:
	
	        [CONFIG]
	        BrowseButtons()
	
	  Version 3.1 of the Windows Help Compiler does not display the browse buttons
	  by default. For more information on browse buttons, see page 28 of the
	  "Programming Tools" manual included with the Microsoft Windows Software
	  Development Kit (SDK) version 3.1.
	
	Because version 3.1 of the Windows Help Compiler cannot produce backwardly
	compatible help files, the files it creates are incompatible with version 3.0 of
	Windows Help. However, Windows Help version 3.1 will run under Microsoft Windows
	3.0 and is redistributable. See the License Agreement for the Microsoft Windows
	SDK version 3.1 for information about reproducing and distributing WINHELP.EXE
	with your product.
	
	Additional query words: 3.00 3.10 HC31 HC31.EXE HCP HCP.EXE no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
