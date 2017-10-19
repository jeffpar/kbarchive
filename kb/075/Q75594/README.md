---
layout: page
title: "Q75594: PCX Image in Paintbrush Has Different Colors"
permalink: /kb/075/Q75594/
---

## Q75594: PCX Image in Paintbrush Has Different Colors

	Article: Q75594
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The colors of a PCX image viewed in Windows 3.0's Paintbrush may not match the
	color of the same PCX image viewed through another application.
	
	MORE INFORMATION
	================
	
	There are several reasons for this discrepancy:
	
	- The PCX graphical file format has no standard. It has gone through numerous
	  changes dating back to the CGA (color graphics adapter). It is impossible to
	  have one viewing program compatible with all these different versions.
	
	- Individual companies implement their own standards in different ways and to
	  different extents.
	
	- Graphical standards are defined through different display adapters. Each
	  display adapter has its own variation of a color palette and palette
	  limitations (for example, number of colors appearing at one time).
	
	- Windows has a graphical user interface (GUI), which is making demands on
	  display adapter memory at the same time the PCX image is. The hardware or
	  display driver may not be able to handle the demand.
	
	- PCX images have a file header that contains a self-defining color table. This
	  information may not transfer correctly.
	
	- Windows has defined and was built-around a new level of graphical format, the
	  device independent bitmap (DIB), which is not directly compatible with PCX.
	  DIBs were designed to get beyond the problems associated with the PCX format.
	
	REFERENCES
	==========
	
	"Microsoft Systems Journal," July 1991, pages 85-93.
	
	Additional query words: 3.0 win30 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
