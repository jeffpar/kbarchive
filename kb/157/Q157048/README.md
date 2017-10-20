---
layout: page
title: "Q157048: HOWTO: Add a Check Box to a List in Visual FoxPro"
permalink: /kb/157/Q157048/
---

## Q157048: HOWTO: Add a Check Box to a List in Visual FoxPro

{% raw %}

	Article: Q157048
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp500 kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you click Toolbars on the View menu, the Toolbars dialog box appears, which
	allows you to manipulate check boxes from within a ListBox Control. This article
	illustrates how you can create this functionality using Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Use the following steps to create a ListBox control similar to the one in the
	Visual FoxPro Toolbars dialog box:
	
	1. Create a form using the "CREATE FORM test" command. This example assumes that
	  you have installed Visual FoxPro and all its components to the C:\Vfp
	  directory, and this is what is returned by the VFP HOME() command. NOTE: this
	  code uses both the Box.bmp and Checkbx.bmp files. In Visual FoxPro 6.0, these
	  files are located in the following new locations:
	
	     HOME(2)+ "tastrade\bitmaps\checkbx.bmp"
	     HOME(2)+ "tastrade\bitmaps\box.bmp"
	
	  Please modify the code examples below when running this code in Visual FoxPro
	  6.0.
	
	2. Add two new properties, NumLstItm and ItemSel[1], to the form. The first
	  property holds the number of items you would like the ListBox control to
	  display, and the second property keeps track of whether specific items in the
	  ListBox control are selected(1) or not selected(0).
	
	3. Right-click the form and click Properties on the Shortcut menu. This takes
	  you to the Properties dialog box for the form.
	
	4. Select the NumLstItm property from the All tab or the Other tab of the
	  Property dialog box, and set it to the number of items you want to have in
	  the ListBox control--for example, set NumLstItm to 5.
	
	5. Add the following code to the INIT event of the form:
	
	        DIMENSION ThisForm.ItemSel(ThisForm.NumLstItm)
	        FOR i= 1 to ThisForm.NumLstItm
	           ThisForm.ItemSel(i)=0
	        endfor
	
	6. Add a ListBox control to the form with the following settings:
	
	        MultiSelect = .F. - False
	        Name = List1
	        RowSourceType = 1 - Value
	       RowSource = One,Two,Three,Four,Five
	
	  NOTE: Make sure that the NumLstItm property of the form is set to the same
	  number as the number of items you have in the RowSource property of the
	  ListBox control. For example, if the NumLstItm property of the form is set to
	  5, then the RowSource property of the ListBox control should contain 5 items
	  separated by commas.
	
	7. Add the following code to the INIT event of the ListBox control:
	
	        This.Picture=HOME()+"samples\tastrade\bitmaps\box.bmp"
	
	8. Add the following code to the Click event of the ListBox:
	
	     LPARAMETERS nButton, nShift, nXCoord, nYCoord
	     IF LASTKEY()!= 5 AND LASTKEY() != 24
	      IF ThisForm.ItemSel(This.ListItemID)=0
	        This.Picture(This.ListItemID)=HOME()+ ;
	        "samples\tastrade\bitmaps\checkbx.bmp"
	        ThisForm.ItemSel(This.ListItemID)=1
	      ELSE
	       IF ThisForm.ItemSel(This.ListItemID)=1
	
	     This.Picture(This.ListItemID)=HOME()+"samples\tastrade\bitmaps\box.bmp"
	        ThisForm.ItemSel(This.ListItemID)=0
	       ENDIF
	      ENDIF
	     ENDIF
	
	  When you run the form, the Icons of all the Items in the ListBox display an
	  empty check box. With the above code, if you left-click an item, then the
	  icon of the item changes to a Box with an "x" in it.
	
	9. Add the following code to the KEYPRESS event of the ListBox:
	
	    LPARAMETERS nKeyCode, nShiftAltCtrl
	     IF nKeyCode=32
	      IF ThisForm.ItemSel(This.ListItemID)=0
	        This.Picture(This.ListItemID)=HOME()+ ;
	        "samples\tastrade\bitmaps\checkbx.bmp"
	        ThisForm.ItemSel(This.ListItemID)=1
	      ELSE
	       IF ThisForm.ItemSel(This.ListItemID)=1
	
	     This.Picture(This.ListItemID)=HOME()+"samples\tastrade\bitmaps\box.bmp"
	         ThisForm.ItemSel(This.ListItemID)=0
	       ENDIF
	      ENDIF
	     ENDIF
	
	  With the above code if you press the space bar, the Icon of the highlighted
	  Item toggles between an empty check box and a check box with an "x" in it.
	
	10. Create a command button and set its caption to "List of Selected Items." Add
	  the following code to the click event of the button:
	
	      isel=""
	      FOR i = 1 TO ThisForm.NumLstItm
	         IF ThisForm.ItemSel(i)=1
	             if i = 1
	                isel = isel + ThisForm.List1.ListItem(i)
	             ELSE
	                isel = isel + ";  " + ThisForm.List1.ListItem(i)
	             endif
	         ENDIF
	      ENDFOR
	      WAIT WINDOW isel
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
