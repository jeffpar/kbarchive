---
layout: page
title: "Q193476: FIX: Type Info for &#95;&#95;asm Crashes Developer Studio"
permalink: kb/193/Q193476/
---

## Q193476: FIX: Type Info for &#95;&#95;asm Crashes Developer Studio

	Article: Q193476
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbEditor kbide kbVC600bug kbDevStudio kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Type Info is requested for the keyword __asm, Developer Studio hangs. If
	Developer Studio is set to automatically generate Type Info, this problem can
	occur when the mouse is positioned over the __asm keyword; otherwise, Type Info
	can be generated manually in one of the following ways:
	
	- Pressing CTRL+T.
	
	- Clicking Type Info from the Edit menu.
	
	CAUSE
	=====
	
	Developer Studio is caught internally in an endless loop.
	
	RESOLUTION
	==========
	
	Force Developer Studio to shut down. Unfortunately, any unsaved information will
	be lost.
	
	To shut down Developer Studio:
	
	1. Press CTRL+ALT+DEL.
	
	2. Under Windows NT or Windows 2000, click Task Manager. Windows 95, Windows 98,
	  and Windows Millennium Edition (Me) automatically display a Close Program
	  dialog box.
	
	3. Click on the Developer Studio icon in the Task list.
	
	4. Click End Task.
	
	5. A message appears informing you that Developer Studio is not responding.
	  Click End Task again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	To avoid unintentionally encountering this error when using the mouse, turn off
	automatic Type Info as follows:
	
	1. On the Tools menu, click Options.
	
	2. Click the Editor tab.
	
	3. Clear the Auto Type Info check box, and click OK.
	
	At this point, any type information must be generated manually as described in
	the SYMPTOMS section of this article.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q153284 INFO: Limitations of IntelliSense in Visual C++ 6.0
	
	Additional query words: checkbox
	
	======================================================================
	Keywords          : kbservicepack kbEditor kbide kbVC600bug kbDevStudio kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
