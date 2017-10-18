---
layout: page
title: "Q191623: HOWTO: Distribute VFP COM Components used with MTS"
permalink: kb/191/Q191623/
---

## Q191623: HOWTO: Distribute VFP COM Components used with MTS

	Article: Q191623
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the great new features of Visual FoxPro 6.0 is improved server support
	for Microsoft Transaction Server (MTS). However, associated with MTS are
	distribution issues that one must consider.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro 6.0 Setup Wizard can be used to distribute normal Visual
	FoxPro (VFP) run-time applications and ones which use the Component Object Model
	(COM) components (servers). The Setup Wizard registers COM components using
	normal self-register routines. You can also use the Wizard to register your
	servers remotely using the distributed version of Component Object Model
	(DCOM).
	
	Unfortunately, while all of this is good news for normal applications, ones using
	MTS require a little extra work that is not provided by the Setup Wizard. When
	you register a VFP COM Component in an MTS Package, MTS makes some Registry
	alterations to redirect the server to use the Mtx.exe run- time file. None of
	these Registry changes are picked up by the VFP Setup Wizard.
	
	For distributing MTS applications, you need to use the MTS export mechanism that
	creates redistribution setups. These facilities are excellent and should provide
	everything you need for distributing your MTS components. For base clients,
	which use these components, you can use the VFP Setup Wizard or some other setup
	engine.
	
	To use the Export utility in MTS, simply select the Package that you want to
	distribute and select Export[ASCII 133] from the Action menu. The resulting
	setups consist of both the client and server installations. The client setup
	actually incorporates all the necessary DCOM settings for a client to access a
	particular MTS component on another computer.
	
	REFERENCES
	==========
	
	Microsoft Transaction Server Help; search on: "Exporting Packages, Transaction
	Server"; "ExportPackage method (PackageUtil)"; "Distribution, Package"
	
	Visual FoxPro Help; search on: "Setup Wizard"
	
	Additional query words: PGFest600 Transaction Server Distributed Applications kbVFp600 kbCOMt kbMTS
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
