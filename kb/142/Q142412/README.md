---
layout: page
title: "Q142412: Problems with Automated Installation of Msdlc32"
permalink: kb/142/Q142412/
---

## Q142412: Problems with Automated Installation of Msdlc32

	Article: Q142412
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): msnets win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft does not encourage or support changes to .inf files;
	therefore, Microsoft Product Support Services (PSS) does not support the
	procedure in this article. Although we have tested the following procedure
	and it appears to function as described, make a backup copy of your .inf
	file before you proceed.
	
	SYMPTOMS
	========
	
	When you are running an automated Setup, Setup may prompt you for the location
	of the Msdlc32 files.
	
	CAUSE
	=====
	
	When the INF installer is used to add Msdlc32 to an automated Setup, incorrect
	entries are created in the Layout.inf file.
	
	RESOLUTION
	==========
	
	The Layout.inf file, located in the folder containing Netsetup, should read as
	follows for Msdlc32 to be installed correctly. The Layout.inf file in the Inf
	and Suwin folders should also be updated.
	
	  NETDLC32.INF=1,INF,11
	  DLCNDI.DLL=1,SYSTEM,11
	  DLCHLP.EXE=1,,11
	  DLC.VXD=1,SYSTEM,11
	  DLCAPI.DLL=1,SYSTEM,11
	  TRCDLC.EXE=1,SYSTEM,11
	
	If the following entries exist in the Layout.inf file, remove them:
	
	  NETDLC32.INF,,DLC~.I1=1,INF,11
	  DLCNDI.DLL,,DLC~.D2=1,SYSTEM,11
	  DLC.VXD,,DLC~.V1=1,SYSTEM,11
	  DLCAPI.DLL,,DLCAPI~.D1=1,SYSTEM,11
	  TRCDLC.EXE,,TRCDLC~.E1=1,SYSTEM,11
	  DLCHLP.EXE=1,WINBOOT,11
	
	The following files in the Netsetup\System folder should be renamed as
	indicated:
	
	  Rename Dlc~.v1 to Dlc.vxd
	  Rename Dlcapi~.d1 to Dlcapi.dll
	  Rename Trcdlc~.e1 to Trcdlc.exe
	
	NOTE: This represents only the information for Msdlc32. Other changes to the
	Layout.inf file could cause the automated Setup not to work correctly.
	
	Additional query words: push msbatch.inf
	
	======================================================================
	Keywords          : msnets win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
