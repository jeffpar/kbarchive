---
layout: page
title: "Q297477: HOW TO: Apply a Background Sound to a Web Page in FrontPage"
permalink: kb/297/Q297477/
---

## Q297477: HOW TO: Apply a Background Sound to a Web Page in FrontPage

	Article: Q297477
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbAudITPro kbHOWTOmaster
	Last Modified: 28-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Step 1: Import the Background Sound File
	- Step 2: Assign the File As the Background Sound
	
	   - Method 1: Set the Page Properties
	- Method 2: Edit the HTML Code
	
	- Step 3: Save and Preview the Page
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article shows you how to import and add a background sound to
	your Web page. Some of the more popular background sound formats for Web pages
	are:
	
	  
	
	  .aif   Audio Interchange Format File (AIFF)
	  .au    Sun/Next Audio File
	  .mid   MIDI Sequence File
	  .mp3   MP3 Format Sound File
	  .snd   Sun/Next Audio File
	  .wav   Microsoft Windows Wave Sound File
	
	Step 1: Import the Background Sound File
	----------------------------------------
	
	To import the file into your Web, follow these steps:
	
	1. Open a Web, and then switch to Folder view.
	
	2. In the Folder list pane, click the folder that you want to import the
	  background sound file into. If you do not want to import the file into a
	  specific folder, click the root folder (the first item in the Folder list
	  pane).
	
	3. On the File menu, click Import.
	
	4. Click Add File.
	
	5. Select the file that you want to import, and then click Open.
	
	6. Click OK.
	
	Step 2: Assign the File As the Background Sound
	-----------------------------------------------
	
	You can either use the Page Properties dialog box or you can edit the HTML code.
	
	Method 1: Set the Page Properties:
	
	1. In Normal view, right-click the page, and then click Page Properties on the
	  menu that appears.
	
	2. Click the General tab.
	
	3. In the Background sound section, click the Browse button.
	
	NOTE: Some sound file formats, such as .mp3 files, are not displayed in the
	dialog box. For these files, you have to manually type the path of the
	background sound file in the dialog box. For example, if a file that is named
	Song.mp3 is stored in a folder that is named Music, this is how the path looks:
	
	  Music/Song.mp3
	
	If the file is in the root, this is how the the path looks:
	
	  Song.mp3
	
	4. After you select a file or type the file name, click Open.
	
	5. In the Loop box, type or select a number to specify the number of times that
	  you want the song to play.
	
	6. Click OK.
	
	Method 2: Edit the HTML Code:
	
	1. Switch to HTML view.
	
	2. Type the <BGSOUND> tag between the <HEAD> tags. For example, if
	  you want to use a file called Song.mp3 as the background sound file and this
	  file is saved in a folder named Music, your <BGSOUND> tag looks similar
	  to the following:
	
	  <HEAD>
	     <bgsound src="music/song.mp3" loop="-1">
	  </HEAD>
	
	3. If the Song.mp3 file is stored in the root instead of a specific folder in
	  your Web, the <BGSOUND> tag looks similar to the following:
	
	  <HEAD>
	     <bgsound src="song.mp3" loop="-1">
	  </HEAD>
	
	The following table explains the Loop values that you can set for the
	<BGSOUND> tag:
	
	  Loop Value     Description
	  -----------------------------------------------------------------------
	  -1             The background sound will play repeatedly as long 
	                 as the page is open. 
	
	  0 or 1         The background sound will play one time.
	
	  n              The background sound will play n times, where 
	                 n is a number greater than 1.
	
	Step 3: Save and Preview the Page
	---------------------------------
	
	1. On the File menu, click Save to save the Web page.
	
	2. Make sure that your speakers are working, and then click Preview in Browser
	  on the File menu.
	
	  NOTE: The larger the size of the file, the longer it takes to load the page.
	
	REFERENCES
	==========
	
	For additional information about how to use background sounds with FrontPage,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q307245 FP2000: Background Sound Options Appear Dimmed, Are Unavailable
	
	  Q196138 FP2000: How to Play Background Sound in Netscape Navigator
	
	Additional query words: front page MP3 MPEG MPG WAV MID MIDI AU SND
	
	======================================================================
	Keywords          : kbdta kbAudITPro kbHOWTOmaster 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
