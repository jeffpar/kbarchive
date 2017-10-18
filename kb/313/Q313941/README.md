---
layout: page
title: "Q313941: MechWarrior 4: Err Msg: Access Violation in MW4 0x72446 Mw4.exe"
permalink: kb/313/Q313941/
---

## Q313941: MechWarrior 4: Err Msg: Access Violation in MW4 0x72446 Mw4.exe

	Article: Q313941
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechWarrior 4: Vengeance 
	- Microsoft MechWarrior 4: Black Knight 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft MechWarrior 4, or when you complete a MechWarrior 4
	campaign, you may receive an error message similar to the following:
	
	  EXCEPTION: Access violation in MW4 0x72446 mw4.exe
	
	This error message may also reference the following dynamic-link library (DLL)
	files:
	
	  Msvcrt.dll
	  Msvirtd.dll
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the following DLL files are missing or
	damaged:
	
	  Msvcrtd.dll
	  Msvcirtd.dll
	  d3dim700.dll
	  dinput.dll
	  ddraw.dll
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods, as necessary, in the order
	presented.
	
	Method 1: Install Microsoft Libraries Update
	--------------------------------------------
	
	For additional information about how to obtain the Microsoft libraries update,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q197298 INFO: Microsoft Libraries Update: What, Where, Why
	
	If this does not resolve the issue, proceed to the Method 2.
	
	Method 2: Reinstall DirectX
	---------------------------
	
	Install the latest version of DirectX.
	
	For additional information about how to obtain the latest version of DirectX,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q179113 How to Download and Install DirectX
	
	MORE INFORMATION
	================
	
	For additional information about access violation issues in MechWarrior 4, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q287923 MechWarrior 4 Error Message: Exception: Access Violation in MW4
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbGamesSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
