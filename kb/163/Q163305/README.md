---
layout: page
title: "Q163305: WD97: Not Enough Memory with Effect Preview in Photo Editor"
permalink: /kb/163/Q163305/
---

## Q163305: WD97: Not Enough Memory with Effect Preview in Photo Editor

	Article: Q163305
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbgraphic kbhw kbinterop kbdta word97 kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Photo Editor 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Photo Editor, if you choose any of the effects that has a preview,
	the computer may stop responding (hang), or one of the following error messages
	may appear in the preview window:
	
	  Not enough memory for effect preview
	
	-or-
	
	  General Protection Fault
	
	-or-
	
	  Access Violation
	
	-or-
	
	  Divide by Zero
	
	CAUSE
	=====
	
	This error may occur when both of the following conditions are true:
	
	- You chose one of the following special effects from the Effects menu:
	
	  Chalk and Charcoal
	  Emboss
	  Graphic Pen
	  Notepaper
	  Watercolor
	  Stained Glass
	  Stamp
	  Texturizer
	
	- You are using any of the following video cards:
	
	  Matrox
	  Video 9
	
	
	RESOLUTION
	==========
	
	To correct this problem, contact the video card manufacturer and obtain an
	updated driver for that card.
	
	For information about how to contact third-party vendors, click the appropriate
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Change the video driver to standard VGA or super VGA.:
	
	Method 2: Change the resolution or the number of display colors.:
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: blank Imager
	
	======================================================================
	Keywords          : kbgraphic kbhw kbinterop kbdta word97 kbHardware 
	Technology        : kbWordSearch kbHomeProdSearch kbPowerPtSearch kbWord97 kbWord97Search kbZNotKeyword2 kbPowerPt97Search kbPhotoEd97
	Version           : :97
	Issue type        : kbbug
	
	=============================================================================
	
