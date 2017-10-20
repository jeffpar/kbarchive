---
layout: page
title: "Q108168: PRB: &quot;No Label Layouts Found&quot; Message When Creating a Label"
permalink: /kb/108/Q108168/
---

## Q108168: PRB: &quot;No Label Layouts Found&quot; Message When Creating a Label

{% raw %}

	Article: Q108168
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FoxPro for Windows resource file (by default FOXUSER.DBF and its associated
	memo file, FOXUSER.FPT) contains label layouts used by the Label Writer. If this
	information is deleted or damaged, the following error occurs when you try to
	create a label:
	
	  No label layouts found
	
	RESOLUTION
	==========
	
	To restore the label layout information, do one of the following:
	
	FoxPro 2.x
	----------
	
	1. Make sure a resource file is in use.
	
	  NOTE: To check this, choose About FoxPro from the Help menu, then choose the
	  Next button. This dialog box displays the current resource file.
	  Alternatively, you can use the SYS(2005) function to display the current
	  resource file.
	
	2. Run ADDLABEL.APP from the FOXPROW\GOODIES\MISC subdirectory. Make sure that
	  the Add Label Layouts dialog box displays the correct resource file, then
	  choose the Add Labels button.
	
	  NOTE: If the FOXPROW\GOODIES\MISC subdirectory does not exist on your hard
	  disk, run the ALLUNPAK.BAT file from an MS-DOS prompt. The ALLUNPAK.BAT file,
	  which resides in the FOXPROW\GOODIES subdirectory, creates several
	  subdirectories under FOXPROW\GOODIES, including the MISC subdirectory.
	
	  If the ALLUNPAK.BAT file is not on your hard disk, you can install it by
	  selecting the Other Sample Code And Goodies option from the Custom Install
	  selection screen during FoxPro setup.
	
	Visual FoxPro
	-------------
	
	NOTE: You may have to rename the resource files (Foxuser.dbf and Foxuser.fpt by
	default) before using this resolution.
	
	1. Run the Addlabel.app application in main Visual FoxPro directory.
	
	2. In the Addlabel dialog box, select the appropriate Resource file, and then
	  click Add Labels to Resource File.
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a errmsg err msg RWriter LWriter Avery
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2x,3.0
	
	=============================================================================
	

{% endraw %}
