---
layout: page
title: "Q149715: Setup Using Msbatch.inf Pauses at Network Dialog Box"
permalink: kb/149/Q149715/
---

## Q149715: Setup Using Msbatch.inf Pauses at Network Dialog Box

	Article: Q149715
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 95 using a batch file (Msbatch.inf), Setup may pause at
	the Network dialog box. This can occur even though the "Express=1" entry exists
	in the Msbatch.inf file.
	
	CAUSE
	=====
	
	This behavior occurs if the "Display=0" entry is not added to the Msbatch.inf
	file.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) and add the following line to the
	[network] section of the Msbatch.inf file:
	
	  DISPLAY=0
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem does not occur if the Msbatch.inf file was created using Netsetup
	or Batch.exe, which is the only manner of modifying the Msbatch.inf file that is
	supported by Microsoft.
	
	For additional information about creating a server-based Windows 95 Setup, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q133221 Installing a Server-based Windows 95 Setup
	
	Additional query words: stop lock
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
