---
layout: page
title: "Q66950: Playing a Metafile into Another Metafile in Windows"
permalink: kb/066/Q66950/
---

## Q66950: Playing a Metafile into Another Metafile in Windows

	Article: Q66950
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unlike Windows versions 2.x, versions 3.0 and 3.1 of Microsoft Windows permit an
	application to play a metafile into another metafile. Under Windows 3.0, the
	destination metafile must be a disk-based metafile. This restriction has been
	removed from Windows 3.1.
	
	MORE INFORMATION
	================
	
	Under Windows 3.0, playing a metafile into a new memory metafile fails. The
	following is a code fragment that demonstrates the correct procedure for
	successfully playing a metafile into a new, disk-based metafile that is
	compatible with both Windows 3.0 and 3.1.
	
	  / declare variables
	     HANDLE hDestDC, hSrcHmf;
	
	  // get a handle to the source metafile
	     hSrcHmf = GetMetaFile((LPSTR)"SOURCE.WMF");
	
	  // create a disk-based destination metafile
	  // NOTE: The parameter cannot be NULL.
	  //       That would create a memory metafile.
	     hDestDC = CreateMetaFile((LPSTR)"DEST.WMF");
	
	  // play the source metafile into the newly created metafile
	     PlayMetaFile(hDestDC, hSrcHmf) ;
	
	  // get rid of the source metafile
	     DeleteMetaFile(hSrcHmf) ;
	
	  // close the destination metafile
	     hSrcHmf = CloseMetaFile(hDestDC) ;
	
	At this point, the handle to the destination metafile can be used, or it can be
	deleted and retrieved later when it is needed.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
