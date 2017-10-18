---
layout: page
title: "Q279803: DirectX Diagnostic Tool Lists Debug Version of Files"
permalink: kb/279/Q279803/
---

## Q279803: DirectX Diagnostic Tool Lists Debug Version of Files

	Article: Q279803
	Product(s): Microsoft Home Games
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft DirectX Software Development Kit, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the DirectX Diagnostic Tool (Dxdiag.exe), the following files may
	be listed as the "Debug" version of the files on the DirectX Files tab:
	
	- D3d8d.dll
	- D3dx8d.dll
	- Dinput8d.dll
	- Dmbandd.dll
	- Dmcompod.dll
	- Dmimed.dll
	- Dmloaded.dll
	- Dmscripd.dll
	- Dmstyled.dll
	- Dmsynthd.dll
	- Dmusicd.dll
	- Dswaved.dll
	
	CAUSE
	=====
	
	This behavior occurs if you uninstall the Microsoft DirectX Software Development
	Kit (SDK), and then install the Microsoft DirectX Runtime program.
	
	MORE INFORMATION
	================
	
	The Notes section on the DirectX Files tab contains a recommendation that you
	reinstall DirectX to correct the issue. However, if you reinstall DirectX, the
	files are not updated. In addition, the "Debug" files function correctly after
	you install the DirectX Runtime program.
	
	NOTE: Most of the "Debug" files are not used by the retail version of DirectX.
	
	Additional query words: direct-x dxdiag dx7 dxsdk
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : kbSDKDirectXsearch kbAudDeveloper kbSDKDirectX700
	Version           : :7.0
	Issue type        : kbprb
	
	=============================================================================
	
