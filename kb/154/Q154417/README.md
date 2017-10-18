---
layout: page
title: "Q154417: XCLN: EFD Form Project Appears Skewed When Loaded in VB"
permalink: kb/154/Q154417/
---

## Q154417: XCLN: EFD Form Project Appears Skewed When Loaded in VB

	Article: Q154417
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you load a Microsoft Exchange Electronic Forms Designer 4.0 (EFD) form
	project into Microsoft Visual Basic 4.0, the paneling used for the form will not
	be centered on the form and some controls might not be visible.
	
	MORE INFORMATION
	================
	
	This behavior is by design. The form panels and controls are not positioned at
	design time.
	
	EFD uses an algorithm found in the ArrangeWindow subroutine. This routine is used
	to position the main canvas panel, other support panels and controls, and to
	determine whether scrollbars are needed on the form window. The sizing and
	positioning of the form's main panel and other components are all done at
	runtime.
	
	Additional query words: vb overlap overlapping
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
