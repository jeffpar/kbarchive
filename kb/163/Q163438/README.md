---
layout: page
title: "Q163438: PRB: Warning Message in MS Access After Installing ODE Tools"
permalink: kb/163/Q163438/
---

## Q163438: PRB: Warning Message in MS Access After Installing ODE Tools

	Article: Q163438
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	You may receive the following warning message when you open Microsoft Access 97
	after installing the Microsoft Office 97 Developer Edition Tools (ODE Tools):
	
	  You don't have a source code control program (such as Microsoft Visual
	  SourceSafe) installed on your machine. The source code control commands are
	  therefore not available.
	
	  Do you want to see this warning again?
	
	CAUSE
	=====
	
	You receive the warning message if you install the Microsoft Access Source Code
	Control component of ODE Tools, but you do not have source code control
	software, such as Microsoft Visual SourceSafe, installed. This warning also
	appears if you have Microsoft Visual SourceSafe installed on your computer, but
	you only installed the server component and not the client component.
	
	RESOLUTION
	==========
	
	If you do not intend to use source code control software, you can disable the
	warning message by clicking No at the "Do you want to see this warning again?"
	prompt.
	
	If you plan to install Microsoft Visual SourceSafe, be sure to install the Client
	Program (Intel 32-bit) component (in Microsoft Visual SourceSafe version 5.0),
	or the Network Client Setup component (in Microsoft Visual SourceSafe version
	4.0) on your computer. If you do not install the client component, the warning
	message still appears in Microsoft Access.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Microsoft Access Source Code Control component of ODE Tools installs the
	following files on your computer:
	
	File Name      Description
	--------------------------
	
	Accscc.dll Source code control add-in Addsccus.dll Localization file for source
	code control add-in Sccaccus.hlp Source code control Help file Sccaccus.cnt
	Source code control Help file component Sccaccus.fts Source code control Help
	file component Sccaccus.gid Source code control Help file component Sccaccus.ftg
	Source code control Help file component Sscontrl.doc Source code control White
	paper
	
	If you do not plan to use source code control with Microsoft Access 97, you can
	recover approximately 1 megabyte (MB) of hard disk space by removing this ODE
	Tools component from your computer.
	
	REFERENCES
	==========
	
	For more information about source code control, search the Help Index for
	"Source Code Control," or refer to the Source Code Control White paper included
	with Microsoft Office 97 Developer Edition Tools.
	
	Additional query words: ACCSCC VSS SCC source safe
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
