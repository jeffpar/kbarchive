---
layout: page
title: "Q71229: PRB: Windows Regions Do Not Scale"
permalink: kb/071/Q71229/
---

## Q71229: PRB: Windows Regions Do Not Scale

	Article: Q71229
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The coordinates of Windows regions are in device units, not logical units.
	Therefore, if the mapping mode is not MM_TEXT, region coordinates do not scale
	as would be expected. This causes particular problems in metafiles because
	metafiles often use MM_ISOTROPIC or MM_ANISOTROPIC modes to make pictures appear
	the same on devices with different resolutions.
	
	To work around this problem, applications should avoid using regions if the
	mapping mode is changed from MM_TEXT. Regions should also be avoided in
	metafiles, unless the application knows the scaling factor and can adjust region
	coordinates itself.
	
	MORE INFORMATION
	================
	
	If the applications that will read and write the metafile are developed
	together, the writing application can include an MFCOMMENT escape in the
	metafile to store the region components. This information can be used by the
	reading application to scale the metafile.
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	
