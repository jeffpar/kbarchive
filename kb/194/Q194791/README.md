---
layout: page
title: "Q194791: Err Msg: Could Not Open &lt;Filename&gt; Because It Is Already Open..."
permalink: /kb/194/Q194791/
---

## Q194791: Err Msg: Could Not Open &lt;Filename&gt; Because It Is Already Open...

	Article: Q194791
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; :
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbhw kbimu kbHardwarekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Encarta Africana 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Reference Suite 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the programs listed at the beginning of this
	article, you may receive one of the following error messages
	
	  Could not open "<drive>:\books\DSWMEDIA\homescr\stylegd.dcr" because it
	  is already open with write permission by another user.
	
	  Could not open "<drive>:\encyc99\DSWMEDIA\hscreen\hsint.dcr" because it
	  is already open with write permission by another user.
	
	  Could not open "<drive>:\encyc99\mm\titleseq.dc" because it is already
	  open with write permission by another user.
	
	where <drive> is the drive letter of the CD-ROM drive that contains the
	program CD-ROM.
	
	If you click OK, the program starts, but the background is white, and the menus
	are unavailable.
	
	If you wait an additional 30 seconds after you receive the first error message,
	you receive the following error message:
	
	  An essential component is not operating properly and some features of the
	  encyclopedia will not work. Click Help to lean how to correct the problem.
	  Click OK to continue without fixing the problem. Click Cancel to exit the
	  program.
	
	If you click OK, you receive the first error message again. If you click Cancel,
	you receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message
	
	  <Program> caused an invalid page fault in module Swdir.dll.
	
	where <Program> is the executable file of the program you are attempting to
	start.
	
	CAUSE
	=====
	
	This behavior can occur if you are using one of the following CD-ROM drives:
	
	- Creative Labs CD3230E
	- Gold Star GCD-R 580B
	- Memorex 36X/AKU
	- Panasonic CR-581
	- Samsung SCR3230
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Microsoft Product Support Services at (425)
	635-7172 to perform a few, brief tests that can determine if the problem is
	caused by a defective CD-ROM.
	
	MORE INFORMATION
	================
	
	For information about how to contact Creative Labs, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	
	For more information about issues with the Panasonic CR-581 CD-ROM drive, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q137310 Audio CD Not Recognized in IDE CD-ROM Drive
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	NOTE: This problem does not occur in Microsoft Bookshelf 2000.
	
	Additional query words: multi multi-media media mm gpf ipf
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbhw kbimu kbHardware kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf1999 kbEncartaEnCyc1999 kbEncartaAfricana300 kbEncartaReference99
	Version           : WINDOWS:; :
	Issue type        : kbprb
	
	=============================================================================
	
