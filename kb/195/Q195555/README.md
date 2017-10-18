---
layout: page
title: "Q195555: Bookshelf: How to Turn Off Sounds and Visual Effects"
permalink: kb/195/Q195555/
---

## Q195555: Bookshelf: How to Turn Off Sounds and Visual Effects

	Article: Q195555
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbsound kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Bookshelf 2000 
	- Microsoft Encarta Reference Suite 99 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are unable to start one of the Microsoft programs listed at the beginning
	of this article, or if you experience problems when you attempt to use the
	enhanced sound or display features in one of the Microsoft programs listed at
	the beginning of this article, you may need to obtain updated drivers for your
	sound card or display adapter.
	
	MORE INFORMATION
	================
	
	The installation CD-ROMs for the Microsoft programs listed at the beginning of
	this article each contain a set of registry keys you can use to determine if any
	problems that occur when you use Bookshelf 99 are related to outdated sound card
	or display adapter drivers.
	
	To use these registry keys to troubleshoot problems in Bookshelf:
	
	1. Insert the installation CD-ROM for the program into your CD-ROM drive. Press
	  and hold down the SHIFT key when you insert the CD-ROM to prevent the program
	  from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\support\regfiles
	
	  where <cd-rom> is the drive letter for the CD-ROM drive.
	
	4. Double-click the Bssndoff.reg file, and then click OK.
	
	5. Start Bookshelf.
	
	6. If the issue is resolved, contact the manufacturer of your sound card to
	  inquire about how to obtain and install an updated sound driver for your
	  sound card.
	
	  If the issue continues to occur, proceed to the next step.
	
	7. Quit Bookshelf.
	
	8. In the Regfiles window, double-click the Bssndon.reg file, and then click OK.
	
	9. Double-click the Bsvwoff.reg file, and then click OK.
	
	10. Start Bookshelf.
	
	11. If the issue is resolved, contact the manufacturer of your video adapter to
	  inquire about how to obtain and install an updated video driver for your
	  video adapter.
	
	  If the issue continues to occur, proceed to the next step.
	
	12. Quit Bookshelf.
	
	13. In the Regfiles window, double-click the Bssndoff.reg file, and then click
	  OK.
	
	14. Start Bookshelf.
	
	15. If the issue is resolved, contact the manufacturer of your sound card and
	  the manufacturer of your display adapter to inquire about how to obtain and
	  install updated drivers for your sound card and your video adapter.
	
	  If the issue continues to occur, it is probably unrelated to your sound or
	  video drivers.
	
	16. Close the Regfiles window.
	
	To restore the startup sounds, the user interface sounds, and the enhanced
	display options in Bookshelf, follow these steps:
	
	1. Insert the installation CD-ROM for the program into your CD-ROM drive. Press
	  and hold down the SHIFT key when you insert the CD-ROM to prevent the program
	  from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\support\regfiles
	
	  where <cd-rom> is the drive letter for the CD-ROM drive.
	
	4. Double-click the Bssndon.reg file, and then click OK.
	
	5. Double-click the Bsvwon.reg file, and then click OK.
	
	6. Close the Regfiles window.
	
	
	Additional query words: multi multi-media media mm tshoot
	
	======================================================================
	Keywords          : kbdisplay kbenv kbsound kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbBookShelf2000 kbBookShelf1999 kbEncartaReference99
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
