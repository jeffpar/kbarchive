---
layout: page
title: "Q109230: How to Create a List or Popup of Available Volume Names"
permalink: /kb/109/Q109230/
---

## Q109230: How to Create a List or Popup of Available Volume Names

{% raw %}

	Article: Q109230
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an application distributed to many users, who each have their own schemes for
	partitioning their hard disks and connecting to various network servers, you may
	find it useful to produce a list or popup of the available volumes. Below are
	several code samples showing how to create such an object.
	
	MORE INFORMATION
	================
	
	You can manually create a popup (the kind controlled by a READ command) by
	incorporating the following code into a program:
	
	     * Load FoxTools
	     IF !'FOXTOOLS'$SET('LIBRARY')
	       SET LIBRARY TO FOXTOOLS ADDITIVE
	     ENDIF
	
	     * Get the name of the boot volume
	     sysDrive = JustDrive(FXSystem(0))
	
	     * Remove the trailing colon
	     sysDrive = LEFT(sysDrive, LEN(sysDrive) -1)
	
	     * Create a popup containing all the volumes to which the Mac is
	     * currently connected. The boot volume, the one containing the active
	     * System Folder, is the default choice. Note the space after the caret
	     * in the PICTURE clause.
	     @1,1 GET m.volPop PICTURE '@^ ' + FXVolume() DEFAULT sysDrive
	     READ  && Activate the list object
	
	NOTE: Replace the row and column coordinates of the popup with ones that reflect
	the desired position of the object. For more information about the @ ... GET
	LIST command, see the FoxPro "Language Reference."
	
	To create the same kind of popup or list using the Screen Builder, use the
	following code, which builds an array of volume names that can be used as the
	basis for a popup or list. You can place this procedure in the Cleanup and
	Procedures code snippet of a screen.
	
	     PROCEDURE AVol
	     * Procedure to create an array of available volumes.
	     * The parameter must be passed by reference. When the procedure is
	     * finished, the parameter will contain an array of the available
	     * volumes.
	     PARAMETER a_Volume
	
	     IF PARAMETERS() < 1
	       WAIT WINDOW 'Usage: =AVOL(@<expC>)' NOWAIT
	       RETURN 0
	     ENDIF
	
	     *Open FoxTools if necessary
	     IF !'FOXTOOLS'$SET('LIBRARY')
	       SET LIBRARY TO FOXTOOLS ADDITIVE
	     ENDIF
	
	     * Get a semicolon-delimited list of available volumes
	     volList=FXVolume()
	
	     * Get the number of volumes in the list
	     numVols = Words(volList,';')
	
	     * Dimension the array to hold the volume names
	     DIMENSION a_Volume(numVols)
	
	     * Parse the list of volumes and stuff each value into its own array
	     * element
	     FOR i = 1 TO numVols
	       a_Volume[i] = WordNum(volList, i, ';')
	     ENDFOR
	
	     RETURN numVols
	
	     * END OF PROCEDURE AVol
	
	To create the array for use by a popup or list object created in the FoxPro for
	Macintosh Screen Builder, initialize a variable and call procedure AVol in the
	Setup code snippet of the screen. For example:
	
	     * Place the following in the SETUP code snippet of a screen
	     theVols = ''
	     volCount = AVol(@theVols)
	
	In the Popup or List dialog box, specify theVols as the array that supplies the
	popup or list with data. For more information about creating popups and lists in
	the Screen Builder from an array, see the FoxPro "Developer's Guide." You can
	use a similar procedure in Visual FoxPro for Macintosh version 3.0b, by using
	properties specific to the listbox object in the Form Designer.
	
	For more information about the FoxTools functions used in this example, see the
	FoxTools README file located in the FOXPRO:GOODIES:MISC folder. This file
	contains a complete listing of all the functions in the FoxTools function
	library.
	
	Additional query words: vFoxMac FoxMac FXVOLUME listbox pop- up list box
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
