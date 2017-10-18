---
layout: page
title: "Q271630: Encarta 2001: Quick Define Does Not Work as Expected"
permalink: kb/271/Q271630/
---

## Q271630: Encarta 2001: Quick Define Does Not Work as Expected

	Article: Q271630
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbFAQ
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta World English Dictionary 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install any of the Microsoft Encarta 2001 programs listed at the
	beginning of this article, the Quick Define feature of Microsoft Word and
	Microsoft Excel queries the Encarta Online Web site rather than the local CD-ROM
	drive.
	
	In previous versions of Encarta, when you right-click a word in either Microsoft
	Word or Excel, and then click Define, the Quickbooks feature looks up the word
	from the Microsoft Bookshelf or Microsoft Encarta World English Dictionary
	CD-ROM.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To alter this behavior so that the Quick Define feature searches the local
	installation of Encarta World English Dictionary, run the Maxoff.reg file
	located in the Support folder on the Encarta Disc 1: Installation &
	Resources CD-ROM.
	
	NOTE: The Maxoff.reg file alters the Quick Define feature to point to the local
	CD-ROM drive, or to your hard disk if Encarta World English Dictionary has been
	copied to the hard disk.
	
	When you install the Maxoff.reg file, the Quick Define feature is pointed to the
	default location of Encarta World English Dictionary
	
	  C:\Program Files\Microsoft Encarta\Encarta World English Dictionary 2001
	
	or to the CD-ROM drive with a drive letter of D.
	
	NOTE: If you did not install the Encarta Reference Suite 2001 or Encarta World
	English Dictionary 2001 in the default folder, in order for Maxoff.reg to work
	as designed, you will need to uninstall the Encarta program and reinstall it in
	the default folder.
	
	This workaround only applies if your CD-ROM drive is drive D. If your CD-ROM
	drive letter is any other letter, this workaround will not apply.
	
	There is no option provided to change the Define functionality except where the
	Dictionary is installed to the C: drive.
	
	Rather than using the right-click Define tool, you may use the QuickShelf tool.
	Simply click or highlight a word, then click the Dictionary Quickshelf icon in
	the Taskbar area. Quickshelf accesses the CD-ROM and can be used with any word
	processor. For more information on QuickShelf, see the application's Help
	topic.
	
	
	To configure this feature to use the original online folders, double-click the
	Maxon.reg file located in the Support folder on the Encarta Disk 1: Installation
	& Resources CD-ROM.
	
	
	Additional query words: multi multi-media media mm eedlx ers ewed integrate integration patch download
	
	======================================================================
	Keywords          : kbFAQ 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaReference2001 kbEncartaWorldEngDict2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
