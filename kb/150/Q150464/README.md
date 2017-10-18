---
layout: page
title: "Q150464: UPD: New Object Navigator for &quot;Object Programming with VB4&quot;"
permalink: kb/150/Q150464/
---

## Q150464: UPD: New Object Navigator for &quot;Object Programming with VB4&quot;

	Article: Q150464
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	OBJNAVU1.EXE contains an update for the Object Navigator program that comes with
	the Microsoft Press book titled, "Object Programming with Visual Basic 4."
	
	The following file is available for download from the Microsoft Download Center:
	
	  OBJNAVU1.EXE
	  (http://download.microsoft.com/download/vb40pro/Update/2.0/W9XNT4/EN-US/OBJNAVU1.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	Contents of README.TXT
	----------------------
	
	******************************************
	* README.TXT for Object Navigator Update 1
	* updated 4/30/96
	******************************************
	
	SUMMARY
	-------
	
	If you installed the Object Navigator from the CD that came with
	the first printing of "Object Programming with Visual Basic 4,"
	then this patch has fixes for bugs listed below.
	
	The following topics are covered:
	
	- PATCH FILES LIST
	- INSTALLATION
	- BUGS FIXED
	
	PATCH FILES LIST
	----------------
	
	OBJNAVU1.EXE  Self-extracting executable (download-only). Contains:
	
	  README.TXT  (This file) Describes patch and installation
	  ObjNav.EXE  Replacement executable patch for the Object Navigator
	  UPDATE.BAT  Default installation batch file
	
	INSTALLATION
	------------
	
	To automatically update the Object Navigator in Windows 95, Click Start,
	and then click Run and type the following command:
	
	  UPDATE.BAT
	
	NOTE:  The above batch file assumes that the Object Navigator is
	installed in the default directory.
	
	To update the Object Navigator manually, copy the new ObjNav.EXE
	replacement file to the Object Navigator directory.
	By default the destination directory is
	
	     C:\Program Files\Object Navigator\ 
	
	No other files need to be changed. Note that the ObjNav.Exe file alone
	isn't sufficient to run the Object Navigator. If you downloaded
	this patch to your hard disk, you can remove the files listed above
	from your download directory after installing the update.
	
	BUGS FIXED
	----------
	
	This Object Navigator update addresses the following problems
	(*=possible crash, **=always crash):
	
	* 1) In object-centric mode with the return type locked, double-clicking
	in the Objects list either emptied the list or produced bogus results.
	This could potentially crash.
	
	  2) Releasing the Returned Objects list lock in object-centric mode
	produced unpredictable library names in the Objects list.
	
	  3) On an unsuccessful search, moving the message box and closing it
	completely blanked out the top pane (except for the listboxes).
	
	**4) Deleting a link and then using the drag rectangle to select nodes
	crashed when the mouse was moved outside the code pane while the drag
	rectangle was visible.
	
	* 5) Touching any splitter bar or a search button in move mode produced
	a bogus and dangerous state. (A node was editable, but clicking in the
	lists had no effect.)
	
	  6) Moving a message box around erased parts of the background window.
	
	  7) Clicking in the right (values) list of the parameters pane on a
	partially obscured last item caused the selection to be drawn wrong in
	the parameters list.
	
	  8) Clicking to put the focus in the parameters window or an empty
	libraries window did not show a blank focus rectangle.
	
	  9) On some machines, dragging a splitter bar over the ? button caused
	the description field to act up.
	
	Additional query words: kbfile BookBug mspress ms press objnav devbook vb 1-55615-899-8
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Issue type        : kbinfo
	
	=============================================================================
	
