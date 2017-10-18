---
layout: page
title: "Q128377: FoxPro Information Stored in the Registry or REG.DAT"
permalink: kb/128/Q128377/
---

## Q128377: FoxPro Information Stored in the Registry or REG.DAT

	Article: Q128377
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp300
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro writes information about interoperability issues (such as DDE and
	OLE) and FoxPro settings to the registry (under Windows 95 or Windows NT) or to
	REG.DAT (under Windows or Windows for Workgroups).
	
	MORE INFORMATION
	================
	
	The following information is stored in the registry. Run REGEDIT/V to view the
	data.
	
	- The name and location of the Visual FoxPro executable (.EXE) file.
	
	- If you have the Pro version of Visual FoxPro, the name and location of the
	  .ESL file.
	
	- Associations with the Visual FoxPro .EXE file. Visual FoxPro is loaded when
	  you double-click a file with the following extensions: APP, FXP, PRG.
	
	- FoxPro is registered as an Object Linking and Embedding (OLE) client.
	
	- Options and preferences exposed in the Options dialog. The Options dialog
	  provides a way to centralize FoxPro settings such as system memory variables,
	  various SET commands, information about remote data, and registered classes.
	  These are called user settings. When Visual FoxPro is first installed, the
	  system memory variables are written to the registry, but there are no other
	  user settings in the registry or REG.DAT. The settings are written in the
	  registry or REG.DAT the first time you access the Options dialog and click
	  the Save as Default button.
	
	For more information about the Options dialog, please refer to Chapter 3,
	Configuring FoxPro, in the Installation Guide.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbenv kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
