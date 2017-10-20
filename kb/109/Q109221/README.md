---
layout: page
title: "Q109221: Writer/Artist: Setup Does Not Run in Windows 3.1 Standard Mode"
permalink: /kb/109/Q109221/
---

## Q109221: Writer/Artist: Setup Does Not Run in Windows 3.1 Standard Mode

{% raw %}

	Article: Q109221
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Creative Writer and Fine Artist setup does not run in Windows 3.1 Standard Mode
	and generates the following message if you try to run setup without being in
	Enhanced Mode:
	
	  You need to run Windows in Enhanced Mode to run Setup.
	
	The advanced animation and sound features in Creative Writer and Fine Artist
	require Windows to be running in Enhanced Mode. These features are not
	adequately supported by Standard Mode. That is why the Creative Writer and Fine
	Artist boxes state that you need a 386 or higher processor, and recommend a
	minimum of 4MB of RAM.
	
	RESOLUTION
	==========
	
	To avoid this problem, do the following:
	
	1. Exit Windows.
	
	2. At the MS-DOS command prompt, type "win /3" (without the quotation marks).
	  This runs Windows in enhanced mode.
	
	3. Insert the Creative Writer or Fine Artist diskette (or CD-ROM) in drive.
	
	4. From the File menu in Program Manager, choose Run.
	
	5. Diskette: Type "a:\setup" (without the quotation marks) and press "ENTER"
	  (without the quotation marks). CD-ROM: Type "d:\setup" (without the quotation
	  marks) and press "ENTER" (without the quotation marks).
	
	After following these steps, you should be able to install Creative Writer or
	Fine Artist successfully.
	
	Additional query words: 1.00 kbhowto windows enhanced mode kids 3.10 startup launch boot win mskids mczee 1.10 wm_artist 1.10a installation setup set up error errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : WINDOWS:1.0,1.1,1.1a
	
	=============================================================================
	

{% endraw %}
