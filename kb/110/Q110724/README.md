---
layout: page
title: "Q110724: DOCERR: Corrections to Viewer 2.0 Manuals"
permalink: /kb/110/Q110724/
---

## Q110724: DOCERR: Corrections to Viewer 2.0 Manuals

	Article: Q110724
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	The following corrections should be made to the Microsoft Multimedia
	Viewer Publishing Toolkit "Authoring Guide" documentation:
	
	- Page 3-15: Under "Rules for [GROUP] Section Entries", the first sentence
	  should read as follows:
	
	  Group names can contain any combination of letters, numbers, or other
	  characters, except for periods, embedded spaces, or commas.
	
	- Page 3-24: The last two entries in the table of .RTF codes should be:
	
	     Em Dash     \emdash     \'97
	     En Dash     \endash     \'96
	
	  NOTE: This same information is also *correctly* listed in the Viewer
	  "Technical Reference" on page 1-13.
	
	- Page 4-13: The first paragraph in the "How Topic-Group Scripts Are Run"
	  section should say:
	
	  Topic-group scripts are run BEFORE any topic-entry commands in the
	  destination topic.
	
	- Page 11-22: The configuration-script sample should have ShowButtonBar() as
	  the last command.
	
	- Page 6-16: The information on "Specifying the Printing and Tabbing Order" is
	  for Viewer version 2.0a. To make the information correct for Viewer version
	  2.0, replace the last sentence of the second to last paragraph on the page
	  with the following:
	
	  If you specify 0 as the tab position for a regular pane, that regular pane
	  will be excluded from tabbing and copying. The regular pane will still print.
	
	
	- Page 12-7: Step 4 under "To display a description of a compiler error
	  message" should say the following:
	
	  In the Current Index box, select Compiler Warning Messages.
	
	The following corrections should be made to the Microsoft Multimedia
	Viewer Publishing Toolkit "Technical Reference":
	
	- Page 4-11: The second sentence of the Limits section should read as follows:
	
	  A title can have a combined total of 200 searchable and not searchable topic
	  groups and word wheels.
	
	  For more information, please see the following article(s) in the Microsoft
	  Knowledge Base:
	
	  Q107168 Limits on Number of Groups and Word Wheels
	
	- Page 5-3: The sequence of command execution is incorrect. The correct
	  sequence follows:
	
	  a. The topic-group exit script for the previous topic group.
	
	  b. The topic-group entry script for the new topic group.
	
	  c. The topic-entry command for the new topic.
	
	- Page 5-77, SearchDialog command: For the first parameter of the SearchDialog
	  command, specify the hwndApp internal variable rather than the hwndContext
	  internal variable. Using the hwndContext variable results in additional
	  Viewer sessions being launched each time a search topic is displayed.
	
	Additional query words: 2.00 PTK 2.00a showmenubar docerr
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
