---
layout: page
title: "Q128651: How to Add Custom Label Sizes to Visual FoxPro"
permalink: /kb/128/Q128651/
---

## Q128651: How to Add Custom Label Sizes to Visual FoxPro

{% raw %}

	Article: Q128651
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In earlier versions of FoxPro, it was difficult to add a custom label size.
	Although Visual FoxPro ships with the most common styles of Avery labels, it may
	still be necessary to add your own custom label size. This article shows you
	how.
	
	MORE INFORMATION
	================
	
	With Visual FoxPro, it's easy to add a new, custom label size to your
	application. The following steps, taken from the online Help, outline this
	process.
	
	If you don't see a label size that you need in the Label Designer, you can add
	label sizes to the New Label dialog box by adding new sizes to the resource file
	that populates the dialog box. The name of the resource file box is stored in
	the configuration file. By default, the configuration file is CONFIG.FPW.
	
	To add a label size:
	
	1. From the Program menu, choose Do.
	
	2. From the Visual FoxPro directory, select ADDLABEL.APP.
	
	3. In the box, enter the path and name for the resource file.
	
	  NOTE: If you do not know the resource file's name and location, type ?
	  SYS(2005) in the Command window to display the file's name and path in the
	  main Visual FoxPro window.
	
	4. In the Add Label dialog box, select Create New Label Layout.
	
	5. In the Create New Label Layout dialog box, enter the information for the
	  label.
	
	6. Choose Add This Layout. Visual FoxPro adds the new label to the resource file
	  and to the table LABELS.DBF.
	
	7. If you want to add another label size, choose Create New Label Layout. If you
	  want to stop adding labels, choose Cancel.
	
	In addition to the foregoing information from the help file, the following are
	some items you should be aware of about labels.
	
	Existing Labels in Resource File
	--------------------------------
	
	Visual FoxPro doesn't check to see if label definitions already exist in the
	current resource file. Consequently, pressing the 'Add Labels to Resource File'
	button repeatedly will add the same 86 present label definitions to the resource
	file. When you go to select a label layout, you will see each definition
	repeated however many times you pressed the button. The easiest way to recover
	from this is to delete your resource file, but if this is not feasible, you will
	need to issue a SET RESOURCE OFF, use the resource file, and then manually
	delete the unwanted label entries.
	
	Adding a Label
	--------------
	
	The following information documents some of the points to remember when creating
	a new label layout.
	
	- Measurements: Label measurements are in increments of 1/10,000 of an inch and
	  can either be shown in standard U.S. or metric format.
	
	- Layout Names: Layout names can contain any valid characters and can be up to
	  24 characters in length. The layout name is the internal reference to the
	  label in the resource file and will not appear in your list of label layouts.
	  The ID for a label layout in the resource file is LABELLYT and the TYPE is
	  DATAW.
	
	- Description: The description of your label is what will appear in the list of
	  available labels. You can enter a label description in this fashion:
	
	  Label# Height Width Number_of_Labels
	
	  For example:
	
	  0000 1-2/3" 3" 3
	
	
	  When entering a label description, use spaces to align the values for the
	  label.
	
	- Measurement Entries: It is not necessary to enter the leading zeroes to the
	  measurements. However, you must enter a value for all measurement fields.
	
	When you finish adding the new label layout, click the Add This Layout button.
	Your new entry will be added to both your currently-defined resource file
	(FOXUSER.DBF or .FPT by default) and to the default layout file.
	
	In the event that your resource file ever becomes corrupt, you can recover by
	reruning the ADDLABEL.APP program to add back in the standard and custom label
	definitions. After you finish adding labels, choose the Cancel button from the
	Add Label dialog box.
	
	Distributing Labels with Your Application
	-----------------------------------------
	
	Because label layouts are stored in your resource file, you must also distribute
	the resource file with your application so your users have access to the
	standard and custom label definitions.
	
	Additional query words: VFoxWin Labels Custom LWriter 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
