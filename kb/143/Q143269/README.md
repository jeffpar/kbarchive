---
layout: page
title: "Q143269: 3D Movie Maker: Windows NT 3.51 Requires Administrative Rights"
permalink: kb/143/Q143269/
---

## Q143269: 3D Movie Maker: Windows NT 3.51 Requires Administrative Rights

	Article: Q143269
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 3D Movie Maker for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On computers running Windows NT 3.51, 3D Movie Maker runs only if you have
	Administrative privileges. This is a confirmed problem with 3D Movie Maker.
	
	To run 3D Movie Maker with only User privileges, you need to edit the Windows NT
	registry. This article tells how to edit the registry.
	
	MORE INFORMATION
	================
	
	To manually edit the registry, do the following:
	
	1. Run regedt32.exe, located in the Windows directory.
	
	2. Select HKEY_LOCAL_MACHINE.
	
	3. Select the /Software/Microsoft/Microsoft Kids/3D Movie Maker key.
	
	4. On the Security menu, click Permissions.
	
	5. In the Registry Key Permissions dialog box, select everyone on the list of
	  names.
	
	6. Change the type of access setting to Full Control.
	
	7. Make sure Replace Permission On Existing Subkeys is selected.
	
	8. Click OK. Close the Registry Editor.
	
	After following these steps, you should be able, as a User or Power User, to run
	3D Movie Maker the next time you log in.
	
	NOTE: This behavior does not exist in Microsoft Nickelodeon 3D Movie Maker for
	Windows, version 1.0.
	
	Additional query words: 1.00 kbhowto kids mczee kbmm director animated movies melanie 3-d three dimensional new technology nt351 3dmm winnt
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHomeProdSearch kbZNotKeyword kb3dMovieMaker
	Version           : WINDOWS:1.0; winnt:3.51
	
	=============================================================================
	
