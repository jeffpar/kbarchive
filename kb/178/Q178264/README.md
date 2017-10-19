---
layout: page
title: "Q178264: Encarta: Stack Fault when Applying Filter in Media Gallery"
permalink: /kb/178/Q178264/
---

## Q178264: Encarta: Stack Fault when Applying Filter in Media Gallery

	Article: Q178264
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1997 98
	Operating System(s): 
	Keyword(s): kberrmsg kbmm kbimu
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to apply a filter in the Media Gallery in Microsoft Encarta 97
	Encyclopedia for Windows or Microsoft Encarta 98 Enyclopedia for Windows, you
	may receive one of the following error messages:
	
	- Enc97 caused a stack fault in module Kernel32.dll.
	
	- Enc98 caused a stack fault in module Kernel32.dll.
	
	If you are running Microsoft Windows 3.1 or Microsoft Windows for Workgroups
	3.11, the computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if the Encarta CD-ROM is not in the CD-ROM drive when
	you attempt to apply the filter in the Media Gallery.
	
	RESOLUTION
	==========
	
	To resolve this issue, insert the Encarta CD-ROM into the CD-ROM drive, and then
	restart Encarta.
	
	To prevent this behavior from occurring, do not remove the Encarta CD-ROM from
	the CD-ROM drive while you are using Encarta, unless Encarta prompts you to
	insert the other Encarta CD-ROM.
	
	MORE INFORMATION
	================
	
	Encarta 98 prompts you to insert the CD-ROM when you remove the Encarta CD-ROM
	from the CD-ROM drive while you are using the program. If you click Cancel and
	then attempt to apply a filter, you receive one of the error messages listed in
	the "Symptoms" section earlier in this article.
	
	Additional query words: 1997 98 multi media multimedia multi-media mmtitles crash freeze lock
	
	======================================================================
	Keywords          : kberrmsg kbmm kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1998
	Version           : WINDOWS:1997 98
	Issue type        : kbprb
	
	=============================================================================
	
