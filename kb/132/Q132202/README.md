---
layout: page
title: "Q132202: Audio CD Incorrectly Identified as Program CD-ROM"
permalink: /kb/132/Q132202/
---

## Q132202: Audio CD Incorrectly Identified as Program CD-ROM

	Article: Q132202
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Media Pilot CD Sound System software installed on a
	Compaq Presario computer with Windows 95, audio CDs are incorrectly identified
	as program CD-ROMs and the Media Pilot software does not automatically advance
	to the first track on the CD.
	
	CAUSE
	=====
	
	The Media Pilot CD Sound System software is not using the appropriate method for
	determining if a disc that has been inserted into the CD-ROM drive is an audio
	CD or a program CD-ROM. Although previous versions of MS- DOS and Microsoft
	Windows return an error code when an audio CD is inserted, Windows 95 returns a
	success code and provides information about the tracks on the CD-ROM.
	Applications written for previous versions of MS- DOS and Windows that expect an
	error code to be returned when an audio CD is inserted may not be able to
	accurately detect whether or not an inserted disc is an audio CD.
	
	
	RESOLUTION
	==========
	
	To play an audio CD using the Media Pilot CD Sound System software in Windows
	95, manually advance to the track you want, then click the Play button.
	
	For additional information about this problem, please contact Compaq.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
