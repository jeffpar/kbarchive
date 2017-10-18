---
layout: page
title: "Q99286: Extract Does Not Save Multiple Files"
permalink: kb/099/Q99286/
---

## Q99286: Extract Does Not Save Multiple Files

	Article: Q99286
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Extract command in VidEdit, you can only extract multiple frames
	when extracting a Microsoft AVI file, DIB sequence, or Microsoft waveform
	information.
	
	MORE INFORMATION
	================
	
	When using the following formats, you will only be able to extract one frame
	image at a time:
	
	  Microsoft Windows DIB
	  Microsoft RIFF DIB
	  PC Paintbrush
	  Apple Macintosh Pict
	  Truevision TGA
	  Microsoft RLE DIB
	  Microsoft RIFF RLE DIB
	
	You can set a multiple selection with the set selection button, but VidEdit will
	only save the first frame in your selection using these formats.
	
	To extract multiple frames you will need to extract a DIB sequence or an AVI
	file. To extract a multiframe DIB sequence or AVI file, do the following:
	
	1. From the File menu, choose Extract.
	
	2. From the List Files Of Type box, select DIB Sequence.
	
	3. Choose Set Selection to select which frames to extract.
	
	4. In the Filename box, type a filename such as XXXX0000.DIB
	
	5. Choose OK.
	
	The last digits will increment for each frame saved. If you only plan on
	extracting up to 99 frames, you will only need two digits at the end of the
	filename.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
