---
layout: page
title: "Q118427: Schubert: Insufficient Resources Error After Bookshelf Set Up"
permalink: /kb/118/Q118427/
---

## Q118427: Schubert: Insufficient Resources Error After Bookshelf Set Up

{% raw %}

	Article: Q118427
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Bookshelf 1994 after installing Schubert, and then try
	to run Schubert, you may receive the following error message:
	
	  Insufficient Resources: Close one or more applications.
	
	This problem occurs because the Bookshelf 1994 installation program installs an
	earlier version of SPUSH.VBX in the Windows directory.
	
	RESOLUTION
	==========
	
	To correct this problem, delete the files PICCLIP.VBX and SPUSH.VBX from the
	Windows directory. If necessary, recopy them from the Schubert CD to the Windows
	SYSTEM subdirectory.
	
	MORE INFORMATION
	================
	
	The Bookshelf 1994 Setup program adds two files, PICCLIP.VBX and SPUSH.VBX, to
	the Windows directory during a full installation. These files are needed for the
	Multimedia Catalog. When Schubert is installed, it places more recent versions
	of these .VBX files into the Windows SYSTEM subdirectory.
	
	Because the routine Windows uses to search for .DLL and .VBX files involves
	searching the Windows directory first and the Windows SYSTEM subdirectory
	second, the earlier .VBX files, located in the Windows directory, are found
	first and used.
	
	NOTE: Bookshelf 1994 installs SPUSH.VBX (dated 7/7/93) and PICCLIP.VBX (dated
	4/27/93), while Schubert installs SPUSH.VBX (dated 12/8/93) and PICCLIP.VBX
	(dated 4/28/93).
	
	Additional query words: 1994 multi media multimedia multi-media err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword kbMMSchubert
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
