---
layout: page
title: "Q130132: PRB: Instance of Container Class Uses Parent Form Scalemode"
permalink: kb/130/Q130132/
---

## Q130132: PRB: Instance of Container Class Uses Parent Form Scalemode

	Article: Q130132
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Objects added to an instance of a Container Class by a program are placed
	according to the Scalemode property of the parent form. Although a Container
	Class has no Scalemode property, an instance inherits the parent's Scalemode
	property from the form on which it is placed. This occurs regardless of the
	Scale Units selected in the Class page of the Class Info dialog.
	
	RESOLUTION
	==========
	
	Here are two techniques you can use to ensure that objects added to the
	container are properly sized and placed:
	
	- Reset the parent form Scalemode property to a value that allows proper
	  placement of objects. A Scalemode property can be added to the Container
	  Class and although it has no effect, the value of this property can be read
	  and the parent Scalemode set to the proper value. After the objects are
	  placed, the parent Scalemode can be reset to its original value.
	
	- Determine the Scalemode of the parent form, and use the proper values to
	  place the objects for the current parent Scalemode.
	
	Details for these techniques are presented in the "More Information" section of
	this article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	A Visual FoxPro form has a Scalemode property that governs how objects
	programatically placed will be located and sized. There are two Scalemodes,
	foxels (0) and pixels (3). A container class, when instantiated and placed on a
	form, has no Scalemode property. The location and size of any objects placed in
	this container is governed by the Scalemode value of the parent form. The
	following examples demonstrate two methods you can use to ensure that objects
	added to containers are properly placed and sized.
	
	Method One - Change the Parent Scalemode to the Desired Setting
	---------------------------------------------------------------
	
	1. Create a form called SCALTEST.SCX.
	
	2. Set the Scalemode property to 3 - Pixels.
	
	3. Save and close the form.
	
	4. Create a new class by choosing New from the File menu. Select Class from New
	  dialog box, and click the New File button.
	
	5. Use Container_test as the class name, and select Container from the Based On
	  dialog box. In Store, type SCALMODE.VCX.
	
	6. Choose Class Info from the Class menu. Then set the Scale Units to Foxels,
	  and close the dialog by clicking OK. Save the class.
	
	7. Add a property called Scalemode by choosing New Property from the Class menu.
	  Set the value of this property to 0 (zero).
	
	8. Set the Height and Width properties of the class to 12 and 35.
	
	9. Create the following program to run the form and programmatically add the
	  container and a command button to the Container_test1 object:
	
	     * Start of Scalprog.prg
	
	     #DEFINE nFormScalemodeSet 3            && 0 - Foxels; 3 - Pixels.
	     SET CLASSLIB TO scalmode.vcx ADDITIVE
	
	     DO FORM scaltest.SCX
	     scaltest.SCALEMODE=nFormScalemodeSet   && Sets form scalemode to
	                                            && value in #DEFINE statement.
	     nOldscalemode=scaltest.SCALEMODE       && Saves form scalemode.
	
	     scaltest.ADDOBJECT("Container_test1","Container_test")
	
	     * The following line sets the form scalemode to the desired scalemode
	     * saved in the scalemode property added to container. Comment this to
	     * see the behavior of adding Foxel sized object to Pixel scalemode form.
	
	     scaltest.SCALEMODE=scaltest.Container_test1.SCALEMODE
	
	     WITH scaltest.Container_test1
	        .VISIBLE=.T.
	        .ADDOBJECT("cmdcommand1","commandbutton")
	        WITH .cmdcommand1        && Appropriate for Foxel scalemode
	           .LEFT=7
	           .TOP=5
	           .HEIGHT=2
	           .WIDTH=20
	           .VISIBLE=.T.
	        ENDWITH
	     ENDWITH
	     scaltest.SCALEMODE=nOldscalemode     && Resets form scalemode
	     RELEASE CLASSLIB scalmode
	
	     * End of Scalprog.prg
	
	Method One Notes
	----------------
	
	Of the two methods, this is the better choice. The Scalemode property of the
	Container_test Class serves as a holder for the value. It is to be used to set
	the parent form scalemode, but has no effect in itself.
	
	Proper placement and sizing of the command button occurs regardless of the form
	scalemode. If the parent scalemode was not temporarily reset, the command button
	would appear very small because the scalemode would be pixels.
	
	Temporarily setting the form scalemode does not affect objects already placed on
	it, but does affect objects placed on it after the change is made.
	
	Method Two - Determine Parent Scalemode and Place Objects Accordingly
	---------------------------------------------------------------------
	
	1. Create the Form and the Class library as above.
	
	2. Create and run the following program:
	
	     * Start of Scalprg2.prg
	
	     #DEFINE nFormScalemodeSet 0  && Toggle between 0 and 3 to demonstrate.
	     SET CLASSLIB TO scalmode.vcx ADDITIVE
	
	     DO FORM scaltest.SCX
	     scaltest.SCALEMODE = nFormScalemodeSet
	
	     scaltest.ADDOBJECT("Container_test1","Container_test")
	
	     scaltest.CAPTION=STR(nFormScalemodeSet) && Sets caption to scalemode.
	
	     WITH scaltest.Container_test1
	        .VISIBLE=.T.
	        .ADDOBJECT("cmdcommand1","commandbutton")
	        WITH .cmdcommand1
	           DO CASE
	              CASE scaltest.SCALEMODE=0      && Foxels.
	                 .LEFT=7      && Appropriate for Foxel scalemode.
	                 .TOP=5
	                 .HEIGHT=2
	                 .WIDTH=20
	              CASE scaltest.SCALEMODE=3      && Pixels.
	                 .LEFT=40     && Appropriate for Pixels scalemode.
	                 .TOP=80
	                 .HEIGHT=34
	                 .WIDTH=120
	           ENDCASE
	           .VISIBLE=.T.
	        ENDWITH
	     ENDWITH
	     RELEASE CLASSLIB scalmode
	
	     * End Scalprg2.prg
	
	NOTE: Method two requires more code and makes more calculations for both
	scalemodes, so it is less elegant than Method One.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
