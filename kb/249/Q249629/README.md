---
layout: page
title: "Q249629: Encarta 2000: Error Messages When You Attempt to Start Program"
permalink: /kb/249/Q249629/
---

## Q249629: Encarta 2000: Error Messages When You Attempt to Start Program

{% raw %}

	Article: Q249629
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Africana 2000 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Interactive World Atlas 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed at the beginning of this
	article, you may receive one or more of the following error messages:
	
	   - Error Starting Program
	  A required .dll file, Shrl30.dll, was not found.
	
	   - Error Starting Program
	  A required .dll file, Shrpnl10.dll, was not found.
	
	   - Error Starting Program
	  A required .dll file, Mapobj43.dll, was not found.
	
	   - Error Starting Program
	  An unknown error has occurred while initializing. Please restart Windows and
	  try again.
	
	CAUSE
	=====
	
	This behavior can occur if one or more of the following files is missing or the
	wrong version:
	
	- Shrl30.dll
	- Shrpnl10.dll
	- Mapobj43.dll
	
	RESOLUTION
	==========
	
	To resolve this issue, copy each of the problem files from your Encarta
	installation CD-ROM, and then paste them into the Reference Titles folder. To do
	this:
	
	1. Insert your Encarta installation CD-ROM into the CD-ROM drive. Press and hold
	  down the SHIFT key as you insert the CD-ROM to prevent Encarta Setup from
	  starting automatically.
	
	2. Click Start, point to Programs, and then click Windows Explorer.
	
	3. Browse through your Encarta installation CD-ROM to one of the files that is
	  missing on your hard disk.
	
	  NOTE: For a listing of the files that you need to copy as well as the folders
	  where those files are located on your Encarta installation CD-ROM, see the
	  tables in the "More Information" section of this article.
	
	4. Right-click the file, and then click Copy.
	
	5. Browse to the following folder on your hard disk:
	
	  C:\Program Files\Common Files\Microsoft Shared\Reference Titles
	
	6. Right-click the folder, and then click Paste.
	
	  If you are prompted to overwrite an existing file, click Yes.
	
	7. Repeat steps 3 through 6 for each file that you need to copy and paste into
	  the Reference Titles folder.
	
	8. Quit Windows Explorer.
	
	If the issue continues to occur, repeat the previous steps to copy the missing
	files to the Windows\System folder.
	
	MORE INFORMATION
	================
	
	The following tables list the problem files and the folders where those problem
	files are located on your Encarta installation CD-ROM.
	
	Encarta Reference Suite 2000
	----------------------------
	
	+-------------------------------------+
	| File name    | Folder               | 
	+-------------------------------------+
	| Shrl30.dll   | cd-rom:\Aref\Compnts | 
	+-------------------------------------+
	| Shrpnl10.dll | cd-rom:\Aref\Compnts | 
	+-------------------------------------+
	| Mapobj43.dll | cd-rom:\Evg          | 
	+-------------------------------------+
	
	Encarta Encyclopedia 2000
	-------------------------
	
	+-------------------------------------+
	| File name    | Folder               | 
	+-------------------------------------+
	| Shrl30.dll   | cd-rom:\Aref\Compnts | 
	+-------------------------------------+
	| Shrpnl10.dll | cd-rom:\Aref\Compnts | 
	+-------------------------------------+
	| Mapobj43.dll | Does not apply       | 
	+-------------------------------------+
	
	Encarta Africana 2000
	---------------------
	
	+-------------------------------------+
	| File name    | Folder               | 
	+-------------------------------------+
	| Shrl30.dll   | cd-rom:\Aref\Compnts | 
	+-------------------------------------+
	| Shrpnl10.dll | cd-rom:\Aref\Compnts | 
	+-------------------------------------+
	| Mapobj43.dll | Does not apply       | 
	+-------------------------------------+
	
	Encarta Interactive World Atlas 2000
	------------------------------------
	
	+-------------------------------------+
	| File name    | Folder               | 
	+-------------------------------------+
	| Shrl30.dll   | cd-rom:\Aref\Compnts | 
	+-------------------------------------+
	| Shrpnl10.dll | cd-rom:\Aref\compnts | 
	+-------------------------------------+
	| Mapobj43.dll | cd-rom:\Evg          | 
	+-------------------------------------+
	
	Additional query words: multi multi-media media mm ers2k ee2k ea2k eiwa2k
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaAfricana2000 kbEncartaReference2000 kbEncartaWorldAtlas2000
	Version           : WINDOWS:; :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
