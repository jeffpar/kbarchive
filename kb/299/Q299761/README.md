---
layout: page
title: "Q299761: Train Simulator: Known Issues with Editing Tools"
permalink: /kb/299/Q299761/
---

## Q299761: Train Simulator: Known Issues with Editing Tools

	Article: Q299761
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses known issues with the Microsoft Train Simulator editing
	tools.
	
	MORE INFORMATION
	================
	
	- The Train Simulator Editors and Tools are not supported by Microsoft Product
	  Support Services, but each program has its own Help system. To access Help
	  while you are working within an editor or tool, press F1 or click the Help
	  button.
	
	- The Microsoft Train Simulator Editors and Tools require a desktop resolution
	  of at least 1024 x 768 to be fully visible; dialog boxes are not resized for
	  lower resolutions. This may be an issue on low-specification computers and
	  possibly some older portable computers. You will be warned of the resolution
	  requirement when you attempt to start an editor or tool from the Train
	  Simulator menu.
	
	Activity Editor
	---------------
	
	- The editor is unusable at desktop resolutions below 1024 x 768 because the
	  dialog boxes do not resize for lower resolutions. This may be an issue on
	  low-specification computers and possibly some older portable computers.
	
	- The path editor does not allow random modification of stretches of a given
	  path, because paths are intrinsically sequential. You can use path repair
	  facilities to modify existing paths, but it is not recommended that the
	  editor be used to remove reverse points, because that will compromise the
	  path.
	
	- If you attempt to add a 310 tender (computer-controlled train) to the
	  Goelsdorf 380, this may cause Train Simulator to stop responding (hang).
	
	- Work orders: If you have a large number of action events, there may be
	  garbled text in the work order area of the Activity Editor. However, the work
	  order is displayed correctly in the Operations Notebook (press F11).
	
	- When track or roads are deleted from a route, their corresponding .tdb or
	  .rdb files are not deleted as expected. Therefore, when you attempt to reload
	  a route, several dialog boxes are displayed, which indicate that the track
	  database has failed to load. To fix this issue, delete the .tdb or .rdb
	  files.
	
	- If you rename an activity and then attempt to reload it, the activity does
	  not appear in the Activity list. Activities that do not appear in the
	  Activity list cannot be run, so it is recommended that you do not rename
	  activities.
	
	Route Geometry Extractor Tool
	-----------------------------
	
	- The zoom window feature may not perform well when you attempt to zoom into
	  specific areas. If you create a new route and use the zoom window, you may
	  see only a blank, white screen.
	
	Route Editor
	------------
	
	- If you switch the resolution, the Route Editor may stop responding. If you
	  attempt to change the pixel settings after you start the Route Editor, a
	  black screen with a "PAUSE" message may be displayed. Wait for the dialog box
	  with the message "This program is not responding... End Task" to be
	  displayed. Click End Task.
	
	- Help question mark buttons are displayed in two dialog boxes, but they cannot
	  be used. These buttons appear only in the two Texture Selector windows.
	
	- Some thumbnail graphics, predominantly in the road and track section
	  headings, are not displayed as expected.
	
	- To resize siding markers, do not click and drag. Instead, select the object
	  with the F3 key, and then use the LEFT ARROW and RIGHT ARROW keys to expand
	  or contract the markers.
	
	Terrain Extraction
	------------------
	
	- The Engineer's Handbook contains the following reference to the terrain
	  extraction tool:
	
	  This tool converts Digital Elevation Map (DEM) data into a set of terrain
	  tiles that can be loaded into the Route Editor as the first step in creating
	  a route.
	
	  Note that the tool does not use DEM data but is still used to create terrain
	  tiles.
	
	Technical Documentation for the Editors and Tools
	-------------------------------------------------
	
	- For players who want to use the unsupported editors and tools that are
	  shipped with Train Simulator, there are a number of related technical
	  documents, written by Kuju Entertainment Ltd., which are available as a
	  self-extracting zip file in the techdocs folder on Train Simulator Disc 1.
	  Like the Train Simulator Editors and Tools, these documents are not supported
	  by Microsoft Product Support Services.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame trainsim
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbTrainSim
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
