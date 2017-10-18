---
layout: page
title: "Q125451: Paintbrush Appears Without a Drawing Area"
permalink: kb/125/Q125451/
---

## Q125451: Paintbrush Appears Without a Drawing Area

	Article: Q125451
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Paintbrush from the Program Manager command line, the Task List, or
	command prompt (CMD.EXE), and specify a bitmap file name that does not exist or
	is located in another directory, the following error message may appear:
	
	  <Bitmap file name>
	  Cannot find this file.
	  Make sure that the correct path and file name are given.
	
	After you choose the OK button, Paintbrush appears without a drawing area (that
	is, a 0 Width x 0 Height field), even though the actual image attribute is set
	to a valid size.
	
	In addition, the Print option is not available in Windows NT version 3.1.
	However, the Print option is available in Windows NT version 3.5, and when you
	print the 0x0 field image, the following error message may appear and Paintbrush
	quits automatically:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	PBRUSH.EXE
	
	  Exception: divide by zero (0xc0000094), Address: 0x019985e9
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. In the Accessories group of Program Manager, choose the Paintbrush icon.
	
	2. From the File menu, choose Open.
	
	3. Select the bitmap file you want.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
