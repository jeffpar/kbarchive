---
layout: page
title: "Q129512: How to Programatically List .VCX File's Class Definitions"
permalink: kb/129/Q129512/
---

## Q129512: How to Programatically List .VCX File's Class Definitions

	Article: Q129512
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Visual Class Library (VCX) contains references to classes. This article
	provides two methods that will allow you to list the name of the classes
	contained in a class library.
	
	MORE INFORMATION
	================
	
	The Visual Class designer provides an interface that allows you to create
	classes visually. The class definitions are stored in a table with a .VCX
	extension. Although there is no native Visual FoxPro command that will allow you
	to list all the classes saved in a .VCX file, there are ways to retrieve this
	information.
	
	Use the VCX as a Table
	----------------------
	
	A VCX is a FoxPro table, so you can open it with the USE command, and you can
	manipulate the table as if it were a .DBF file. When a class is created, a new
	record is added for each object that belongs to the class. Additionally, the
	first record for the class contains information about the class definition, and
	the Reserved1 field of the .VCX file contains the word "Class" to tag a class
	definition. It is therefore possible to query the table for these records that
	have the Class string in the Reserved1 field. The following example queries the
	LOGIN.VCX file located in the SAMPLES\MAINSAMP\LIBS directory; it retrieves the
	name of class definitions.
	
	     olddir=CURDIR()
	     CD SYS(2004)+"SAMPLES\MAINSAMP\LIBS"
	     IF NOT USED('LOGIN.VCX')
	        USE LOGIN.VCX NOUPDATE
	        ELSE
	        SELECT LOGIN.VCX
	     ENDIF
	
	     SELECT PADR(objname,20) FROM LOGIN.VCX WHERE Reserved1=='Class' ;
	       INTO ARRAY myarray
	     = MESSAGEBOX ("There are "+ALLTRIM(str(alen(myarray)))+ " classes")
	     CD EVALUATE('olddir')
	
	Use the Class Browser
	---------------------
	
	In development mode, you can use the Class Browser to list the classes in a .VCX
	file. To do so:
	
	1. Run the Class Browser and open the VCX you need. You can open the Class
	  Browser by choosing Class Browser from the Tools menu and selecting the
	  library. You can also type the following from the Command window:
	
	     DO (_BROWSER) WITH <library>
	
	2. Run the following code. When the Class Browser is loaded, the _Obrowser
	  instance variable is created. It references the Browser object. The _oBrowser
	  object contains a two dimensional array member (aclasslist) that lists the
	  elements of a class. The fist element contains the name of the class. You can
	  therefore list the classes stored in a VCX by running this code:
	
	     DO (_BROWSER) with "c:\vfp\samples\mainsamp\libs\login.vcx"
	     nArraylen=ALEN(_obrowser.aclasslist,1) &&How many classes
	     * The first element of the array is ignored because it contains
	     * information about the class library.
	     DIMENSION arrayclass(narraylen-1)
	     FOR I=2 to narraylen
	         arrayclass(I-1)=_obrowser.aclasslist(I,1)
	     ENDFOR
	     ACTIVATE SCREEN
	     DISPLAY MEMO like ARRAYCLASS
	
	REFERENCES
	==========
	
	For more information about the Class Browser, search for "_BROWSER" and "Sample
	Files" topics in the Visual FoxPro Help menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
