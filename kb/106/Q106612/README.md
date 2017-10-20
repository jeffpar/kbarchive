---
layout: page
title: "Q106612: Flag Browser Fails to Display Flags in Bookshelf 1993"
permalink: /kb/106/Q106612/
---

## Q106612: Flag Browser Fails to Display Flags in Bookshelf 1993

{% raw %}

	Article: Q106612
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1993 edition
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1993 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Atlas in Bookshelf 1993 and choose Flags from the toolbox, the
	flags may not display in the Flag Browser box.
	
	This will occur if the incorrect version of the CTL3D.DLL file is on the system
	or if you are running another program that is using an incorrect version of the
	CTL3D.DLL file. The correct version of the CTL3D.DLL is the one that came with
	Bookshelf 1993:
	
	  CTL3D.DLL    14448bytes     2/25/93
	
	RESOLUTION
	==========
	
	To correct this problem, either prevent any application from loading an
	incorrect version of the CTL3D.DLL file before starting Bookshelf, or make sure
	the correct version of the CTL3D.DLL file is the only version on the system. The
	steps for both options are listed below:
	
	OPTION 1 (Prevent applications from loading incorrect version)
	--------------------------------------------------------------
	
	1. Close all other applications that are running.
	
	2. Edit the SYSTEM.INI file in any text editor, such as Notepad.
	
	3. Change the "SHELL=" line in the [Boot} section to "SHELL=PROGMAN.EXE". If
	  this is already the case, exit the editor and proceed to OPTION 2.
	
	  NOTE: You will need to restart Windows for this change to take effect.
	
	4. Copy the CTL3D.DLL from the VIEWER directory on your Bookshelf 1993 CD to the
	  Bookshelf 1993 directory on the hard drive.
	
	5. Click once on the Bookshelf 1993 icon in Program Manager.
	
	6. From the File menu, choose Properties.
	
	7. Change the working directory in the Program Item Properties box to point to
	  the Bookshelf 1993 directory on the hard drive and then choose OK.
	
	8. Repeat steps 2-4 for any individual book icons you've created.
	
	OPTION 2 (Make the correct version the only one on the system)
	--------------------------------------------------------------
	
	1. At the MS-DOS prompt (not in an MS-DOS window), change to the Windows SYSTEM
	  directory.
	
	2. Type "rename ctl3d.dll ctl3d.bak" (without the quotation marks).
	
	3. Type "copy d:\viewer\ctl3d.dll" (without the quotation marks), where D is
	  your CD-ROM drive letter.
	
	Microsoft has confirmed this to be a problem in Bookshelf 1993. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 1993 multi media multimedia multi-media empty blank ctrl3d.dll control
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1993
	Version           : :1993 edition
	
	=============================================================================
	

{% endraw %}
