---
layout: page
title: "Q258537: FIX: CONFIG.FPW Setting for Terminal Server Environment"
permalink: /kb/258/Q258537/
---

## Q258537: FIX: CONFIG.FPW Setting for Terminal Server Environment

	Article: Q258537
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbServer kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbTermServ kbVS600sp4fix kb
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Visual FoxPro 6.0 under Microsoft Terminal Services, you may
	experience severe performance degradation.
	
	CAUSE
	=====
	
	In an attempt to increase performance, Visual FoxPro draws to off-screen bitmaps
	and then puts the whole bitmap on the screen. When running under Terminal
	Services, this behavior can actually slow performance.
	
	RESOLUTION
	==========
	
	Microsoft Visual FoxPro 6.0, with Visual Studio Service Pack 4 and later,
	includes support for a new Config.fpw switch to prevent these off-screen bitmaps
	from being drawn. The code is:
	
	  BITMAP=OFF
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	When Visual FoxPro writes anything to the screen, it writes first to an
	off-screen bitmap, and then performs a bit-block (bitblt) transfer to the
	screen. This results in smoother screen painting.
	
	Software that allows remote access to a Visual FoxPro session (for example,
	Windows Terminal Server) can detect screen changes, mouse moves, and keyboard
	events. When one of these events occurs, the software broadcasts it over the
	network. When Visual FoxPro performs a bitblt operation, the entire region is
	detected as changed and, therefore, the entire region is sent over the wire to
	the remote computer.
	
	If you have the line of code "BITMAP=OFF" in your Config.fpw, then the off-screen
	bitmaps are not used. However, the performance of Visual FoxPro applications in
	Visual Studio 6.0 Service Pack 4 under Windows Terminal Server without
	off-screen bitmaps can be significantly faster, depending on your screen size,
	net speed, and other variables.
	
	NOTE: Microsoft recommends that you do not use this setting for normal Visual
	FoxPro applications or Component Object Model (COM) servers.
	
	There are some side effects that reduce the functionality of certain Visual
	FoxPro features so that these features are not particularly useful under Windows
	Terminal Server:
	
	Streaming Output
	
	Streaming output to a form or to _SCREEN is not refreshed. This means that if you
	? something to the screen, and then switch to another window and back again,
	Visual FoxPro refreshes the screen but does not re-execute the ? function. As a
	result, the output is not refreshed.
	
	Form Drawing Methods
	
	The refresh issue applies to Form Drawing Methods such as Form.Line, Form.Pset,
	and so on.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbServer kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbTermServ kbVS600sp4fix kbVS600sp4 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
