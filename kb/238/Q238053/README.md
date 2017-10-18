---
layout: page
title: "Q238053: Encarta Dictionary: How to Turn Off Sounds and Visual Effects"
permalink: kb/238/Q238053/
---

## Q238053: Encarta Dictionary: How to Turn Off Sounds and Visual Effects

	Article: Q238053
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbsound kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta World English Dictionary 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are unable to start Microsoft Encarta World English Dictionary 2000, or
	you experience problems when you attempt to use the program's enhanced sound or
	display features, you may need to obtain updated drivers for either your sound
	card or your video adapter, or for both.
	
	MORE INFORMATION
	================
	
	Encarta World English Dictionary 2000 contains a set of registry keys that you
	can use to determine if any problems that occur when you use Encarta World
	English Dictionary 2000 may be related to outdated sound card or video adapter
	drivers.
	
	To use these registry keys to troubleshoot problems in Encarta World English
	Dictionary 2000:
	
	1. Insert the Dictionary Disc CD-ROM into your CD-ROM drive. Press and hold down
	  the SHIFT key when you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\Support\Regfiles
	
	  where <cd-rom> is the drive letter of your CD-ROM drive.
	
	4. Double-click the Edsndoff.reg file, and then click OK.
	
	5. Start Encarta World English Dictionary 2000.
	
	6. If the issue is resolved, contact the manufacturer of your sound card to
	  inquire about how to obtain and install an updated sound driver for your
	  sound card.
	
	  If the issue continues to occur, proceed to the next step.
	
	7. Quit Encarta World English Dictionary 2000.
	
	8. In the Regfiles window, double-click the Edsndon.reg file, and then click OK.
	
	9. Double-click the Edvwoff.reg file, and then click OK.
	
	10. Start Encarta World English Dictionary 2000.
	
	11. If the issue is resolved, contact the manufacturer of your video adapter to
	  inquire about how to obtain and install an updated video driver for your
	  video adapter.
	
	  If the issue continues to occur, proceed to the next step.
	
	12. Quit Encarta World English Dictionary 2000.
	
	13. In the Regfiles window, double-click the Edsndoff.reg file, and then click
	  OK.
	
	14. Start Encarta World English Dictionary 2000.
	
	15. If the issue is resolved, contact the manufacturer of your sound card and
	  the manufacturer of your display adapter to inquire about how to obtain and
	  install updated drivers for your sound card and your video adapter.
	
	  If the issue continues to occur, it is probably unrelated to your sound or
	  video drivers.
	
	16. Close the Regfiles window.
	
	To restore the startup sounds, the user interface sounds, and the enhanced
	display options in Encarta World English Dictionary 2000:
	
	1. Insert the Dictionary Disc CD-ROM into your CD-ROM drive. Press and hold down
	  the SHIFT key when you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\Support\Regfiles
	
	  where <cd-rom> is the drive letter of your CD-ROM drive.
	
	4. Double-click the Edsndon.reg file, and then click OK.
	
	5. Double-click the Edvwoff.reg file, and then click OK.
	
	6. Close the Regfiles window.
	
	
	Additional query words: multi multi-media media mm tshoot ewed
	
	======================================================================
	Keywords          : kbdisplay kbenv kbsound kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
