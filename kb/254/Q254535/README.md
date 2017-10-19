---
layout: page
title: "Q254535: Encarta 2000: Hal.dll Error When You Attempt to Install Program"
permalink: /kb/254/Q254535/
---

## Q254535: Encarta 2000: Hal.dll Error When You Attempt to Install Program

	Article: Q254535
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 2000 
	- Microsoft Encarta Africana 2000 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Interactive World Atlas 2000 
	- Microsoft Encarta World English Dictionary, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install one of the programs listed at the beginning of this
	article, you may receive an error message similar to the following:
	
	  "*** STOP: 0x0000000A (0x01010000,0x0000000C,0x00000001,0x80010000)
	  IRQL_NOT_LESS_OR_EQUAL*** Address 80014402 has base at 80010000 - hal.dll"
	
	NOTE: You receive this error message after you are prompted to select the program
	components that you want to install.
	
	CAUSE
	=====
	
	The behavior can occur if the following conditions are true:
	
	- You attempt to start the program on a Microsoft Windows NT 4.0 or a Microsoft
	  Windows 2000-based computer.
	
	- The CD-ROM drive is unable to read the program CD-ROM properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the Crow.exe update file.
	
	NOTE: Do not use this patch on Encarta 2001 products. This patch is designed for
	Encarta 2000 products only.
	
	For information about how to download and install the Crow.exe update file, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q244726 Encarta 2000: Unable to Install Progam
	
	
	
	MORE INFORMATION
	================
	
	
	Additional query words: 1.00 ee2k ers2k ewa2k ewed
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf2000 kbEncartaEnCyc2000 kbEncartaAfricana2000 kbEncartaReference2000 kbEncartaWorldAtlas2000 kbEncartaWorldEngDict
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
