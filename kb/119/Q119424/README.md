---
layout: page
title: "Q119424: FAX: FAXLOGO3.PCX Opens in ZOOM IN Mode Within PaintBrush"
permalink: kb/119/Q119424/
---

## Q119424: FAX: FAXLOGO3.PCX Opens in ZOOM IN Mode Within PaintBrush

	Article: Q119424
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open FAXLOGO3.PCX (the Microsoft Mail Gateway to FAX default logo file)
	within PaintBrush, any modifications you make while editing it are compressed on
	the cover sheet of the outgoing fax.
	
	CAUSE
	=====
	
	Because of how the file has been saved to the original install disks, the
	drawing area is displayed in the Zoom In mode when you open the file.
	
	RESOLUTION
	==========
	
	To preserve any modifications you make in PaintBrush, select Zoom Out mode after
	you open the file and before you make any changes to it. This shrinks the
	drawing to fit the drawing area.
	
	You can use other graphics programs to create or modify the PCX formatted logo as
	long as they save in "black and white" PCX format. See the "Microsoft Mail
	Gateway to FAX Administrator's Guide" for more details on the "black and white"
	PCX format.
	
	
	Additional query words: 3.00 3.00a 2.10 2.1
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300 kbMailGateFax300a
	Version           : MS-DOS:3.0,3.0a
	
	=============================================================================
	
