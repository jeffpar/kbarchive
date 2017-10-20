---
layout: page
title: "Q131108: Kids: Err Msg: Invalid TrueType Font Detected"
permalink: /kb/131/Q131108/
---

## Q131108: Kids: Err Msg: Invalid TrueType Font Detected

{% raw %}

	Article: Q131108
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 30-APR-1999
	
	1.0 1.1 1.1a
	WINDOWS
	kbmm kbenv kberrmsg kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Explorapedia, Creative Writer, or Fine Artist, TrueType fonts may
	not display correctly, or you may receive the following error message:
	
	  Invalid TrueType font detected. An application used a TrueType font that
	  caused an error in Windows.
	
	This error message may occur when a font has been damaged or has become corrupt.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the following steps to reinstall the font(s):
	
	1. Remove the TrueType font(s) in question (see the list of fonts installed by
	  each Kids application below).
	
	2. Reinstall the TrueType font(s) from the CD-ROM (again, see the list of fonts
	  installed by each Kids application below).
	
	  NOTE: For Fine Artist or Creative Writer version 1.0, reinstall the
	  application from the 3.5" disks to reinstall the fonts.
	
	For information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	NOTE: When you need to select the drive location for your fonts, change to your
	CD-ROM drive and locate the directory containing the fonts. Choose Select All,
	then choose OK. This reinstalls the fonts installed by your Kids application.
	
	After following these steps, you should be able to run the program(s)
	successfully.
	
	MORE INFORMATION
	================
	
	Below is a list of the TrueType fonts installed by Microsoft Kids products,
	their filename, and location on the CD. When each of these fonts are installed,
	there are two files placed in the Windows SYSTEM subdirectory on your PC: a .TTF
	and an .FOT file.
	
	Product        Font Filename   Font Name                 Location
	
	Exp, People    ARIALN.TTF      Arial Narrow              PEOPLE\WINSYS
	Exp, Nature    ARIALN.TTF      Arial Narrow              NATURE\WINSYS
	Artist/Writer  IMPACT.TTF      Impact                    SETUP
	(diskette and  LBLACK.TTF      Lucida Blackletter Reg.   SETUP
	 CD-ROM)      LHANDW.TTF      Lucida Handwriting Ital.  SETUP
	              LSANS.TTF       Lucida Sans Regular       SETUP
	              STENCIL.TTF     Stencil                   SETUP
	Artist/Writer  MCZEE.TTF       McZee                     SETUP
	(CD-ROM only)
	
	
	Additional query words: 1.00 1.10 1.10a mskids tad series explore world people nature text errors errmsg start run won't true type tt mczee wm_writer wm_artist maggie max letters error message winmsbhuman msbhuman winmsbsolar msbsolar
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbExplorapediaNature100 kbExplorapediaPeople100 kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : WINDOWS:1.0,1.1,1.1a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
