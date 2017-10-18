---
layout: page
title: "Q138979: How to Create a Builder That Changes the Font of Form Objects"
permalink: kb/138/Q138979/
---

## Q138979: How to Create a Builder That Changes the Font of Form Objects

	Article: Q138979
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to create a builder that you can use to change
	change the font of several selected form objects at once.
	
	MORE INFORMATION
	================
	
	Use the following steps to create a builder that will change the font of all the
	selected form objects on the current form. The builder will use the standard
	Windows font dialog by using the GETFONT() function.
	
	1. Create a new program named Fntbldr.prg.
	
	2. Add the following code to the new builder:
	
	     ** Builders must accept three parameters
	     PARAMETERS a,b,c
	
	     ** Create an array of object references for the selected objects
	     numobjs=ASELOBJ(aobjlist)
	
	     ** Bring up the standard Windows font dialog
	     newfont=GETFONT()
	
	     ** Make sure that the user chose a font
	     IF ! EMPTY(newfont)
	
	     ** Parse the string returned by GETFONT() to get name, size, and style
	       newname=SUBSTR(newfont,1,AT(',',newfont,1)-1)
	       newsize=VAL(SUBSTR(newfont,AT(',',newfont,1)+1,AT(',',newfont,2)-1))
	       newstyle=SUBSTR(newfont,AT(',',newfont,2)+1)
	
	     ** Loop through the array
	       FOR i=1 TO numobjs
	
	     ** Make sure the current object has font properties
	       =AMEMBERS(aobjprops,aobjlist(i))
	       IF ASCAN(aobjprops,'FONTNAME')>0
	
	     ** Change the current object's font properties
	            aobjlist(i).FontName=newname
	            aobjlist(i).FontSize=newsize
	            DO CASE
	            CASE newstyle=="N"
	                 aobjlist(i).FontBold=.F.
	                 aobjlist(i).FontItalic=.F.
	            CASE newstyle=="B"
	                 aobjlist(i).FontBold=.T.
	                 aobjlist(i).FontItalic=.F.
	            CASE newstyle=="I"
	                 aobjlist(i).FontBold=.F.
	                 aobjlist(i).FontItalic=.T.
	            CASE newstyle=="BI"
	                 aobjlist(i).FontBold=.T.
	                 aobjlist(i).FontItalic=.T.
	            ENDCASE
	       ENDIF
	       ENDFOR
	     ENDIF
	
	3. Save the program Fntbldr.prg in the \Vfp\Wizards directory.
	
	4. Open and browse the Builder.dbf table in the \Vfp\Wizards directory.
	
	5. Append a new record to the Builder.dbf table.
	
	6. Enter the following text in the appropriate fields:
	
	  " Name - <enter a descriptive name for the builder> Descript -
	  <enter a description for the builder> Type - MULTISELECT Program -
	  Fntbldr.prg " (without the quotation marks)
	
	7. Close the Builder.dbf table.
	
	To test the builder:
	
	1. Create a new form, and add several objects to the form.
	
	2. Select several objects on the form, and click the Builder button on the
	  Properties sheet.
	
	3. Select the new builder from the Builder Selection dialog box, and click OK.
	
	4. Select the font you want to apply from the font dialog box, and click OK. All
	  the selected objects that have font properties will change to the font you
	  chose in the font dialog box.
	
	Additional query words: vfoxwin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
