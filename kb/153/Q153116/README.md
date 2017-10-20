---
layout: page
title: "Q153116: BUG: Support Library Creates Files with Creator of FOXX"
permalink: /kb/153/Q153116/
---

## Q153116: BUG: Support Library Creates Files with Creator of FOXX

{% raw %}

	Article: Q153116
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files created from Visual FoxPro's Support Libraries will have a creator of
	FOXX, rather than the library's signature FOXL or FOXS. This problem will occur
	with every file created from the library and with commands such as PACK that
	create and rename temporary files. This problem will also affect how documents
	are associated with their creator's icon and launching behavior via the
	document.
	
	CAUSE
	=====
	
	This is a limitation of Visual FoxPro and the Visual FoxPro support libraries.
	Although the libraries will operate with a custom creator, icons, and signature,
	they do not stamp the files created with the creator. The creator "FOXX" will be
	stamped on all created files, regardless of the library's creator or signature.
	
	WORKAROUND
	==========
	
	- Use the FoxTools function, fxSetType(), or a third-party utility, such as
	  ResEdit or File Buddy, to restore the desired creator;
	
	-or-
	
	- Create an ALSM or CFM library to create files with the correct creator, or
	  alter the creator of created files; -or-
	
	- For use on partitions that do not have any version of FoxPro installed,
	  change the library's creator and signature to FOXX.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro libraries have different signatures to facilitate their
	coexistence on the same volume as the development environment and to handle
	executables properly. Below is a table of applications and their corresponding
	signatures.
	
	  Application                   Signature
	  --------------------------    ---------
	  Microsoft Visual FoxPro       FOXX
	  VFP Support Library PPC       FOXL
	  VFP Support Library 68K       FOXS
	
	Steps to Reproduce Problem
	--------------------------
	
	Take the following PRG and build it to a PowerMac and 68K Executable. Copy the
	Executable and the appropriate library to a new folder.
	
	Macintosh alerts will display the creator and type of a DBF after creation,
	custom stamping, and a subsequent PACK. The following example should illustrate
	the problem and give some code examples to implement a workaround in code:
	
	     CREA TABLE Fruit ( cID C(2), cKind C(10) ) && Create a new table
	     cID = "AP"
	     cKind = "Apple"
	     INSERT INTO Fruit FROM MEMVAR
	
	     cID = "OR"
	     cKind = "Orange"
	     INSERT INTO Fruit FROM MEMVAR
	
	     cID = "CH"
	     cKind = "Cherry"
	     INSERT INTO Fruit FROM MEMVAR
	
	     cTable = SYS( 2027, DBF() ) && Mac Path version of the table path
	     USE
	
	     SET LIBRARY TO HOME() + "FOXTOOLS.CFM"
	
	     * ShowInfo is a simple function below to display the current
	     *    creator and type.
	     cFileType=SHOWINFO('Original', cTable)
	
	     * Set the Creator
	     cFileType = cFileType && Same as before
	     cFileCreator = 'ZZZZ' && Custom creator or FOXL/FOXS for PPC/68K
	     =FxSetType( cTable, cFileType, cFileCreator)
	
	     cFileType=SHOWINFO('Stamped', cTable)
	
	     USE (cTable)
	     GO TOP
	     DELETE
	     PACK
	     USE
	
	     cFileType=SHOWINFO('PACKed', cTable)
	
	     * Unload the library
	     SET LIBRARY TO
	
	     PROCEDURE showInfo
	       LPARAMETER cMessage, cTable
	
	       * What creator does the file have
	       STORE "" to cFileType, cFileCreator
	       =FxFileType( cTable, @cFileType, @cFileCreator )
	
	       nIconNumber = 2       && Note icon
	       nResourceNumber = 257 && Continue button
	       nHorizontal = -1      && Default position
	       nVertical = -1      && Default position
	       cText1 = cMessage + " " + cTable  + CHR(13)
	       cText2 = "Creator = '" + cFileType + "'  Type = '"  + ;
	            cFileCreator + "'"
	       =FxAlert( nIconNumber, nResourceNumber, nHorizontal, nVertical, ;
	            cText1,  cText2 )
	
	       RETURN cFileType
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
