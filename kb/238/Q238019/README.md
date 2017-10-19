---
layout: page
title: "Q238019: Multimedia Err Msg: Video Not Available..."
permalink: /kb/238/Q238019/
---

## Q238019: Multimedia Err Msg: Video Not Available...

	Article: Q238019
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play a video clip in one of the programs listed at the
	beginning of this article, you may receive the following error message:
	
	  Video not available, cannot find 'VIDC.IV50' decompressor.
	
	CAUSE
	=====
	
	This behavior can occur if the proper video codec is not installed on your
	computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Reinstall the Video Codec from the CD-ROM
	-----------------------------------------
	
	To do this:
	
	1. Insert the Encarta Encyclopedia Installation and Resources CD-ROM into the
	  CD-ROM or DVD-ROM drive. Press and hold down the SHIFT key when you insert
	  the CD-ROM to prevent Encarta from starting automatically.
	
	2. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	3. At the command prompt, type the following lines, pressing ENTER after you
	  type each line:
	
	  cd \windows\system
	  copy <cd-rom>:\aref\codec\ir50_32.dll
	  exit
	
	  where <cd-rom> is the drive letter of your CD-ROM drive.
	
	  NOTE: If you are prompted to replace an existing file, click Yes.
	
	4. Restart the computer.
	
	If the issue continues to occur, proceed to the next method.
	
	Download and Install the Latest Indeo Video Codecs
	--------------------------------------------------
	
	Download and install the latest Indeo video codecs from the following Intel Web
	site:
	
	  www.ligos.com
	
	For additional information about how to reinstall or troubleshoot video
	compression, please click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q177198 How to Reinstall Windows 95 Audio and Video Compression
	
	  Q138261 Error Message: Video Not Available, Cannot Find Decompressor
	
	Additional query words: multi multi-media media mm movies clips tshoot
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc2000 kbEncartaEnCyc1999
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
