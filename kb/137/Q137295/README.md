---
layout: page
title: "Q137295: How to Convert Memo Fields into Embedded Word Documents"
permalink: /kb/137/Q137295/
---

## Q137295: How to Convert Memo Fields into Embedded Word Documents

{% raw %}

	Article: Q137295
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b; WINDOWS:3.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp600
	Last Modified: 06-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to take the text from a memo field and create
	a Microsoft Word document that can be embedded in a general field to allow easy
	use of the data within Word. The sample code in this article does it by by
	scanning through the table and replacing the general field for the record with a
	word document containing the memo text for each record that contains data in the
	memo field.
	
	MORE INFORMATION
	================
	
	For the code samples in thie article to work, you must have Microsoft Word
	version 6.0 installed and properly registered for OLE support. For the Macintosh
	code sample to work, you must run Microsoft Word 6.0 to set the file Creator and
	Type, and you must specify the class for the document in the APPEND GENERAL
	command.
	
	Macintosh Code Sample
	---------------------
	
	  * This code creates a .dbf file that holds a memo and a
	  * general field and creates an embedded Microsoft Word 6.0 document
	  * in the corresponding general field (mygen) for any record where
	  * the memo field (mymemo) contains text. It also reports the number
	  * of converted memo values in the statusbar as it goes.
	  * In the fname="MacHD:TEMPSTUF.TXT" line, replace MacHD with the
	  * actual name of your Mac hard disk drive volume.
	
	  CREATE TABLE test ;
	       (mymemo M, mygen G)
	  INSERT INTO test (mymemo ) ;
	       VALUES ('Hello, this is a test')
	  INSERT INTO test (mymemo) ;
	       VALUES ('Test record number 2')
	  COUNT=0
	  SET LIBRARY TO foxtools
	  * Use the following line in Visual FoxPro for Macintosh
	  * SET LIBRARY TO foxtools.slm
	
	  SET SAFETY OFF
	  fname="MacHD:TEMPSTUF.TXT"                && temporary file
	   name
	  GO TOP
	  SCAN
	       IF MEMLINES(mymemo )>0               && text in the memo?
	            COPY MEMO mymemo TO (fname)     && macro sub the filename
	
	            B=fxsettype(fname,"W6BN","MSWD")
	            * W6BN,MSWD is the Type and Creator for a Word 6 document
	            IF B!=0
	                 WAIT WINDOW "problem with FxSetType()"
	            ENDIF
	       * Replaces the general field (mygen) with an embedded Word Doc
	            APPEND GENERAL mygen FROM (fname) CLASS word.document.6
	
	            COUNT=COUNT+1          && increment number created
	            SET MESSAGE TO STR(COUNT)     && display count on statusbar
	       ENDIF
	  ENDSCAN
	  DELETE FILE (fname)                         && remove temp file
	
	Windows Visual Foxpro Code Sample
	---------------------------------
	
	
	  *  This code creates a .dbf file that has a memo and a
	  *  general field. It creates an embedded Microsoft Word document
	  *  in the corresponding general field (mygen) for any record where
	  *  the memo field (mymemo) contains text. It also shows the number
	  *  of converted memo values in the statusbar as it goes. A temporary
	  *  file is created and then deleted from the FoxPro startup directory.
	
	  CREATE TABLE test ;
	       (mymemo M, mygen G)
	  INSERT INTO test (mymemo) ;
	       VALUES ('Hello, this is a test')
	  INSERT INTO test (mymemo) ;
	       VALUES ('Test record number 2')
	
	  COUNT=0
	  maindir=sys(2004)
	  OLD=SET('SAFETY')
	  SET SAFETY OFF
	  FNAME=maindir+"tempdoc.doc"               && Tempfile
	  GO TOP
	  SCAN
	       IF !EMPTY(mymemo)                    && Anything in the Memo?
	            DELETE FILE maindir+"tempdoc.doc"
	            COPY MEMO mymemo TO &fname
	            APPEND GENERAL mygen FROM &fname
	            COUNT=COUNT+1
	            SET MESSAGE TO STR(COUNT)
	       ENDIF
	  ENDSCAN
	  DELETE FILE maindir+"tempdoc.doc"          && remove temp file
	  SET SAFETY &old
	  SET MESSAGE TO
	
	Additional query words: vFoxMac VFoxWin FoxMac
	
	======================================================================
	Keywords          : kbvfp300 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac kbVFP300 kbVFP600
	Version           : MACINTOSH:2.6a,3.0b; WINDOWS:3.0,6.0
	
	=============================================================================
	

{% endraw %}
