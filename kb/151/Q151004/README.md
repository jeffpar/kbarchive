---
layout: page
title: "Q151004: FIX: &quot;PRG&quot; File Type Missing in FoxPro File Group"
permalink: kb/151/Q151004/
---

## Q151004: FIX: &quot;PRG&quot; File Type Missing in FoxPro File Group

	Article: Q151004
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual SourceSafe provides the ability to logically group files of different
	types. For example, files that have a ".c" or ".h" extension may be considered
	as Visual C++ files.
	
	This functionality allows the developer to control the types of files displayed
	in the List Files of Type option, which is displayed in many Visual SourceSafe
	dialog boxes.
	
	During Visual SourceSafe installation, FoxPro or Visual FoxPro is automatically
	added to the File Group list in the SourceSafe Options dialog box under the File
	Types tab. To observe this behavior, from the Visual SourceSafe menu, go to
	[Tools][Options][File Types].
	
	At the bottom of the dialog box, the FoxPro file types are displayed. The file
	types shown are automatically grouped as FoxPro or Visual FoxPro files. However,
	the *.prg file type, which is a major FoxPro file type, is missing.
	
	RESOLUTION
	==========
	
	1. From the SourceSafe Explorer menu, select Tools. Select Options, and then
	  select File Types.
	
	2. In the File Groups dialog box, click FoxPro.
	
	3. In the File Types included in File Group dialog box, add a ";" (without the
	  quotation marks) followed by a space and "*.prg" (without the quotation
	  marks) at the end of the existing line.
	
	4. Click OK to close the dialog box.
	
	NOTE: This change is only effective for the user logged on at the time the change
	is made. This change is visible in the SS.INI file of the specific user in the
	USERS folder.
	
	To make this a global change, you need to modify the SRCSAFE.INI file in the root
	folder of SourceSafe on the server.
	
	The following entry in the SRCSAFE.INI file reflects the additional reference to
	*.prg file types for the FoxPro product:
	
	  File_Types = foxpro (*.sct; *.scx; *.frx; *.frt; *.vcx; *.vct *.prg)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual SourceSafe
	5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
