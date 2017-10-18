---
layout: page
title: "Q122776: Writer/Artist: Filenames Used For Saved Documents"
permalink: kb/122/Q122776/
---

## Q122776: Writer/Artist: Filenames Used For Saved Documents

	Article: Q122776
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,1.1,1.1a
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 30-APR-1999
	
	1.00 1.10 1.10a
	WINDOWS
	kbusage kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fine Artist for Windows, versions 1.0, 1.1, 1.1a 
	- Microsoft Creative Writer for Windows, versions 1.0, 1.1, 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you save a file in Creative Writer or Fine Artist, the file is saved with
	two filenames:
	
	- The name you typed when you saved it, which is what you see when you are
	  running the program.
	
	- An MS-DOS type filename (eight characters with a three-character extension),
	  which is what you see if you view your files in File Manager.
	
	MORE INFORMATION
	================
	
	Creative Writer and Fine Artist allow you to name your files using up to 32
	characters. When you save a document, the program also gives the file a name
	that conforms to MS-DOS standards by using the first eight characters you typed
	and adding a three character extension, which is determined by the type of
	file.
	
	If you save a file with a name that uses the first eight characters of a filename
	already used, Creative Writer and Fine Artist automatically adjust the name so
	that the file does not overwrite the previous, similarly named file.
	
	Below are the file extensions used by Creative Writer and Fine Artist.
	
	Creative Writer:
	
	  Document Type     Extension
	  ---------------------------
	  All documents     .MAX
	
	Fine Artist:
	
	  Document Type     Extension
	  ---------------------------
	  Pictures          .MAG
	  Comic Strips      .PTM
	  Picture Shows     .SLD
	  Stickers/buttons  .MAG
	
	Creative Writer and Fine Artist add the following information for identifying
	these file extensions to the WIN.INI file during installation:
	
	  [Extensions]
	     max=C:\MSKIDS\WRITER.EXE ^.max
	     mag=C:\MSKIDS\ARTIST.EXE ^.mag
	     sld=C:\MSKIDS\ARTIST.EXE ^.sld
	     ptm=C:\MSKIDS\ARTIST.EXE ^.ptm
	
	Additional query words: 1.00 1.10 1.10a kbhowto win mskids 1.1 filename max maggie manager convention wm_writer wm_artist kids mczee
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword2 kbCreativeWriter100 kbCreativeWriter110 kbCreativeWriter110a kbFineArtist100 kbFineArtist110 kbFineArtist110a
	Version           : WINDOWS:1.0,1.1,1.1a
	Issue type        : kbinfo
	
	=============================================================================
	
