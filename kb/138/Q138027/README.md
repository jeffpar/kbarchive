---
layout: page
title: "Q138027: PPT: Movies Do Not Play When Moved Cross-Platform"
permalink: /kb/138/Q138027/
---

## Q138027: PPT: Movies Do Not Play When Moved Cross-Platform

{% raw %}

	Article: Q138027
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole kbdta
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a movie in slide view, you may receive one of the
	following messages:
	
	  In PowerPoint for Windows 95, version 7.0
	
	  Sorry, this picture contains only a bitmap.
	
	  In PowerPoint 4.0 for Windows
	
	  Sorry, this QuickTime movie can only be played on a Macintosh.
	
	  In PowerPoint 4.0 for the Macintosh
	
	  The server application, source file, or item cannot be found. Make sure the
	  application is properly installed, and that it has not been deleted, moved,
	  or rentosh.
	
	CAUSE
	=====
	
	When you insert a movie into a slide, PowerPoint actually creates a link to the
	original movie file. The type of link depends on the type of movie file and the
	computer's operating system. For example, if you insert a QuickTime movie into a
	PowerPoint 4.0 for the Macintosh presentation, PowerPoint uses the QuickTime
	Extension to play the movie. If you insert a Video for Windows (.avi) movie into
	PowerPoint 4.0 for Windows, PowerPoint uses OLE and the Windows Media Player to
	play the movie.
	
	The error messages occur for one or both of the following reasons:
	
	- You copied the presentation to another computer but you did not copy the
	  movie files. Or, you copied all the files, but PowerPoint cannot find the
	  movie files.
	
	- The type of link required to play the movie isn't supported by PowerPoint or
	  the operating system. For example, PowerPoint for the Macintosh cannot
	  activate Windows Media Player objects.
	
	RESOLUTION
	==========
	
	1. When you copy your presentation between a Macintosh-based and a Windows-based
	  computer, be sure to copy all the movie files as well.
	
	2. Make sure that your movie files can be played on the destination computer.
	
	3. Open the file on the destination computer.
	
	4. For each movie object, do the following:
	  a. Delete the movie.
	
	  b. Reinsert the movie.
	
	5. Save the presentation.
	
	PowerPoint for the Macintosh, versions 3.0 and later, can insert and play
	QuickTime movies. PowerPoint for Windows, versions 3.0 through 7.0 cannot insert
	or play QuickTime movies unless you install QuickTime for Windows, a third-
	party add-on to Windows.*
	
	PowerPoint for Windows, versions 3.0 and later can insert and play Microsoft
	Video for Windows Audio-Visual Interleave (.avi) files.** PowerPoint for the
	Macintosh, versions 3.0 and 4.0 cannot insert or play .avi files.
	
	*NOTE: Windows-based programs can only play QuickTime movies that are saved
	without dependencies (also called "flattened" QuickTime movies.)
	
	**NOTE: If you are running Windows 3.x, you must have the Video for Windows
	Runtime files installed. These files are installed by many multimedia programs
	and also by PowerPoint 4.0 for Windows.
	
	MORE INFORMATION
	================
	
	It is possible to convert .avi movies to QuickTime movies (and to convert
	QuickTime movies to .avi movies.) There are several utilities available, some of
	them shareware, that can do this.
	
	The following solution assumes you have Microsoft Video for Windows, version 1.1,
	installed on your Windows computer, or the Video for Windows 1.1 Utilities on
	your Macintosh:
	
	AVI (Windows) to QuickTime (Macintosh)
	--------------------------------------
	
	1. Transfer the AVI file from Windows to the Macintosh.
	
	2. Start the AVI To QT utility.
	
	3. Locate the AVI file you want to convert.
	
	4. Select the AVI file, then click Add.
	
	5. Click Convert. You have two options to save the file:
	
	  Save Normally (dependency to AVI file)
	
	  Save Self-Contained Movie
	
	6. Make sure the Windows Compressors reside in the extensions folder. The
	  extension currently supports the following compression schemes:
	
	  Microsoft Video 1
	  Microsoft RLE
	  Microsoft Full Frame
	  Apple Cinepak
	
	7. Delete the placeholder from your presentation.
	
	8. Insert the converted movie.
	
	QuickTime (Macintosh) to AVI (Windows 3.1)
	------------------------------------------
	
	1. Start the VFW Converter.
	
	2. Click Open Source.
	
	3. Locate the QuickTime movie you want to convert.
	
	4. Click the movie, and then click Open.
	
	5. Click Convert.
	
	6. Click Uncompressed, click the desired color depth, and click the frame rate.
	
	  NOTE: Depending on the size of the original movie, the resulting file may be
	  extremely large.
	
	7. Click OK.
	
	8. Move the file to the Windows platform.
	
	You can now import this movie into PowerPoint.
	
	NOTE: The movie is not compressed. To save hard drive space, compress the AVI
	movie, by following thse steps:
	
	1. Open VidEdit for Windows 1.1.
	
	2. On the File Menu, click Open.
	
	3. Locate the uncompressed AVI file.
	
	4. On the File menu, click Save As.
	
	5. Click Compression Options.
	
	6. Click the desired compression scheme (Microsoft RLE[32] is a good choice).
	
	7. Save the AVI file; this compresses the movie.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q108804 Video for Windows 1.1: Contents of Macintosh Utilities
	
	
	  Q112422 PPT: Not All .AVI Files Play Under Windows NT
	
	Additional query words: 3.00 3.00b 4.00a 4.00c ppt95 m_powerpt w_powerpt quicktime quick time avi mov movie cross platform
	
	======================================================================
	Keywords          : kbinterop kbole kbdta 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
